import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import ProjectGalleryLightbox from "@/components/ProjectGalleryLightbox"
import { projects, getProjectBySlug, getRecentProjects } from "@/lib/projects"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export const dynamic = "force-static"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = getProjectBySlug(slug)
  if (!project) return <div className="p-10">Project not found.</div>

  const recent = getRecentProjects(project.slug, 3)

  const heroSrc = project.heroImage?.src || project.cardImage?.src
  const heroAlt = project.heroImage?.alt || project.cardImage?.alt || project.title

  return (
    <main className={`${poppins.className} bg-white`}>
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative h-[420px] md:h-[560px] w-full overflow-hidden">
        <Image src={heroSrc} alt={heroAlt} fill priority className="object-cover" />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-6xl w-full">
            <p className="text-white/85 tracking-[0.25em] text-xs md:text-sm font-semibold">
              {project.completedLabel}
            </p>

            <h1 className="mt-4 text-white font-black leading-[0.95] tracking-[-0.03em] text-4xl sm:text-5xl md:text-7xl">
              {project.title}
            </h1>
          </div>

          <div className="mt-16 md:mt-24 w-full px-6">
            <div className="mx-auto max-w-6xl bg-black/40 px-6 md:px-10 py-4 md:py-6 lg:py-8">
              <div className="grid grid-cols-3 items-center text-white font-extrabold text-sm md:text-base lg:text-lg">
                <div className="text-left">{project.locationLabel}</div>
                <div className="text-center">{project.serviceLabel}</div>
                <div className="text-right">{project.yearLabel}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#E7000B]" />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2 className="text-[30px] md:text-[36px] font-bold tracking-[-0.02em]">
              {project.challengeTitle}
            </h2>

            <div
              className="mt-6 text-[20px] md:text-base leading-9 text-black/50 text-balance"
              dangerouslySetInnerHTML={{ __html: project.challengeBody }}
            />
          </div>

          <div>
            <h2 className="text-[30px] md:text-[36px] font-bold leading-tight tracking-[-0.02em]">
              {project.galleryTitle}
            </h2>

            <ProjectGalleryLightbox images={project.galleryImages} />

            <div className="mt-10 bg-[#111] text-white px-8 py-7">
              <h3 className="text-xl md:text-2xl font-bold">{project.noteworthyTitle}</h3>
            </div>

            <ul className="mt-6 list-disc pl-6 space-y-1 text-[20px] italic font-medium text-black/90">
              {project.noteworthyBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= RECENT PROJECTS ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-20 text-center">
          <p className="text-notmal tracking-[0.35em] font-semibold text-black/50 underline decoration-[#E7000B] decoration-2 underline-offset-4">
            VIEW OTHER
          </p>

          <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-[-0.03em]">
            Recent Projects
          </h2>

          {/* ✅ UPDATED: whole cards are links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {recent.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group block bg-white border border-black/10 shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
                  <Image
                    src={p.cardImage.src}
                    alt={p.cardImage.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-xl md:text-2xl font-extrabold leading-tight whitespace-pre-line">
                    {p.cardTitle}
                  </h3>

                  {/* not a Link anymore (prevents nested links) */}
                  <span className="inline-block mt-6 text-[#E7000B] font-bold tracking-[0.15em] text-xs">
                    VIEW DETAILS
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center mt-14 bg-[#E7000B] text-white font-extrabold tracking-[0.18em] text-xs px-10 py-5"
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
      </section>
    </main>
  )
}