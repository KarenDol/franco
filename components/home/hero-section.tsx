import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden lg:min-h-[700px]">
  
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/background.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/10" /> */}

      {/* Content */}
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
