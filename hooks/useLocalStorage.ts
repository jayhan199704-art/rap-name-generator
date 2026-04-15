"use client";

import { useEffect } from "react";
import type { GeneratedName } from "@/types";

export const RECENT_STORAGE_KEY = "rap-name-generator:recent";

const isValidGeneratedName = (value: unknown): value is GeneratedName => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const entry = value as Partial<GeneratedName>;
  return (
    (typeof entry.prefix === "string" || entry.prefix === null) &&
    typeof entry.first === "string" &&
    typeof entry.last === "string" &&
    typeof entry.fullName === "string" &&
    typeof entry.style === "string" &&
    typeof entry.timestamp === "number"
  );
};

export const safeReadRecentNames = (): GeneratedName[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(RECENT_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(isValidGeneratedName).slice(0, 10);
  } catch {
    return [];
  }
};

export const safeWriteRecentNames = (recentNames: GeneratedName[]): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const payload = JSON.stringify(recentNames.slice(0, 10));
    window.localStorage.setItem(RECENT_STORAGE_KEY, payload);
  } catch {
    // ignore write failures silently
  }
};

export const useStorageSync = (onUpdate: (items: GeneratedName[]) => void): void => {
  useEffect(() => {
    const listener = (event: StorageEvent) => {
      if (event.key !== RECENT_STORAGE_KEY) {
        return;
      }
      onUpdate(safeReadRecentNames());
    };

    window.addEventListener("storage", listener);
    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [onUpdate]);
};
