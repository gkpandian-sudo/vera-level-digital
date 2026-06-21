# Optimus Visual Restyle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle all 13 VLD sections with the Optimus design language — Instrument Serif display headings, off-white/dark palette, noise overlay, floating pill nav, char-blur hero animation, numbered service rows, and marquee stats — while preserving all Tamil/Hindi/English i18n, dark/light toggle, WhatsApp CTA, and VLD blue accent.

**Architecture:** Dual CSS-variable system: legacy `--color-*` RGB vars remain for any untouched components; new Optimus `--background/--foreground/--muted/--muted-foreground/--border` RGB vars are added alongside and wired into Tailwind. All rewritten components use the new Optimus class names (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-foreground/10`, etc.).

**Tech Stack:** Next.js 15, React, TypeScript, Tailwind CSS v3, Framer Motion, `next/font/google` (Instrument Sans, Instrument Serif, JetBrains Mono).

---

## Task 1: Design System — globals.css + tailwind.config.ts + layout.tsx

**Files:**
- Rewrite: `app/globals.css`
- Modify: `tailwind.config.ts`
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Rewrite `app/globals.css`**

Replace the entire file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ── Font variables ── */
:root {
  --font-instrument-sans: "Instrument Sans", system-ui, sans-serif;
  --font-instrument-serif: "Instrument Serif", Georgia, serif;
  --font-jetbrains-mono: "JetBrains Mono", monospace;
}

/* ── Light theme ── */
:root {
  /* Optimus tokens (RGB channels for Tailwind /alpha support) */
  --background:        251 250 247;
  --foreground:         28  25  20;
  --muted:             239 238 234;
  --muted-foreground:  109 103  90;
  --border:            221 219 212;

  /* Legacy tokens (same values — keeps whatsapp-float and other unchanged components working) */
  --color-primary:     0 98 255;
  --color-surface:     251 250 247;
  --color-sv:          239 238 234;
  --color-on-surface:   28  25  20;
  --color-osv:         109 103  90;
  --color-outline:     221 219 212;
  --color-success:     0 166 90;
  --color-gold:        184 134 42;
}

/* ── Dark theme ── */
.dark {
  --background:         21  19  16;
  --foreground:        248 247 244;
  --muted:              43  41  36;
  --muted-foreground:  146 141 128;
  --border:             53  51  45;

  --color-primary:      56 130 255;
  --color-surface:      21  19  16;
  --color-sv:           43  41  36;
  --color-on-surface:  248 247 244;
  --color-osv:         146 141 128;
  --color-outline:      53  51  45;
  --color-success:     0 228 117;
  --color-gold:        232 201 106;
}

/* ── Base resets ── */
*, *::before, *::after { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  background-color: rgb(var(--background));
  color: rgb(var(--foreground));
  font-family: var(--font-instrument-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color 0.2s ease, color 0.2s ease;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-instrument-serif);
}

/* ── Devanagari (Hindi) ── */
:root[lang="hi"] body { font-family: var(--font-devanagari), var(--font-instrument-sans), system-ui, sans-serif; }
:root[lang="hi"] h1, :root[lang="hi"] h2, :root[lang="hi"] h3,
:root[lang="hi"] h4, :root[lang="hi"] h5, :root[lang="hi"] h6 {
  font-family: var(--font-devanagari), var(--font-instrument-serif), Georgia, serif;
}
.tamil-text    { line-height: 1.75; }
.devanagari-text { font-family: var(--font-devanagari), var(--font-instrument-sans), system-ui, sans-serif; line-height: 1.8; }

/* ── Glassmorphism ── */
.glass { backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }

/* ── Scrollbar (dark) ── */
.dark ::-webkit-scrollbar         { width: 6px; }
.dark ::-webkit-scrollbar-track   { background: rgb(var(--background)); }
.dark ::-webkit-scrollbar-thumb   { background: rgb(var(--border)); border-radius: 3px; }

/* ── Marquee ── */
@keyframes marquee {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.animate-marquee { animation: marquee 30s linear infinite; display: flex; width: max-content; }

/* ════════════════════════════════════════
   OPTIMUS UTILITIES
   ════════════════════════════════════════ */

/* Noise overlay */
.noise-overlay { position: relative; }
.noise-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
  z-index: 0;
}

/* Character blur-in */
.animate-char-in {
  animation: char-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  opacity: 0;
  filter: blur(40px);
  transform: translateY(100%);
}
@keyframes char-in {
  0%   { opacity: 0; filter: blur(40px); transform: translateY(100%); }
  100% { opacity: 1; filter: blur(0);    transform: translateY(0); }
}

/* Text-stroke (outlined/hollow text) */
.text-stroke {
  -webkit-text-stroke: 1.5px currentColor;
  -webkit-text-fill-color: transparent;
}

/* Hatched sketch border */
.border-sketch {
  border: 1px solid transparent;
  background:
    linear-gradient(rgb(var(--background)), rgb(var(--background))) padding-box,
    repeating-linear-gradient(135deg, rgb(var(--foreground)) 0, rgb(var(--foreground)) 1px, transparent 0, transparent 50%) border-box;
  background-size: 100% 100%, 8px 8px;
}

/* Hover lift spring */
.hover-lift { transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.hover-lift:hover { transform: translateY(-4px); }

/* Font display utility */
.font-display { font-family: var(--font-instrument-serif), Georgia, serif; }
```

- [ ] **Step 2: Update `tailwind.config.ts`**

Replace the entire file:

```ts
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
        sans:      ["var(--font-instrument-sans)",  "system-ui", "sans-serif"],
        headline:  ["var(--font-instrument-sans)",  "system-ui", "sans-serif"],
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
```

- [ ] **Step 3: Update `app/layout.tsx` — swap fonts**

Replace the entire file:

```tsx
import type { Metadata } from "next"
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono, Noto_Sans_Devanagari } from "next/font/google"
import Script from "next/script"
import { ThemeProvider, themeScript } from "@/lib/theme"
import { LangProvider } from "@/lib/i18n"
import "./globals.css"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
})

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title:       "Vera Level Digital — Web Solutions for India Businesses",
  description: "Custom Next.js websites for Tamil, Hindi & English-speaking businesses. Starting ₹10,000.",
  keywords:    ["web development", "Next.js", "Tamil Nadu", "Chennai", "India", "business website", "Vera Level Digital"],
  openGraph: {
    title:       "Vera Level Digital",
    description: "Vera Level Web Solutions for India Businesses — Tamil | हिंदी | English",
    type:        "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ta" className="dark" suppressHydrationWarning>
      <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${notoDevanagari.variable} font-sans`}>
        <ThemeProvider>
          <LangProvider>
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Add noise-overlay class to `app/page.tsx`**

Change the `<main>` tag:

```tsx
// Before:
<main>

// After:
<main className="relative overflow-x-hidden noise-overlay">
```

- [ ] **Step 5: Verify TypeScript compiles**

Run: `npm run build`
Expected: Build succeeds (or only pre-existing errors, no new ones).

- [ ] **Step 6: Commit**

```bash
git add app/globals.css tailwind.config.ts app/layout.tsx app/page.tsx
git commit -m "feat: migrate to Optimus design system tokens and fonts"
```

---

## Task 2: AnimatedSphere Component

**Files:**
- Create: `components/animated-sphere.tsx`

- [ ] **Step 1: Create `components/animated-sphere.tsx`**

```tsx
"use client"

import { useEffect, useRef } from "react"

export function AnimatedSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const chars = "░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯"
    let time = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener("resize", resize)

    const render = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const isDark = document.documentElement.classList.contains("dark")
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const radius = Math.min(rect.width, rect.height) * 0.525

      ctx.font = "12px monospace"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      const points: { x: number; y: number; z: number; char: string }[] = []

      for (let phi = 0; phi < Math.PI * 2; phi += 0.15) {
        for (let theta = 0; theta < Math.PI; theta += 0.15) {
          const x = Math.sin(theta) * Math.cos(phi + time * 0.5)
          const y = Math.sin(theta) * Math.sin(phi + time * 0.5)
          const z = Math.cos(theta)

          const rotY = time * 0.3
          const newX = x * Math.cos(rotY) - z * Math.sin(rotY)
          const newZ = x * Math.sin(rotY) + z * Math.cos(rotY)

          const rotX = time * 0.2
          const newY = y * Math.cos(rotX) - newZ * Math.sin(rotX)
          const finalZ = y * Math.sin(rotX) + newZ * Math.cos(rotX)

          const depth = (finalZ + 1) / 2
          const charIndex = Math.floor(depth * (chars.length - 1))

          points.push({
            x: centerX + newX * radius,
            y: centerY + newY * radius,
            z: finalZ,
            char: chars[charIndex],
          })
        }
      }

      points.sort((a, b) => a.z - b.z)

      points.forEach((point) => {
        const alpha = 0.2 + (point.z + 1) * 0.4
        ctx.fillStyle = isDark
          ? `rgba(255,255,255,${alpha})`
          : `rgba(0,0,0,${alpha})`
        ctx.fillText(point.char, point.x, point.y)
      })

      time += 0.02
      frameRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/animated-sphere.tsx
git commit -m "feat: add AnimatedSphere canvas component"
```

---

## Task 3: Navigation

**Files:**
- Modify: `components/nav.tsx`

- [ ] **Step 1: Replace `components/nav.tsx`**

```tsx
"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "@/lib/theme"
import { useLang, type Lang } from "@/lib/i18n"

const WA_CTA = "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

const langOptions: { code: Lang; label: string }[] = [
  { code: "ta", label: "TA" },
  { code: "hi", label: "HI" },
  { code: "en", label: "EN" },
]

export default function Nav() {
  const { theme, toggle } = useTheme()
  const { lang, setLang, t } = useLang()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || mobileOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-7xl"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 lg:px-8 transition-all duration-500 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <span
              className={`font-display tracking-tight transition-all duration-500 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              <span className="text-primary">V</span>
              <span className="text-foreground">L</span>
              <span className="text-[#f97316]">D</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-10 items-center text-sm">
            {t.nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center border border-foreground/10 rounded overflow-hidden">
              {langOptions.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => setLang(opt.code)}
                  className={[
                    "px-2.5 py-1 font-mono text-[11px] tracking-widest transition-colors",
                    lang === opt.code
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-foreground/5",
                  ].join(" ")}
                  aria-label={`Switch to ${opt.label}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 rounded border border-foreground/10 hover:bg-foreground/5 transition-colors"
            >
              {theme === "dark"
                ? <Sun size={16} className="text-muted-foreground" />
                : <Moon size={16} className="text-muted-foreground" />}
            </button>

            {/* CTA */}
            <a
              href={WA_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white rounded-full px-6 h-9 text-sm font-medium inline-flex items-center hover:opacity-90 transition-opacity"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-8">
            {t.nav.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                  mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: mobileOpen ? `${i * 75}ms` : "0ms" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div
            className={`flex items-center gap-3 pt-8 border-t border-foreground/10 transition-all duration-500 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mobileOpen ? "300ms" : "0ms" }}
          >
            <div className="flex items-center border border-foreground/10 rounded overflow-hidden">
              {langOptions.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => setLang(opt.code)}
                  className={[
                    "px-3 py-2 font-mono text-sm tracking-widest transition-colors",
                    lang === opt.code ? "bg-primary text-white" : "text-muted-foreground",
                  ].join(" ")}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 border border-foreground/10 rounded transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href={WA_CTA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex-1 bg-primary text-white rounded-full h-12 text-sm font-medium inline-flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/nav.tsx
git commit -m "feat: restyle nav to Optimus floating pill"
```

---

## Task 4: Hero

**Files:**
- Modify: `components/hero.tsx`

- [ ] **Step 1: Replace `components/hero.tsx`**

```tsx
"use client"

import { motion } from "framer-motion"
import { heroContainer, fadeInUp } from "@/lib/motion"
import { useLang } from "@/lib/i18n"
import { AnimatedSphere } from "./animated-sphere"

const WA_LINK = "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      {/* Animated sphere */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40 w-full"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            {h.eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-12 overflow-hidden">
          <h1 className="text-[clamp(3rem,10vw,9rem)] font-display leading-[0.9] tracking-tight">
            <span className="block">
              {h.headline.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block animate-char-in"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {char === " " ? " " : char}
                </span>
              ))}
            </span>
            <span className="block text-primary">
              {h.headlineAccent.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block animate-char-in"
                  style={{ animationDelay: `${(h.headline.length + i) * 40}ms` }}
                >
                  {char === " " ? " " : char}
                </span>
              ))}
            </span>
          </h1>
        </div>

        {/* Sub-copy + CTAs */}
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.p
            variants={fadeInUp}
            className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl"
          >
            {h.sub}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white rounded-full h-14 px-8 text-base font-medium hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.547 4.14 1.587 5.946L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.002-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004c-1.774 0-3.513-.474-5.03-1.37l-.361-.213-3.741.977.998-3.645-.235-.374a9.86 9.86 0 01-1.516-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.881 9.884zm5.422-7.403c-.297-.148-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.148-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.148-1.255-.461-2.39-1.462-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.15-.173.198-.296.297-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              {h.ctaPrimary}
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center border border-foreground/20 rounded-full h-14 px-8 text-base font-medium hover:bg-foreground/5 transition-colors"
            >
              {h.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Marquee stats strip */}
      <div className="absolute bottom-16 left-0 right-0 overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...t.techStack.stats, ...t.techStack.stats].map((stat, i) => (
            <div key={i} className="flex items-baseline gap-4 shrink-0">
              <span className="text-4xl lg:text-5xl font-display">{stat.value}</span>
              <span className="text-sm text-muted-foreground font-mono">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/hero.tsx
git commit -m "feat: restyle hero to Optimus — sphere, char-blur, marquee"
```

---

## Task 5: NoTemplate

**Files:**
- Modify: `components/no-template.tsx`

- [ ] **Step 1: Replace `components/no-template.tsx`**

```tsx
"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function NoTemplate() {
  const { t } = useLang()
  const n = t.noTemplate

  return (
    <section className="py-16 border-y border-foreground/10">
      <motion.div
        {...inView}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-foreground/30" />
          <span className="font-mono text-sm text-muted-foreground">{n.eyebrow}</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeInUp}
          className="font-display text-4xl lg:text-6xl tracking-tight mb-6"
        >
          {n.headline}{" "}
          <span className="text-stroke">{n.headlineAccent}</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          variants={fadeInUp}
          className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
        >
          {n.sub}
        </motion.p>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/no-template.tsx
git commit -m "feat: restyle NoTemplate to Optimus eyebrow + display heading"
```

---

## Task 6: Value

**Files:**
- Modify: `components/value.tsx`

- [ ] **Step 1: Replace `components/value.tsx`**

```tsx
"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Value() {
  const { t } = useLang()
  const v = t.value

  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div {...inView} variants={staggerContainer} className="mb-16">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            <span className="font-mono text-sm text-muted-foreground">{v.eyebrow}</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl lg:text-6xl tracking-tight mb-4">
            {v.headline}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {v.sub}
          </motion.p>
        </motion.div>

        {/* Numbered value cards */}
        <motion.div {...inView} variants={staggerContainer}>
          {v.cards.map((c, index) => (
            <motion.div
              key={c.title}
              variants={fadeInUp}
              className="group flex flex-col lg:flex-row gap-8 lg:gap-16 py-10 border-b border-foreground/10"
            >
              <div className="shrink-0 w-12">
                <span className="font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex-1 grid lg:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="text-3xl mb-4">{c.icon}</div>
                  <h3 className="font-display text-2xl lg:text-3xl mb-3 group-hover:translate-x-2 transition-transform duration-500">
                    {c.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pills marquee */}
        <motion.div {...inView} variants={fadeInUp} className="overflow-hidden mt-16">
          <div className="animate-marquee">
            {[...v.pills, ...v.pills].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="inline-block mx-3 px-4 py-2 border border-foreground/10 text-sm text-muted-foreground whitespace-nowrap font-mono"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/value.tsx
git commit -m "feat: restyle Value to Optimus numbered list rows"
```

---

## Task 7: Services

**Files:**
- Modify: `components/services.tsx`

- [ ] **Step 1: Replace `components/services.tsx`**

```tsx
"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

const WA_LINK = "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

function WebSvg() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full text-foreground">
      <rect x="20" y="20" width="160" height="120" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="44" x2="180" y2="44" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="36" cy="32" r="4" fill="currentColor" opacity="0.4" />
      <circle cx="52" cy="32" r="4" fill="currentColor" opacity="0.4" />
      <circle cx="68" cy="32" r="4" fill="currentColor" opacity="0.4" />
      {[0,1,2,3].map((i) => (
        <rect key={i} x="30" y={56 + i * 18} rx="2" height="10" fill="currentColor" opacity="0.15">
          <animate attributeName="width" values="20;140;20" dur="2.5s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.15;0.7;0.15" dur="2.5s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </svg>
  )
}

function EcommerceSvg() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full text-foreground">
      <path d="M30 30 L50 30 L70 100 L160 100 L175 55 L55 55" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="80" cy="120" r="10" fill="none" stroke="currentColor" strokeWidth="2">
        <animate attributeName="r" values="10;12;10" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="120" r="10" fill="none" stroke="currentColor" strokeWidth="2">
        <animate attributeName="r" values="10;12;10" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <rect x="90" y="62" width="60" height="30" rx="2" fill="currentColor" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.5;0.15" dur="2s" repeatCount="indefinite" />
      </rect>
    </svg>
  )
}

function MobileSvg() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full text-foreground">
      <rect x="70" y="10" width="60" height="140" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="70" y1="30" x2="130" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="70" y1="130" x2="130" y2="130" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="100" cy="145" r="4" fill="currentColor" opacity="0.4" />
      {[0,1,2].map((i) => (
        <rect key={i} x="80" y={38 + i * 22} width="40" height="14" rx="2" fill="currentColor" opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </svg>
  )
}

function AiSvg() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full text-foreground">
      <circle cx="100" cy="80" r="12" fill="currentColor">
        <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
      </circle>
      {[0,1,2,3,4,5].map((i) => {
        const angle = (i * 60) * (Math.PI / 180)
        const r = 50
        return (
          <g key={i}>
            <line x1="100" y1="80" x2={100 + Math.cos(angle) * r} y2={80 + Math.sin(angle) * r}
              stroke="currentColor" strokeWidth="1" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </line>
            <circle cx={100 + Math.cos(angle) * r} cy={80 + Math.sin(angle) * r} r="6"
              fill="none" stroke="currentColor" strokeWidth="2">
              <animate attributeName="r" values="6;8;6" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        )
      })}
    </svg>
  )
}

function SeoSvg() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full text-foreground">
      <circle cx="85" cy="75" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="110" y1="100" x2="170" y2="145" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {[0,1,2,3].map((i) => (
        <rect key={i} x="40" y={110 - i * 18} width={20 + i * 15} height="12" rx="2" fill="currentColor" opacity="0.2">
          <animate attributeName="height" values={`${12};${16 + i * 4};${12}`} dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </svg>
  )
}

function MaintenanceSvg() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full text-foreground">
      <g transform="translate(100,80)">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite" additive="sum" />
        {[0,1,2,3,4,5,6,7].map((i) => {
          const a = (i * 45) * (Math.PI / 180)
          return (
            <rect key={i} x={Math.cos(a) * 28 - 6} y={Math.sin(a) * 28 - 8} width="12" height="16" rx="3"
              fill="currentColor" opacity="0.3" transform={`rotate(${i * 45} ${Math.cos(a) * 28} ${Math.sin(a) * 28})`} />
          )
        })}
        <circle r="16" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle r="6" fill="currentColor" opacity="0.6" />
      </g>
    </svg>
  )
}

const serviceSvgs = [WebSvg, EcommerceSvg, MobileSvg, AiSvg, SeoSvg, MaintenanceSvg]

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div {...inView} variants={staggerContainer} className="mb-16">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            <span className="font-mono text-sm text-muted-foreground">{s.headline}</span>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl">
            {s.sub}
          </motion.p>
        </motion.div>

        {/* Numbered service rows */}
        <motion.div {...inView} variants={staggerContainer}>
          {s.items.map((item, index) => {
            const SvgIcon = serviceSvgs[index % serviceSvgs.length]
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="group flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-16 border-b border-foreground/10"
              >
                <div className="shrink-0 w-12">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="font-display text-3xl lg:text-4xl mb-4 group-hover:translate-x-2 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <div className="w-48 h-40">
                      <SvgIcon />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Custom service CTA */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="mt-12 border border-foreground/10 p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-2xl mb-2">{s.customTitle}</h3>
            <p className="text-muted-foreground">{s.customBody}</p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-primary text-white rounded-full px-8 h-12 inline-flex items-center text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {s.customCta}
          </a>
        </motion.div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/services.tsx
git commit -m "feat: restyle Services to Optimus numbered list with SVG visuals"
```

---

## Task 8: TechStack

**Files:**
- Modify: `components/tech-stack.tsx`

- [ ] **Step 1: Replace `components/tech-stack.tsx`**

```tsx
"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

const techs = [
  { name: "Next.js 15",    sub: "React Framework" },
  { name: "React.js",      sub: "UI Library"       },
  { name: "TypeScript",    sub: "Type Safety"      },
  { name: "Tailwind CSS",  sub: "Styling"          },
  { name: "Firebase",      sub: "Backend / DB"     },
  { name: "Framer Motion", sub: "Animations"       },
  { name: "Vercel",        sub: "Global CDN"       },
  { name: "GitHub",        sub: "Version Control"  },
]

export default function TechStack() {
  const { t } = useLang()
  const ts = t.techStack

  return (
    <section className="py-24 px-6 lg:px-12 border-y border-foreground/10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div {...inView} variants={staggerContainer} className="mb-16">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            <span className="font-mono text-sm text-muted-foreground">{ts.eyebrow}</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl lg:text-6xl tracking-tight">
            {ts.headline}{" "}
            <span className="text-primary">{ts.headlineAccent}</span>
          </motion.h2>
        </motion.div>

        {/* Tech grid */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 mb-16"
        >
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              className="bg-background p-6 hover:bg-muted transition-colors"
            >
              <div className="font-display text-lg mb-1">{tech.name}</div>
              <div className="font-mono text-xs text-muted-foreground">{tech.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10"
        >
          {ts.stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeInUp}
              className="bg-background p-8 text-center"
            >
              <div className="font-display text-5xl mb-3">{s.value}</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/tech-stack.tsx
git commit -m "feat: restyle TechStack to Optimus grid with display stats"
```

---

## Task 9: Compare

**Files:**
- Modify: `components/compare.tsx`

- [ ] **Step 1: Replace `components/compare.tsx`**

```tsx
"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Compare() {
  const { t } = useLang()
  const c = t.compare

  return (
    <section id="compare" className="py-24 px-6 lg:px-12 border-y border-foreground/10">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div {...inView} variants={staggerContainer} className="mb-12">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            <span className="font-mono text-sm text-muted-foreground">Why Us</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl lg:text-6xl tracking-tight">
            <span className="text-stroke">WordPress</span>{" vs Modern Tech Stack"}
          </motion.h2>
        </motion.div>

        {/* Two columns */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10"
        >
          {/* WordPress column */}
          <motion.div variants={fadeInLeft} className="bg-background p-8 lg:p-10">
            <h3 className="font-mono text-sm text-muted-foreground mb-8 flex items-center gap-2">
              <span>🚫</span> WordPress / CMS
            </h3>
            <ul className="space-y-5">
              {c.wordpress.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <X size={14} className="text-muted-foreground/50 mt-1 shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Next.js column */}
          <motion.div
            variants={fadeInRight}
            className="border-sketch p-8 lg:p-10 bg-primary/5"
          >
            <h3 className="font-mono text-sm text-primary mb-8 flex items-center gap-2">
              <Check size={14} /> Next.js / React
            </h3>
            <ul className="space-y-5">
              {c.nextjs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={14} className="text-primary mt-1 shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/compare.tsx
git commit -m "feat: restyle Compare to Optimus grid with text-stroke heading"
```

---

## Task 10: Industries

**Files:**
- Modify: `components/industries.tsx`

- [ ] **Step 1: Replace `components/industries.tsx`**

```tsx
"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView, EASE } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

const WA_LINK = "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

export default function Industries() {
  const { t } = useLang()
  const ind = t.industries

  return (
    <section id="industries" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div {...inView} variants={staggerContainer} className="mb-16">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            <span className="font-mono text-sm text-muted-foreground">{ind.eyebrow}</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl lg:text-6xl tracking-tight">
            {ind.headline}
            <br />
            <span className="text-primary">{ind.headlineAccent}</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            {ind.sub}
          </motion.p>
        </motion.div>

        {/* Industry grid */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10"
        >
          {ind.items.map((industry) => (
            <motion.div
              key={industry.name}
              variants={fadeInUp}
              className="hover-lift bg-background border-0 p-8 flex flex-col group"
            >
              <div className="w-11 h-11 border border-foreground/10 flex items-center justify-center text-xl mb-5 group-hover:border-primary transition-colors">
                {industry.icon}
              </div>

              <h3 className="font-display text-xl mb-1">{industry.name}</h3>
              <p className="font-mono text-xs text-muted-foreground mb-4 tracking-wide uppercase">
                {industry.sub}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow border-b border-foreground/10 pb-4">
                {industry.pitch}
                <strong className="text-foreground font-medium">{industry.bold}</strong>
              </p>

              <ul className="flex flex-col gap-2 mb-4">
                {industry.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 w-1 h-1 bg-primary rounded-full shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-3 border-t border-foreground/10">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  {ind.bestFor}
                </span>
                <span className="font-mono text-xs text-foreground">{industry.sig}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="mt-12 border-sketch p-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8"
        >
          <div>
            <h3 className="font-display text-3xl mb-3">
              {ind.ctaTitle}
              <br />
              <span className="text-primary">{ind.ctaTitleAccent}</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-xl">{ind.ctaSub}</p>
          </div>
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="shrink-0 bg-primary text-white rounded-full px-8 h-12 inline-flex items-center text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {ind.ctaBtn}
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/industries.tsx
git commit -m "feat: restyle Industries to Optimus hover-lift grid"
```

---

## Task 11: Pricing

**Files:**
- Modify: `components/pricing.tsx`

- [ ] **Step 1: Replace `components/pricing.tsx`**

```tsx
"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Pricing() {
  const { t } = useLang()
  const p = t.pricing

  return (
    <section id="pricing" className="py-24 px-6 lg:px-12 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div {...inView} variants={staggerContainer} className="max-w-3xl mb-16">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            <span className="font-mono text-sm text-muted-foreground">Pricing</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display text-5xl lg:text-7xl tracking-tight mb-6">
            {p.headline}{" "}
            <span className="text-stroke">{p.headlineAccent}</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
            {p.sub}
          </motion.p>
        </motion.div>

        {/* Tier grid */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-px bg-foreground/10"
        >
          {p.tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              variants={fadeInUp}
              className={[
                "relative bg-background p-8 lg:p-10 flex flex-col",
                tier.popular ? "border-2 border-primary md:-my-4 md:py-14" : "",
              ].join(" ")}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-primary text-white text-xs font-mono uppercase tracking-widest">
                  Popular
                </span>
              )}

              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl mt-2">{tier.name}</h3>
              </div>

              <div className="mb-8 pb-8 border-b border-foreground/10">
                <div className="font-display text-5xl lg:text-6xl">{tier.price}</div>
                <div className="font-mono text-xs text-muted-foreground mt-2">{tier.timeline}</div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/919632233776?text=${tier.waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "w-full py-4 flex items-center justify-center text-sm font-medium transition-all",
                  tier.popular
                    ? "bg-primary text-white hover:opacity-90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5",
                ].join(" ")}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          {...inView}
          variants={fadeInUp}
          className="text-center font-mono text-xs text-muted-foreground mt-10 uppercase tracking-widest"
        >
          {p.footnote}
        </motion.p>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/pricing.tsx
git commit -m "feat: restyle Pricing to Optimus grid with text-stroke heading"
```

---

## Task 12: Portfolio

**Files:**
- Modify: `components/portfolio.tsx`

- [ ] **Step 1: Replace `components/portfolio.tsx`**

```tsx
"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Portfolio() {
  const { t } = useLang()
  const p = t.portfolio

  return (
    <section id="portfolio" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-foreground/30" />
              <span className="font-mono text-sm text-muted-foreground">{p.eyebrow}</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl lg:text-6xl tracking-tight">
              {p.headline}
            </motion.h2>
          </div>

          <motion.a
            variants={fadeInUp}
            href="https://github.com/gkpandian-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border border-foreground/10 px-4 py-2 rounded-full hover:border-foreground/30"
          >
            <Github size={15} /> {p.viewGithub}
          </motion.a>
        </motion.div>

        {/* Project cards */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10"
        >
          {p.projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              className="hover-lift bg-background flex flex-col overflow-hidden"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-10 h-10 border border-foreground/10 flex items-center justify-center text-xl ${project.color}`}>
                    {project.icon}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Open ${project.title}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <h3 className="font-display text-xl mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 border border-foreground/10 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-8 py-4 border-t border-foreground/10 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  {project.segment}
                </span>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-primary hover:underline flex items-center gap-1"
                >
                  GitHub →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile GitHub link */}
        <motion.div {...inView} variants={fadeInUp} className="mt-8 text-center md:hidden">
          <a
            href="https://github.com/gkpandian-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground border border-foreground/10 px-6 py-3 rounded-full"
          >
            <Github size={15} /> {p.viewGithub}
          </a>
        </motion.div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/portfolio.tsx
git commit -m "feat: restyle Portfolio to Optimus hover-lift grid"
```

---

## Task 13: FAQ

**Files:**
- Modify: `components/faq.tsx`

- [ ] **Step 1: Replace `components/faq.tsx`**

```tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { fadeInUp, staggerContainer, inView, EASE } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Faq() {
  const { t } = useLang()
  const f = t.faq
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 lg:px-12 border-t border-foreground/10">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div {...inView} variants={staggerContainer} className="mb-12">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            <span className="font-mono text-sm text-muted-foreground">FAQ</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl lg:text-5xl tracking-tight">
            {f.headline}
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <motion.div {...inView} variants={staggerContainer}>
          {f.items.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="border-b border-foreground/10"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left hover:text-muted-foreground transition-colors"
                >
                  <span className="pr-8 font-display text-xl">{item.q}</span>
                  <span className="shrink-0">
                    {isOpen
                      ? <Minus size={16} className="text-primary" />
                      : <Plus  size={16} className="text-muted-foreground" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, transition: { duration: 0.3, ease: EASE } }}
                      exit={{ height: 0, opacity: 0, transition: { duration: 0.2, ease: EASE } }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-base text-muted-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/faq.tsx
git commit -m "feat: restyle FAQ to Optimus borderless accordion"
```

---

## Task 14: CTA

**Files:**
- Modify: `components/cta.tsx`

- [ ] **Step 1: Replace `components/cta.tsx`**

```tsx
"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView, EASE } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

const WA_LINK = "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20business%20website."

export default function Cta() {
  const { t } = useLang()
  const c = t.cta

  return (
    <section className="py-24 px-6 lg:px-12">
      <motion.div
        {...inView}
        variants={staggerContainer}
        className="max-w-5xl mx-auto border-sketch p-12 lg:p-20 text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-display text-5xl lg:text-8xl tracking-tight mb-8 leading-[0.9]"
        >
          {c.headline.split(" ").map((word, i) =>
            i === 0 ? (
              <span key={i} className="text-stroke">{word} </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed"
        >
          {c.sub}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-10">
          {c.badges.map((b) => (
            <span key={b} className="px-3 py-1 border border-foreground/10 font-mono text-xs text-muted-foreground">
              {b}
            </span>
          ))}
        </motion.div>

        <motion.a
          variants={fadeInUp}
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, transition: { duration: 0.2, ease: EASE } }}
          whileTap={{ scale: 0.96 }}
          className="bg-primary text-white rounded-full h-14 px-10 text-base font-medium inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          {c.btn}
        </motion.a>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/cta.tsx
git commit -m "feat: restyle CTA to Optimus giant display heading with border-sketch"
```

---

## Task 15: Footer

**Files:**
- Modify: `components/footer.tsx`

- [ ] **Step 1: Replace `components/footer.tsx`**

```tsx
"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const navLinks = t.nav.links.slice(0, 3)

  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto">

        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp}>
            <div className="font-display text-2xl mb-6">{f.brand}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.tagline}</p>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-6">
              {f.quickLinks}
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group w-fit">
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="https://github.com/gkpandian-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group w-fit"
              >
                GitHub
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-6">
              {f.contact}
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/919632233776"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                💬 +91 96322 33776
              </a>
              <a
                href="https://github.com/gkpandian-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Github size={14} /> github.com/gkpandian-sudo
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="pt-8 border-t border-foreground/10 text-center font-mono text-xs text-muted-foreground"
        >
          {f.copyright}
        </motion.div>

      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/footer.tsx
git commit -m "feat: restyle Footer to Optimus minimal with underline-slide links"
```

---

## Task 16: Final Verification & Push

- [ ] **Step 1: Full build**

Run: `npm run build`
Expected: Build succeeds with zero errors.

- [ ] **Step 2: Start dev server and visually verify all sections**

Run: `npm run dev`

Open `http://localhost:3000` and verify:
- Light mode: off-white background, Instrument Serif headings, noise texture visible
- Dark mode: near-black background, white text
- Nav: transparent at top → floating pill on scroll, language switcher, theme toggle, WhatsApp CTA
- Hero: animated sphere (right), char-blur headline animation, marquee stats strip at bottom
- All section headings use `font-display` serif typeface
- Services: numbered list rows (01–06) with animated SVG icons
- Compare: "WordPress" heading has text-stroke (outlined), VLD column has hatched border
- Pricing: gap-px grid layout, popular tier has blue border and negative margin
- CTA: giant outlined + solid heading, border-sketch container, rounded-full WhatsApp button
- Tamil/Hindi/English switching still works
- Mobile menu: full-screen overlay with giant display-font links

- [ ] **Step 3: Commit final state and push**

```bash
git add -A
git commit -m "feat: complete Optimus visual restyle of all 13 sections

- Typography: Instrument Serif/Sans/JetBrains Mono via next/font
- Tokens: dual CSS var system (legacy + Optimus oklch-matched RGB)
- Noise overlay, char-blur hero, animated sphere
- Floating pill nav with language switcher + theme toggle
- All sections: numbered rows, display headings, muted-foreground body
- Preserved: i18n, dark/light toggle, WhatsApp CTA, section order

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"

git push origin main
```
