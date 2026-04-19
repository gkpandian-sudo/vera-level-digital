// -- Vera Level Digital — Main Page --
// Assembles all section components in order.
// Each section manages its own scroll-triggered animation.

import Nav            from "@/components/nav"
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
import Footer         from "@/components/footer"
import WhatsAppFloat  from "@/components/whatsapp-float"

export default function Home() {
  return (
    <>
      <Nav />

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

      <Footer />

      {/* Floating WhatsApp CTA — visible on all scroll depths */}
      <WhatsAppFloat />
    </>
  )
}
