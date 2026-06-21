"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function HindiFooter() {
  const { t } = useLang()
  const navLinks = t.nav.links

  return (
    <footer className="border-t border-foreground/10 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top row: logo + nav links */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-12"
        >
          {/* DD Logo */}
          <motion.div variants={fadeInUp}>
            <div className="font-display text-2xl select-none">
              <span className="text-[#f97316]">D</span>
              <span className="text-primary">D</span>
            </div>
            <p className="font-mono text-xs text-muted-foreground mt-1 tracking-widest">
              धमाका Digital
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            variants={fadeInUp}
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative group text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </motion.nav>
        </motion.div>

        {/* Middle row: tagline + WhatsApp */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <p className="text-sm text-muted-foreground max-w-sm">{t.footer.tagline}</p>

          <a
            href="https://wa.me/919632233776"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            💬 +91 96322 33776
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
          </a>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="border-t border-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <span className="font-mono text-xs text-muted-foreground">
            {t.footer.copyright}
          </span>

          <div className="flex gap-6">
            <a
              href="/"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Vera Level Digital
            </a>
            <a
              href="https://github.com/gkpandian-sudo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
