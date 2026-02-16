import Link from "next/link"

const articles = [
  {
    title:
      "Saint Francis Hospital Holds Ribbon Cutting Ceremony For The Frank Capasso and Sons Parking Garage",
    excerpt:
      "Saint Francis Hospital officially opened the Frank Capasso & Sons Visitor Parking Garage earlier this month, and the Capasso family was on hand for a",
    date: "Jun 25, 2026",
    href: "/news/saint-francis-ribbon-cutting",
  },
  {
    title:
      "Frank Capasso & Sons Receives ICRI Project Award for Highrise Category",
    excerpt:
      "Accompanying the addition of the Robert B. Haas Family Arts Library and the Jeffrey H. Loria Center for the History of Art, the restoration of",
    date: "Jun 25, 2026",
    href: "/news/icri-award-highrise",
  },
  {
    title: "Frank Capasso & Sons Featured in Paint Square News",
    excerpt:
      "Frank Capasso & Sons Inc., of Northford, Connecticut, performed the installation as well as the restoration of the entire plaza. The original plaza construction, completed",
    date: "Jun 25, 2026",
    href: "/news/paint-square-news",
  },
  {
    title: "Frank Capasso & Sons Featured in Greenwich Time News",
    excerpt:
      'Frank Capasso & Son\'s Restoration Project at Greenwich\'s St. Roch Church preserves what was built with "loving hands"...',
    date: "Jun 25, 2026",
    href: "/news/greenwich-time-news",
  },
]

export default function NewsSection() {
  return (
    <section className="bg-[#E0E0E0]/80 px-6 py-16 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <h2
          className="relative mb-12 text-center text-3xl font-bold text-foreground lg:text-4xl
          after:content-['']
          after:block
          after:w-16
          after:h-[3px]
          after:bg-[#E7000B]
          after:mx-auto
          after:mt-4"
        >
          News & Articles
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article, i) => (
            <Link key={i} href={article.href} className="group block">
              <article
                className="flex h-full flex-col rounded-xl border border-border bg-white p-7 shadow-sm transition 
                hover:-translate-y-1 hover:shadow-lg hover:border-[#E7000B]"
              >
                <h3 className="text-lg font-bold leading-tight text-foreground md:text-xl group-hover:text-[#E7000B] transition">
                  {article.title}
                </h3>

                <p className="mt-3 flex-1 text-base leading-normal text-muted-foreground">
                  {article.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-base font-bold text-[#E7000B]">
                    Read more →
                  </span>

                  <span className="inline-flex items-center bg-[#E7000B] px-3 py-2 text-sm font-semibold text-white">
                    {article.date}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}