"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

// Network Information API (not in standard Navigator types)
type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean; effectiveType?: string }
}

// Prefer poster-only on mobile/slow connections to avoid lag
function shouldLoadVideo(): boolean {
  if (typeof window === "undefined") return true
  const nav = navigator as NavigatorWithConnection
  // Skip video when user prefers less data
  if (nav.connection?.saveData) return false
  // Optional: skip on slow connection (uncomment if you want)
  // if (nav.connection?.effectiveType === "2g" || nav.connection?.effectiveType === "slow-2g") return false
  // Optional: skip on small viewports to reduce decode cost (uncomment if needed)
  // if (window.innerWidth < 768) return false
  return true
}

export default function HeroSection() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [hiLoaded, setHiLoaded] = useState(false)
  const [videoShouldLoad, setVideoShouldLoad] = useState<boolean | null>(null)
  const [videoSrc, setVideoSrc] = useState<string | null>(null)

  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mediaQuery.matches)
    setVideoShouldLoad(shouldLoadVideo())
  }, [])

  // Defer loading video until hero is in view (reduces initial load and decode jank)
  useEffect(() => {
    if (videoShouldLoad === false || reducedMotion) return

    const el = sectionRef.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry?.isIntersecting && !videoSrc) {
          setVideoSrc("/background.mp4")
        }
      },
      { rootMargin: "50px", threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [videoShouldLoad, reducedMotion, videoSrc])

  const showVideo = !reducedMotion && videoShouldLoad !== false && videoSrc

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden lg:min-h-[700px]"
    >

      {/* ================= Progressive Image ================= */}

      <div className="absolute inset-0">

        {/* LOW RES */}
        <Image
          src="/hero-poster.jpg"
          alt=""
          fill
          priority
          className={[
            "object-cover blur-lg scale-110 transition-opacity duration-700",
            hiLoaded ? "opacity-0" : "opacity-100",
          ].join(" ")}
        />

        {/* HIGH RES */}
        <Image
          src="/hero-poster.jpg"
          alt=""
          fill
          priority={false}
          loading="eager"
          className={[
            "object-cover transition-opacity duration-700",
            hiLoaded ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onLoadingComplete={() => setHiLoaded(true)}
        />

      </div>

      {/* ================= Video (deferred, only when in view + not low-data) ================= */}

      {showVideo && (
        <video
          ref={videoRef}
          className={[
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            "[transform:translateZ(0)] [backface-visibility:hidden]",
            videoReady ? "opacity-100" : "opacity-0",
          ].join(" ")}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoReady(true)}
        >
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* ================= Content ================= */}

      <div className="relative z-10 px-6 py-32 text-center">
        <h1 className="mx-auto max-w-5xl text-4xl font-semibold uppercase leading-tight tracking-tight text-white 
        md:text-5xl lg:text-6xl 
        drop-shadow-[2px_2px_0_rgba(0,0,0,0.9)]">
          Built on a Proven Legacy of Masonry & Concrete Restoration for Over 50 Years
        </h1>

        <div className="mt-8">
          <Link
            href="/about"
            className="inline-block bg-[#E7000B] px-12 py-3 text-base font-bold tracking-wide text-white transition-all duration-300 hover:bg-[#cc0000]"
          >
            Family Owned and Operated Since 1970
          </Link>
        </div>
      </div>
    </section>
  )
}