import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./store/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#09090b"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.12), 0 20px 30px -10px rgba(0,0,0,0.5)"
      }
    }
  },
  plugins: []
};

export default config;
