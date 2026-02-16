import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

import type { Metadata } from "next"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects | Frank Capasso & Sons, Inc.",
  description:
    "View our portfolio of masonry and concrete restoration projects across Connecticut and the New England region.",
}

export default function ProjectsPage() {
  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="relative flex items-center justify-center min-h-[295px] lg:min-h-[365px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/projects.png')" }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            Our Projects
          </h1>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-background px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group block cursor-pointer overflow-hidden rounded-sm bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={p.cardImage.src}
                    alt={p.cardImage.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="px-7 py-7">
                  <h3 className="text-xl font-extrabold leading-snug text-black whitespace-pre-line">
                    {p.cardTitle}
                  </h3>

                  <span className="mt-6 inline-block text-xs font-extrabold uppercase tracking-widest text-[#cc0000] transition-colors group-hover:text-[#E7000B]">
                    View Project
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}