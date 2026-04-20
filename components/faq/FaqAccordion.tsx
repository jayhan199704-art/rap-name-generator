"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const faqItems: FaqItem[] = [
  {
    question: "Is this rap name generator free?",
    answer: "Yes, it is completely free. No registration or hidden fees. You can generate unlimited rap names."
  },
  {
    question: "Can I use the generated names for commercial purposes?",
    answer:
      "Yes, you can. All names are randomly combined from a word bank and are not known to be copyrighted. However, we recommend doing a quick search to avoid conflicts with existing artists or trademarks."
  },
  {
    question: "I locked a part but it still changed after generating. Why?",
    answer:
      'Make sure the lock icon turns into 🔒 (locked) – that means the part is successfully locked. If it shows 🔓 (unlocked), it will still change. Click the icon to toggle the lock status before hitting "Generate".'
  },
  {
    question: "Can I type my own custom words instead of random generation?",
    answer:
      "The current version only supports random generation + locking parts. Manual editing may be added in the future based on user feedback."
  },
  {
    question: "What are the differences between Trap, Old School, and Melodic styles?",
    answer: (
      <ul className="list-disc space-y-1 pl-5">
        <li>Trap: Dark, modern, high‑energy street vibe.</li>
        <li>Old School: Golden era boom‑bap swagger.</li>
        <li>Melodic: Smooth hooks and emotional anthem style.</li>
      </ul>
    )
  },
  {
    question: "Does the website save my name history? Is my privacy protected?",
    answer:
      "History is stored only in your browser’s local storage – never uploaded to any server. Closing the browser does not delete it. We collect no personal information."
  },
  {
    question: "Can I use this generator on my mobile phone?",
    answer:
      "Yes, the site is fully responsive and works great on mobile, tablet, and desktop. All buttons and lock icons are touch‑friendly."
  },
  {
    question: "How often is the word bank updated? Can I contribute?",
    answer: (
      <>
        The word bank is relatively stable but we add new words from time to time. If you&apos;d like to contribute
        (prefixes, suffixes, new styles), please reach out via [GitHub link] or email [your email].
      </>
    )
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="mx-auto w-full max-w-3xl space-y-3 rounded-2xl border border-zinc-300/70 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-6 dark:border-white/15 dark:bg-zinc-900/60 dark:shadow-glow">
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">FAQ</h2>
      <div className="space-y-2">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="overflow-hidden rounded-xl border border-zinc-300 dark:border-white/10">
              <button
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                className="flex min-h-11 w-full items-center justify-between gap-3 bg-zinc-100 px-4 py-3 text-left transition hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700"
              >
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{`${index + 1}. ${item.question}`}</span>
                <span className="text-zinc-600 dark:text-zinc-300">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <div className="bg-white px-4 py-3 text-sm leading-6 text-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300">{item.answer}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
