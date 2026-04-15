// components/history/RecentNames.tsx
"use client";

import { useGeneratorStore } from "@/store/generatorStore";

export function RecentNames() {
  const recentNames = useGeneratorStore((state) => state.recentNames);
  const restoreFromHistory = useGeneratorStore((state) => state.restoreFromHistory);

  if (!recentNames.length) {
    return null;
  }

  return (
    <section className="space-y-3">
      <h2 className="text-sm uppercase tracking-[0.15em] text-zinc-400">Recent names</h2>
      <ul className="space-y-2">
        {recentNames.map((item) => (
          <li key={`${item.fullName}-${item.timestamp}`}>
            <button
              type="button"
              onClick={() => restoreFromHistory(item)}
              className="min-h-11 w-full rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-left hover:border-cyan-300/40 hover:bg-zinc-800"
            >
              <p className="font-semibold text-zinc-100">{item.fullName}</p>
              <p className="text-xs text-zinc-400">{item.style}</p>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
