// -- Vera Level Digital — Tailwind configuration --
// Color tokens are CSS-variable–backed so dark/light toggling
// never touches component markup — only :root vs .dark variables change.

import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // -- Design tokens (map to CSS vars defined in globals.css) ----------
      colors: {
        primary:              "rgb(var(--color-primary)    / <alpha-value>)",
        surface:              "rgb(var(--color-surface)    / <alpha-value>)",
        "surface-variant":    "rgb(var(--color-sv)         / <alpha-value>)",
        "on-surface":         "rgb(var(--color-on-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--color-osv)        / <alpha-value>)",
        outline:              "rgb(var(--color-outline)    / <alpha-value>)",
        success:              "rgb(var(--color-success)    / <alpha-value>)",
        gold:                 "rgb(var(--color-gold)       / <alpha-value>)",
      },
      // -- Typography -------------------------------------------------------
      fontFamily: {
        sans:      ["var(--font-inter)",         "system-ui", "sans-serif"],
        headline:  ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        editorial: ["var(--font-cormorant)",     "Georgia",   "serif"],
      },
      // -- Border radius ----------------------------------------------------
      borderRadius: {
        sm:      "0.25rem",
        DEFAULT: "0.375rem",
        md:      "0.5rem",
        lg:      "0.75rem",
        xl:      "1rem",
        "2xl":   "1.5rem",
      },
      // -- Keyframes --------------------------------------------------------
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
      },
      animation: {
        marquee:  "marquee 30s linear infinite",
        "fade-in": "fade-in 0.4s ease forwards",
      },
    },
  },
  plugins: [],
}

export default config
