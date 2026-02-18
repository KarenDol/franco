import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceHero from "@/components/services/service-hero"
import ServiceDescription from "@/components/services/service-description"
import WhyChooseSection from "@/components/services/why-choose-section"
import GallerySection from "@/components/services/gallery-section"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"

import { SERVICES, type ServiceKey } from "@/lib/services"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const key = slug as ServiceKey
  const service = SERVICES[key]
  if (!service) return { title: "Service Not Found" }
  return service.meta
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const key = slug as ServiceKey
  const service = SERVICES[key]
  if (!service) notFound()

  return (
    <main>
      <Header />

      <ServiceHero
        bgImage={service.hero.bgImage}
        bgLowImage={service.hero.bgLowImage}
        eyebrow={service.hero.eyebrow}
        headingLine1={service.hero.headingLine1}
        headingLine2={service.hero.headingLine2}
        priority
      />

      <ServiceDescription text={service.description} />

      <WhyChooseSection
        image={service.why.image}
        lowImage={service.why.lowImage}
        lead={service.why.lead}
        points={service.why.points}
        priority={false}
      />

      {key === "historic" && (
      <section className="bg-background px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <BeforeAfterSlider
            beforeSrc="/services/historic_face_after.jpg"
            afterSrc="/services/historic_face_before.jpg"
            beforeLabel="Before"
            afterLabel="After"
            initial={50}
            priority={false}
            className="mx-auto aspect-[4/3] max-w-3xl"
          />
        </div>
      </section>
    )}

      <GallerySection images={service.gallery} />

      <Footer />
    </main>
  )
}