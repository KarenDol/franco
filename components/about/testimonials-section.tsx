import { Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  return (
    <section className="relative min-h-[400px] lg:min-h-[480px]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/feedback.png')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 px-6 py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          
          {/* Left side */}
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#cc0000]">
              Client Testimonials
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-white lg:text-4xl">
              Trusted by Hundreds of Satisfied Clients
            </h2>

            <p className="mt-4 text-base leading-[1.7] text-white/90 lg:text-lg">
              Don&apos;t just take our word for it. Here&apos;s what our clients
              have to say about their experience working with Frank Capasso &
              Sons.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/ClientTestimonial.png"
                alt="Client Testimonial"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}