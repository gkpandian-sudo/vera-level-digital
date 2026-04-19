"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { fadeInUp, staggerContainer, inView, EASE } from "@/lib/motion"

type Project = {
  icon:    string
  color:   string          // Tailwind bg + border classes for the icon badge
  title:   string
  desc:    string
  tags:    string[]
  segment: string
  href:    string
}

const projects: Project[] = [
  {
    icon:    "🎨",
    color:   "bg-primary/10 border-primary/20",
    title:   "Krima Arts",
    desc:    "ஒரு கலை வணிகத்திற்காக உருவாக்கப்பட்ட creative arts showcase இணையதளம்.",
    tags:    ["HTML", "CSS"],
    segment: "Creative / Arts",
    href:    "https://github.com/gkpandian-sudo/krima_arts",
  },
  {
    icon:    "📧",
    color:   "bg-success/10 border-success/20",
    title:   "Gmail Cleanup",
    desc:    "Unread Email Dashboard v5Gmail-ல் உள்ள அனைத்து unread threads-ஐயும் bulk-ஆக read ஆக mark செய்யும் Google Apps Script.",
    tags:    ["JavaScript", "Google Apps Script"],
    segment: "Automation / Productivity",
    href:    "https://github.com/gkpandian-sudo/gmail-cleanup-",
  },
  {
    icon:    "👤",
    color:   "bg-[#F59E0B]/10 border-[#F59E0B]/20",
    title:   "Pandian",
    desc:    "தனிப்பட்ட portfolio மற்றும் profile showcasepersonal branding project.",
    tags:    ["HTML", "Personal Project"],
    segment: "Portfolio",
    href:    "https://github.com/gkpandian-sudo/pandian",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <motion.span
              variants={fadeInUp}
              className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block"
            >
              Recent Work
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-headline text-4xl font-bold">
              Our Work
            </motion.h2>
          </div>

          <motion.a
            variants={fadeInUp}
            href="https://github.com/gkpandian-sudo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="hidden md:flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors border border-outline px-4 py-2 rounded-lg hover:border-primary"
          >
            <Github size={15} /> View on GitHub
          </motion.a>
        </motion.div>

        {/* Project cards */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: EASE } }}
              className="rounded-xl border border-outline hover:border-primary transition-colors glass bg-surface-variant/10 flex flex-col overflow-hidden"
            >
              {/* Card body */}
              <div className="p-8 flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center text-xl ${p.color}`}>
                    {p.icon}
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant hover:text-primary transition-colors"
                    aria-label={`Open ${p.title} on GitHub`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <h3 className="font-headline text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6 tamil-text">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-surface border border-outline rounded text-xs text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="px-8 py-4 border-t border-outline bg-surface-variant/20 flex items-center justify-between">
                <span className="text-xs text-on-surface-variant">{p.segment}</span>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline flex items-center gap-1 font-medium"
                >
                  GitHub →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile GitHub link */}
        <motion.div {...inView} variants={fadeInUp} className="mt-8 text-center md:hidden">
          <a
            href="https://github.com/gkpandian-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors border border-outline px-6 py-3 rounded-lg hover:border-primary"
          >
            <Github size={15} /> View all projects on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  )
}
