"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

const WA_LINK =
  "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

export default function Industries() {
  const { t } = useLang()
  const ind = t.industries

  return (
    <section id="industries" className="py-32 lg:py-40 px-6 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ──────────────────────────────────────── */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="mb-20"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              {ind.eyebrow}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight"
          >
            {ind.headline}{" "}
            <span className="text-muted-foreground">{ind.headlineAccent}</span>
          </motion.h2>
        </motion.div>

        {/* ── Industry cards grid ─────────────────────────────────── */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {ind.items.map((industry) => (
            <motion.div
              key={industry.name}
              variants={fadeInUp}
              className="hover-lift border border-foreground/10 p-6 rounded-sm hover:border-foreground/40 transition-colors cursor-default"
            >
              {/* Icon */}
              <div className="text-2xl text-foreground opacity-60">
                {industry.icon}
              </div>

              {/* Name */}
              <h3 className="font-display text-xl mt-4">
                {industry.name}
              </h3>

              {/* Description */}
              {industry.sub && (
                <p className="text-sm text-muted-foreground mt-2">
                  {industry.sub}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA strip ────────────────────────────────────── */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="mt-20 p-10 border border-foreground/10 rounded-sm grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8"
        >
          <div>
            <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-3">
              {ind.ctaTitle}{" "}
              <span className="text-muted-foreground">{ind.ctaTitleAccent}</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
              {ind.ctaSub}
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift flex-shrink-0 inline-block px-8 py-4 bg-foreground text-background text-sm font-mono tracking-wide rounded-sm whitespace-nowrap transition-opacity hover:opacity-90"
          >
            {ind.ctaBtn}
          </a>
        </motion.div>

      </div>
    </section>
  )
}
