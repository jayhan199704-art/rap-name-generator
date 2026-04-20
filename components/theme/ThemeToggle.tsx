'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const THEME_OPTIONS: { id: 'light' | 'dark' | 'system'; label: string }[] = [
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
  { id: 'system', label: 'System' },
];

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="rounded-full border border-white/70 bg-white/80 p-1 shadow-lg backdrop-blur-md dark:border-white/20 dark:bg-black/50">
        <div className="grid grid-cols-3 gap-1" role="radiogroup" aria-label="Theme mode">
          {THEME_OPTIONS.map((option) => {
            const selected = theme === option.id;
            return (
              <button
                key={option.id}
                onClick={() => setTheme(option.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                  selected
                    ? 'bg-white/90 text-zinc-900 shadow-md dark:bg-black/30 dark:text-white'
                    : 'text-zinc-700 hover:text-zinc-900 hover:bg-white/70 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white'
                }`}
                aria-pressed={selected}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}