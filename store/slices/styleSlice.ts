import type { StateCreator } from "zustand";
import { styles } from "@/data/styles";
import type { GeneratorStore } from "@/store/generatorStore";

export type StyleSlice = {
  selectedStyle: string;
  setStyle: (id: string) => void;
};

export const createStyleSlice: StateCreator<
  GeneratorStore,
  [],
  [],
  StyleSlice
> = (set) => ({
  selectedStyle: styles[0]?.id ?? "",
  setStyle: (id) => {
    set(() => ({ selectedStyle: id }));
  }
});
