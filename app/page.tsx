import { GeneratorIsland } from "@/components/generator/GeneratorIsland";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Background } from "@/components/ui/Background";
import { SocialShare } from "@/components/SocialShare";
import { FAQ } from "@/components/FAQ";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:py-12">
      <Background />
      <header className="space-y-3 text-center">
        {/* Logo 放在 H1 前面 */}
        <div className="flex justify-center mb-2">
          <Image
            src="/logo.png"   // 请确保 public/logo.png 存在；如果暂时没有，可改为 /android-chrome-512x512.png
            alt="Rap Name Generator Logo"
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
          Level up your bars with a rap persona that’s unapologetically you.
        </p>
      </header>
      <ThemeToggle />
      <GeneratorIsland />
      <SocialShare />
      <FAQ />
    </main>
  );
}