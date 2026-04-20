"use client";

import { useEffect, useMemo, useState } from "react";
import { useGeneratorStore } from "@/store/generatorStore";

type SharePlatform = {
  id: "x" | "facebook" | "pinterest" | "linkedin";
  label: string;
  createUrl: (url: string, text: string) => string;
};

const sharePlatforms: SharePlatform[] = [
  {
    id: "x",
    label: "X (Twitter)",
    createUrl: (url, text) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
  },
  {
    id: "facebook",
    label: "Facebook",
    createUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  },
  {
    id: "pinterest",
    label: "Pinterest",
    createUrl: (url, text) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    createUrl: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  }
];

export function ShareButtons() {
  const currentName = useGeneratorStore((state) => state.currentName);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const shareText = useMemo(() => {
    const name = currentName?.fullName;
    if (!name) {
      return "I just generated a rap name. Try it and create your own!";
    }

    return `I just got my rap name: ${name}. Try this generator and create yours!`;
  }, [currentName?.fullName]);

  const openShareWindow = (platform: SharePlatform) => {
    if (!shareUrl) {
      return;
    }

    const link = platform.createUrl(shareUrl, shareText);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mx-auto w-full max-w-3xl space-y-3 rounded-2xl border border-zinc-300/70 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-6 dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-glow">
      <p className="text-sm text-zinc-700 dark:text-zinc-300">
        如果觉得满意，可以分享给更多的朋友，让他们也一起来拥有一个好听的rap名字。
      </p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {sharePlatforms.map((platform) => (
          <button
            key={platform.id}
            type="button"
            onClick={() => openShareWindow(platform)}
            className="min-h-11 rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-left font-semibold text-zinc-800 transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-white/10 dark:bg-zinc-800/80 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            一键分享到 {platform.label}
          </button>
        ))}
      </div>
    </section>
  );
}
