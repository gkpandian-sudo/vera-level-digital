"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

// ── Inline SVG visuals — one per service row ──────────────────────────

function WebSvg() {
  return (
    <svg viewBox="0 0 200 160" className="w-32 h-24 opacity-60">
      <rect x="10" y="10" width="180" height="140" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="10" y1="35" x2="190" y2="35" stroke="currentColor" strokeWidth="1"/>
      <circle cx="25" cy="22" r="4" fill="currentColor" opacity="0.4"/>
      <circle cx="40" cy="22" r="4" fill="currentColor" opacity="0.4"/>
      <circle cx="55" cy="22" r="4" fill="currentColor" opacity="0.4"/>
      <rect x="25" y="50" width="60" height="6" rx="2" fill="currentColor" opacity="0.3"/>
      <rect x="25" y="65" width="100" height="4" rx="2" fill="currentColor" opacity="0.2"/>
      <rect x="25" y="78" width="80" height="4" rx="2" fill="currentColor" opacity="0.2"/>
      <text x="120" y="110" fontFamily="monospace" fontSize="28" fill="currentColor" opacity="0.15">{"</>"}</text>
    </svg>
  )
}

function EcommerceSvg() {
  return (
    <svg viewBox="0 0 200 160" className="w-32 h-24 opacity-60">
      <path d="M60 60 L50 130 L150 130 L140 60 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M75 60 Q75 40 100 40 Q125 40 125 60" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="85" y="90" width="30" height="4" rx="2" fill="currentColor" opacity="0.3"/>
      <rect x="90" y="103" width="20" height="4" rx="2" fill="currentColor" opacity="0.2"/>
      <rect x="155" y="50" width="8" height="20" rx="1" fill="currentColor" opacity="0.3">
        <animate attributeName="height" values="20;30;20" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="y" values="50;40;50" dur="1.5s" repeatCount="indefinite"/>
      </rect>
      <rect x="168" y="45" width="8" height="25" rx="1" fill="currentColor" opacity="0.5">
        <animate attributeName="height" values="25;35;25" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
        <animate attributeName="y" values="45;35;45" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
      </rect>
      <rect x="181" y="40" width="8" height="30" rx="1" fill="currentColor" opacity="0.7">
        <animate attributeName="height" values="30;40;30" dur="1.5s" begin="0.6s" repeatCount="indefinite"/>
        <animate attributeName="y" values="40;30;40" dur="1.5s" begin="0.6s" repeatCount="indefinite"/>
      </rect>
    </svg>
  )
}

function MobileSvg() {
  return (
    <svg viewBox="0 0 200 160" className="w-32 h-24 opacity-60">
      <rect x="70" y="10" width="60" height="100" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="78" y="20" width="44" height="70" rx="2" fill="currentColor" opacity="0.1"/>
      <circle cx="100" cy="120" r="5" fill="currentColor" opacity="0.4"/>
      <ellipse cx="100" cy="80" rx="85" ry="50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" values="0 100 80;360 100 80" dur="8s" repeatCount="indefinite"/>
      </ellipse>
      <circle cx="185" cy="80" r="4" fill="currentColor" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" values="0 100 80;360 100 80" dur="8s" repeatCount="indefinite"/>
      </circle>
    </svg>
  )
}

function AiSvg() {
  return (
    <svg viewBox="0 0 200 160" className="w-32 h-24 opacity-60">
      <circle cx="30" cy="50" r="5" fill="currentColor" opacity="0.5"/>
      <circle cx="30" cy="80" r="5" fill="currentColor" opacity="0.5"/>
      <circle cx="30" cy="110" r="5" fill="currentColor" opacity="0.5"/>
      <circle cx="100" cy="40" r="5" fill="currentColor" opacity="0.6"/>
      <circle cx="100" cy="65" r="5" fill="currentColor" opacity="0.6"/>
      <circle cx="100" cy="90" r="5" fill="currentColor" opacity="0.6"/>
      <circle cx="100" cy="115" r="5" fill="currentColor" opacity="0.6"/>
      <circle cx="170" cy="60" r="5" fill="currentColor" opacity="0.5"/>
      <circle cx="170" cy="100" r="5" fill="currentColor" opacity="0.5"/>
      <line x1="35" y1="50" x2="95" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <line x1="35" y1="50" x2="95" y2="65" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <line x1="35" y1="80" x2="95" y2="65" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <line x1="35" y1="80" x2="95" y2="90" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <line x1="35" y1="110" x2="95" y2="90" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <line x1="35" y1="110" x2="95" y2="115" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <line x1="105" y1="40" x2="165" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <line x1="105" y1="65" x2="165" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <line x1="105" y1="90" x2="165" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <line x1="105" y1="115" x2="165" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    </svg>
  )
}

function SeoSvg() {
  return (
    <svg viewBox="0 0 200 160" className="w-32 h-24 opacity-60">
      <line x1="30" y1="20" x2="30" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      <line x1="30" y1="130" x2="180" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      <polyline points="30,110 70,90 110,65 150,40 180,25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="30" cy="110" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="70" cy="90" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="110" cy="65" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="150" cy="40" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="180" cy="25" r="3" fill="currentColor" opacity="0.8">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
      </circle>
    </svg>
  )
}

function MaintenanceSvg() {
  return (
    <svg viewBox="0 0 200 160" className="w-32 h-24 opacity-60">
      <g transform="translate(100,80)">
        <animateTransform attributeName="transform" type="rotate" additive="sum" values="0 0 0;360 0 0" dur="10s" repeatCount="indefinite"/>
        <circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="0" cy="0" r="12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="-6" y="-38" width="12" height="16" rx="2" fill="currentColor" opacity="0.4"/>
        <rect x="-6" y="22" width="12" height="16" rx="2" fill="currentColor" opacity="0.4"/>
        <rect x="-38" y="-6" width="16" height="12" rx="2" fill="currentColor" opacity="0.4"/>
        <rect x="22" y="-6" width="16" height="12" rx="2" fill="currentColor" opacity="0.4"/>
      </g>
      <path d="M150 30 Q170 30 170 50 Q170 70 150 70" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 2"/>
      <polyline points="145,65 152,72 145,79" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  )
}

// Map SVG components by service index (0-based)
const SERVICE_SVGS = [WebSvg, EcommerceSvg, MobileSvg, AiSvg, SeoSvg, MaintenanceSvg]

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="py-32 lg:py-40 px-6 border-t border-foreground/10">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-foreground/30" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Our Services
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          {...inView}
          variants={fadeInUp}
          className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-20"
        >
          {s.headline}
        </motion.h2>

        {/* Service rows */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="border-t border-foreground/10"
        >
          {s.items.map((item, i) => {
            const SvgComponent = SERVICE_SVGS[i % SERVICE_SVGS.length]
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="border-b border-foreground/10 py-12 lg:py-20 grid lg:grid-cols-[1fr_auto] gap-8 items-center group"
              >
                {/* Left: number + title + description */}
                <div className="space-y-4">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl lg:text-4xl group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                    {item.body}
                  </p>
                </div>

                {/* Right: animated SVG visual */}
                <div className="hidden lg:flex items-center justify-end text-foreground/70">
                  <SvgComponent />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
