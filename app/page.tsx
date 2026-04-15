// app/page.tsx
import { GeneratorIsland } from "@/components/generator/GeneratorIsland";
import { Background } from "@/components/ui/Background";

export default function HomePage() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:py-12">
      <Background />

      <header className="space-y-3 text-center">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Rap Name Generator</h1>
        <p className="mx-auto max-w-2xl text-sm text-zinc-300 sm:text-base">
          Pick a style, lock the parts you love, and keep spinning fresh rap aliases.
        </p>
      </header>
      <GeneratorIsland />
    </main>
  );
}
