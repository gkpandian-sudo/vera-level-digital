"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { fadeInUp, staggerContainer, inView, EASE } from "@/lib/motion"

type Item = { q: string; a: string }

const items: Item[] = [
  {
    q: "ஏன் WordPress பயன்படுத்தக்கூடாது?",
    a: "WordPress மெதுவானது மற்றும் அடிக்கடி பாதுகாப்பு அப்டேட்கள் தேவைப்படும். எங்கள் Next.js தொழில்நுட்பம் 10 மடங்கு வேகமானது மற்றும் hacking அபாயம் இல்லாதது. மாதாந்திர plugin கட்டணங்களும் இல்லை.",
  },
  {
    q: "இணையதளம் எவ்வளவு நேரத்தில் தயாராகும்?",
    a: "Digital Visiting Card: 5 நாட்கள். Business Website: 12 நாட்கள். Revenue Engine: 14-30 நாட்கள். WhatsApp-ல் தகவல் அனுப்பியவுடன் work தொடங்கும்.",
  },
  {
    q: "Payment செய்வதற்கு முன் draft பார்க்கலாமா?",
    a: "நிச்சயமாக! வணிகப் பெயரை WhatsApp-ல் அனுப்புங்கள் — 24 மணி நேரத்தில் இலவச homepage mock அனுப்புகிறோம். திருப்தியாக இருந்தால் மட்டுமே payment.",
  },
  {
    q: "Result பிடிக்கவில்லை என்றால்?",
    a: "ஒவ்வொரு package-லும் revision rounds உள்ளது. நீங்கள் 100% satisfied ஆகும் வரை changes செய்கிறோம். Business Website package-ல் launch-க்கு பிறகு 30 நாள் support உள்ளது.",
  },
  {
    q: "இணையதளை நானே update செய்யலாமா?",
    a: "முழு source code GitHub-ல் உங்களுக்கு சொந்தமாக இருக்கும். எந்த நேரமும் changes செய்யலாம். Basic editing guide-ம் தருகிறோம். அல்லது WhatsApp-ல் சொல்லுங்கள் — நாங்கள் செய்கிறோம்.",
  },
  {
    q: "SEO செய்யப்படுமா?",
    a: "நிச்சயமாக! Business Website மற்றும் Revenue Engine package-ல் full SEO, meta tags, Google Analytics மற்றும் Search Console setup included.",
  },
  {
    q: "Hosting மற்றும் domain செலவு எவ்வளவு?",
    a: "Vercel-ல் hosting இலவசம். மாதாந்திர கட்டணம் இல்லை. Domain பெயர் மட்டும் ஆண்டுக்கு ~₹800-1,500 செலவாகும்.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 border-t border-outline px-6">
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <motion.h2
          {...inView}
          variants={fadeInUp}
          className="font-headline text-3xl font-bold text-center mb-12 tamil-text"
        >
          அடிக்கடி கேட்கப்படும் கேள்விகள்
        </motion.h2>

        {/* Accordion */}
        <motion.div {...inView} variants={staggerContainer} className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={item.q}
                variants={fadeInUp}
                className="rounded-xl border border-outline overflow-hidden"
              >
                {/* Question row */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold hover:bg-surface-variant/30 transition-colors"
                >
                  <span className="tamil-text">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="shrink-0 text-on-surface-variant"
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>

                {/* Animated answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-on-surface-variant leading-relaxed tamil-text">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
