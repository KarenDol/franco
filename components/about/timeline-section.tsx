const timelineItems = [
  {
    image: "/timeline1.png",
    title: "1960'S-1990'S GROWTH & TRANSITION",
    description:
      "The company expands its expertise into larger and more complex restoration projects, earning trust across commercial and institutional markets.",
  },
  {
    image: "/timeline2.png",
    title: "2000'S TURNING POINT",
    description:
      "By the early 2000's our little company had became New England's premiere restoration contractor providing specialized solutions and craftsmanship in our work that could not be compared.",
  },
  {
    image: "/timeline3.png",
    title: "TODAY",
    description:
      "We continue the legacy and continue to train and retain the best in our field, completing restoration projects for clients across the New England region.",
  },
]

function TimelineCard({
  item,
  reversed = false,
}: {
  item: (typeof timelineItems)[number]
  reversed?: boolean
}) {
  const imageBlock = (
    <div className="relative flex-[2] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
        style={{ backgroundImage: `url('${item.image}')` }}
      />
    </div>
  )

  const textBlock = (
    <div className="flex-[1] bg-[#E7000B]/90
    px-5 py-5 text-center text-white flex flex-col justify-center text-balance">

      <h3 className="text-lg font-extrabold uppercase tracking-wide
      drop-shadow-[0.5px_0.5px_0_rgba(0,0,0,0.9)]">
        {item.title}
      </h3>

      <p className="mt-3 text-base leading-relaxed font-semibold text-white
      drop-shadow-[0.5px_0.5px_0_rgba(0,0,0,0.8)]">
        {item.description}
      </p>
    </div>
  )

  return (
    <div className="h-[460px] overflow-hidden flex flex-col">
      {reversed ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </div>
  )
}

export default function TimelineSection() {
  return (
    <section className="bg-[#f5f5f5] px-6 py-8 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-center text-2xl font-bold uppercase tracking-tight text-foreground lg:text-3xl">
          A Family Tradition Lives On
        </h2>

        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          {timelineItems.map((item, i) => (
            <TimelineCard key={i} item={item} reversed={i === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}