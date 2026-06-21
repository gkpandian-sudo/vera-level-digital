"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Faq() {
  const { t } = useLang()
  const f = t.faq
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-32 lg:py-40 border-t border-foreground/10 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-foreground/30" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            FAQ
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          {...inView}
          variants={fadeInUp}
          className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-20"
        >
          {f.headline}
        </motion.h2>

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
                  className="w-full flex justify-between items-start py-8 text-left group"
                >
                  <span className="font-display text-xl lg:text-2xl group-hover:text-primary transition-colors pr-6">
                    {item.q}
                  </span>
                  <span className="font-mono text-2xl text-muted-foreground shrink-0 leading-none mt-1">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-muted-foreground text-base leading-relaxed pb-8">
                    {item.a}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
