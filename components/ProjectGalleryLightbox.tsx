"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/plugins/thumbnails.css"

import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"

type GalleryImage = { src: string; alt: string }

export default function ProjectGalleryLightbox({
  images,
}: {
  images: GalleryImage[]
}) {
  const safeImages = useMemo(
    () =>
      (images ?? [])
        .filter((i) => !!i?.src)
        .map((i) => ({ src: i.src, alt: i.alt || "" })),
    [images]
  )

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  if (!safeImages.length) return null

  return (
    <>
      {/* Grid (all thumbnails same size) */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
        {safeImages.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            type="button"
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
            className="relative aspect-[4/3] overflow-hidden bg-neutral-100"
            aria-label={`Open image ${i + 1}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 33vw, 50vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={safeImages}
        plugins={[Thumbnails, Zoom, Fullscreen]}
        carousel={{ finite: false }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 70,
          border: 0,
          padding: 6,
          gap: 8,
        }}
        zoom={{ maxZoomPixelRatio: 3 }}
        on={{ view: ({ index: i }) => setIndex(i) }}
      />
    </>
  )
}