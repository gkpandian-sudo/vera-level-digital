// -- Dhamaka Digital — Dedicated Hindi Page (/hi) --
// All components render in Hindi via ForcedLangProvider in layout.tsx.
// Nav shows HI | EN switcher only (no Tamil).

import HindiNav       from "@/components/hi/hi-nav"
import Hero           from "@/components/hero"
import NoTemplate     from "@/components/no-template"
import Value          from "@/components/value"
import Services       from "@/components/services"
import TechStack      from "@/components/tech-stack"
import Compare        from "@/components/compare"
import Industries     from "@/components/industries"
import Pricing        from "@/components/pricing"
import Portfolio      from "@/components/portfolio"
import Faq            from "@/components/faq"
import Cta            from "@/components/cta"
import HindiFooter    from "@/components/hi/hi-footer"
import WhatsAppFloat  from "@/components/whatsapp-float"

export default function HindiPage() {
  return (
    <>
      <HindiNav />

      <main>
        <Hero />
        <NoTemplate />
        <Value />
        <Services />
        <TechStack />
        <Compare />
        <Industries />
        <Pricing />
        <Portfolio />
        <Faq />
        <Cta />
      </main>

      <HindiFooter />

      {/* Floating WhatsApp CTA */}
      <WhatsAppFloat />
    </>
  )
}
