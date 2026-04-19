"use client"

import { motion } from "framer-motion"
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  staggerFast,
  inView,
  EASE,
} from "@/lib/motion"

const techs = [
  { name: "Next.js 15",     sub: "React Framework"  },
  { name: "React.js",       sub: "UI Library"        },
  { name: "TypeScript",     sub: "Type Safety"       },
  { name: "Tailwind CSS",   sub: "Styling"           },
  { name: "Firebase",       sub: "Backend / DB"      },
  { name: "Framer Motion",  sub: "Animations"        },
  { name: "Vercel",         sub: "Global CDN"        },
  { name: "GitHub",         sub: "Version Control"   },
]

const stats = [
  { value: "< 1s",  label: "Vercel CDN load time",      color: "text-primary" },
  { value: "90+",   label: "Google Lighthouse Score",    color: "text-success" },
  { value: "100%",  label: "Custom, zero templates",   color: "text-on-surface" },
]

export default function TechStack() {
  return (
    <section className="py-24 bg-surface-variant/10 px-6 border-y border-outline">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div {...inView} variants={staggerContainer} className="text-center mb-16">
          <motion.span variants={fadeInUp} className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
            தொழில்நுட்ப அடுக்கு
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-headline text-4xl font-bold mb-4">
            Industry-Leading{" "}
            <span className="text-primary">Tech Stack</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-on-surface-variant tamil-text">
            Netflix, Airbnb, மற்றும் உலகின் சிறந்த companies பயன்படுத்தும் அதே தொழில்நுட்பம்.
          </motion.p>
        </motion.div>

        {/* Tech grid */}
        <motion.div
          {...inView}
          variants={staggerFast}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12"
        >
          {techs.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              whileHover={{ y: -4, borderColor: "rgb(var(--color-primary))", transition: { duration: 0.2, ease: EASE } }}
              className="p-6 rounded-xl border border-outline text-center transition-colors"
            >
              <div className="font-headline font-bold text-lg mb-1">{t.name}</div>
              <div className="text-xs text-on-surface-variant">{t.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={scaleIn}
              className="p-6 rounded-xl bg-surface border border-outline"
            >
              <div className={`font-headline text-3xl font-bold mb-2 ${s.color}`}>{s.value}</div>
              <div className="text-sm text-on-surface-variant">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
