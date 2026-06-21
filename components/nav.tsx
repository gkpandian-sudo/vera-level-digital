"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "@/lib/theme"
import { useLang, type Lang } from "@/lib/i18n"

const WA_CTA = "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

const langOptions: { code: Lang; label: string }[] = [
  { code: "ta", label: "TA" },
  { code: "hi", label: "HI" },
  { code: "en", label: "EN" },
]

export default function Nav() {
  const { theme, toggle } = useTheme()
  const { lang, setLang, t } = useLang()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || mobileOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-7xl"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 lg:px-8 transition-all duration-500 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <span
              className={`font-display tracking-tight transition-all duration-500 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              <span className="text-primary">V</span>
              <span className="text-foreground">L</span>
              <span className="text-[#f97316]">D</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-10 items-center text-sm">
            {t.nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center border border-foreground/10 rounded overflow-hidden">
              {langOptions.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => setLang(opt.code)}
                  className={[
                    "px-2.5 py-1 font-mono text-[11px] tracking-widest transition-colors",
                    lang === opt.code
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-foreground/5",
                  ].join(" ")}
                  aria-label={`Switch to ${opt.label}`}
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
              className="bg-primary text-white rounded-full px-6 h-9 text-sm font-medium inline-flex items-center hover:opacity-90 transition-opacity"
            >
              {t.nav.cta}
            </a>
          </div>

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

      {/* Mobile full-screen overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-8">
            {t.nav.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                  mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: mobileOpen ? `${i * 75}ms` : "0ms" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div
            className={`flex items-center gap-3 pt-8 border-t border-foreground/10 transition-all duration-500 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mobileOpen ? "300ms" : "0ms" }}
          >
            <div className="flex items-center border border-foreground/10 rounded overflow-hidden">
              {langOptions.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => setLang(opt.code)}
                  className={[
                    "px-3 py-2 font-mono text-sm tracking-widest transition-colors",
                    lang === opt.code ? "bg-primary text-white" : "text-muted-foreground",
                  ].join(" ")}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 border border-foreground/10 rounded transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href={WA_CTA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex-1 bg-primary text-white rounded-full h-12 text-sm font-medium inline-flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
