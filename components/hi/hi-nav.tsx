// -- Dhamaka Digital Nav — /hi page variant --
// HI | EN toggle only. Logo = "DD" in Dhamaka Digital colours.
// Language state lives in HindiLangProvider (set in app/hi/layout.tsx).

"use client"

import { motion } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useState } from "react"
import { useTheme } from "@/lib/theme"
import { useLang, type Lang } from "@/lib/i18n"
import { EASE } from "@/lib/motion"

const WA_CTA = "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

const langOptions: { code: Lang; label: string }[] = [
  { code: "hi", label: "HI" },
  { code: "en", label: "EN" },
]

export default function HindiNav() {
  const { theme, toggle } = useTheme()
  const { lang, setLang, t } = useLang()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="fixed top-0 left-0 right-0 z-50 glass bg-surface/80 border-b border-outline"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Dhamaka Digital logo */}
        <motion.a
          href="/hi"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="flex-shrink-0 flex items-center gap-2"
        >
          <span className="font-headline text-2xl font-bold tracking-tight">
            <span className="text-[#f97316]">D</span>
            <span className="text-primary">D</span>
          </span>
          <span className="hidden sm:block text-[11px] font-semibold text-on-surface-variant tracking-wide">
            धमाका Digital
          </span>
        </motion.a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-8 items-center text-sm font-medium">
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-on-surface-variant hover:text-on-surface transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">

          {/* HI | EN switcher */}
          <div className="hidden md:flex items-center gap-0.5 rounded border border-outline overflow-hidden">
            {langOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLang(opt.code)}
                className={[
                  "px-2.5 py-1 text-[11px] font-bold tracking-widest transition-colors",
                  lang === opt.code
                    ? "bg-primary text-white"
                    : "hover:bg-surface-variant text-on-surface-variant",
                ].join(" ")}
                aria-label={`Switch to ${opt.label}`}
              >
                {opt.label}
              </button>
            ))}
          </div>

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

          {/* CTA — orange accent for Dhamaka brand */}
          <a
            href={WA_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#f97316] text-white px-5 py-2 rounded text-sm font-bold hover:opacity-90 transition-opacity"
          >
            {t.nav.cta}
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
          {t.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-on-surface-variant hover:text-on-surface text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* Mobile language switcher */}
          <div className="flex items-center gap-1 pt-1">
            <span className="text-[10px] text-on-surface-variant uppercase tracking-widest mr-1">Lang:</span>
            {langOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLang(opt.code)}
                className={[
                  "px-2.5 py-1 text-[11px] font-bold rounded border transition-colors",
                  lang === opt.code
                    ? "bg-primary text-white border-primary"
                    : "border-outline text-on-surface-variant hover:bg-surface-variant",
                ].join(" ")}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <a
            href={WA_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-[#f97316] text-white px-5 py-3 rounded text-sm font-bold text-center hover:opacity-90 transition-opacity"
          >
            {t.nav.cta}
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
