export type RapStyle = {
  id: string;
  label: string;
  description: string;
};

export type WordBank = {
  style: string;
  prefixes: string[];
  firstNames: string[];
  lastNames: string[];
};

export type GeneratedName = {
  prefix: string | null;
  first: string;
  last: string;
  fullName: string;
  style: string;
  timestamp: number;
};

export type LockState = {
  prefix: boolean;
  first: boolean;
  last: boolean;
};

export type ToastEntry = {
  id: string;
  message: string;
  createdAt: number;
};

export type RNG = () => number;

export type NamePartKey = keyof LockState;
