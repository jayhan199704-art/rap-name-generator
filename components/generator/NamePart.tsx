// components/generator/NamePart.tsx
"use client";

import type { NamePartKey } from "@/types";

type NamePartProps = {
  partKey: NamePartKey;
  value: string | null;
  locked: boolean;
  onToggleLock: (part: NamePartKey, nextValue: boolean) => void;
};

export function NamePart({ partKey, value, locked, onToggleLock }: NamePartProps) {
  return (
    <div className="relative min-h-20 rounded-xl border border-white/15 bg-zinc-900/70 p-3">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{partKey}</p>
      <p className="pr-12 pt-2 text-xl font-semibold text-zinc-100 sm:text-2xl md:text-3xl">{value ?? "—"}</p>
      <button
        type="button"
        aria-pressed={locked}
        aria-label={`Lock ${partKey}`}
        onClick={() => onToggleLock(partKey, !locked)}
        className="absolute right-2 top-2 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-zinc-800/90 text-lg hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        {locked ? "🔒" : "🔓"}
      </button>
    </div>
  );
}
