"use client";

import { useMemo } from "react";
import { styles } from "@/data/styles";
import { getWordBank } from "@/data/wordbank";
import { useGeneratorStore } from "@/store/generatorStore";

export function StyleSelector() {
  const selectedStyle = useGeneratorStore((state) => state.selectedStyle);
  const setStyle = useGeneratorStore((state) => state.setStyle);

  const hasInvalidBank = useMemo(() => {
    try {
      getWordBank(selectedStyle);
      return false;
    } catch {
      return true;
    }
  }, [selectedStyle]);

  return (
    <section className="space-y-2">
      <p className="text-sm uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">Style</p>
      <div
        role="radiogroup"
        tabIndex={0}
        className="flex gap-2 overflow-x-auto rounded-xl border border-zinc-300 bg-zinc-100/80 p-2 dark:border-white/10 dark:bg-zinc-900/60"
      >
        {styles.map((style, index) => {
          const selected = selectedStyle === style.id;
          return (
            <button
              key={style.id}
              id={`style-${style.id}`}
              role="radio"
              aria-checked={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => setStyle(style.id)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
                  return;
                }
                event.preventDefault();
                const delta = event.key === "ArrowRight" ? 1 : -1;
                const nextIndex = (index + delta + styles.length) % styles.length;
                setStyle(styles[nextIndex]?.id ?? style.id);
              }}
              className={`min-h-11 min-w-[11rem] rounded-lg px-3 py-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                selected
                  ? "border border-cyan-300 bg-cyan-100 text-cyan-900 dark:bg-cyan-500/20 dark:text-white"
                  : "border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-200 dark:border-white/10 dark:bg-zinc-800/70 dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
            >
              <span className="block font-semibold">{style.label}</span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400">{style.description}</span>
            </button>
          );
        })}
      </div>
      {hasInvalidBank && (
        <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-amber-900 dark:text-amber-100">
          Current style has invalid word bank. Please switch style.
        </div>
      )}
    </section>
  );
}
