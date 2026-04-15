"use client";

import { useCallback } from "react";

const fallbackCopy = (text: string): boolean => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";
  document.body.appendChild(textarea);
  textarea.select();

  let success = false;
  try {
    success = document.execCommand("copy");
  } finally {
    document.body.removeChild(textarea);
  }

  return success;
};

export const useCopyToClipboard = () => {
  return useCallback(async (text: string): Promise<boolean> => {
    if (!text) {
      return false;
    }

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        return fallbackCopy(text);
      }
    }

    return fallbackCopy(text);
  }, []);
};
