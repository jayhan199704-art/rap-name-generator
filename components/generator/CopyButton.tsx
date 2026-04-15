// components/generator/CopyButton.tsx
"use client";

import type { Dispatch, SetStateAction } from "react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useGeneratorStore } from "@/store/generatorStore";
import type { ToastEntry } from "@/types";

type CopyButtonProps = {
  setToasts: Dispatch<SetStateAction<ToastEntry[]>>;
};

export function CopyButton({ setToasts }: CopyButtonProps) {
  const currentName = useGeneratorStore((state) => state.currentName);
  const { copy } = useCopyToClipboard();

  const addToast = (message: string) => {
    const id = crypto.randomUUID();
    const entry: ToastEntry = { id, message, createdAt: Date.now() };
    setToasts((prev) => [...prev, entry]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, 2000);
  };

  const handleCopy = async () => {
    const target = currentName?.fullName;
    const success = await copy(target ?? "");
    addToast(success ? "Copied!" : "Copy failed, please select manually");
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="min-h-11 w-full rounded-xl border border-white/15 bg-zinc-900/80 px-5 py-3 font-semibold text-zinc-100 transition hover:bg-zinc-800"
    >
      Copy Name
    </button>
  );
}
