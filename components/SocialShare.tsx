"use client";

import { useMemo } from "react";
import { useGeneratorStore } from "@/store/generatorStore";
import { FaXTwitter, FaFacebookF, FaPinterestP, FaLinkedinIn } from "react-icons/fa6";

type PlatformId = "x" | "facebook" | "pinterest" | "linkedin";

type SharePlatform = {
  id: PlatformId;
  label: string;
  utmSource: string;
  icon: React.ReactNode;
  createUrl: (landingUrl: string, text: string) => string;
};

const SITE_URL = "https://rap-name-generator.org";

const sharePlatforms: SharePlatform[] = [
  {
    id: "x",
    label: "X",
    utmSource: "twitter",
    icon: <FaXTwitter className="h-4 w-4" />,
    createUrl: (landingUrl, text) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(landingUrl)}`,
  },
  {
    id: "facebook",
    label: "Facebook",
    utmSource: "facebook",
    icon: <FaFacebookF className="h-4 w-4" />,
    createUrl: (landingUrl) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(landingUrl)}`,
  },
  {
    id: "pinterest",
    label: "Pinterest",
    utmSource: "pinterest",
    icon: <FaPinterestP className="h-4 w-4" />,
    createUrl: (landingUrl, text) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(landingUrl)}&description=${encodeURIComponent(text)}`,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    utmSource: "linkedin",
    icon: <FaLinkedinIn className="h-4 w-4" />,
    createUrl: (landingUrl) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(landingUrl)}`,
  },
];

export function SocialShare() {
  const currentName = useGeneratorStore((state) => state.currentName);
  const fullName = currentName?.fullName;

  const shareText = useMemo(() => {
    if (!fullName) return "";
    return `I just got my rap name: ${fullName}. Try this generator and create yours!`;
  }, [fullName]);

  const openShareWindow = (platform: SharePlatform) => {
    if (!fullName) return;
    const landingUrl = `${SITE_URL}?utm_source=${encodeURIComponent(platform.utmSource)}&utm_medium=social`;
    const shareUrl = platform.createUrl(landingUrl, shareText);
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  if (!fullName) return null;

  return (
    <section className="mx-auto w-full max-w-3xl rounded-2xl border border-white/30 bg-white/30 p-4 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-zinc-900/60 dark:shadow-glow">
      <div className="mb-4 inline-block rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-zinc-800 backdrop-blur-md dark:bg-black/60 dark:text-zinc-100">
        Share your current rap name:
      </div>
      <div className="flex flex-wrap gap-2">
        {sharePlatforms.map((platform) => (
          <button
            key={platform.id}
            type="button"
            onClick={() => openShareWindow(platform)}
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-white/40 dark:border-white/15 dark:bg-zinc-800/80 dark:text-zinc-100 dark:hover:bg-zinc-700/90"
          >
            {platform.icon}
            <span>{platform.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}