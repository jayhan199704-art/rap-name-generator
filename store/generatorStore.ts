"use client";

import { create } from "zustand";
import { styles } from "@/data/styles";
import { safeReadRecentNames } from "@/hooks/useLocalStorage";
import { createHistorySlice, type HistorySlice } from "@/store/slices/historySlice";
import { createNameSlice, type NameSlice } from "@/store/slices/nameSlice";
import { createStyleSlice, type StyleSlice } from "@/store/slices/styleSlice";

export type GeneratorStore = NameSlice &
  StyleSlice &
  HistorySlice & {
    syncFromStorage: () => void;
  };

export const useGeneratorStore = create<GeneratorStore>()((set, get, ...rest) => {
  const base = {
    ...createNameSlice(set, get, ...rest),
    ...createStyleSlice(set, get, ...rest),
    ...createHistorySlice(set, get, ...rest),
    syncFromStorage: () => {
      set(() => ({ recentNames: safeReadRecentNames() }));
    }
  };

  const history = safeReadRecentNames();

  return {
    ...base,
    selectedStyle: styles[0]?.id ?? "",
    recentNames: history,
    currentName: history[0] ?? null
  };
});
