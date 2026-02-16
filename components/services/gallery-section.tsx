"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Props = { images: string[] }

export default function GallerySection({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [images])

  return (
    <section className="px-6 py-16 lg:py-24 bg-[linear-gradient(to_bottom,#cc0000_70%,white_70%)]">
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-6">
        <button
          onClick={prev}
          aria-label="Previous image"
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden">
          {images.map((img, index) => (
            <img
              key={img}
              src={img}
              alt={`Project gallery image ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next image"
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  )
}