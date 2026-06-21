"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function NoTemplate() {
  const { t } = useLang()
  const n = t.noTemplate

  return (
    <section className="py-32 lg:py-40 border-t border-foreground/10">
      <motion.div
        {...inView}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-8 h-px bg-foreground/30 shrink-0" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {n.eyebrow}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-16 max-w-4xl"
        >
          {n.headline}{" "}
          <span className="text-stroke">{n.headlineAccent}</span>
        </motion.h2>

        {/* Sub — displayed as a single prominent numbered row */}
        <motion.div
          variants={fadeInUp}
          className="border-b border-foreground/10 py-8 group cursor-default"
        >
          <div className="flex items-start gap-8 md:gap-16">
            <span className="font-mono text-sm text-muted-foreground shrink-0 pt-1">
              01
            </span>
            <div className="flex-1">
              <p className="font-display text-2xl mb-3 transition-transform duration-300 group-hover:translate-x-2">
                {n.headlineAccent}
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {n.sub}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
