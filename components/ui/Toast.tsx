"use client";

import type { ToastEntry } from "@/types";

type ToastProps = {
  entries: ToastEntry[];
};

export function Toast({ entries }: ToastProps) {
  return (
    <div aria-live="polite" role="status" className="pointer-events-none fixed right-4 top-4 z-50 space-y-2">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="rounded-lg border border-zinc-300 bg-white/95 px-4 py-2 text-sm text-zinc-900 shadow-sm dark:border-white/20 dark:bg-zinc-900/95 dark:text-zinc-100 dark:shadow-glow"
        >
          {entry.message}
        </div>
      ))}
    </div>
  );
}
