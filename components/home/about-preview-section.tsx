import Link from "next/link"

export default function AboutPreviewSection() {
  return (
    <section className="relative min-h-[500px] lg:min-h-[550px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about-brick-section.jpg')" }}
      />

      {/* Content Overlay - positioned to the right */}
      <div className="relative z-10 flex min-h-[500px] items-center justify-end px-6 lg:min-h-[550px] lg:px-16">
        <div className="w-full max-w-md bg-[#cc0000] p-8 lg:p-10">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-white lg:text-3xl">
            About Frank Capasso & Sons, Inc
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/90 lg:text-base">
            One focus. Five decades. Proven experience and precision you can
            trust in masonry and concrete restoration
          </p>
          <div className="mt-6">
            <Link
              href="/about"
              className="inline-block border-2 border-white px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#cc0000]"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
