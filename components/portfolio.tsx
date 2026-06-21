"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Portfolio() {
  const { t } = useLang()
  const p = t.portfolio

  return (
    <section id="portfolio" className="py-32 lg:py-40 border-t border-foreground/10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="mb-20"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-foreground/30" />
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              {p.eyebrow}
            </span>
          </motion.div>

          {/* Heading row */}
          <div className="flex items-end justify-between">
            <motion.h2
              variants={fadeInUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight"
            >
              {p.headline}
            </motion.h2>

            <motion.a
              variants={fadeInUp}
              href="https://github.com/gkpandian-sudo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border border-foreground/10 hover:border-foreground/30 px-4 py-2 rounded-sm"
            >
              <Github size={15} /> {p.viewGithub}
            </motion.a>
          </div>
        </motion.div>

        {/* Project cards */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {p.projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              className="hover-lift group border border-foreground/10 hover:border-foreground/30 transition-colors overflow-hidden rounded-sm flex flex-col"
            >
              {/* Icon area — acts as visual header */}
              <div className={`flex items-center justify-center h-40 text-5xl ${project.color} group-hover:scale-105 transition-transform duration-500`}>
                {project.icon}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category tag */}
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  {project.segment}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl mt-2">
                  {project.title}
                </h3>

                {/* Description */}
                {project.desc && (
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 border border-foreground/10 rounded-sm text-xs text-muted-foreground font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-4 pt-4 border-t border-foreground/10 flex items-center justify-between">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 font-mono"
                  >
                    <ExternalLink size={13} /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile GitHub link */}
        <motion.div {...inView} variants={fadeInUp} className="mt-10 text-center md:hidden">
          <a
            href="https://github.com/gkpandian-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border border-foreground/10 hover:border-foreground/30 px-6 py-3 rounded-sm"
          >
            <Github size={15} /> {p.viewGithub}
          </a>
        </motion.div>

      </div>
    </section>
  )
}
