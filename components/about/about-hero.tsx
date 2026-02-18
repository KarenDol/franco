"use client"

import { useEffect, useRef, useState } from "react"
import ProgressiveImage from "@/components/ProgressiveImage"

export default function AboutHero() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setReducedMotion(mq.matches)
    apply()
    mq.addEventListener?.("change", apply)
    return () => mq.removeEventListener?.("change", apply)
  }, [])

  return (
    <section className="relative flex min-h-[350px] items-center justify-center overflow-hidden lg:min-h-[400px]">
      {/* Progressive poster is ALWAYS there under video */}
      <div className="absolute inset-0">
        <ProgressiveImage
          lowSrc="/about-us-poster.jpg"
          highSrc="/about-us-poster.jpg"
          alt="About Us"
          priority
          className="object-cover"
        />
      </div>

      {/* Video fades in when ready (no flicker) */}
      {!reducedMotion && (
        <video
          ref={videoRef}
          className={[
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            videoReady ? "opacity-100" : "opacity-0",
          ].join(" ")}
          src="/about-us.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"          // ✅ do NOT use none for autoplay background
          onLoadedData={() => setVideoReady(true)} // ✅ reliable "ready" signal
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 px-6 pt-20 text-center">
        <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-[1px_1px_0_rgba(0,0,0,0.9)]">
          About Us
        </h1>
      </div>
    </section>
  )
}
