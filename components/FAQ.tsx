"use client";

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
      <>
        <span className="block">- Trap: Dark, modern, high‑energy street vibe.</span>
        <span className="block">- Old School: Golden era boom‑bap swagger.</span>
        <span className="block">- Melodic: Smooth hooks and emotional anthem style.</span>
      </>
    )
  },
  {
    question: "Does the website save my name history? Is my privacy protected?",
    answer:
      "History is stored only in your browser's local storage – never uploaded to any server. Closing the browser does not delete it. We collect no personal information."
  },
  {
    question: "Can I use this generator on my mobile phone?",
    answer:
      "Yes, the site is fully responsive and works great on mobile, tablet, and desktop. All buttons and lock icons are touch‑friendly."
  },
  {
    question: "How often is the word bank updated? Can I contribute?",
    answer:
      "The word bank is relatively stable but we add new words from time to time. If you'd like to contribute (prefixes, suffixes, new styles), please reach out via [GitHub link] or email [your email]."
  }
];

export function FAQ() {
  return (
    // 基础样式：浅色模式下的毛玻璃效果
    <section className="mx-auto w-full max-w-3xl rounded-2xl border border-white/50 bg-white/80 p-4 shadow-lg backdrop-blur-lg sm:p-6 dark:border-white/15 dark:bg-zinc-900/60 dark:shadow-sm dark:backdrop-blur">
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">FAQ</h2>
      <div className="mt-3">
        {faqItems.map((item, index) => (
          <article
            key={item.question}
            className={
              index === faqItems.length - 1
                ? "py-4"
                : "border-b border-zinc-200 py-4 dark:border-white/10"
            }
          >
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              {item.question}
            </h3>
            <div className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              {item.answer}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}