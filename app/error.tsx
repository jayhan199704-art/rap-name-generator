// app/error.tsx
"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md space-y-4 rounded-xl border border-red-400/40 bg-red-600/10 p-6 text-red-100">
        <h2 className="text-xl font-bold">Something went wrong</h2>
        <p className="text-sm opacity-90">Failed to load generator resources. Please try again.</p>
        <button
          type="button"
          onClick={reset}
          className="min-h-11 rounded-lg border border-red-300/50 px-4 py-2 font-semibold hover:bg-red-500/20"
        >
          Retry
        </button>
      </div>
    </main>
  );
}
