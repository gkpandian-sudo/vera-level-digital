"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Pricing() {
  const { t } = useLang()
  const p = t.pricing

  return (
    <section id="pricing" className="py-32 lg:py-40 border-t border-foreground/10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div {...inView} variants={staggerContainer} className="mb-20">
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-foreground/30" />
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Pricing
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight"
          >
            {p.headline}{" "}
            <span className="text-stroke">{p.headlineAccent}</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-muted-foreground max-w-xl"
          >
            {p.sub}
          </motion.p>
        </motion.div>

        {/* Pricing grid — gap-px on bg-foreground/10 creates thin divider lines */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-px bg-foreground/10"
        >
          {p.tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              variants={fadeInUp}
              className={[
                "bg-background flex flex-col p-8 lg:p-12 relative",
                tier.popular
                  ? "md:-my-4 md:py-16 border-2 border-primary"
                  : "",
              ].join(" ")}
            >
              {/* Most Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-8 px-3 py-1 bg-primary text-white text-xs font-mono uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              {/* Plan number */}
              <div className="font-mono text-xs text-muted-foreground mb-4">
                {String(idx + 1).padStart(2, "0")}
              </div>

              {/* Plan name */}
              <h3 className="font-display text-3xl text-foreground mt-2">
                {tier.name}
              </h3>

              {/* Timeline / description */}
              <p className="text-sm text-muted-foreground mt-2 mb-8">
                {tier.timeline}
              </p>

              {/* Price */}
              <div className="font-display text-5xl lg:text-6xl text-foreground mb-8 leading-none">
                {tier.price}
              </div>

              {/* Feature list */}
              <ul className="space-y-3 mb-10 flex-grow">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={15} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <motion.a
                href={`https://wa.me/919632233776?text=${tier.waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={[
                  "w-full py-4 text-center block font-mono text-sm tracking-wide transition-colors",
                  tier.popular
                    ? "bg-primary text-white hover:opacity-90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5",
                ].join(" ")}
              >
                {tier.cta}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.p
          {...inView}
          variants={fadeInUp}
          className="text-center text-[10px] text-muted-foreground mt-10 uppercase tracking-widest font-mono"
        >
          {p.footnote}
        </motion.p>

      </div>
    </section>
  )
}
