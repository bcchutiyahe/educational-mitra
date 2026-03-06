import { HeroSection } from "@/components/home/hero-section"
import { HowItWorks } from "@/components/home/how-it-works"
import { CoursesGrid } from "@/components/home/courses-grid"
import { WhyUs } from "@/components/home/why-us"
import { PartnerStrip } from "@/components/home/partner-strip"
import { Testimonials } from "@/components/home/testimonials"
import { CoverageSection } from "@/components/home/coverage-section"
import { LeadSection } from "@/components/home/lead-section"
import { AboutSnippet } from "@/components/home/about-snippet"

export default function HomePage() {
  return (
    <div className="pb-16 md:pb-0">
      <HeroSection />
      <HowItWorks />
      <CoursesGrid />
      <WhyUs />
      <PartnerStrip />
      <Testimonials />
      <CoverageSection />
      <LeadSection />
      <AboutSnippet />
    </div>
  )
}
