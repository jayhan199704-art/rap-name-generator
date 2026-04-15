// components/ui/Toast.tsx
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
          className="rounded-lg border border-white/20 bg-zinc-900/95 px-4 py-2 text-sm text-zinc-100 shadow-glow"
        >
          {entry.message}
        </div>
      ))}
    </div>
  );
}
