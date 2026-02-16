import Image from "next/image"

export default function AwardsSection() {
  return (
    <section className="bg-background px-2 py-8 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-3xl font-bold uppercase tracking-tight text-foreground lg:text-4xl">
          AGC Awards
        </h2>

        <p className="mx-auto mb-10 max-w-4xl text-center text-lg leading-relaxed text-foreground lg:text-xl text-balance">
          Recognition earned through consistent quality, professionalism, and long-term client trust.
        </p>

        <div className="grid items-start gap-12 lg:grid-cols-[1.5fr_1.2fr_0.6fr]">
          
          {/* Left Column - Award Text */}
          <div>
            <h3 className="text-2xl font-semibold text-black">
              Subcontractor of the Year: Finalist
            </h3>

            <p className="mt-5 text-lg leading-tight font-normal text-black">
              Selected for excellence in leadership and innovation as
              demonstrated by their achievements and high standing among
              colleagues, professionals and clients.
            </p>

            <p className="mt-5 text-lg leading-tight font-normal text-black">
              The AGC of Connecticut Industry Recognition Awards program was
              established in 2005 to recognize the skills, talents and personal
              qualities that are the source of the striking achievements of
              prominent Connecticut commercial construction professionals over
              the course of their careers.
            </p>

            <div className="mt-8 flex justify-center">
              <Image
                src="/award-badge.png"
                alt="Award badge"
                width={800}
                height={200}
                className="
                  w-[85%]
                  max-w-[320px]   /* prevents big mobile size */
                  sm:max-w-sm
                  md:max-w-md
                  h-auto
                  object-contain
                "
              />
            </div>
          </div>

          {/* Center Column - Certificate Image */}
          <div className="flex justify-center">
            <div className="
              relative 
              w-[85%]           /* smaller on mobile */
              max-w-[300px]     /* hard cap on mobile */
              sm:max-w-sm 
              md:max-w-md 
              lg:max-w-lg
              overflow-hidden 
              rounded-lg 
              shadow-xl
            ">
              <Image
                src="/best_award.png"
                alt="AGC Industry Recognition Award Certificate"
                width={800}
                height={1000}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column - AGC Logo Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-40 w-40 lg:h-52 lg:w-52">
              <Image
                src="/AGC_logo.png"
                alt="Associated General Contractors of America Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}