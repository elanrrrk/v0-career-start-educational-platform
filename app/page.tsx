import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { PainSolutionSection } from "@/components/landing/pain-solution-section"
import { SocialProofSection } from "@/components/landing/social-proof-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { BlogPreviewSection } from "@/components/landing/blog-preview-section"
import { CTASection } from "@/components/landing/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <PainSolutionSection />
        <HowItWorksSection />
        <BlogPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
