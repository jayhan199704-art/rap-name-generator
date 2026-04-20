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
      <div className="rounded-full bg-white/10 backdrop-blur-sm p-1">
        <div className="grid grid-cols-3 gap-1" role="radiogroup" aria-label="Theme mode">
          {THEME_OPTIONS.map((option) => {
            const selected = theme === option.id;
            return (
              <button
                key={option.id}
                onClick={() => setTheme(option.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                  selected
                    ? 'bg-white/20 text-white shadow-sm'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
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
