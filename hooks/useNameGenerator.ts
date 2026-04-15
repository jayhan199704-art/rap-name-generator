"use client";

import { useCallback } from "react";
import { getWordBank } from "@/data/wordbank";
import { buildFullName } from "@/lib/nameBuilder";
import { isDuplicateName } from "@/lib/dedup";
import { createRNG } from "@/lib/rng";
import type { GeneratedName, LockState, RNG } from "@/types";

type GenerateInput = {
  selectedStyle: string;
  lockState: LockState;
  currentName: GeneratedName | null;
  recentNames: GeneratedName[];
};

const pick = (items: string[], rng: RNG): string => {
  const index = Math.floor(rng() * items.length);
  return items[Math.min(items.length - 1, Math.max(0, index))] ?? items[0];
};

export const useNameGenerator = (rng: RNG = createRNG()) => {
  return useCallback(
    ({ selectedStyle, lockState, currentName, recentNames }: GenerateInput): GeneratedName | null => {
      if (lockState.prefix && lockState.first && lockState.last) {
        return null;
      }

      const bank = getWordBank(selectedStyle);
      const maxRetries = 5;

      for (let attempt = 0; attempt < maxRetries; attempt += 1) {
        const nextPrefix = lockState.prefix
          ? currentName?.prefix ?? pick(bank.prefixes, rng)
          : pick(bank.prefixes, rng);
        const nextFirst = lockState.first ? currentName?.first ?? pick(bank.firstNames, rng) : pick(bank.firstNames, rng);
        const nextLast = lockState.last ? currentName?.last ?? pick(bank.lastNames, rng) : pick(bank.lastNames, rng);

        const fullName = buildFullName(nextPrefix, nextFirst, nextLast);

        if (!isDuplicateName(fullName, recentNames)) {
          return {
            prefix: nextPrefix,
            first: nextFirst,
            last: nextLast,
            fullName,
            style: selectedStyle,
            timestamp: Date.now()
          };
        }
      }

      const forcePrefix = lockState.prefix ? currentName?.prefix ?? pick(bank.prefixes, rng) : pick(bank.prefixes, rng);
      const forceFirst = lockState.first ? currentName?.first ?? pick(bank.firstNames, rng) : pick(bank.firstNames, rng);
      const forceLast = lockState.last ? currentName?.last ?? pick(bank.lastNames, rng) : pick(bank.lastNames, rng);

      return {
        prefix: forcePrefix,
        first: forceFirst,
        last: forceLast,
        fullName: buildFullName(forcePrefix, forceFirst, forceLast),
        style: selectedStyle,
        timestamp: Date.now()
      };
    },
    [rng]
  );
};
