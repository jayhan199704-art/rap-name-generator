"use client";

import { NamePart } from "@/components/generator/NamePart";
import { useGeneratorStore } from "@/store/generatorStore";
import type { NamePartKey } from "@/types";

export function NameDisplay() {
  const currentName = useGeneratorStore((state) => state.currentName);
  const lockState = useGeneratorStore((state) => state.lockState);
  const setLock = useGeneratorStore((state) => state.setLock);

  const handleToggle = (part: NamePartKey, value: boolean) => {
    setLock(part, value);
  };

  return (
    <section className="space-y-3">
      <NamePart partKey="prefix" value={currentName?.prefix ?? null} locked={lockState.prefix} onToggleLock={handleToggle} />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <NamePart partKey="first" value={currentName?.first ?? null} locked={lockState.first} onToggleLock={handleToggle} />
        <NamePart partKey="last" value={currentName?.last ?? null} locked={lockState.last} onToggleLock={handleToggle} />
      </div>
      <div className="rounded-xl border border-fuchsia-400/30 bg-fuchsia-500/10 p-4">
        <p className="text-xs uppercase tracking-[0.16em] text-fuchsia-800/90 dark:text-fuchsia-200/80">Full name</p>
        <p className="break-words pt-1 text-2xl font-extrabold text-zinc-900 sm:text-3xl dark:text-zinc-100">{currentName?.fullName ?? "Generating..."}</p>
      </div>
    </section>
  );
}
