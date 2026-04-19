// -- Vera Level Digital — Shared Framer Motion variants --
// Centralising variants here keeps every component consistent and
// makes global timing tweaks a single-line change.

import type { Variants } from "framer-motion"

/** Custom ease curve — fast start, smooth settle (matches Bali reference) */
export const EASE = [0.25, 0.46, 0.45, 0.94] as const

// ── Single-element variants ───────────────────────────────────────────

/** Fade up 30 px — default entrance for most elements */
export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/** Fade in from left — hero text column, left-side content */
export const fadeInLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
}

/** Fade in from right — hero image column, right-side content */
export const fadeInRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
}

/** Scale + fade — metric badges, stat callouts */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE } },
}

/** Pure fade — subtle overlays, section dividers */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: EASE } },
}

// ── Container (stagger) variants ──────────────────────────────────────

/** Stagger container — 3–5 children (services, pricing, compare) */
export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

/** Faster stagger — 6+ children (tech grid, tag pills) */
export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.065, delayChildren: 0.05 } },
}

/** Hero stagger — slightly longer initial delay for cinematic feel */
export const heroContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

// ── whileInView shorthand ──────────────────────────────────────────────
// Spread this onto any motion element that should animate on scroll.
// Usage:  <motion.div {...inView} variants={fadeInUp}>

export const inView = {
  initial:      "hidden",
  whileInView:  "visible",
  viewport:     { once: true, margin: "-80px" },
} as const
