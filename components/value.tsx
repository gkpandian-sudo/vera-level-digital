"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Value() {
  const { t } = useLang()
  const v = t.value

  return (
    <section className="py-32 lg:py-40 px-6 border-t border-foreground/10">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-foreground/30" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {v.eyebrow}
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          {...inView}
          variants={fadeInUp}
          className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-20"
        >
          {v.headline}
        </motion.h2>

        {/* Numbered rows */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="border-t border-foreground/10"
        >
          {v.cards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeInUp}
              className="border-b border-foreground/10 py-8 lg:py-12 flex gap-8 lg:gap-16 items-start group"
            >
              {/* Number */}
              <span className="font-mono text-sm text-muted-foreground w-12 shrink-0 pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-2xl lg:text-3xl group-hover:translate-x-2 transition-transform duration-300">
                  {c.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  {c.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pills marquee */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="overflow-hidden mt-16"
        >
          <div className="animate-marquee">
            {[...v.pills, ...v.pills].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="inline-block mx-3 px-4 py-2 rounded-full border border-foreground/10 text-sm text-muted-foreground whitespace-nowrap"
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
