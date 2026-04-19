"use client"

import { motion } from "framer-motion"
import { heroContainer, fadeInRight, fadeInUp, scaleIn, EASE } from "@/lib/motion"

const WA_LINK =
  "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

const badges = [
  "Free Consultation",
  "Ready in 7-14 Days",
  "Starting ₹10,000",
]

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 min-h-[92vh] flex items-center">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* ── Left: text ── */}
        <motion.div
          className="flex flex-col justify-center"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Blazing Fast Performance
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-headline text-4xl lg:text-5xl font-bold leading-[1.2] mb-5 tamil-text"
          >
            இணையம் மூலம் அதிக{" "}
            <span className="text-primary">வாடிக்கையாளர்களை</span>{" "}
            பெறுங்கள்
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeInUp}
            className="text-base text-on-surface-variant max-w-lg mb-7 tamil-text leading-relaxed"
          >
            பெரும்பாலான வணிக உரிமையாளர்களுக்கு இணையதளம் உருவாக்க நேரமோ
            தொழில்நுட்ப அறிவோ இல்லை. WhatsApp‑ல் உங்கள் வணிகத்தைப் பற்றி
            சொல்லுங்கள்வடிவமைப்பு முதல் இணையத்தில் தொடங்குவது வரை நாங்கள்
            செய்கிறோம்.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-7">
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="px-7 py-3.5 rounded bg-primary text-white font-bold hover:opacity-90 transition-opacity flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.547 4.14 1.587 5.946L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.002-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004c-1.774 0-3.513-.474-5.03-1.37l-.361-.213-3.741.977.998-3.645-.235-.374a9.86 9.86 0 01-1.516-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.881 9.884zm5.422-7.403c-.297-.148-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.148-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.148-1.255-.461-2.39-1.462-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.15-.173.198-.296.297-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Free Consultation
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="px-7 py-3.5 rounded border border-outline hover:bg-surface-variant font-bold transition-colors text-sm"
            >
              View Our Work
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 text-sm">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-2 text-on-surface-variant">
                <span className="text-success">✓</span>
                {b}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: browser mockup ── */}
        <motion.div
          className="relative hidden lg:block"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
        >
          {/* Browser window */}
          <div className="rounded-2xl overflow-hidden border border-outline shadow-2xl bg-surface">

            {/* Browser chrome */}
            <div className="bg-surface-variant border-b border-outline px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-surface rounded-md px-3 py-1 text-xs text-on-surface-variant flex items-center gap-2">
                <svg className="w-3 h-3 text-success shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                veralevel.in
              </div>
            </div>

            {/* Website content */}
            <div className="bg-surface">

              {/* Mock nav */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-outline">
                <span className="text-[9px] font-black text-primary tracking-tight">VERA LEVEL</span>
                <div className="flex items-center gap-3">
                  {["Services","Pricing","Portfolio"].map(l => (
                    <span key={l} className="text-[7px] text-on-surface-variant font-medium">{l}</span>
                  ))}
                  <span className="text-[7px] bg-primary text-white px-2 py-0.5 rounded font-bold">Get Started</span>
                </div>
              </div>

              {/* Mock hero */}
              <div className="px-4 pt-4 pb-3 flex gap-3 items-center">
                <div className="flex-1">
                  <div className="text-[7px] text-primary font-bold tracking-widest uppercase mb-1.5">⚡ Blazing Fast Performance</div>
                  <div className="text-[11px] font-black text-on-surface leading-tight mb-1.5">
                    Get More Customers<br />
                    <span className="text-primary">Through the Web</span>
                  </div>
                  <div className="text-[7px] text-on-surface-variant leading-relaxed mb-2.5 max-w-[140px]">
                    WhatsApp us about your business. We handle design, code and launch.
                  </div>
                  <div className="flex gap-1.5 mb-2">
                    <span className="text-[7px] bg-primary text-white px-2.5 py-1 rounded font-bold">💬 Free Consultation</span>
                    <span className="text-[7px] border border-outline text-on-surface-variant px-2.5 py-1 rounded font-medium">Our Work</span>
                  </div>
                  <div className="flex gap-2">
                    {["✓ Free Consult","✓ 7-14 Days","✓ From ₹10k"].map(b => (
                      <span key={b} className="text-[6px] text-on-surface-variant">{b}</span>
                    ))}
                  </div>
                </div>
                {/* Mini right column */}
                <div className="w-[72px] shrink-0">
                  <div className="rounded-lg overflow-hidden border border-outline bg-surface-variant aspect-square flex items-center justify-center">
                    <div className="text-center p-1">
                      <div className="text-[18px] font-black text-success leading-none">99+</div>
                      <div className="text-[5.5px] text-on-surface-variant uppercase tracking-wider font-semibold">PageSpeed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mock services strip */}
              <div className="px-4 pb-3">
                <div className="text-[7px] font-bold text-on-surface mb-2 uppercase tracking-widest">Website & Digital Services</div>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { icon:"🌐", title:"Business Website",  color:"bg-primary/10"  },
                    { icon:"🛍️", title:"Online Store",      color:"bg-success/10"  },
                    { icon:"🤖", title:"Automation & Bots", color:"bg-gold/10"     },
                  ].map(s => (
                    <div key={s.title} className={`${s.color} border border-outline rounded-lg p-2`}>
                      <div className="text-[10px] mb-1">{s.icon}</div>
                      <div className="text-[6.5px] font-bold text-on-surface leading-tight">{s.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mock stats row */}
              <div className="flex border-t border-outline">
                {[
                  { val:"< 1s",  label:"Load Time",      bg:"bg-primary/5"  },
                  { val:"99+",   label:"Lighthouse",     bg:"bg-success/5"  },
                  { val:"100%",  label:"Custom Built",   bg:"bg-gold/5"     },
                ].map(s => (
                  <div key={s.label} className={`flex-1 ${s.bg} px-3 py-2 text-center border-r last:border-r-0 border-outline`}>
                    <div className="text-[9px] font-black text-on-surface">{s.val}</div>
                    <div className="text-[5.5px] text-on-surface-variant uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Floating PageSpeed badge */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="absolute -bottom-4 -left-4 glass bg-surface/95 border border-outline px-4 py-3 rounded-xl shadow-xl"
          >
            <div className="font-headline text-3xl font-bold text-success">99+</div>
            <div className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-widest mt-0.5">
              PageSpeed
            </div>
          </motion.div>

          {/* Floating mobile badge */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="absolute -top-4 -right-4 glass bg-surface/95 border border-outline px-4 py-3 rounded-xl shadow-xl flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
            </svg>
            <div>
              <div className="text-xs font-bold text-on-surface">Mobile First</div>
              <div className="text-[10px] text-on-surface-variant">100% Responsive</div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
