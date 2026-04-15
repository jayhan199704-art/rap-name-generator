import type { StateCreator } from "zustand";
import type { GeneratedName, LockState, NamePartKey } from "@/types";
import type { GeneratorStore } from "@/store/generatorStore";

export type NameSlice = {
  currentName: GeneratedName | null;
  lockState: LockState;
  setLock: (part: NamePartKey, value: boolean) => void;
  setCurrentName: (name: GeneratedName | null) => void;
};

export const createNameSlice: StateCreator<
  GeneratorStore,
  [],
  [],
  NameSlice
> = (set) => ({
  currentName: null,
  lockState: {
    prefix: false,
    first: false,
    last: false
  },
  setLock: (part, value) => {
    set((state) => ({
      lockState: {
        ...state.lockState,
        [part]: value
      }
    }));
  },
  setCurrentName: (name) => {
    set(() => ({ currentName: name }));
  }
});
