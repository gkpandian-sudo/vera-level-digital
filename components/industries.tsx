"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView, EASE } from "@/lib/motion"

const WA_LINK =
  "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

type Tier = "hot" | "warm" | "steady"

type Industry = {
  icon: string
  tier: Tier
  name: string
  sub: string
  pitch: string
  bold: string
  benefits: string[]
  sig: string
}

const industries: Industry[] = [
  {
    icon: "🏥",
    tier: "hot",
    name: "மருத்துவமனை & கிளினிக்",
    sub: "Hospitals · Clinics · Diagnostic Labs · Wellness Centres",
    pitch:
      "நோயாளிகள் இப்போது online-ல் doctor-ஐ தேடுகிறார்கள். உங்கள் இணையதளம் முதல் consultation-ஆக இருக்கட்டும். ",
    bold: "நம்பிக்கையை உடனே ஏற்படுத்த வேண்டும்.",
    benefits: [
      "Online appointment bookingfront desk calls 60% குறையும்",
      "Doctor profiles & treatment gallery நம்பிக்கை கட்டுகிறது",
      "Multilingual pagesTamil, English, Hindi நோயாளிகளை ஈர்க்கும்",
      "'Doctor near me' search-ல் முதலிடம்Local SEO",
    ],
    sig: "Patient booking portal",
  },
  {
    icon: "🍽️",
    tier: "hot",
    name: "உணவகம் & கஃபே",
    sub: "Restaurants · Cafes · Cloud Kitchens · Catering",
    pitch:
      "Zomato, Swiggy-க்கு ஒவ்வொரு order-லும் 25-30% commission போகிறது. ",
    bold: "உங்கள் சொந்த website இருந்தால், அந்த பணம் முழுவதும் உங்களுக்கே.",
    benefits: [
      "Direct online orderingaggregator commission முழுவதும் உங்களுக்கே",
      "Digital menu with photosaverage order value அதிகரிக்கும்",
      "Event & catering inquiry formsbulk orders எளிதாக",
      "WhatsApp CTA + Google Maps integration",
    ],
    sig: "Direct order + menu site",
  },
  {
    icon: "🎓",
    tier: "hot",
    name: "கல்வி & கோச்சிங்",
    sub: "Coaching Centres · Colleges · Skill Institutes · Tutors",
    pitch:
      "இன்றைய பெற்றோர்கள் online-ல் தேடி, பார்த்து, decide செய்கிறார்கள். ",
    bold: "உங்கள் centre அவர்கள் கண்ணில் முதலில் படட்டும்.",
    benefits: [
      "Online admission portalpaperwork இல்லாமல் enrolment",
      "Result showcase & testimonialsword-of-mouth digital-ஆக",
      "Course catalogue with batch schedulesphone calls குறையும்",
      "NEET, JEE campaign-க்கு ready landing pages",
    ],
    sig: "Admission & course portal",
  },
  {
    icon: "🏗️",
    tier: "warm",
    name: "ரியல் எஸ்டேட் & கட்டுமானம்",
    sub: "Developers · Brokers · Interior Designers · Architects",
    pitch:
      "வாங்குபவர்கள் site visit-க்கு முன்பே online-ல் shortlist செய்கிறார்கள். ",
    bold: "ஒரு stunning website serious buyers-ஐ மட்டும் filter செய்யும்.",
    benefits: [
      "Project showcasefloor plans, gallery, virtual tour",
      "Lead capture forms நேரடியாக CRM-க்கு",
      "EMI calculatorbuyers page-ல் நீண்ட நேரம் தங்குவார்கள்",
      "Interior portfoliopremium clients முதல் meeting-க்கு முன்பே convince",
    ],
    sig: "Project showcase + lead gen",
  },
  {
    icon: "🏨",
    tier: "warm",
    name: "ஹோட்டல்கள் & வில்லாக்கள்",
    sub: "Hotels · Resorts · Villas · Guest Houses",
    pitch:
      "Booking.com commission 15-20%. ",
    bold: "Direct booking website மூலம் அந்த margin உங்கள் pocket-ல்.",
    benefits: [
      "Premium photo gallery & virtual tourvisual-first booking",
      "Direct booking systemOTA commission இல்லாமல்",
      "Guest review integrationtrust automatically builds",
      "SEO for 'hotels near [location]'organic traffic இலவசம்",
    ],
    sig: "Direct booking site",
  },
  {
    icon: "🛍️",
    tier: "warm",
    name: "மின் வணிகம் & கடைகள்",
    sub: "Fashion · Textiles · Electronics · Handicrafts · Foods",
    pitch:
      "Tamil Nadu textile மற்றும் handicraft-க்கு global demand இருக்கிறது. ",
    bold: "ஒரு direct-to-consumer storeஉங்கள் district-க்கு வெளியே விற்கும்.",
    benefits: [
      "Mobile-first designsmartphone shoppers-ஐ convert செய்யும்",
      "UPI, Razorpay, COD integration",
      "Automated inventory & order management",
      "WhatsApp integrationorganic traffic, zero ad spend",
    ],
    sig: "D2C e-commerce store",
  },
  {
    icon: "🧺",
    tier: "steady",
    name: "சலவை & வீட்டு சேவைகள்",
    sub: "Laundry · Home Cleaning · Pest Control · AC Service",
    pitch:
      "நம்பகமான local service இணையத்தில் தெரிந்தால் போதும். ",
    bold: "First impression onlinecustomers phone எடுப்பார்கள்.",
    benefits: [
      "Online bookingWhatsApp confirmations automatic",
      "Real-time order trackingcustomer calls குறையும்",
      "Digital invoice & paymentprofessional look",
      "Local SEOneighbourhood searches-ல் top-ல்",
    ],
    sig: "Online booking system",
  },
  {
    icon: "🚚",
    tier: "steady",
    name: "போக்குவரத்து & தளவாட",
    sub: "Freight · Logistics · Warehousing · Transport",
    pitch:
      "B2B clients vendor evaluate செய்யும்போது முதலில் website பார்க்கிறார்கள். ",
    bold: "Professional platformவேறு league-ல் நிறுத்துகிறது.",
    benefits: [
      "Online freight quote formsmissed calls இல்லாமல்",
      "Shipment tracking dashboardfollow-up calls குறையும்",
      "Corporate websiteenterprise clients-க்கு credibility",
      "SEO for freight termsinbound B2B leads இலவசம்",
    ],
    sig: "B2B freight portal",
  },
  {
    icon: "🏪",
    tier: "steady",
    name: "சிறு வணிகங்கள் & கடைகள்",
    sub: "Retail Shops · Salons · Repair Shops · Consultancies",
    pitch:
      "ஒவ்வொரு business-க்கும் online presence இப்போது அவசியம். ",
    bold: "Simple, fast websitecustomers trust செய்வார்கள், referrals வரும்.",
    benefits: [
      "Professional landing pagedigital visiting card",
      "Service / product catalogue",
      "Customer testimonialssocial proof build ஆகும்",
      "WhatsApp CTA + Local SEO",
    ],
    sig: "Business landing page",
  },
]

const tierConfig: Record<Tier, { pill: string; label: string }> = {
  hot:    { pill: "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-400",       label: "High Priority"    },
  warm:   { pill: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400", label: "Growing Segment" },
  steady: { pill: "bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400", label: "Volume Play"     },
}

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ──────────────────────────────────────── */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16"
        >
          {/* Left: title */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-7 h-[1.5px] bg-gold" />
              <span className="text-gold text-[11px] font-medium tracking-[0.18em] uppercase">
                நாங்கள் சேவை வழங்கும் துறைகள்
              </span>
            </div>
            <h2 className="font-editorial text-[clamp(36px,5vw,56px)] font-semibold leading-[1.08] text-on-surface tamil-text">
              உங்கள் துறை.{" "}
              <br />
              <em className="text-gold not-italic">உங்கள் வளர்ச்சி.</em>
              <br />
              எங்கள் expertise.
            </h2>
          </motion.div>

          {/* Right: body */}
          <motion.p
            variants={fadeInUp}
            className="text-base font-light leading-relaxed text-on-surface-variant tamil-text"
          >
            ஒவ்வொரு வணிகத்திற்கும் ஒரு தனித்துவமான கதை இருக்கிறது — உங்கள்
            customers வேறு, உங்கள் இலக்குகள் வேறு. அதனால்தான் நாங்கள்
            ready-made sites உருவாக்குவதில்லை. உங்கள் industry-ஐ
            புரிந்துகொண்டு, உங்கள் வாடிக்கையாளர்களை ஈர்க்கும் platform
            உருவாக்குகிறோம்.
          </motion.p>
        </motion.div>

        {/* ── Industry grid ───────────────────────────────────────── */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] rounded-xl overflow-hidden border border-outline bg-outline"
        >
          {industries.map((ind) => {
            const tier = tierConfig[ind.tier]
            return (
              <motion.div
                key={ind.name}
                variants={fadeInUp}
                className="relative group bg-surface hover:bg-surface-variant transition-colors duration-300 p-8 overflow-hidden flex flex-col"
              >
                {/* Gold gradient bottom-border on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(var(--color-gold)), rgb(var(--color-gold) / 0.4))",
                  }}
                />

                {/* Card top: icon */}
                <div className="mb-5">
                  <div className="w-11 h-11 rounded-[10px] bg-surface-variant group-hover:bg-surface transition-colors duration-300 flex items-center justify-center text-xl flex-shrink-0">
                    {ind.icon}
                  </div>
                </div>

                {/* Industry name + sub */}
                <h3 className="font-editorial text-[22px] font-semibold leading-snug mb-1 text-on-surface tamil-text">
                  {ind.name}
                </h3>
                <p className="text-[11px] text-on-surface-variant mb-4 tracking-wide">
                  {ind.sub}
                </p>

                {/* Pitch */}
                <p className="text-sm font-light leading-[1.7] text-on-surface-variant mb-5 pb-5 border-b border-outline tamil-text flex-grow">
                  {ind.pitch}
                  <strong className="font-medium text-on-surface">{ind.bold}</strong>
                </p>

                {/* Benefits list */}
                <ul className="flex flex-col gap-2 mb-5">
                  {ind.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[13px] text-on-surface-variant leading-snug tamil-text"
                    >
                      <span
                        className="mt-[5px] w-[5px] h-[5px] rounded-full flex-shrink-0"
                        style={{ background: "rgb(var(--color-gold))" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Signature service */}
                <div className="flex items-center gap-2 px-3.5 py-2.5 bg-on-surface rounded-lg mt-auto">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-on-surface-variant/60 mr-auto">
                    Best for
                  </span>
                  <span className="text-[12px] font-medium text-surface">
                    {ind.sig}
                  </span>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="opacity-50"
                  >
                    <path
                      d="M2 10L10 2M10 2H4M10 2V8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── Bottom CTA strip ────────────────────────────────────── */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="mt-14 p-10 bg-on-surface rounded-xl grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8"
        >
          <div>
            <h3 className="font-editorial text-[28px] font-semibold leading-snug text-surface mb-3">
              உங்கள் industry இங்கே இல்லையா?
              <br />
              <em className="text-gold/90">கண்டிப்பாக பேசுவோம்.</em>
            </h3>
            <p className="text-sm font-light leading-relaxed text-surface/60 max-w-xl tamil-text">
              ஒவ்வொரு business-க்கும் online-ல் சொல்ல ஒரு unique story இருக்கிறது.
              Manufacturing, finance, அல்லது எந்த niche trade-ஆனாலும்உங்கள்
              customers எப்படி தேடுகிறார்கள், decide செய்கிறார்கள் என்பதற்கு ஏற்ப
              நாங்கள் உருவாக்குகிறோம்.
            </p>
          </div>
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="flex-shrink-0 inline-block px-8 py-4 rounded-lg text-sm font-medium text-white whitespace-nowrap transition-opacity hover:opacity-90"
            style={{ background: "rgb(var(--color-gold))" }}
          >
            இலவச ஆலோசனை பெறுங்கள் →
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
