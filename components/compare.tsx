"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Compare() {
  const { t } = useLang()
  const c = t.compare

  // Pair wordpress and nextjs items into rows
  const rowCount = Math.max(c.wordpress.length, c.nextjs.length)

  return (
    <section id="compare" className="py-32 lg:py-40 px-6 border-t border-foreground/10">
      <div className="max-w-4xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-foreground/30" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {c.eyebrow}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          {...inView}
          variants={fadeInUp}
          className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-16"
        >
          <span className="text-stroke">WordPress</span>{" "}
          <span className="text-muted-foreground font-mono text-2xl md:text-3xl align-middle">vs</span>{" "}
          <span>{c.vldLabel}</span>
        </motion.h2>

        {/* Comparison table */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="border border-foreground/10"
        >
          {/* Header row */}
          <div className="grid grid-cols-[1fr_1fr]">
            <div className="py-4 px-6 border-b border-foreground/10">
              <span className="font-mono text-sm text-muted-foreground">WordPress / CMS</span>
            </div>
            <div className="border-sketch py-4 px-6 border-b border-foreground/10 bg-primary/5">
              <span className="font-mono text-sm text-foreground">Vera Level Digital</span>
            </div>
          </div>

          {/* Data rows */}
          {Array.from({ length: rowCount }).map((_, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="border-b border-foreground/10 last:border-b-0 grid grid-cols-[1fr_1fr]"
            >
              {/* WordPress cell */}
              <div className="py-4 px-6 flex items-start gap-3 text-sm text-muted-foreground">
                <span className="font-mono text-muted-foreground shrink-0 mt-0.5">✗</span>
                <span>{c.wordpress[i] ?? ""}</span>
              </div>

              {/* VLD cell */}
              <div className="py-4 px-6 bg-primary/5 flex items-start gap-3 text-sm">
                <span className="font-mono text-primary shrink-0 mt-0.5">✓</span>
                <span>{c.nextjs[i] ?? ""}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
