"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { fadeInUp, scaleIn, staggerContainer, inView, EASE } from "@/lib/motion"

type Tier = {
  name:     string
  price:    string
  timeline: string
  features: string[]
  cta:      string
  waMsg:    string
  popular?: boolean
}

const tiers: Tier[] = [
  {
    name:     "Digital Visiting Card",
    price:    "₹12,000",
    timeline: "Fixed Price · 5 நாளில் Ready",
    features: [
      "1-page custom Next.js website",
      "WhatsApp click-to-chat CTA",
      "Google Maps embed",
      "Basic SEO (Google indexed)",
      "Mobile-first, sub-1s load",
      "Vercel hosting (free, indefinite)",
      "2 revisions",
    ],
    cta:   "Choose Plan",
    waMsg: "Hello%2C%20I%27m%20interested%20in%20the%20Digital%20Visiting%20Card%20package.",
  },
  {
    name:     "Business Website",
    price:    "₹32,000",
    timeline: "Most Popular · 12 நாளில் Ready",
    features: [
      "4-6 pages (Home, Services, About, Contact, Gallery, Testimonials)",
      "Photo/video gallery with lightbox",
      "WhatsApp enquiry form with auto-response",
      "Full SEO — Google Analytics + Search Console",
      "Google Business Profile optimisation",
      "3 revisions + 30-day post-launch support",
    ],
    cta:     "Start Now",
    waMsg:   "Hello%2C%20I%27m%20interested%20in%20the%20Business%20Website%20package.",
    popular: true,
  },
  {
    name:     "Revenue Engine",
    price:    "₹70,000+",
    timeline: "Custom Scope · 14-30 நாட்கள்",
    features: [
      "Online ordering / booking system",
      "Admin dashboard (orders, bookings, reports)",
      "WhatsApp bot integration",
      "Razorpay / UPI payment gateway",
      "Unlimited revisions during build",
      "60-day post-launch support",
    ],
    cta:   "Get a Quote",
    waMsg: "Hello%2C%20I%27d%20like%20to%20discuss%20a%20Revenue%20Engine%20project.",
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-surface-variant/10 px-6 border-t border-outline">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div {...inView} variants={staggerContainer} className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="font-headline text-4xl font-bold mb-4">
            Transparent{" "}
            <span className="bg-primary px-2 text-white">Pricing</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-on-surface-variant">
            No hidden fees. One-time payment only.
          </motion.p>
        </motion.div>

        {/* Tier cards */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={tier.popular ? scaleIn : fadeInUp}
              whileHover={
                tier.popular
                  ? undefined
                  : { y: -6, transition: { duration: 0.25, ease: EASE } }
              }
              className={[
                "bg-surface rounded-xl p-8 flex flex-col relative",
                tier.popular
                  ? "border-2 border-primary shadow-[0_0_40px_rgba(0,98,255,0.15)]"
                  : "border border-outline",
              ].join(" ")}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-4 py-1 rounded-full font-black tracking-widest uppercase">
                  Popular
                </div>
              )}

              <h3 className="font-headline text-xl font-bold mb-2">{tier.name}</h3>
              <div className="font-headline text-3xl font-bold mb-1">{tier.price}</div>
              <div className="text-xs text-on-surface-variant mb-6 tamil-text">{tier.timeline}</div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm tamil-text">
                    <Check size={15} className="text-primary shrink-0" />
                    <span className={tier.popular ? "" : "text-on-surface-variant"}>{f}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={`https://wa.me/919632233776?text=${tier.waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={[
                  "w-full py-3 rounded-lg font-bold text-center block transition-opacity",
                  tier.popular
                    ? "bg-primary text-white hover:opacity-90"
                    : "border border-outline hover:bg-surface-variant",
                ].join(" ")}
              >
                {tier.cta}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          {...inView}
          variants={fadeInUp}
          className="text-center text-[10px] text-on-surface-variant mt-10 uppercase tracking-widest"
        >
          Prices may vary by project scope. One-time payment only.
        </motion.p>

      </div>
    </section>
  )
}
