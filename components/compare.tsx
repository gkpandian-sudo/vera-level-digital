"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, inView } from "@/lib/motion"

const wordpress = [
  "பொதுவாக மெதுவாக load ஆகும் (3-7 விநாடிகள்)",
  "Plugin-களால் security risks அதிகம்",
  "தொடர்ந்து update மற்றும் பராமரிப்பு தேவை",
  "Design-ல் சில கட்டுப்பாடுகள் உண்டு",
  "மாத மாத செலவுகள் தொடரும்",
]

const nextjs = [
  "அதிவேக செயல்திறன் (< 1s)",
  "அதிகபட்ச பாதுகாப்பு (Static Generation)",
  "பூஜ்ய பராமரிப்பு செலவுகள்",
  "முழுமையான பிரத்தியேக வடிவமைப்பு",
  "ஒரு முறை மட்டும் கட்டணம்",
]

export default function Compare() {
  return (
    <section id="compare" className="py-24 bg-surface-variant/20 px-6 border-y border-outline">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <motion.h2
          {...inView}
          variants={fadeInUp}
          className="font-headline text-3xl font-bold text-center mb-12"
        >
          WordPress vs Modern Tech Stack
        </motion.h2>

        {/* Two columns */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-outline"
        >
          {/* WordPress column */}
          <motion.div variants={fadeInLeft} className="bg-surface p-8 md:border-r border-outline">
            <h3 className="font-bold text-red-500 mb-6 flex items-center gap-2">
              <span>⚠️</span> Traditional CMS (WordPress-style)
            </h3>
            <ul className="space-y-4">
              {wordpress.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-on-surface-variant tamil-text">
                  <X size={14} className="text-red-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Next.js column */}
          <motion.div variants={fadeInRight} className="bg-surface p-8">
            <h3 className="font-bold text-success mb-6 flex items-center gap-2">
              <Check size={16} /> Next.js / React
            </h3>
            <ul className="space-y-4">
              {nextjs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm tamil-text">
                  <Check size={14} className="text-success mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
