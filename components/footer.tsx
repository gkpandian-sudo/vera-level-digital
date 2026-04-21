"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"

const navLinks = [
  { label: "Services",  href: "#services"   },
  { label: "Pricing",   href: "#pricing"    },
  { label: "Portfolio", href: "#portfolio"  },
  { label: "GitHub",    href: "https://github.com/gkpandian-sudo", external: true },
]

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-outline bg-surface text-sm">
      <div className="max-w-7xl mx-auto">

        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp}>
            <div className="font-headline text-lg font-bold mb-6">Vera Level Digital</div>
            <p className="text-on-surface-variant leading-relaxed tamil-text">
              Vera Level web solutions for namma Chennai businesses.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold uppercase tracking-widest text-[10px] text-primary mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="text-on-surface-variant hover:text-on-surface transition-colors tamil-text"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold uppercase tracking-widest text-[10px] text-primary mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/919632233776"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors"
              >
                💬 +91 96322 33776
              </a>
              <a
                href="mailto:hello@veraleveldigital.in"
                className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors"
              >
                ✉️ hello@veraleveldigital.in
              </a>
              <a
                href="https://github.com/gkpandian-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors"
              >
                <Github size={14} /> github.com/gkpandian-sudo
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="mt-16 pt-8 border-t border-outline text-center text-on-surface-variant text-xs tamil-text"
        >
          © 2025 Vera Level Digital. All rights reserved.
        </motion.div>

      </div>
    </footer>
  )
}
