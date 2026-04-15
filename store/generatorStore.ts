"use client";
main
import { create } from "zustand";
import { styles } from "@/data/styles";
import { createHistorySlice, type HistorySlice } from "@/store/slices/historySlice";
import { createNameSlice, type NameSlice } from "@/store/slices/nameSlice";
import { createStyleSlice, type StyleSlice } from "@/store/slices/styleSlice";
import type { GeneratedName } from "@/types";

export type GeneratorStore = NameSlice &
  StyleSlice &
  HistorySlice & {
    hydrateFromStorage: (names: GeneratedName[]) => void;
  };

export const useGeneratorStore = create<GeneratorStore>()((set, get, ...rest) => ({
  ...createNameSlice(set, get, ...rest),
  ...createStyleSlice(set, get, ...rest),
  ...createHistorySlice(set, get, ...rest),
  selectedStyle: styles[0]?.id ?? "",
  recentNames: [],
  currentName: null,
  // Explicit client-side hydration action used by GeneratorIsland after mount.
  hydrateFromStorage: (names) => {
    const next = names.slice(0, 10);
    set(() => ({
      recentNames: next,
      currentName: next[0] ?? null
    }));
  }
main
