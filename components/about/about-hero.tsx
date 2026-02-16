export default function AboutHero() {
  return (
    <section className="relative flex min-h-[350px] items-center justify-center lg:min-h-[400px]">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/about-us.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 px-6 pt-20 text-center">
        <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white 
        md:text-5xl lg:text-6xl 
        drop-shadow-[1px_1px_0_rgba(0,0,0,0.9)]">
          About us
        </h1>
      </div>
    </section>
  )
}
