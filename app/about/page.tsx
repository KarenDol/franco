import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutHero from "@/components/about/about-hero"
import FounderSection from "@/components/about/founder-section"
import LegacySection from "@/components/about/legacy-section"
import TimelineSection from "@/components/about/timeline-section"
import AboutCultureSection from "@/components/about/about-culture-section"
import AwardsSection from "@/components/about/awards-section"
import TestimonialsSection from "@/components/about/testimonials-section"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Frank Capasso & Sons, Inc.",
  description:
    "Learn about Frank Capasso & Sons - a legacy of restoration expertise since 1970. Family owned and operated masonry and concrete restoration firm in Connecticut.",
}

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <FounderSection />
      <LegacySection />
      <TimelineSection />
      <AboutCultureSection />
      <AwardsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
