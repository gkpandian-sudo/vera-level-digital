"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView, EASE } from "@/lib/motion"

const WA_LINK =
  "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

const services = [
  {
    icon: "🌐",
    title: "Business Website",
    body:  "Landing page, company profile, மற்றும் கடை இணையதளங்கள்தொழில்முறை தோற்றத்துடன் புதிய வாடிக்கையாளர்களை ஆன்லைனில் ஈர்க்கும்.",
  },
  {
    icon: "📅",
    title: "Online Booking",
    body:  "ஹோட்டல், சலவை, மற்றும் சேவை முன்பதிவுகள்தானியங்கி, real-time, உங்கள் phone-ல் இருந்தே நிர்வகிக்கலாம்.",
  },
  {
    icon: "🛍️",
    title: "Online Store",
    body:  "டிஜிட்டல் தயாரிப்பு catalog, shopping cart, மற்றும் UPI / bank transfer payment ஒருங்கிணைப்பு.",
  },
  {
    icon: "⚙️",
    title: "Custom Web App",
    body:  "Business dashboard, sales report, queue systemஉங்கள் குறிப்பிட்ட வணிகத் தேவைகளுக்கேற்ப உருவாக்கப்படும்.",
  },
  {
    icon: "🤖",
    title: "Automation & Bots",
    body:  "WhatsApp bots, தானியங்கி notifications, மற்றும் system integrationsநேரத்தையும் செயல்பாட்டு செலவையும் குறைக்கும்.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div {...inView} variants={staggerContainer} className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="font-headline text-4xl font-bold mb-4">
            Website &amp; Digital Services
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-on-surface-variant tamil-text">
            நவீன தொழில்நுட்பங்களுடன் உருவாக்கப்பட்ட உயர்தர தீர்வுகள்.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: EASE } }}
              className="p-8 rounded-xl border border-outline hover:border-primary transition-colors"
            >
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="font-headline text-xl font-bold mb-3 tamil-text">{s.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed tamil-text">{s.body}</p>
            </motion.div>
          ))}

          {/* WhatsApp CTA card */}
          <motion.div
            variants={fadeInUp}
            className="bg-primary/5 p-8 rounded-xl border border-primary/30 flex flex-col justify-center items-center text-center"
          >
            <h3 className="font-headline text-xl font-bold mb-4">Have a Custom Project?</h3>
            <p className="text-sm text-on-surface-variant mb-6 tamil-text">
              உங்கள் வணிகத்தைப் பற்றி சொல்லுங்கள், சிறந்த தீர்வு தருகிறோம்.
            </p>
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              💬 Chat on WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
