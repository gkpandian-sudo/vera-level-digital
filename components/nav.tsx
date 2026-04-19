"use client"

import { motion } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useState } from "react"
import { useTheme } from "@/lib/theme"
import { EASE } from "@/lib/motion"

const links = [
  { label: "Services",   href: "#services"   },
  { label: "Why Us",     href: "#compare"    },
  { label: "Industries", href: "#industries" },
  { label: "Pricing",    href: "#pricing"    },
  { label: "Portfolio",  href: "#portfolio"  },
]

const WA_CTA = "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

export default function Nav() {
  const { theme, toggle } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    // Slide down from above on initial mount
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="fixed top-0 left-0 right-0 z-50 glass bg-surface/80 border-b border-outline"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="flex-shrink-0"
        >
          <span className="font-headline text-2xl font-bold tracking-tight">
            <span className="text-primary">V</span>
            <span className="text-on-surface">L</span>
            <span className="text-[#f97316]">D</span>
          </span>
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-on-surface-variant hover:text-on-surface transition-colors tamil-text"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded border border-outline hover:bg-surface-variant transition-colors"
          >
            {theme === "dark"
              ? <Sun  size={18} className="text-on-surface-variant" />
              : <Moon size={18} className="text-on-surface-variant" />}
          </motion.button>

          {/* CTA */}
          <a
            href={WA_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden border-t border-outline bg-surface px-6 pb-6 pt-4 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-on-surface-variant hover:text-on-surface text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-primary text-white px-5 py-3 rounded text-sm font-bold text-center hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
