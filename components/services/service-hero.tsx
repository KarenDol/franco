import Link from "next/link"

type Props = {
  bgImage: string
  eyebrow?: string
  headingLine1: string
  headingLine2?: string
}

export default function ServiceHero({
  bgImage,
  eyebrow = "Services",
  headingLine1,
  headingLine2,
}: Props) {
  return (
    <section className="relative flex min-h-[295px] items-center justify-center lg:min-h-[365px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 flex min-h-[295px] items-center justify-center px-6 pt-18 text-center lg:min-h-[365px]">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#cc0000]">
            {eyebrow}
          </p>

          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            {headingLine1}
            {headingLine2 && (
              <>
                <br />
                {headingLine2}
              </>
            )}
          </h1>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-[#cc0000] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}