import Image from "next/image"

type Props = {
  image: string
  lead: string
  points: string[]
}

export default function WhyChooseSection({ image, lead, points }: Props) {
  return (
    <section className="relative">
      {/* MOBILE */}
      <div className="md:hidden">
        <div className="relative h-[240px] w-full">
          <Image src={image} alt="Why Choose" fill className="object-cover" priority />
          <div className="absolute inset-0"/>
        </div>

        <div className="w-full bg-[#111]">
          <div className="h-[6px] w-full bg-[#E7000B]" />

          <div className="px-6 py-10 text-white">
            <h2 className="text-3xl font-extrabold">Why Choose Us?</h2>

            <p className="mt-4 text-base leading-[1.25] text-white/90">{lead}</p>

            <ul className="mt-6 space-y-3">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-base font-semibold">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <section className="relative min-h-[450px] lg:min-h-[500px]">
          <div className="absolute inset-0">
            <Image src={image} alt="Why Choose" fill className="object-cover" priority />
            <div className="absolute inset-0"/>
          </div>

          <div className="relative z-10 flex min-h-[450px] items-center justify-end px-6 lg:min-h-[500px] lg:px-16">
            <div className="relative w-[92vw] max-w-[460px] md:w-full md:max-w-[500px]">
              <div className="absolute inset-0 bg-[#E7000B]" />
              <div className="absolute bg-[#1A1A1A]/95 top-[16px] left-[16px] bottom-[16px] right-[-32px]" />

              <div className="relative z-10 flex flex-col text-white pt-[32px] pl-[48px] pr-[24px] pb-[32px]">
                <h2 className="text-4xl font-extrabold">Why Choose Us?</h2>
                <p className="mt-4 text-base leading-[1.6] text-white/90 md:text-lg">{lead}</p>

                <ul className="mt-6 space-y-2">
                  {points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-base font-semibold md:text-lg">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}