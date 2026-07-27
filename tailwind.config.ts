import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./app/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070e",
          900: "#0a0e1a",
        },
        paper: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
        },
        toxic: {
          300: "#c4ff4f",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
          700: "#4d7c0f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        serif: ["ui-serif", "Georgia", "Cambria", "serif"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
        "radial-toxic":
          "radial-gradient(60% 60% at 50% 0%, rgba(163,230,53,0.16) 0%, rgba(255,255,255,0) 70%)",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(15, 23, 42, 0.06)",
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.05)",
      },
      keyframes: {
        floatGlow: {
          "0%, 100%": { opacity: "0.4", transform: "translateY(0px)" },
          "50%": { opacity: "0.9", transform: "translateY(-6px)" },
        },
        drift: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(0,-40px,0)" },
        },
      },
      animation: {
        floatGlow: "floatGlow 6s ease-in-out infinite",
        drift: "drift 18s linear infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;