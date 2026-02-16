import Link from "next/link"

export default function ProjectsSection() {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/projects-night.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Overlay - positioned right */}
      <div className="relative z-10 flex min-h-[500px] items-end justify-end px-6 pb-12 lg:min-h-[600px] lg:px-16 lg:pb-16">
        <div className="w-full max-w-md bg-[#cc0000] p-8 lg:p-10">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-white lg:text-3xl">
            Our Projects
            <br />
            Our Purpose
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/90 lg:text-base">
            We Purpose every Projects with a purpose. To restore every structural
            integrity, protect what matters and extend the life of existing
            buildings safely, reliably and for a long term.
          </p>
          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-block border-2 border-white px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#cc0000]"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
