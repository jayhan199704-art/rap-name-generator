import type { Metadata } from "next";
import Image from "next/image";
import { GeneratorIsland } from "@/components/generator/GeneratorIsland";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Background } from "@/components/ui/Background";
import { SocialShare } from "@/components/SocialShare";
import { FAQ } from "@/components/FAQ";

const siteName = "Rap Name Generator";
const pageTitle = "Rap Name Generator | Create a Unique Rap Alias in Seconds";
const pageDescription =
  "Generate unique rap names instantly. Pick your style, lock your favorite parts, and craft a rap alias that matches your vibe.";
const canonicalPath = "/";
const ogImage = "/android-chrome-512x512.png";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "rap name generator",
    "rap alias generator",
    "hip hop name generator",
    "rapper nickname generator",
    "free rap name generator",
  ],
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    siteName,
    url: canonicalPath,
    images: [
      {
        url: ogImage,
        width: 512,
        height: 512,
        alt: "Rap Name Generator logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:py-12">
      <Background />

      <header className="space-y-3 text-center">
        <div className="mb-2 flex justify-center">
          <Image
            src="/logo.png"
            alt="Rap Name Generator logo"
            width={80}
            height={80}
            className="h-16 w-auto"
            priority
          />
        </div>

        <h1 className="text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
          Rap Name Generator
        </h1>

        <p className="mx-auto max-w-2xl text-sm text-zinc-600 sm:text-base dark:text-zinc-300">
          Level up your bars with a rap persona that&apos;s unapologetically you.
        </p>
      </header>

      <section aria-label="Theme controls">
        <ThemeToggle />
      </section>

      <section aria-label="Rap name generator tool">
        <GeneratorIsland />
      </section>

      <section aria-label="Share this tool">
        <SocialShare />
      </section>

      <section aria-label="Frequently asked questions">
        <FAQ />
      </section>
    </main>
  );
}