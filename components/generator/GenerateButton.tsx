// components/generator/GenerateButton.tsx
"use client";

import { useNameGenerator } from "@/hooks/useNameGenerator";
import { useGeneratorStore } from "@/store/generatorStore";

export function GenerateButton() {
  const generateName = useNameGenerator();
  const selectedStyle = useGeneratorStore((state) => state.selectedStyle);
  const lockState = useGeneratorStore((state) => state.lockState);
  const currentName = useGeneratorStore((state) => state.currentName);
  const recentNames = useGeneratorStore((state) => state.recentNames);
  const setCurrentName = useGeneratorStore((state) => state.setCurrentName);
  const addToHistory = useGeneratorStore((state) => state.addToHistory);

  const allLocked = lockState.prefix && lockState.first && lockState.last;

  const handleGenerate = () => {
    const next = generateName({ selectedStyle, lockState, currentName, recentNames });
    if (!next) {
      return;
    }
    setCurrentName(next);
    addToHistory(next);
  };

  return (
    <button
      type="button"
      disabled={allLocked}
      aria-disabled={allLocked}
      onClick={handleGenerate}
      className="min-h-11 w-full rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-5 py-3 text-base font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
    >
      Generate Rap Name
    </button>
  );
}
