import Link from "next/link"
import Image from "next/image"

type CardSectionProps = {
  header: string
  descriptor: string
  buttonText: string
  location?: "left" | "right"
  image: string
  href?: string
}

export default function CardSection({
  header,
  descriptor,
  buttonText,
  location = "left",
  image,
  href = "/about",
}: CardSectionProps) {
  const desktopJustify = location === "right" ? "justify-end" : "justify-start"

  return (
    <section className="relative">
      {/* ===== Mobile (unchanged) ===== */}
      <div className="md:hidden">
        <div className="relative h-[240px] w-full">
          <Image src={image} alt={header} fill className="object-cover" priority />
          <div className="absolute inset-0" />
        </div>

        <div className="w-full bg-[#111]">
          <div className="h-[6px] w-full bg-[#b00000]" />

          <div className="px-6 py-10">
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white leading-[1.1]">
              {header}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              {descriptor}
            </p>

            <div className="mt-6">
              <Link
                href={href}
                className="inline-flex items-center justify-center bg-[#b00000] px-5 py-2 text-xs font-bold tracking-widest text-white hover:bg-[#8f0000]"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Desktop (NEW – image-based card) ===== */}
      <div className="hidden md:block">
        <div className="relative min-h-[600px]">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image src={image} alt={header} fill className="object-cover" priority />
            <div className="absolute inset-0" />
          </div>

          <div
            className={`relative z-10 flex min-h-[600px] items-end ${desktopJustify} px-16 pb-16`}
          >
            <div className="relative w-full max-w-md">
              
              {/* Card frame image */}
              <Image
                src="/card.png" 
                alt="Card Frame"
                width={500}
                height={400}
                className="w-full h-auto"
              />

              {/* Text content positioned on top of card */}
              <div className="absolute inset-0 flex flex-col justify-center px-10 py-8 text-white">
                <h2 className="mt-2 text-3xl font-extrabold uppercase leading-[1.05] tracking-tight">
                  {header}
                </h2>

                <p className="mt-2 text-base leading-[1.05] md:text-lg md:leading-[1.05] text-white/90">
                  {descriptor}
                </p>

                <div className="mt-4">
                  <Link
                    href={href}
                    className="inline-flex items-center justify-center bg-[#CE050F] px-6 py-3 text-xs font-bold tracking-widest text-white hover:bg-[#E7000B]"
                  >
                    {buttonText}
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}