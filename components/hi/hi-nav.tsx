"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "@/lib/theme"
import { useLang, type Lang } from "@/lib/i18n"

const WA_CTA = "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

const langOptions: { code: Lang; label: string }[] = [
  { code: "hi", label: "HI" },
  { code: "en", label: "EN" },
]

export default function HindiNav() {
  const { theme, toggle } = useTheme()
  const { lang, setLang, t } = useLang()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        isScrolled ? "top-4 px-4" : ""
      }`}
    >
      <nav
        className={`w-full transition-all duration-500 ${
          isScrolled
            ? "max-w-[1200px] bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg px-6 h-14"
            : "max-w-7xl px-6 lg:px-12 h-20 bg-transparent"
        } flex items-center justify-between`}
      >
        {/* DD logo */}
        <a href="/hi" className="flex items-center gap-2 shrink-0">
          <span className="font-display text-2xl select-none">
            <span className="text-[#f97316]">D</span>
            <span className="text-primary">D</span>
          </span>
          <span className="hidden sm:block text-xs font-mono text-muted-foreground tracking-widest">
            धमाका Digital
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative group text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* HI | EN switcher */}
          <div className="hidden md:flex items-center border border-foreground/10 rounded overflow-hidden">
            {langOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLang(opt.code)}
                className={`px-2.5 py-1 font-mono text-[11px] tracking-widest transition-colors ${
                  lang === opt.code
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-foreground/5"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded border border-foreground/10 hover:bg-foreground/5 transition-colors"
          >
            {theme === "dark"
              ? <Sun size={16} className="text-muted-foreground" />
              : <Moon size={16} className="text-muted-foreground" />}
          </button>

          {/* CTA */}
          <a
            href={WA_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center bg-primary text-white rounded-full px-6 h-9 text-sm font-medium hover:opacity-90 transition-opacity"
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
      </nav>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-background z-40 flex flex-col px-6 py-8">
          <div className="flex justify-between items-center mb-12">
            <span className="font-display text-2xl">
              <span className="text-[#f97316]">D</span>
              <span className="text-primary">D</span>
            </span>
            <button onClick={() => setMobileOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {t.nav.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-5xl py-3 border-b border-foreground/10 hover:text-primary transition-colors"
                style={{ transitionDelay: `${i * 75}ms` }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex items-center gap-3 flex-wrap">
            {langOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLang(opt.code)}
                className={`px-3 py-1.5 font-mono text-xs tracking-widest border rounded transition-colors ${
                  lang === opt.code
                    ? "bg-primary text-white border-primary"
                    : "border-foreground/20 text-muted-foreground"
                }`}
              >
                {opt.label}
              </button>
            ))}
            <button onClick={toggle} className="p-2 border border-foreground/10 rounded">
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href={WA_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white rounded-full px-6 py-2 text-sm font-medium"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
