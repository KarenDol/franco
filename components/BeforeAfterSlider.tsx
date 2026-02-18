"use client"

import Image from "next/image"
import { useEffect, useId, useRef, useState } from "react"

type BeforeAfterSliderProps = {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
  /** 0..100 */
  initial?: number
  className?: string
  /** Optional corner labels */
  beforeLabel?: string
  afterLabel?: string
  /** If true, loads images eagerly */
  priority?: boolean
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  initial = 50,
  className = "",
  beforeLabel = "Before",
  afterLabel = "After",
  priority = false,
}: BeforeAfterSliderProps) {
  const id = useId()
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const [pct, setPct] = useState(() => clamp(initial, 0, 100))
  const draggingRef = useRef(false)

  const setFromClientX = (clientX: number) => {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = clientX - rect.left
    const next = (x / rect.width) * 100
    setPct(clamp(next, 0, 100))
  }

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return
      setFromClientX(e.clientX)
    }
    const onUp = () => {
      draggingRef.current = false
    }

    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    window.addEventListener("pointercancel", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
      window.removeEventListener("pointercancel", onUp)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className={[
        "relative overflow-hidden rounded-2xl bg-black/5 select-none",
        "w-full max-w-xl aspect-square",
        className,
      ].join(" ")}
      onPointerDown={(e) => {
        draggingRef.current = true
        ;(e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId)
        setFromClientX(e.clientX)
      }}
      role="group"
      aria-label="Before and after image comparison"
    >
      {/* BEFORE (base) */}
      <Image
        src={beforeSrc}
        alt={beforeAlt}
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        priority={priority}
        className="object-cover"
      />

      {/* AFTER (clipped) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - pct}% 0 0)`,
        }}
        aria-hidden="true"
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          priority={priority}
          className="object-cover"
        />
      </div>

      {/* Labels */}
      <div className="absolute left-3 top-3 z-10">
        <span className="rounded-md bg-black/80 px-2.5 py-1 text-xs font-semibold text-white">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute right-3 top-3 z-10">
        <span className="rounded-md bg-black/80 px-2.5 py-1 text-xs font-semibold text-white">
          {afterLabel}
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute inset-y-0 z-20 w-[2px] bg-white/90"
        style={{ left: `calc(${pct}% - 1px)` }}
        aria-hidden="true"
      />

      {/* Handle */}
      <button
        type="button"
        className={[
          "absolute top-1/2 z-30 -translate-y-1/2",
          "h-11 w-11 rounded-full bg-white shadow-lg",
          "ring-1 ring-black/10",
          "grid place-items-center",
          "cursor-ew-resize",
        ].join(" ")}
        style={{ left: `calc(${pct}% - 22px)` }}
        aria-label="Drag to compare"
        onPointerDown={(e) => {
          e.stopPropagation()
          draggingRef.current = true
          ;(e.currentTarget as HTMLButtonElement).setPointerCapture?.(e.pointerId)
          setFromClientX(e.clientX)
        }}
      >
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <ChevronLeft />
          <ChevronRight />
        </span>
      </button>

      {/* Range input for accessibility (hidden but usable for screen readers) */}
      <label className="sr-only" htmlFor={`${id}-range`}>
        Comparison slider
      </label>
      <input
        id={`${id}-range`}
        className="sr-only"
        type="range"
        min={0}
        max={100}
        value={Math.round(pct)}
        onChange={(e) => setPct(Number(e.target.value))}
      />
    </div>
  )
}

function clamp(n: number, a: number, b: number) {
  return Math.min(b, Math.max(a, n))
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
