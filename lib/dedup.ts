import type { GeneratedName } from "@/types";

const toHash = (value: string): string => value.trim().toLowerCase();

export const isDuplicateName = (
  fullName: string,
  recentNames: GeneratedName[],
  windowSize = 10
): boolean => {
  const recent = recentNames.slice(0, windowSize);
  const hashes = new Set(recent.map((entry) => toHash(entry.fullName)));
  return hashes.has(toHash(fullName));
};
