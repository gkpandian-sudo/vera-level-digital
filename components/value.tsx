"use client"

import { motion } from "framer-motion"
import {
  fadeInUp,
  staggerContainer,
  staggerFast,
  inView,
  EASE,
} from "@/lib/motion"

const cards = [
  {
    icon: "🧠",
    title: "தொழில்நுட்பம் தெரியாதா?",
    body:  "Coding அல்லது hosting பற்றி எதுவும் தெரியாவிட்டாலும் பரவாயில்லை. உங்கள் வணிகத்தைப் பற்றி சொல்லுங்கள், நாங்கள் design, code மற்றும் deploy செய்கிறோம்.",
  },
  {
    icon: "⏱",
    title: "நேரமில்லையா?",
    body:  "30 நிமிட WhatsApp chat போதும். படங்கள், விலை, மற்றும் வணிக விவரங்களை அனுப்புங்கள், 7 முதல் 14 நாளில் உங்கள் இணையதளம் live ஆகும்.",
  },
  {
    icon: "💰",
    title: "செலவு குறித்து கவலையா?",
    body:  "₹10,000 முதல் தொடங்குகிறது. ஒரு முறை கட்டணம். மாதாந்திர plugin கட்டணங்களோ, ஆண்டு hosting கட்டணங்களோ இல்லை.",
  },
]

const pills = [
  "Domain Setup", "Custom Design", "React / Next.js",
  "Vercel CDN", "WhatsApp Integration", "SEO Optimized",
  "Mobile First", "Google Maps", "Free Revisions",
]

export default function Value() {
  return (
    <section className="py-24 px-6 bg-surface-variant/10 border-b border-outline">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div {...inView} variants={staggerContainer} className="text-center mb-16">
          <motion.span variants={fadeInUp} className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
            Simple Process
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-headline text-4xl font-bold mb-4 tamil-text">
            நாங்கள் அனைத்தும் செய்கிறோம்
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-on-surface-variant max-w-2xl mx-auto tamil-text">
            Coding, hosting, SEO, அல்லது design பற்றி நீங்கள் தெரிந்திருக்க
            வேண்டியதில்லை. WhatsApp-ல் உங்கள் வணிக தகவலை அனுப்புங்கள், A முதல்
            Z வரை நாங்கள் செய்கிறோம்.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: EASE } }}
              className="p-8 rounded-xl glass bg-surface-variant/20 border border-outline"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-2xl">
                {c.icon}
              </div>
              <h3 className="font-headline text-xl font-bold mb-3 tamil-text">{c.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed tamil-text">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pill tags */}
        <motion.div
          {...inView}
          variants={staggerFast}
          className="flex flex-wrap justify-center gap-3"
        >
          {pills.map((p) => (
            <motion.span
              key={p}
              variants={fadeInUp}
              className="px-4 py-2 rounded-full bg-surface border border-outline text-xs text-on-surface-variant"
            >
              {p}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
