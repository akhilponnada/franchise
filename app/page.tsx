import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyFranchiseSection } from "@/components/why-franchise-section"
import { HowFranchiseWorksSection } from "@/components/how-franchise-works-section"
import { FranchiseEntryTiersSection } from "@/components/franchise-entry-tiers-section"
import { RevenueStreamsSection } from "@/components/revenue-streams-section"
import { TechnologySection } from "@/components/technology-section"
import { TrustedPartnersSection } from "@/components/trusted-partners-section"
import { FAQSection } from "@/components/faq-section"
import { BenefitsSection } from "@/components/benefits-section"
import { InvestmentSection } from "@/components/investment-section"
import { SolcartSection } from "@/components/solcart-section"
import { ApplicationForm } from "@/components/application-form"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhyFranchiseSection />
        <HowFranchiseWorksSection />
        <FranchiseEntryTiersSection />
        <RevenueStreamsSection />
        <TechnologySection />
        <TrustedPartnersSection />
        <AboutSection />
        <BenefitsSection />
        <InvestmentSection />
        <SolcartSection />
        <FAQSection />
        <ApplicationForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
