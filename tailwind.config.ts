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
          800: "#0f1626",
          700: "#1a2440",
        },
        toxic: {
          300: "#c4ff4f",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(163,230,53,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(163,230,53,0.06) 1px, transparent 1px)",
        "radial-toxic":
          "radial-gradient(60% 60% at 50% 0%, rgba(163,230,53,0.18) 0%, rgba(5,7,14,0) 70%)",
      },
      keyframes: {
        floatGlow: {
          "0%, 100%": { opacity: "0.55", transform: "translateY(0px)" },
          "50%": { opacity: "1", transform: "translateY(-6px)" },
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
