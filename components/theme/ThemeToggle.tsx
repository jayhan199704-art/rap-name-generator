"use client";

import { useTheme } from "@/components/theme/ThemeProvider";

const THEME_OPTIONS = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "system", label: "System" }
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <section className="mx-auto w-full max-w-3xl space-y-2 rounded-xl border border-zinc-300/70 bg-white/80 p-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-glow">
      <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">Theme</p>
      <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Theme mode">
        {THEME_OPTIONS.map((option) => {
          const selected = theme === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => setTheme(option.id)}
              className={`min-h-11 rounded-lg border px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                selected
                  ? "border-cyan-300 bg-cyan-100 text-cyan-900 dark:border-cyan-300 dark:bg-cyan-500/20 dark:text-cyan-100"
                  : "border-zinc-300 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:border-white/10 dark:bg-zinc-800/70 dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
