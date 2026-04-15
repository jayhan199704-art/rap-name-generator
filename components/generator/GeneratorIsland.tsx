// components/generator/GeneratorIsland.tsx
"use client";

import { useEffect, useState } from "react";
import { CopyButton } from "@/components/generator/CopyButton";
import { GenerateButton } from "@/components/generator/GenerateButton";
import { NameDisplay } from "@/components/generator/NameDisplay";
import { StyleSelector } from "@/components/generator/StyleSelector";
import { RecentNames } from "@/components/history/RecentNames";
import { Toast } from "@/components/ui/Toast";
import { safeReadRecentNames, safeWriteRecentNames, useStorageSync } from "@/hooks/useLocalStorage";
import { useNameGenerator } from "@/hooks/useNameGenerator";
import { useGeneratorStore } from "@/store/generatorStore";
import type { ToastEntry } from "@/types";

export function GeneratorIsland() {
  const [toasts, setToasts] = useState<ToastEntry[]>([]);
  // Prevent hydration mismatch by loading browser storage only after mount.
  const [bootstrapped, setBootstrapped] = useState(false);
  const generateName = useNameGenerator();

  const selectedStyle = useGeneratorStore((state) => state.selectedStyle);
  const lockState = useGeneratorStore((state) => state.lockState);
  const currentName = useGeneratorStore((state) => state.currentName);
  const recentNames = useGeneratorStore((state) => state.recentNames);
  const setCurrentName = useGeneratorStore((state) => state.setCurrentName);
  const addToHistory = useGeneratorStore((state) => state.addToHistory);
  const replaceHistory = useGeneratorStore((state) => state.replaceHistory);
  const hydrateFromStorage = useGeneratorStore((state) => state.hydrateFromStorage);

  useEffect(() => {
    hydrateFromStorage(safeReadRecentNames());
    setBootstrapped(true);
  }, [hydrateFromStorage]);

  useEffect(() => {
    if (!bootstrapped || currentName) {
      return;
    }

    const initial = generateName({ selectedStyle, lockState, currentName, recentNames });
    if (initial) {
      setCurrentName(initial);
      addToHistory(initial);
    }
  }, [addToHistory, bootstrapped, currentName, generateName, lockState, recentNames, selectedStyle, setCurrentName]);

  useEffect(() => {
    if (!bootstrapped) {
      return;
    }

    const timer = window.setTimeout(() => {
      safeWriteRecentNames(recentNames);
    }, 300);

    return () => {
      window.clearTimeout(timer);
    };
  }, [bootstrapped, recentNames]);

  useStorageSync(replaceHistory);

  return (
    <>
      <div className="mx-auto w-full max-w-3xl space-y-4 rounded-2xl border border-white/15 bg-zinc-900/60 p-4 shadow-glow backdrop-blur sm:p-6">
        <StyleSelector />
        <NameDisplay />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <GenerateButton />
          <CopyButton setToasts={setToasts} />
        </div>
        <RecentNames />
      </div>
      <Toast entries={toasts} />
    </>
  );
}
