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
      colors: {
        // Legacy tokens (unchanged components keep working)
        primary:              "rgb(var(--color-primary)    / <alpha-value>)",
        surface:              "rgb(var(--color-surface)    / <alpha-value>)",
        "surface-variant":    "rgb(var(--color-sv)         / <alpha-value>)",
        "on-surface":         "rgb(var(--color-on-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--color-osv)        / <alpha-value>)",
        outline:              "rgb(var(--color-outline)    / <alpha-value>)",
        success:              "rgb(var(--color-success)    / <alpha-value>)",
        gold:                 "rgb(var(--color-gold)       / <alpha-value>)",
        // Optimus tokens
        background:           "rgb(var(--background)           / <alpha-value>)",
        foreground:           "rgb(var(--foreground)           / <alpha-value>)",
        muted:                "rgb(var(--muted)                / <alpha-value>)",
        "muted-foreground":   "rgb(var(--muted-foreground)     / <alpha-value>)",
        border:               "rgb(var(--border)               / <alpha-value>)",
      },
      fontFamily: {
        sans:      ["var(--font-instrument-sans)", "var(--font-tamil)", "var(--font-devanagari)", "system-ui", "sans-serif"],
        headline:  ["var(--font-instrument-sans)", "var(--font-tamil)", "var(--font-devanagari)", "system-ui", "sans-serif"],
        display:   ["var(--font-instrument-serif)", "Georgia",   "serif"],
        editorial: ["var(--font-instrument-serif)", "Georgia",   "serif"],
        mono:      ["var(--font-jetbrains-mono)",   "monospace"],
      },
      borderRadius: {
        sm:      "0.25rem",
        DEFAULT: "0.375rem",
        md:      "0.5rem",
        lg:      "0.75rem",
        xl:      "1rem",
        "2xl":   "1.5rem",
      },
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
        marquee:   "marquee 30s linear infinite",
        "fade-in": "fade-in 0.4s ease forwards",
      },
    },
  },
  plugins: [],
}

export default config
