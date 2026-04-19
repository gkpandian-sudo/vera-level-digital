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
    body:  "Coding அல்லது hosting பற்றி தெரியாதது முற்றிலும் இயல்பானது. உங்கள் வணிகம் என்ன செய்கிறது என்று சொல்லுங்கள் — design, code, deploy அனைத்தும் நாங்கள் கவனிக்கிறோம்.",
  },
  {
    icon: "⏱",
    title: "நேரமில்லையா?",
    body:  "உங்கள் நேரம் மதிப்புமிக்கது — நாங்கள் அதை அறிவோம். வெறும் 30 நிமிட WhatsApp chat போதும். உங்கள் photos, விலை விவரங்களை பகிருங்கள், 7 முதல் 14 நாட்களில் உங்கள் இணையதளம் live ஆகும்.",
  },
  {
    icon: "💰",
    title: "செலவு குறித்து கவலையா?",
    body:  "வெறும் ₹10,000-ல் இருந்து தொடங்கலாம். ஒரே ஒரு முறை மட்டும் கட்டணம். மாதாமாதம் எந்த கட்டணமும் இல்லை — plugin-க்கோ hosting-க்கோ எதுவுமே இல்லை.",
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
            நாங்கள் உங்கள் பக்கம் இருக்கிறோம்
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-on-surface-variant max-w-2xl mx-auto tamil-text">
            Coding, hosting, SEO, design — இதில் ஏதாவது புரியவில்லையா?
            கவலைப்படாதீர்கள். உங்கள் வணிகத்தைப் பற்றி WhatsApp-ல் பேசுங்கள்,
            மீதி அனைத்தும் நாங்கள் பார்த்துக்கொள்கிறோம்.
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
