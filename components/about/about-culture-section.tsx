"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const slides = [
  {
    title: "OUR CULTURE, BUILT ON INTEGRITY AND CRAFT",
    text: "We are a people-driven organization where strong results begin with strong teams. We foster a workplace where individuals are trained, supported, and given room to grow—while being held to high standards for safety, accountability, and quality.",
  },
  {
    title: "BUILT FOR THE LONG TERM",
    text: "While rooted in history, Frank Capasso & Sons remains focused on the future. The firm continues to invest in its people, refine its processes, and strengthen its capabilities to meet the evolving demands of masonry and concrete restoration—ensuring lasting value for clients and communities alike.",
  },
]

export default function AboutCultureSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const triggerFade = (nextIndex: number) => {
    setIsFading(true)
    setTimeout(() => {
      setActiveSlide(nextIndex)
      setIsFading(false)
    }, 500) // fade-out time
  }

  // ✅ AUTO PLAY (every 6000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      triggerFade((activeSlide + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [activeSlide])

  const goTo = (index: number) => {
    if (index === activeSlide) return
    triggerFade(index)
  }

  return (
    <section className="relative">
      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        {/* Top image */}
        <div className="relative h-[260px] w-full">
          <Image
            src="/our_team.png"
            alt="Our Team"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Card */}
        <div className="bg-[#111] px-6 py-10">
          <div className="mx-auto w-full max-w-lg">
            <div className="relative w-full">
              <Image
                src="/card.png"
                alt="Card background"
                width={900}
                height={600}
                className="h-auto w-full"
                priority
              />

              {/* Fade content */}
              <div
                className={`absolute inset-0 flex flex-col justify-center px-8 py-7 text-white transition-opacity duration-700 ease-in-out ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
              >
                <h2 className="text-lg font-bold uppercase leading-tight tracking-tight">
                  {slides[activeSlide].title}
                </h2>

                <p className="mt-3 text-xs leading-relaxed text-white/90">
                  {slides[activeSlide].text}
                </p>
              </div>

              {/* Dots INSIDE card */}
              <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-3 w-3 rounded-full transition-colors ${
                      i === activeSlide
                        ? "bg-white"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <section className="relative min-h-[550px] lg:min-h-[650px]">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/our_team.png"
              alt="Our Team"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex min-h-[550px] items-end px-6 pb-12 lg:min-h-[650px] lg:px-16 lg:pb-16">
            <div className="w-full max-w-lg">
              <div className="relative w-full">
                <Image
                  src="/card.png"
                  alt="Card background"
                  width={900}
                  height={600}
                  className="h-auto w-full"
                  priority
                />

                {/* Fade content */}
                <div
                  className={`absolute inset-0 flex flex-col justify-center px-10 py-8 text-white transition-opacity duration-700 ease-in-out ${
                    isFading ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h2 className="text-2xl font-bold uppercase leading-tight tracking-tight lg:text-3xl">
                    {slides[activeSlide].title}
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-white/90 lg:text-base">
                    {slides[activeSlide].text}
                  </p>
                </div>

                {/* Dots INSIDE card */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-3 w-3 rounded-full transition-colors ${
                        i === activeSlide
                          ? "bg-white"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}