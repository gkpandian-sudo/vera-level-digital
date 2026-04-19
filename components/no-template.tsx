"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"

export default function NoTemplate() {
  return (
    <section className="py-12 border-y border-outline bg-surface-variant/30">
      <motion.div
        {...inView}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block"
        >
          What Sets Us Apart
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          className="font-headline text-3xl font-bold mb-4 tamil-text"
        >
          நாங்கள் உருவாக்குவது{" "}
          <span className="px-2 py-1 bg-on-surface text-surface">
            பூஜ்யம் டெம்ப்ளேட்.
          </span>
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-on-surface-variant max-w-2xl mx-auto text-sm tamil-text">
          நாங்கள் React.js மற்றும் Next.js கொண்டு புதிதாக குறியீடு செய்கிறோம்.
          WordPress போன்ற பழைய முறைகள் அல்ல.
        </motion.p>
      </motion.div>
    </section>
  )
}
