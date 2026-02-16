import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import type { Metadata } from "next"

const posts = [
  {
    slug: "saint-francis-ribbon-cutting",
    title:
      "Saint Francis Hospital Holds Ribbon Cutting Ceremony For The Frank Capasso and Sons Parking Garage",
    date: "October 23, 2024",
    hero: "/news1.jpg",
    content: [
      "Saint Francis Hospital officially opened the Frank Capasso & Sons Visitor Parking Garage earlier this month, and the Capasso family was on hand for a ceremonial ribbon cutting to celebrate the milestone. Vinny Capasso, President of Frank Capasso & Sons, along with his brother Anthony and several other family members, took part in the ceremony to open the garage that was named in honor of their father.",

      "The Capasso family, long-time philanthropic supporters of Saint Francis, have shown remarkable generosity over the years, supporting patients and colleagues in a myriad of ways, including the Miracles Gala, the Hope and Healing Cancer Center Campaign, the New Beginnings Family Birth Care Center renovations, and creating a special fund for state-of-the-art equipment, new programs, and other initiatives that continue to enhance the care provided to patients and families.",

      "The Capasso ribbon cutting was the first recognition of the opening of the new parking garage. A larger colleague celebration will be held in the coming weeks once all colleagues have returned to on-campus parking."
    ],
    sourceLabel: "To read the full original article,",
    sourceHref: "https://www.trinityhealthofne.org/today/sfh-0924-capasso-ribbon-cutting",
    sourceText: "CLICK HERE",
  },
  {
    slug: "icri-award-highrise",
    title: "Frank Capasso & Sons Receives ICRI Project Award for Highrise Category",
    date: "October 5, 2023",
    hero: "/news1.jpg",
    content: [
      "Accompanying the addition of the Robert B. Haas Family Arts Library and the Jeffrey H. Loria Center for the History of Art, the restoration of Yale University’s Paul Rudolph Hall (formerly the Art + Architecture Building) called for uncommon approaches to unconventional concrete design.",

      "Completed in 1963, this landmark of modern architecture anchors a gateway corner of the Yale campus. The 114,000-square-foot (10,591-square-meter) structure, constructed of cast-in-place concrete, is terraced into 37 levels on nine stories, two below grade. Rudolph’s distinctive tongue-in-groove and corrugated surfaces mark the megalithic dimensions of the concrete slabs.",

      "Recreating the plane of a façade that had undergone multiple, increasingly destructive renovations necessitated the development of superior concrete products and creative repair strategies. Enormous spandrel expanses bearing the weight of some of the largest sheets of glass ever made were restored with a layer of concrete just 2 inches (50 mm) deep yet up to 70 feet (21 m) long. The precision of wood molds custom-crafted to each individual concrete rib’s dimensions was paired with the roughness of bush-hammering to achieve the interplay of form and texture that defines this Brutalist icon.",

      "Faithful reproduction of the original design—while addressing and fixing some of the problems inherent to that design—demanded a holistic approach to concrete restoration, from the creation of exterior light wells to the selection and application of interior surface-cleaning products. With its characteristic use of heavy concrete forms and rich textures, Paul Rudolph Hall presented architectural detailing and engineering challenges in the functional re-articulation of its evocative surfaces. This rehabilitation served to restore Rudolph’s original vision while integrating practical improvements to ensure both the aesthetic integrity and longevity of the monumental concrete.",

      "The completed complex achieved a Leadership in Energy and Environmental Design (LEED) Silver rating."
    ],
    // sourceLabel: "To read the full original article,",
    // sourceHref: "https://www.icri.org/page/AOE09_PaulRudolphHal",
    // sourceText: "CLICK HERE",
  },
  {
    slug: "paint-square-news",
    title: "Frank Capasso & Sons Featured in PaintSquare News",
    date: "September 29, 2023",
    hero: "/news1.jpg",
    content: [
      "Frank Capasso & Sons Inc. led the full restoration and reconstruction of a decades-old plaza originally built in the early 1980s with brick pavers set in mortar over a hot-applied waterproofing system on a structural deck.",

      "The project required complete demolition of the existing brick paver system and removal of soil from planters, followed by installation of new walkways, a modern waterproofing assembly, and pedestal pavers engineered for long-term performance.",

      "To correct drainage deficiencies, the team created proper slope within a new concrete topping slab, directing water efficiently toward drains before installing the waterproofing system. This step was critical to ensuring durability and preventing future moisture intrusion.",

      "Capasso & Sons’ Kemper-certified crews executed a multi-step membrane application process, beginning with an epoxy primer to ensure strong adhesion, followed by reinforced polyurethane resin layers with embedded fleece at transitions and penetrations.",

      "Once cured, the seamless membrane system provides a continuous, high-performance barrier designed to withstand ponding water, freeze-thaw cycles, root intrusion, chemicals, and ultraviolet exposure — ensuring structural protection for years to come."
    ],
    sourceLabel: "To read the full original article,",
    sourceHref: "https://www.paintsquare.com/news/view/?18631",
    sourceText: "CLICK HERE",
  },
  {
    slug: "greenwich-time-news",
    title: "Frank Capasso & Sons Featured in Greenwich Time News",
    date: "September 29, 2023",
    hero: "/news1.jpg",
    content: [
      "Frank Capasso & Sons played a central role in the comprehensive exterior restoration of St. Roch Church in Greenwich, a project focused on preserving the integrity and longevity of its historic stone masonry.",
      
      "Years of harsh New England weather, including freezing winters and heavy storms, had taken a toll on the church’s exterior, leading to water infiltration and interior leaks. Previous short-term repairs — including the use of cement instead of traditional mortar — created additional challenges that required careful correction.",
      
      "Following a full engineering assessment by Wiss, Janney, Elstner Associates, the parish launched a privately funded restoration effort in the summer of 2021. The project emphasized proper masonry techniques, breathable materials, and long-term structural integrity rather than temporary fixes.",
      
      "By addressing the exterior envelope first and restoring the building with historically appropriate methods, the work ensures that the church will remain structurally sound and usable for decades to come."
    ],
    sourceLabel: "To read the full original article,",
    sourceHref: "https://www.greenwichtime.com/news/article/Project-at-Greenwich-s-St-Roch-Church-17292202.php",
    sourceText: "CLICK HERE",
  }
  ]

// ✅ REQUIRED for output: "export"
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

// ✅ Next.js 16: params is async (Promise) in dynamic routes
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  return {
    title: post ? `${post.title} | News` : "News | Frank Capasso & Sons, Inc.",
    description: post ? post.title : "News & articles from Frank Capasso & Sons.",
  }
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main>
        <Header />
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-2xl font-bold text-black">Post not found</h1>
            <Link className="mt-6 inline-block text-[#cc0000]" href="/news">
              Back to News
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const index = posts.findIndex((p) => p.slug === post.slug)
  const prev = index > 0 ? posts[index - 1] : null
  const next = index < posts.length - 1 ? posts[index + 1] : null

  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="relative min-h-[295px] lg:min-h-[365px]">
        <div className="absolute inset-0">
          <Image
            src={post.hero}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 flex min-h-[295px] items-center justify-center px-6 pt-18 text-center lg:min-h-[365px]">
          <div className="w-full max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              <Link href="/" className="hover:text-[#E7000B]">
                Home
              </Link>{" "}
              <span className="mx-2 text-[#E7000B]">/</span> Blog Post
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-[#18px] font-medium text-black/70">
            <Calendar className="h-4 w-4 text-[#E7000B] opacity-80" />
            <span>{post.date}</span>
          </div>

          <div className="mt-10 space-y-3 text-[20px] leading-[1.9] text-black/55">
            {post.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="mt-12 text-[20px] text-black/60">
            {post.sourceLabel}{" "}
            <a
              href={post.sourceHref}
              target="_blank"
              rel="noreferrer"
              className="font-semibold uppercase tracking-widest text-[#cc0000] hover:text-[#E7000B]"
            >
              {post.sourceText}
            </a>
          </p>

          {/* PREV / NEXT */}
          <div className="mt-16 grid gap-6 border-t border-black/10 pt-10 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <ChevronLeft className="mt-1 h-5 w-5 text-black/30" />
              {prev ? (
                <Link href={`/news/${prev.slug}`} className="group">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#cc0000]">
                    Previous
                  </p>
                  <p className="mt-1 text-sm text-black/55 group-hover:text-black">
                    {prev.title}
                  </p>
                </Link>
              ) : (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-black/20">
                    Previous
                  </p>
                  <p className="mt-1 text-sm text-black/20">—</p>
                </div>
              )}
            </div>

            <div className="flex items-start justify-start gap-3 md:justify-end">
              {next ? (
                <Link href={`/news/${next.slug}`} className="group text-right">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#cc0000]">
                    Next
                  </p>
                  <p className="mt-1 text-sm text-black/55 group-hover:text-black">
                    {next.title}
                  </p>
                </Link>
              ) : (
                <div className="text-right">
                  <p className="text-xs font-semibold uppercase tracking-widest text-black/20">
                    Next
                  </p>
                  <p className="mt-1 text-sm text-black/20">—</p>
                </div>
              )}
              <ChevronRight className="mt-1 h-5 w-5 text-black/30" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}