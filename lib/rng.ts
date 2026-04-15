import type { RNG } from "@/types";

const MODULUS = 2 ** 31;
const MULTIPLIER = 1103515245;
const INCREMENT = 12345;

export const createRNG = (seed?: number): RNG => {
  if (typeof seed !== "number") {
    return Math.random;
  }

  let state = seed >>> 0;

  return () => {
    state = (MULTIPLIER * state + INCREMENT) % MODULUS;
    return state / MODULUS;
  };
};
