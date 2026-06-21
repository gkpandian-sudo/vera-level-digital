"use client"

import { motion } from "framer-motion"
import {
  fadeInUp,
  staggerContainer,
  inView,
} from "@/lib/motion"
import { useLang } from "@/lib/i18n"

const techs = [
  { name: "Next.js 15",    sub: "React Framework" },
  { name: "React.js",      sub: "UI Library"       },
  { name: "TypeScript",    sub: "Type Safety"      },
  { name: "Tailwind CSS",  sub: "Styling"          },
  { name: "Firebase",      sub: "Backend / DB"     },
  { name: "Framer Motion", sub: "Animations"       },
  { name: "Vercel",        sub: "Global CDN"       },
  { name: "GitHub",        sub: "Version Control"  },
]

// Duplicate for seamless marquee loop
const marqueeItems = [...techs, ...techs]

export default function TechStack() {
  const { t } = useLang()
  const ts = t.techStack

  return (
    <section className="py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Eyebrow */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-foreground/30" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {ts.eyebrow}
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          {...inView}
          variants={fadeInUp}
          className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-20"
        >
          {ts.headline}{" "}
          <span className="text-primary">{ts.headlineAccent}</span>
        </motion.h2>

        {/* Logo marquee strip */}
        <div className="border-y border-foreground/10 py-6 mb-20 overflow-hidden">
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 24,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((tech, i) => (
              <div key={`${tech.name}-${i}`} className="flex flex-col items-center gap-1 min-w-[120px]">
                <span className="font-mono text-sm font-medium text-foreground whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                  {tech.sub}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 border border-foreground/10 divide-x divide-foreground/10"
        >
          {ts.stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeInUp}
              className="p-8 lg:p-12"
            >
              <div className="text-5xl lg:text-6xl font-display text-foreground">
                {s.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
