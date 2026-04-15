import type { StateCreator } from "zustand";
import type { GeneratorStore } from "@/store/generatorStore";
import type { GeneratedName } from "@/types";

export type HistorySlice = {
  recentNames: GeneratedName[];
  addToHistory: (name: GeneratedName) => void;
  restoreFromHistory: (name: GeneratedName) => void;
  replaceHistory: (names: GeneratedName[]) => void;
};

export const createHistorySlice: StateCreator<
  GeneratorStore,
  [],
  [],
  HistorySlice
> = (set) => ({
  recentNames: [],
  addToHistory: (name) => {
    set((state) => ({
      recentNames: [name, ...state.recentNames.filter((entry) => entry.fullName !== name.fullName)].slice(0, 10)
    }));
  },
  restoreFromHistory: (name) => {
    set(() => ({ currentName: name }));
  },
  replaceHistory: (names) => {
    set(() => ({ recentNames: names.slice(0, 10) }));
  }
});
