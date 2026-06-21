// -- Vera Level Digital — Internationalisation --
// Language context: Tamil (ta) | Hindi (hi) | English (en)
// All component strings live here. Components call useLang() and
// destructure only what they need.

"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

export type Lang = "ta" | "hi" | "en"

// ── Nav ──────────────────────────────────────────────────────────────
interface NavT {
  links: { label: string; href: string }[]
  cta: string
}

// ── Hero ─────────────────────────────────────────────────────────────
interface HeroT {
  eyebrow: string
  headline: string
  headlineAccent: string
  sub: string
  ctaPrimary: string
  ctaSecondary: string
  badges: string[]
  mockNav: string[]
  mockBadge: string
  mockBadgeSub: string
}

// ── NoTemplate ───────────────────────────────────────────────────────
interface NoTemplateT {
  eyebrow: string
  headline: string
  headlineAccent: string
  sub: string
}

// ── Value ─────────────────────────────────────────────────────────────
interface ValueT {
  eyebrow: string
  headline: string
  sub: string
  cards: { icon: string; title: string; body: string }[]
  pills: string[]
}

// ── Services ──────────────────────────────────────────────────────────
interface ServicesT {
  headline: string
  sub: string
  items: { icon: string; title: string; body: string }[]
  customTitle: string
  customBody: string
  customCta: string
}

// ── TechStack ─────────────────────────────────────────────────────────
interface TechStackT {
  eyebrow: string
  headline: string
  headlineAccent: string
  sub: string
  stats: { value: string; label: string; color: string }[]
}

// ── Compare ───────────────────────────────────────────────────────────
interface CompareT {
  headline: string
  wordpress: string[]
  nextjs: string[]
}

// ── Industries ────────────────────────────────────────────────────────
interface IndustryItem {
  icon: string
  tier: "hot" | "warm" | "steady"
  name: string
  sub: string
  pitch: string
  bold: string
  benefits: string[]
  sig: string
}
interface IndustriesT {
  eyebrow: string
  headline: string
  headlineAccent: string
  sub: string
  items: IndustryItem[]
  ctaTitle: string
  ctaTitleAccent: string
  ctaSub: string
  ctaBtn: string
  bestFor: string
}

// ── Pricing ───────────────────────────────────────────────────────────
interface PricingTier {
  name: string
  price: string
  timeline: string
  features: string[]
  cta: string
  waMsg: string
  popular?: boolean
}
interface PricingT {
  headline: string
  headlineAccent: string
  sub: string
  tiers: PricingTier[]
  footnote: string
}

// ── Portfolio ─────────────────────────────────────────────────────────
interface PortfolioT {
  eyebrow: string
  headline: string
  viewGithub: string
  projects: { icon: string; color: string; title: string; desc: string; tags: string[]; segment: string; href: string }[]
}

// ── FAQ ───────────────────────────────────────────────────────────────
interface FaqT {
  headline: string
  items: { q: string; a: string }[]
}

// ── CTA ───────────────────────────────────────────────────────────────
interface CtaT {
  headline: string
  sub: string
  badges: string[]
  btn: string
}

// ── Footer ─────────────────────────────────────────────────────────────
interface FooterT {
  brand: string
  tagline: string
  quickLinks: string
  contact: string
  copyright: string
}

// ── Root translation shape ─────────────────────────────────────────────
export interface Translations {
  nav: NavT
  hero: HeroT
  noTemplate: NoTemplateT
  value: ValueT
  services: ServicesT
  techStack: TechStackT
  compare: CompareT
  industries: IndustriesT
  pricing: PricingT
  portfolio: PortfolioT
  faq: FaqT
  cta: CtaT
  footer: FooterT
}

// ═══════════════════════════════════════════════════════════════════════
// TAMIL  (ta) — original content
// ═══════════════════════════════════════════════════════════════════════
const ta: Translations = {
  nav: {
    links: [
      { label: "Services",   href: "#services"   },
      { label: "Why Us",     href: "#compare"    },
      { label: "Industries", href: "#industries" },
      { label: "Pricing",    href: "#pricing"    },
      { label: "Portfolio",  href: "#portfolio"  },
    ],
    cta: "Get Started",
  },
  hero: {
    eyebrow: "Blazing Fast Performance",
    headline: "இணையம் மூலம் அதிக",
    headlineAccent: "வாடிக்கையாளர்களை",
    sub: "இணையதளம் அமைப்பதற்கான தொழில்நுட்பக் கருவிகள் மற்றும் டிஜிட்டல் தொழில்நுட்பம் குறித்த புரிதல் இல்லாததுடன், அதற்காகச் செலவிட போதிய நேரமும் பெரும்பாலான வணிகர்களுக்கு ஒரு தடையாக உள்ளது. WhatsApp‑ல் உங்கள் வணிகத்தைப் பற்றி சொல்லுங்கள் — வடிவமைப்பு முதல் இணையத்தில் தொடங்குவது வரை நாங்கள் செய்கிறோம்.",
    ctaPrimary: "Free Consultation",
    ctaSecondary: "View Our Work",
    badges: ["Free Consultation", "Ready in 7-14 Days", "Starting ₹10,000"],
    mockNav: ["Services", "Pricing", "Portfolio"],
    mockBadge: "Mobile First",
    mockBadgeSub: "100% Responsive",
  },
  noTemplate: {
    eyebrow: "What Sets Us Apart",
    headline: "நாங்கள் உருவாக்குவது",
    headlineAccent: "பூஜ்யம் டெம்ப்ளேட்.",
    sub: "நாங்கள் React.js மற்றும் Next.js கொண்டு புதிதாக குறியீடு செய்கிறோம். WordPress போன்ற பழைய முறைகள் அல்ல.",
  },
  value: {
    eyebrow: "Simple Process",
    headline: "நாங்கள் அனைத்தும் செய்கிறோம்",
    sub: "Coding, hosting, SEO, அல்லது design பற்றி நீங்கள் தெரிந்திருக்க வேண்டியதில்லை. WhatsApp-ல் உங்கள் வணிக தகவலை அனுப்புங்கள், A முதல் Z வரை நாங்கள் செய்கிறோம்.",
    cards: [
      {
        icon: "🧠",
        title: "தொழில்நுட்பம் தெரியாதா?",
        body: "Coding அல்லது hosting பற்றி எதுவும் தெரியாவிட்டாலும் பரவாயில்லை. உங்கள் வணிகத்தைப் பற்றி சொல்லுங்கள், நாங்கள் design, code மற்றும் deploy செய்கிறோம்.",
      },
      {
        icon: "⏱",
        title: "நேரமில்லையா?",
        body: "30 நிமிட WhatsApp chat போதும். படங்கள், விலை, மற்றும் வணிக விவரங்களை அனுப்புங்கள், 7 முதல் 14 நாளில் உங்கள் இணையதளம் live ஆகும்.",
      },
      {
        icon: "💰",
        title: "செலவு குறித்து கவலையா?",
        body: "₹10,000 முதல் தொடங்குகிறது. ஒரு முறை கட்டணம். மாதாந்திர plugin கட்டணங்களோ, ஆண்டு hosting கட்டணங்களோ இல்லை.",
      },
    ],
    pills: [
      "Domain Setup", "Custom Design", "React / Next.js",
      "Vercel CDN", "WhatsApp Integration", "SEO Optimized",
      "Mobile First", "Google Maps", "Free Revisions",
    ],
  },
  services: {
    headline: "Website & Digital Services",
    sub: "நவீன தொழில்நுட்பங்களுடன் உருவாக்கப்பட்ட உயர்தர தீர்வுகள்.",
    items: [
      { icon: "🌐", title: "Business Website",  body: "Landing page, company profile, மற்றும் கடை இணையதளங்கள் — தொழில்முறை தோற்றத்துடன் புதிய வாடிக்கையாளர்களை ஆன்லைனில் ஈர்க்கும்." },
      { icon: "📅", title: "Online Booking",    body: "ஹோட்டல், சலவை, மற்றும் சேவை முன்பதிவுகள் — தானியங்கி, real-time, உங்கள் phone-ல் இருந்தே நிர்வகிக்கலாம்." },
      { icon: "🛍️", title: "Online Store",     body: "டிஜிட்டல் தயாரிப்பு catalog, shopping cart, மற்றும் UPI / bank transfer payment ஒருங்கிணைப்பு." },
      { icon: "⚙️", title: "Custom Web App",   body: "Business dashboard, sales report, queue system — உங்கள் குறிப்பிட்ட வணிகத் தேவைகளுக்கேற்ப உருவாக்கப்படும்." },
      { icon: "🤖", title: "Automation & Bots", body: "WhatsApp bots, தானியங்கி notifications, மற்றும் system integrations — நேரத்தையும் செயல்பாட்டு செலவையும் குறைக்கும்." },
    ],
    customTitle: "Have a Custom Project?",
    customBody: "உங்கள் வணிகத்தைப் பற்றி சொல்லுங்கள், சிறந்த தீர்வு தருகிறோம்.",
    customCta: "💬 Chat on WhatsApp",
  },
  techStack: {
    eyebrow: "தொழில்நுட்ப அடுக்கு",
    headline: "Industry-Leading",
    headlineAccent: "Tech Stack",
    sub: "Netflix, Airbnb, மற்றும் உலகின் சிறந்த companies பயன்படுத்தும் அதே தொழில்நுட்பம்.",
    stats: [
      { value: "< 1s",  label: "Vercel CDN load time",    color: "text-primary"    },
      { value: "90+",   label: "Google Lighthouse Score", color: "text-success"    },
      { value: "100%",  label: "Custom, zero templates",  color: "text-on-surface" },
    ],
  },
  compare: {
    headline: "WordPress vs Modern Tech Stack",
    wordpress: [
      "மெதுவான லோடிங் வேகம் (3-7s)",
      "Hacking மற்றும் plugin அபாயங்கள்",
      "மாதாந்திர அப்டேட்கள் மற்றும் பராமரிப்பு",
      "வரையறுக்கப்பட்ட வடிவமைப்பு சுதந்திரம்",
      "மாதாந்திர hosting & plugin கட்டணங்கள்",
    ],
    nextjs: [
      "அதிவேக செயல்திறன் (< 1s)",
      "அதிகபட்ச பாதுகாப்பு (Static Generation)",
      "பூஜ்ய பராமரிப்பு செலவுகள்",
      "முழுமையான பிரத்தியேக வடிவமைப்பு",
      "ஒரு முறை மட்டும் கட்டணம்",
    ],
  },
  industries: {
    eyebrow: "நாங்கள் சேவை வழங்கும் துறைகள்",
    headline: "உங்கள் துறை.",
    headlineAccent: "உங்கள் வளர்ச்சி.",
    sub: "ஒவ்வொரு வணிகமும் வித்தியாசமானது. நாங்கள் generic websites உருவாக்குவதில்லை. உங்கள் industry-யின் உண்மையான பிரச்சினைகளை தீர்க்கும் targeted digital platforms மட்டுமே உருவாக்குகிறோம்.",
    ctaTitle: "உங்கள் industry இங்கே இல்லையா?",
    ctaTitleAccent: "கண்டிப்பாக பேசுவோம்.",
    ctaSub: "ஒவ்வொரு business-க்கும் online-ல் சொல்ல ஒரு unique story இருக்கிறது. Manufacturing, finance, அல்லது எந்த niche trade-ஆனாலும் — உங்கள் customers எப்படி தேடுகிறார்கள் என்பதற்கு ஏற்ப நாங்கள் உருவாக்குகிறோம்.",
    ctaBtn: "இலவச ஆலோசனை பெறுங்கள் →",
    bestFor: "Best for",
    items: [
      { icon: "🏥", tier: "hot",    name: "மருத்துவமனை & கிளினிக்", sub: "Hospitals · Clinics · Diagnostic Labs · Wellness Centres", pitch: "நோயாளிகள் இப்போது online-ல் doctor-ஐ தேடுகிறார்கள். உங்கள் இணையதளம் முதல் consultation-ஆக இருக்கட்டும். ", bold: "நம்பிக்கையை உடனே ஏற்படுத்த வேண்டும்.", benefits: ["Online appointment booking — front desk calls 60% குறையும்", "Doctor profiles & treatment gallery — நம்பிக்கை கட்டுகிறது", "Multilingual pages — Tamil, English, Hindi நோயாளிகளை ஈர்க்கும்", "'Doctor near me' search-ல் முதலிடம் — Local SEO"], sig: "Patient booking portal" },
      { icon: "🍽️", tier: "hot",   name: "உணவகம் & கஃபே", sub: "Restaurants · Cafes · Cloud Kitchens · Catering", pitch: "Zomato, Swiggy ஒவ்வொரு order-க்கும் 25-30% எடுக்கிறது. ", bold: "உங்கள் சொந்த website மூலம் direct orders — commission இல்லாமல்.", benefits: ["Direct online ordering — aggregator commission முழுவதும் உங்களுக்கே", "Digital menu with photos — average order value அதிகரிக்கும்", "Event & catering inquiry forms — bulk orders எளிதாக", "WhatsApp CTA + Google Maps integration"], sig: "Direct order + menu site" },
      { icon: "🎓", tier: "hot",    name: "கல்வி & கோச்சிங்", sub: "Coaching Centres · Colleges · Skill Institutes · Tutors", pitch: "பெற்றோர்கள் online-ல் தேடி decide செய்கிறார்கள். ", bold: "உங்கள் centre இணையத்தில் இல்லாவிட்டால், அது இல்லாததற்கு சமம்.", benefits: ["Online admission portal — paperwork இல்லாமல் enrolment", "Result showcase & testimonials — word-of-mouth digital-ஆக", "Course catalogue with batch schedules — phone calls குறையும்", "NEET, JEE campaign-க்கு ready landing pages"], sig: "Admission & course portal" },
      { icon: "🏗️", tier: "warm",  name: "ரியல் எஸ்டேட் & கட்டுமானம்", sub: "Developers · Brokers · Interior Designers · Architects", pitch: "வாங்குபவர்கள் site visit-க்கு முன்பே online-ல் shortlist செய்கிறார்கள். ", bold: "ஒரு stunning website serious buyers-ஐ மட்டும் filter செய்யும்.", benefits: ["Project showcase — floor plans, gallery, virtual tour", "Lead capture forms நேரடியாக CRM-க்கு", "EMI calculator — buyers page-ல் நீண்ட நேரம் தங்குவார்கள்", "Interior portfolio — premium clients முதல் meeting-க்கு முன்பே convince"], sig: "Project showcase + lead gen" },
      { icon: "🏨", tier: "warm",   name: "ஹோட்டல்கள் & வில்லாக்கள்", sub: "Hotels · Resorts · Villas · Guest Houses", pitch: "Booking.com commission 15-20%. ", bold: "Direct booking website மூலம் அந்த margin உங்கள் pocket-ல்.", benefits: ["Premium photo gallery & virtual tour — visual-first booking", "Direct booking system — OTA commission இல்லாமல்", "Guest review integration — trust automatically builds", "SEO for 'hotels near [location]' — organic traffic இலவசம்"], sig: "Direct booking site" },
      { icon: "🛍️", tier: "warm",  name: "மின் வணிகம் & கடைகள்", sub: "Fashion · Textiles · Electronics · Handicrafts · Foods", pitch: "Tamil Nadu textile மற்றும் handicraft-க்கு global demand இருக்கிறது. ", bold: "ஒரு direct-to-consumer store — உங்கள் district-க்கு வெளியே விற்கும்.", benefits: ["Mobile-first design — smartphone shoppers-ஐ convert செய்யும்", "UPI, Razorpay, COD integration", "Automated inventory & order management", "WhatsApp integration — organic traffic, zero ad spend"], sig: "D2C e-commerce store" },
      { icon: "🧺", tier: "steady", name: "சலவை & வீட்டு சேவைகள்", sub: "Laundry · Home Cleaning · Pest Control · AC Service", pitch: "நம்பகமான local service இணையத்தில் தெரிந்தால் போதும். ", bold: "First impression online — customers phone எடுப்பார்கள்.", benefits: ["Online booking — WhatsApp confirmations automatic", "Real-time order tracking — customer calls குறையும்", "Digital invoice & payment — professional look", "Local SEO — neighbourhood searches-ல் top-ல்"], sig: "Online booking system" },
      { icon: "🚚", tier: "steady", name: "போக்குவரத்து & தளவாட", sub: "Freight · Logistics · Warehousing · Transport", pitch: "B2B clients vendor evaluate செய்யும்போது முதலில் website பார்க்கிறார்கள். ", bold: "Professional platform — வேறு league-ல் நிறுத்துகிறது.", benefits: ["Online freight quote forms — missed calls இல்லாமல்", "Shipment tracking dashboard — follow-up calls குறையும்", "Corporate website — enterprise clients-க்கு credibility", "SEO for freight terms — inbound B2B leads இலவசம்"], sig: "B2B freight portal" },
      { icon: "🏪", tier: "steady", name: "சிறு வணிகங்கள் & கடைகள்", sub: "Retail Shops · Salons · Repair Shops · Consultancies", pitch: "ஒவ்வொரு business-க்கும் online presence இப்போது அவசியம். ", bold: "Simple, fast website — customers trust செய்வார்கள், referrals வரும்.", benefits: ["Professional landing page — digital visiting card", "Service / product catalogue", "Customer testimonials — social proof build ஆகும்", "WhatsApp CTA + Local SEO"], sig: "Business landing page" },
    ],
  },
  pricing: {
    headline: "Transparent",
    headlineAccent: "Pricing",
    sub: "No hidden fees. One-time payment only.",
    footnote: "Prices may vary by project scope. One-time payment only.",
    tiers: [
      { name: "Starter",  price: "₹10,000 - 15,000", timeline: "Ready in 5-7 Days",   cta: "Choose Plan", waMsg: "Hello%2C%20I%27m%20interested%20in%20the%20Starter%20package.", features: ["1 Landing Page", "WhatsApp CTA button", "Google Maps இணைப்பு", "Mobile-responsive", "Basic SEO", "Vercel hosting", "1 revision"] },
      { name: "Standard", price: "₹25,000 - 40,000", timeline: "Ready in 10-14 Days", cta: "Start Now",    waMsg: "Hello%2C%20I%27m%20interested%20in%20the%20Standard%20package.", popular: true, features: ["3-5 Pages", "Photo / Video Gallery", "Services & Pricing page", "WhatsApp integration", "Full SEO", "Google Analytics", "3 revisions"] },
      { name: "Custom",   price: "₹60,000+",          timeline: "Ready in 14-30 Days", cta: "Get a Quote", waMsg: "Hello%2C%20I%27d%20like%20to%20discuss%20a%20custom%20project.", features: ["Multi-page & Dashboard", "Booking system", "Admin dashboard", "Database integration", "WhatsApp bot", "Unlimited revisions", "1 month support"] },
    ],
  },
  portfolio: {
    eyebrow: "GitHub Projects",
    headline: "Our Work",
    viewGithub: "View on GitHub",
    projects: [
      { icon: "🎨", color: "bg-primary/10 border-primary/20",   title: "Krima Arts",    desc: "ஒரு கலை வணிகத்திற்காக உருவாக்கப்பட்ட creative arts showcase இணையதளம்.", tags: ["HTML", "CSS"], segment: "Creative / Arts", href: "https://github.com/gkpandian-sudo/krima_arts" },
      { icon: "📧", color: "bg-success/10 border-success/20",   title: "Gmail Cleanup", desc: "Gmail-ல் உள்ள அனைத்து unread threads-ஐயும் bulk-ஆக read ஆக mark செய்யும் Google Apps Script.", tags: ["JavaScript", "Google Apps Script"], segment: "Automation / Productivity", href: "https://github.com/gkpandian-sudo/gmail-cleanup-" },
      { icon: "👤", color: "bg-[#F59E0B]/10 border-[#F59E0B]/20", title: "Pandian",    desc: "தனிப்பட்ட portfolio மற்றும் profile showcase — personal branding project.", tags: ["HTML", "Personal Project"], segment: "Portfolio", href: "https://github.com/gkpandian-sudo/pandian" },
    ],
  },
  faq: {
    headline: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    items: [
      { q: "ஏன் WordPress பயன்படுத்தக்கூடாது?", a: "WordPress மெதுவானது மற்றும் அடிக்கடி பாதுகாப்பு அப்டேட்கள் தேவைப்படும். எங்கள் Next.js தொழில்நுட்பம் 10 மடங்கு வேகமானது மற்றும் hacking அபாயம் இல்லாதது. மாதாந்திர plugin கட்டணங்களும் இல்லை." },
      { q: "இணையதளம் எவ்வளவு நேரத்தில் தயாராகும்?", a: "Starter: 5-7 நாட்கள். Standard: 10-14 நாட்கள். Custom: 14-30 நாட்கள். உங்கள் வணிக தகவல்களை WhatsApp-ல் அனுப்பியவுடன் work தொடங்கும்." },
      { q: "SEO செய்யப்படுமா?", a: "நிச்சயமாக! இணையத்தில் உங்கள் இணையதளம் முன்னணியில் வர அனைத்து அடிப்படை SEO வேலைகளும் செய்யப்படும். Standard மற்றும் Custom package-ல் full SEO, meta tags, மற்றும் Google Analytics included." },
      { q: "Hosting மற்றும் domain செலவு எவ்வளவு?", a: "Vercel-ல் hosting இலவசம். மாதாந்திர கட்டணம் இல்லை. Domain பெயர் மட்டும் ஆண்டுக்கு ~₹800-1,500 செலவாகும்." },
      { q: "இணையதளை பின்னர் மாற்றலாமா?", a: "முழு source code GitHub-ல் உங்களுக்கு சொந்தமாக இருக்கும். எந்த நேரமும் changes செய்யலாம். நாங்களும் revision support அளிக்கிறோம்." },
    ],
  },
  cta: {
    headline: "உங்கள் வணிகத்தை டிஜிட்டல் முறைக்கு மாற்றத் தயாரா?",
    sub: "இலவச ஆலோசனை, எந்த commitment-உம் இல்லை. உங்கள் வணிகத்தைப் பற்றி சொல்லுங்கள் — A முதல் Z வரை நாங்கள் செய்கிறோம்.",
    badges: ["Free Consultation", "Quick Response", "Real Portfolio", "Mobile-Friendly"],
    btn: "💬 Chat on WhatsApp",
  },
  footer: {
    brand: "Vera Level Digital",
    tagline: "Vera Level web solutions for namma Chennai businesses.",
    quickLinks: "Quick Links",
    contact: "Contact",
    copyright: "© 2025 Vera Level Digital. All rights reserved.",
  },
}

// ═══════════════════════════════════════════════════════════════════════
// HINDI  (hi) — धमाका डिजिटल
// ═══════════════════════════════════════════════════════════════════════
const hi: Translations = {
  nav: {
    links: [
      { label: "सेवाएं",         href: "#services"   },
      { label: "हम क्यों?",     href: "#compare"    },
      { label: "उद्योग",         href: "#industries" },
      { label: "मूल्य",          href: "#pricing"    },
      { label: "पोर्टफोलियो",   href: "#portfolio"  },
    ],
    cta: "शुरू करें",
  },
  hero: {
    eyebrow: "⚡ बेहद तेज़ परफॉर्मेंस",
    headline: "इंटरनेट से ज़्यादा",
    headlineAccent: "ग्राहक पाएं",
    sub: "कोडिंग या होस्टिंग की जानकारी न हो तो भी चिंता नहीं। WhatsApp पर अपने बिज़नेस के बारे में बताएं — डिज़ाइन से लेकर लाइव तक, सब हम संभालते हैं।",
    ctaPrimary: "मुफ़्त सलाह लें",
    ctaSecondary: "हमारा काम देखें",
    badges: ["मुफ़्त सलाह", "7-14 दिन में तैयार", "₹10,000 से शुरू"],
    mockNav: ["सेवाएं", "मूल्य", "पोर्टफोलियो"],
    mockBadge: "मोबाइल फर्स्ट",
    mockBadgeSub: "100% Responsive",
  },
  noTemplate: {
    eyebrow: "हमारी खासियत",
    headline: "हम बनाते हैं",
    headlineAccent: "ज़ीरो टेम्पलेट.",
    sub: "हम React.js और Next.js से स्क्रैच पर कोड करते हैं। WordPress जैसे पुराने तरीके नहीं।",
  },
  value: {
    eyebrow: "आसान प्रक्रिया",
    headline: "सब कुछ हम करते हैं",
    sub: "Coding, hosting, SEO या design की जानकारी ज़रूरी नहीं। WhatsApp पर अपनी बिज़नेस की जानकारी भेजें — A से Z तक हम करते हैं।",
    cards: [
      {
        icon: "🧠",
        title: "तकनीक नहीं जानते?",
        body: "Coding या hosting के बारे में कुछ भी न जानने की चिंता नहीं। अपने बिज़नेस के बारे में बताएं — design, code और deploy हम करते हैं।",
      },
      {
        icon: "⏱",
        title: "समय नहीं है?",
        body: "सिर्फ 30 मिनट का WhatsApp chat काफी है। फोटो, दाम और बिज़नेस की जानकारी भेजें — 7 से 14 दिन में आपकी वेबसाइट live होगी।",
      },
      {
        icon: "💰",
        title: "खर्च की चिंता?",
        body: "₹10,000 से शुरू। एकबार की payment। कोई monthly plugin charge नहीं, कोई सालाना hosting fee नहीं।",
      },
    ],
    pills: [
      "Domain Setup", "Custom Design", "React / Next.js",
      "Vercel CDN", "WhatsApp Integration", "SEO Optimized",
      "Mobile First", "Google Maps", "Free Revisions",
    ],
  },
  services: {
    headline: "वेबसाइट और डिजिटल सेवाएं",
    sub: "आधुनिक तकनीक से बने उच्च-गुणवत्ता के समाधान।",
    items: [
      { icon: "🌐", title: "बिज़नेस वेबसाइट",    body: "Landing page, company profile और दुकान की वेबसाइट — पेशेवर लुक के साथ नए ग्राहकों को ऑनलाइन आकर्षित करें।" },
      { icon: "📅", title: "ऑनलाइन बुकिंग",      body: "होटल, लॉन्ड्री और सर्विस बुकिंग — automatic, real-time, अपने phone से manage करें।" },
      { icon: "🛍️", title: "ऑनलाइन स्टोर",     body: "डिजिटल product catalog, shopping cart और UPI / bank transfer payment integration।" },
      { icon: "⚙️", title: "कस्टम वेब ऐप",       body: "Business dashboard, sales report, queue system — आपकी ज़रूरत के हिसाब से बनाया।" },
      { icon: "🤖", title: "Automation & Bots",   body: "WhatsApp bots, automatic notifications और system integrations — समय और खर्च बचाएं।" },
    ],
    customTitle: "कस्टम प्रोजेक्ट है?",
    customBody: "अपने बिज़नेस के बारे में बताएं, सही solution देंगे।",
    customCta: "💬 WhatsApp पर चैट करें",
  },
  techStack: {
    eyebrow: "तकनीकी स्टैक",
    headline: "इंडस्ट्री का सबसे बेहतर",
    headlineAccent: "Tech Stack",
    sub: "Netflix, Airbnb और दुनिया की बेहतरीन कंपनियां भी यही technology इस्तेमाल करती हैं।",
    stats: [
      { value: "< 1s",  label: "Vercel CDN लोड टाइम",         color: "text-primary"    },
      { value: "90+",   label: "Google Lighthouse स्कोर",      color: "text-success"    },
      { value: "100%",  label: "Custom, ज़ीरो टेम्पलेट",      color: "text-on-surface" },
    ],
  },
  compare: {
    headline: "WordPress vs आधुनिक Tech Stack",
    wordpress: [
      "धीमी loading speed (3-7s)",
      "Hacking और plugin के खतरे",
      "हर महीने update और maintenance",
      "सीमित design की आज़ादी",
      "हर महीने hosting & plugin charges",
    ],
    nextjs: [
      "बेहद तेज़ performance (< 1s)",
      "अधिकतम सुरक्षा (Static Generation)",
      "ज़ीरो maintenance खर्च",
      "पूरी तरह custom design",
      "सिर्फ एकबार payment",
    ],
  },
  industries: {
    eyebrow: "हम किन उद्योगों में सेवा देते हैं",
    headline: "आपका उद्योग.",
    headlineAccent: "आपकी तरक्की.",
    sub: "हर बिज़नेस अलग होता है। हम generic websites नहीं बनाते। हम आपके industry की असली समस्याओं को सुलझाने वाले targeted digital platforms बनाते हैं।",
    ctaTitle: "आपका उद्योग यहाँ नहीं है?",
    ctaTitleAccent: "ज़रूर बात करते हैं।",
    ctaSub: "हर बिज़नेस की ऑनलाइन एक unique story होती है। Manufacturing, finance या कोई भी niche trade हो — आपके customers कैसे search करते हैं, उसके अनुसार हम बनाते हैं।",
    ctaBtn: "मुफ़्त सलाह लें →",
    bestFor: "Best for",
    items: [
      { icon: "🏥", tier: "hot",    name: "अस्पताल और क्लिनिक", sub: "Hospitals · Clinics · Diagnostic Labs · Wellness Centres", pitch: "मरीज़ अब online doctor ढूंढते हैं। आपकी वेबसाइट पहला consultation बने। ", bold: "भरोसा तुरंत बनाना ज़रूरी है।", benefits: ["Online appointment booking — front desk calls 60% कम होंगे", "Doctor profiles & treatment gallery — trust बनता है", "Multilingual pages — Hindi, Tamil, English मरीज़ आकर्षित होंगे", "'Doctor near me' में पहला नाम — Local SEO"], sig: "Patient booking portal" },
      { icon: "🍽️", tier: "hot",   name: "रेस्तरां और कैफे", sub: "Restaurants · Cafes · Cloud Kitchens · Catering", pitch: "Zomato, Swiggy हर order पर 25-30% लेते हैं। ", bold: "अपनी website से direct orders — कोई commission नहीं।", benefits: ["Direct online ordering — aggregator commission पूरा आपका", "Digital menu with photos — average order value बढ़ेगी", "Event & catering inquiry forms — bulk orders आसान", "WhatsApp CTA + Google Maps integration"], sig: "Direct order + menu site" },
      { icon: "🎓", tier: "hot",    name: "शिक्षा और कोचिंग", sub: "Coaching Centres · Colleges · Skill Institutes · Tutors", pitch: "माता-पिता online search करके decide करते हैं। ", bold: "आपका centre internet पर नहीं है तो वो है ही नहीं।", benefits: ["Online admission portal — बिना paperwork enrolment", "Result showcase & testimonials — word-of-mouth digital बने", "Course catalogue with batch schedules — phone calls कम होंगे", "NEET, JEE campaign के लिए ready landing pages"], sig: "Admission & course portal" },
      { icon: "🏗️", tier: "warm",  name: "रियल एस्टेट और निर्माण", sub: "Developers · Brokers · Interior Designers · Architects", pitch: "खरीदार site visit से पहले online shortlist करते हैं। ", bold: "एक stunning website serious buyers को filter करती है।", benefits: ["Project showcase — floor plans, gallery, virtual tour", "Lead capture forms सीधे CRM को", "EMI calculator — buyers ज़्यादा देर रुकेंगे", "Interior portfolio — premium clients पहली meeting से पहले convince"], sig: "Project showcase + lead gen" },
      { icon: "🏨", tier: "warm",   name: "होटल और विला", sub: "Hotels · Resorts · Villas · Guest Houses", pitch: "Booking.com commission 15-20% लेता है। ", bold: "Direct booking website से वो margin आपकी जेब में।", benefits: ["Premium photo gallery & virtual tour", "Direct booking system — OTA commission नहीं", "Guest review integration — trust automatically बनता है", "SEO for 'hotels near [location]' — organic traffic मुफ़्त"], sig: "Direct booking site" },
      { icon: "🛍️", tier: "warm",  name: "ई-कॉमर्स और दुकानें", sub: "Fashion · Textiles · Electronics · Handicrafts · Foods", pitch: "Indian textile और handicraft की global demand है। ", bold: "Direct-to-consumer store — अपने ज़िले के बाहर बेचें।", benefits: ["Mobile-first design — smartphone shoppers convert होंगे", "UPI, Razorpay, COD integration", "Automated inventory & order management", "WhatsApp integration — organic traffic, zero ad spend"], sig: "D2C e-commerce store" },
      { icon: "🧺", tier: "steady", name: "लॉन्ड्री और होम सर्विसेज़", sub: "Laundry · Home Cleaning · Pest Control · AC Service", pitch: "भरोसेमंद local service online दिखे तो काफी है। ", bold: "पहला impression online — customers खुद call करेंगे।", benefits: ["Online booking — WhatsApp confirmation automatic", "Real-time order tracking — customer calls कम होंगे", "Digital invoice & payment — professional look", "Local SEO — आसपास की search में top पर"], sig: "Online booking system" },
      { icon: "🚚", tier: "steady", name: "ट्रांसपोर्ट और लॉजिस्टिक्स", sub: "Freight · Logistics · Warehousing · Transport", pitch: "B2B clients vendor evaluate करते वक़्त पहले website देखते हैं। ", bold: "Professional platform — अलग league में खड़ा करता है।", benefits: ["Online freight quote forms — missed calls नहीं", "Shipment tracking dashboard — follow-up calls कम", "Corporate website — enterprise clients को credibility", "SEO for freight terms — inbound B2B leads मुफ़्त"], sig: "B2B freight portal" },
      { icon: "🏪", tier: "steady", name: "छोटे बिज़नेस और दुकानें", sub: "Retail Shops · Salons · Repair Shops · Consultancies", pitch: "हर बिज़नेस को online presence अब ज़रूरी है। ", bold: "Simple, fast website — customers trust करेंगे, referrals आएंगे।", benefits: ["Professional landing page — digital visiting card", "Service / product catalogue", "Customer testimonials — social proof बनता है", "WhatsApp CTA + Local SEO"], sig: "Business landing page" },
    ],
  },
  pricing: {
    headline: "पारदर्शी",
    headlineAccent: "मूल्य निर्धारण",
    sub: "कोई छुपा शुल्क नहीं। सिर्फ एकबार payment।",
    footnote: "कीमत project के दायरे के अनुसार बदल सकती है। एकबार की payment।",
    tiers: [
      { name: "स्टार्टर",  price: "₹10,000 - 15,000", timeline: "5-7 दिन में तैयार",   cta: "प्लान चुनें",  waMsg: "Hello%2C%20I%27m%20interested%20in%20the%20Starter%20package.", features: ["1 Landing Page", "WhatsApp CTA बटन", "Google Maps लिंक", "Mobile-responsive", "Basic SEO", "Vercel hosting", "1 बदलाव"] },
      { name: "स्टैंडर्ड", price: "₹25,000 - 40,000", timeline: "10-14 दिन में तैयार", cta: "अभी शुरू करें", waMsg: "Hello%2C%20I%27m%20interested%20in%20the%20Standard%20package.", popular: true, features: ["3-5 Pages", "Photo / Video Gallery", "सेवाएं & मूल्य पेज", "WhatsApp integration", "Full SEO", "Google Analytics", "3 बदलाव"] },
      { name: "कस्टम",     price: "₹60,000+",          timeline: "14-30 दिन में तैयार", cta: "कोटेशन लें",   waMsg: "Hello%2C%20I%27d%20like%20to%20discuss%20a%20custom%20project.", features: ["Multi-page & Dashboard", "Booking system", "Admin dashboard", "Database integration", "WhatsApp bot", "असीमित बदलाव", "1 महीने का support"] },
    ],
  },
  portfolio: {
    eyebrow: "GitHub Projects",
    headline: "हमारा काम",
    viewGithub: "GitHub पर देखें",
    projects: [
      { icon: "🎨", color: "bg-primary/10 border-primary/20",   title: "Krima Arts",    desc: "एक art business के लिए बनाया गया creative arts showcase website।", tags: ["HTML", "CSS"], segment: "Creative / Arts", href: "https://github.com/gkpandian-sudo/krima_arts" },
      { icon: "📧", color: "bg-success/10 border-success/20",   title: "Gmail Cleanup", desc: "Gmail के सभी unread threads को bulk read mark करने वाला Google Apps Script।", tags: ["JavaScript", "Google Apps Script"], segment: "Automation / Productivity", href: "https://github.com/gkpandian-sudo/gmail-cleanup-" },
      { icon: "👤", color: "bg-[#F59E0B]/10 border-[#F59E0B]/20", title: "Pandian",    desc: "Personal portfolio और profile showcase — personal branding project।", tags: ["HTML", "Personal Project"], segment: "Portfolio", href: "https://github.com/gkpandian-sudo/pandian" },
    ],
  },
  faq: {
    headline: "अक्सर पूछे जाने वाले सवाल",
    items: [
      { q: "WordPress क्यों नहीं?", a: "WordPress धीमा होता है और बार-बार security updates चाहिए होते हैं। हमारी Next.js technology 10 गुना तेज़ है और hacking का खतरा नहीं। कोई monthly plugin charge भी नहीं।" },
      { q: "वेबसाइट कितने समय में तैयार होगी?", a: "Starter: 5-7 दिन। Standard: 10-14 दिन। Custom: 14-30 दिन। WhatsApp पर बिज़नेस की जानकारी भेजते ही काम शुरू होता है।" },
      { q: "SEO किया जाएगा?", a: "बिल्कुल! आपकी website search में ऊपर आए, इसके लिए सभी basic SEO काम किए जाएंगे। Standard और Custom package में full SEO, meta tags और Google Analytics शामिल हैं।" },
      { q: "Hosting और domain का खर्च कितना?", a: "Vercel पर hosting मुफ़्त। कोई monthly charge नहीं। बस domain name के लिए साल में ~₹800-1,500 खर्च होगा।" },
      { q: "बाद में बदलाव कर सकते हैं?", a: "पूरा source code GitHub पर आपका होगा। कभी भी changes कर सकते हैं। हम भी revision support देते हैं।" },
    ],
  },
  cta: {
    headline: "अपने बिज़नेस को डिजिटल बनाने के लिए तैयार हैं?",
    sub: "मुफ़्त सलाह, कोई commitment नहीं। अपने बिज़नेस के बारे में बताएं — A से Z तक हम करते हैं।",
    badges: ["मुफ़्त सलाह", "तुरंत जवाब", "असली Portfolio", "Mobile-Friendly"],
    btn: "💬 WhatsApp पर चैट करें",
  },
  footer: {
    brand: "Vera Level Digital",
    tagline: "धमाका डिजिटल — नमस्ते इंडिया के बिज़नेस के लिए वेब solutions।",
    quickLinks: "Quick Links",
    contact: "संपर्क",
    copyright: "© 2025 Vera Level Digital. सर्वाधिकार सुरक्षित।",
  },
}

// ═══════════════════════════════════════════════════════════════════════
// ENGLISH  (en) — Dhamaka Digital
// ═══════════════════════════════════════════════════════════════════════
const en: Translations = {
  nav: {
    links: [
      { label: "Services",   href: "#services"   },
      { label: "Why Us",     href: "#compare"    },
      { label: "Industries", href: "#industries" },
      { label: "Pricing",    href: "#pricing"    },
      { label: "Portfolio",  href: "#portfolio"  },
    ],
    cta: "Get Started",
  },
  hero: {
    eyebrow: "⚡ Blazing Fast Performance",
    headline: "Get More Customers",
    headlineAccent: "Through the Web",
    sub: "No coding or hosting knowledge needed. Just tell us about your business on WhatsApp — we handle everything from design to going live.",
    ctaPrimary: "Free Consultation",
    ctaSecondary: "View Our Work",
    badges: ["Free Consultation", "Ready in 7-14 Days", "Starting ₹10,000"],
    mockNav: ["Services", "Pricing", "Portfolio"],
    mockBadge: "Mobile First",
    mockBadgeSub: "100% Responsive",
  },
  noTemplate: {
    eyebrow: "What Sets Us Apart",
    headline: "We Build",
    headlineAccent: "Zero Templates.",
    sub: "We write fresh code using React.js and Next.js — not outdated approaches like WordPress.",
  },
  value: {
    eyebrow: "Simple Process",
    headline: "We Handle Everything",
    sub: "You don't need to know anything about coding, hosting, SEO or design. Send us your business details on WhatsApp — we do it all, A to Z.",
    cards: [
      {
        icon: "🧠",
        title: "No Tech Skills?",
        body: "Don't worry if you know nothing about coding or hosting. Just tell us about your business — we handle design, code and deploy.",
      },
      {
        icon: "⏱",
        title: "No Time?",
        body: "A 30-minute WhatsApp chat is enough. Send us your photos, prices and business details — your site will be live in 7-14 days.",
      },
      {
        icon: "💰",
        title: "Worried About Cost?",
        body: "Starting from ₹10,000. One-time payment. No monthly plugin charges, no annual hosting fees.",
      },
    ],
    pills: [
      "Domain Setup", "Custom Design", "React / Next.js",
      "Vercel CDN", "WhatsApp Integration", "SEO Optimized",
      "Mobile First", "Google Maps", "Free Revisions",
    ],
  },
  services: {
    headline: "Website & Digital Services",
    sub: "Premium solutions built with modern technology.",
    items: [
      { icon: "🌐", title: "Business Website",   body: "Landing pages, company profiles and shop websites — attract new customers online with a professional look." },
      { icon: "📅", title: "Online Booking",     body: "Automated real-time booking for hotels, laundry and services — manage everything from your phone." },
      { icon: "🛍️", title: "Online Store",      body: "Digital product catalog, shopping cart and UPI / bank transfer payment integration." },
      { icon: "⚙️", title: "Custom Web App",    body: "Business dashboards, sales reports, queue systems — built exactly to your specific business needs." },
      { icon: "🤖", title: "Automation & Bots", body: "WhatsApp bots, automated notifications and system integrations — save time and operational costs." },
    ],
    customTitle: "Have a Custom Project?",
    customBody: "Tell us about your business and we'll provide the best solution.",
    customCta: "💬 Chat on WhatsApp",
  },
  techStack: {
    eyebrow: "Tech Stack",
    headline: "Industry-Leading",
    headlineAccent: "Tech Stack",
    sub: "The same technology used by Netflix, Airbnb and the world's top companies.",
    stats: [
      { value: "< 1s",  label: "Vercel CDN load time",    color: "text-primary"    },
      { value: "90+",   label: "Google Lighthouse Score", color: "text-success"    },
      { value: "100%",  label: "Custom, zero templates",  color: "text-on-surface" },
    ],
  },
  compare: {
    headline: "WordPress vs Modern Tech Stack",
    wordpress: [
      "Slow loading speed (3-7s)",
      "Hacking and plugin vulnerabilities",
      "Monthly updates and maintenance",
      "Limited design freedom",
      "Monthly hosting & plugin charges",
    ],
    nextjs: [
      "Blazing fast performance (< 1s)",
      "Maximum security (Static Generation)",
      "Zero maintenance costs",
      "Fully custom design",
      "One-time payment only",
    ],
  },
  industries: {
    eyebrow: "Industries We Serve",
    headline: "Your Industry.",
    headlineAccent: "Your Growth.",
    sub: "Every business is different. We don't build generic websites. We build targeted digital platforms that solve your industry's real problems.",
    ctaTitle: "Don't see your industry?",
    ctaTitleAccent: "Let's talk.",
    ctaSub: "Every business has a unique story to tell online. Whether it's manufacturing, finance or any niche trade — we build it the way your customers search and decide.",
    ctaBtn: "Get Free Consultation →",
    bestFor: "Best for",
    items: [
      { icon: "🏥", tier: "hot",    name: "Hospitals & Clinics", sub: "Hospitals · Clinics · Diagnostic Labs · Wellness Centres", pitch: "Patients now search for doctors online. Let your website be their first consultation. ", bold: "You need to build trust immediately.", benefits: ["Online appointment booking — 60% fewer front-desk calls", "Doctor profiles & treatment gallery — builds trust instantly", "Multilingual pages — attract Tamil, English, Hindi patients", "Top of 'Doctor near me' search — Local SEO"], sig: "Patient booking portal" },
      { icon: "🍽️", tier: "hot",   name: "Restaurants & Cafes", sub: "Restaurants · Cafes · Cloud Kitchens · Catering", pitch: "Zomato and Swiggy take 25-30% per order. ", bold: "Direct orders through your own website — zero commission.", benefits: ["Direct online ordering — keep 100% of the aggregator margin", "Digital menu with photos — increases average order value", "Event & catering inquiry forms — bulk orders made easy", "WhatsApp CTA + Google Maps integration"], sig: "Direct order + menu site" },
      { icon: "🎓", tier: "hot",    name: "Education & Coaching", sub: "Coaching Centres · Colleges · Skill Institutes · Tutors", pitch: "Parents research and decide online. ", bold: "If your centre isn't on the web, it might as well not exist.", benefits: ["Online admission portal — enrolment without paperwork", "Result showcase & testimonials — word-of-mouth goes digital", "Course catalogue with batch schedules — fewer phone enquiries", "Ready landing pages for NEET, JEE campaigns"], sig: "Admission & course portal" },
      { icon: "🏗️", tier: "warm",  name: "Real Estate & Construction", sub: "Developers · Brokers · Interior Designers · Architects", pitch: "Buyers shortlist properties online before any site visit. ", bold: "A stunning website filters in only serious buyers.", benefits: ["Project showcase — floor plans, gallery, virtual tour", "Lead capture forms feeding directly into your CRM", "EMI calculator — keeps buyers on your page longer", "Interior portfolio — convince premium clients before the first meeting"], sig: "Project showcase + lead gen" },
      { icon: "🏨", tier: "warm",   name: "Hotels & Villas", sub: "Hotels · Resorts · Villas · Guest Houses", pitch: "Booking.com takes 15-20% commission. ", bold: "A direct booking website puts that margin back in your pocket.", benefits: ["Premium photo gallery & virtual tour", "Direct booking system — no OTA commission", "Guest review integration — trust builds automatically", "SEO for 'hotels near [location]' — free organic traffic"], sig: "Direct booking site" },
      { icon: "🛍️", tier: "warm",  name: "E-commerce & Retail", sub: "Fashion · Textiles · Electronics · Handicrafts · Foods", pitch: "Indian textiles and handicrafts have global demand. ", bold: "A direct-to-consumer store sells beyond your district.", benefits: ["Mobile-first design — converts smartphone shoppers", "UPI, Razorpay, COD integration", "Automated inventory & order management", "WhatsApp integration — organic traffic, zero ad spend"], sig: "D2C e-commerce store" },
      { icon: "🧺", tier: "steady", name: "Laundry & Home Services", sub: "Laundry · Home Cleaning · Pest Control · AC Service", pitch: "A trustworthy local service just needs to be found online. ", bold: "First impression online — customers pick up the phone.", benefits: ["Online booking — WhatsApp confirmations automated", "Real-time order tracking — fewer customer calls", "Digital invoice & payment — professional look", "Local SEO — rank top in neighbourhood searches"], sig: "Online booking system" },
      { icon: "🚚", tier: "steady", name: "Transport & Logistics", sub: "Freight · Logistics · Warehousing · Transport", pitch: "B2B clients check your website first when evaluating vendors. ", bold: "A professional platform puts you in a different league.", benefits: ["Online freight quote forms — no missed calls", "Shipment tracking dashboard — fewer follow-up calls", "Corporate website — credibility for enterprise clients", "SEO for freight terms — free inbound B2B leads"], sig: "B2B freight portal" },
      { icon: "🏪", tier: "steady", name: "Small Businesses & Shops", sub: "Retail Shops · Salons · Repair Shops · Consultancies", pitch: "Every business needs an online presence now. ", bold: "Simple, fast website — customers trust you, referrals come.", benefits: ["Professional landing page — your digital visiting card", "Service / product catalogue", "Customer testimonials — builds social proof", "WhatsApp CTA + Local SEO"], sig: "Business landing page" },
    ],
  },
  pricing: {
    headline: "Transparent",
    headlineAccent: "Pricing",
    sub: "No hidden fees. One-time payment only.",
    footnote: "Prices may vary by project scope. One-time payment only.",
    tiers: [
      { name: "Starter",  price: "₹10,000 - 15,000", timeline: "Ready in 5-7 Days",   cta: "Choose Plan", waMsg: "Hello%2C%20I%27m%20interested%20in%20the%20Starter%20package.", features: ["1 Landing Page", "WhatsApp CTA button", "Google Maps embed", "Mobile-responsive", "Basic SEO", "Vercel hosting", "1 revision"] },
      { name: "Standard", price: "₹25,000 - 40,000", timeline: "Ready in 10-14 Days", cta: "Start Now",    waMsg: "Hello%2C%20I%27m%20interested%20in%20the%20Standard%20package.", popular: true, features: ["3-5 Pages", "Photo / Video Gallery", "Services & Pricing page", "WhatsApp integration", "Full SEO", "Google Analytics", "3 revisions"] },
      { name: "Custom",   price: "₹60,000+",          timeline: "Ready in 14-30 Days", cta: "Get a Quote", waMsg: "Hello%2C%20I%27d%20like%20to%20discuss%20a%20custom%20project.", features: ["Multi-page & Dashboard", "Booking system", "Admin dashboard", "Database integration", "WhatsApp bot", "Unlimited revisions", "1 month support"] },
    ],
  },
  portfolio: {
    eyebrow: "GitHub Projects",
    headline: "Our Work",
    viewGithub: "View on GitHub",
    projects: [
      { icon: "🎨", color: "bg-primary/10 border-primary/20",   title: "Krima Arts",    desc: "A creative arts showcase website built for an art business.", tags: ["HTML", "CSS"], segment: "Creative / Arts", href: "https://github.com/gkpandian-sudo/krima_arts" },
      { icon: "📧", color: "bg-success/10 border-success/20",   title: "Gmail Cleanup", desc: "A Google Apps Script that bulk-marks all unread Gmail threads as read.", tags: ["JavaScript", "Google Apps Script"], segment: "Automation / Productivity", href: "https://github.com/gkpandian-sudo/gmail-cleanup-" },
      { icon: "👤", color: "bg-[#F59E0B]/10 border-[#F59E0B]/20", title: "Pandian",    desc: "Personal portfolio and profile showcase — a personal branding project.", tags: ["HTML", "Personal Project"], segment: "Portfolio", href: "https://github.com/gkpandian-sudo/pandian" },
    ],
  },
  faq: {
    headline: "Frequently Asked Questions",
    items: [
      { q: "Why not use WordPress?", a: "WordPress is slow and constantly needs security updates. Our Next.js technology is 10× faster with no hacking risk. No monthly plugin charges either." },
      { q: "How long will it take to build my website?", a: "Starter: 5-7 days. Standard: 10-14 days. Custom: 14-30 days. Work starts as soon as you send your business details on WhatsApp." },
      { q: "Will SEO be done?", a: "Absolutely! All basic SEO work will be done so your site ranks on search engines. Standard and Custom packages include full SEO, meta tags and Google Analytics." },
      { q: "What about hosting and domain costs?", a: "Hosting on Vercel is free. No monthly charges. Only the domain name costs ~₹800-1,500 per year." },
      { q: "Can I make changes later?", a: "The full source code is yours on GitHub. You can make changes any time. We also provide revision support." },
    ],
  },
  cta: {
    headline: "Ready to Take Your Business Digital?",
    sub: "Free consultation, no commitment. Tell us about your business — we handle everything, A to Z.",
    badges: ["Free Consultation", "Quick Response", "Real Portfolio", "Mobile-Friendly"],
    btn: "💬 Chat on WhatsApp",
  },
  footer: {
    brand: "Vera Level Digital",
    tagline: "Dhamaka Digital — web solutions for India's businesses.",
    quickLinks: "Quick Links",
    contact: "Contact",
    copyright: "© 2025 Vera Level Digital. All rights reserved.",
  },
}

// ═══════════════════════════════════════════════════════════════════════
// Context
// ═══════════════════════════════════════════════════════════════════════
const translations: Record<Lang, Translations> = { ta, hi, en }

interface LangCtx {
  lang:    Lang
  setLang: (l: Lang) => void
  t:       Translations
}

const LangContext = createContext<LangCtx>({
  lang:    "ta",
  setLang: () => {},
  t:       ta,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ta")

  useEffect(() => {
    const saved = localStorage.getItem("vld-lang") as Lang | null
    if (saved && translations[saved]) setLangState(saved)
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem("vld-lang", l)
    // Update <html> lang attribute for screen-readers and font targeting
    document.documentElement.lang = l
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

/**
 * ForcedLangProvider — pins the language to a fixed value.
 * Used by dedicated route pages (e.g. /hi) so all child components
 * render in that language regardless of localStorage.
 */
export function ForcedLangProvider({
  lang,
  children,
}: {
  lang: Lang
  children: ReactNode
}) {
  // setLang is a no-op here — the page controls its own language
  return (
    <LangContext.Provider value={{ lang, setLang: () => {}, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

/**
 * HindiLangProvider — starts at Hindi, allows HI ↔ EN switching.
 * Uses a separate localStorage key ("dd-lang") so it doesn't
 * conflict with the main site's Tamil/Hindi/English preference.
 */
export function HindiLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("hi")

  useEffect(() => {
    const saved = localStorage.getItem("dd-lang") as Lang | null
    if (saved === "hi" || saved === "en") setLangState(saved)
  }, [])

  function setLang(l: Lang) {
    if (l !== "hi" && l !== "en") return   // only HI and EN allowed on this page
    setLangState(l)
    localStorage.setItem("dd-lang", l)
    document.documentElement.lang = l
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
