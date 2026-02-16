import Header from "@/components/header"
import Footer from "@/components/footer"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Frank Capasso & Sons, Inc.",
  description:
    "Get in touch with Frank Capasso & Sons for masonry and concrete restoration services in Connecticut.",
}

export default function ContactPage() {
  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="relative mt-18 flex items-center justify-center min-h-[295px] lg:min-h-[365px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/contacts.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.25fr]">

            {/* LEFT COLUMN */}
            <div className="pt-2">
              <div className="inline-block">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/55">
                  CORPORATE INFORMATION
                </p>
                <div className="mt-2 h-[2px] w-full bg-[#cc0000]" />
              </div>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-black">
                FRANK CAPASSO &amp; SONS, INC.
              </p>

              <h2 className="mt-12 max-w-md text-3xl font-extrabold leading-tight text-black lg:text-4xl">
                1011 Middletown Avenue, <br />
                Northford, CT 06472
              </h2>

              <div className="mt-12 flex items-center gap-6">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/frankcapassoandsons/"
                  aria-label="Facebook"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-black text-black transition-all duration-300 hover:border-[#cc0000] hover:text-[#cc0000]"
                >
                  <Facebook className="h-4 w-4 transition-colors duration-300 group-hover:text-[#cc0000]" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/frankcapassoandsons/"
                  aria-label="Instagram"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-black text-black transition-all duration-300 hover:border-[#cc0000] hover:text-[#cc0000]"
                >
                  <Instagram className="h-4 w-4 transition-colors duration-300 group-hover:text-[#cc0000]" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/frank-capasso-&-sons/"
                  aria-label="LinkedIn"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-black text-black transition-all duration-300 hover:border-[#cc0000] hover:text-[#cc0000]"
                >
                  <Linkedin className="h-4 w-4 transition-colors duration-300 group-hover:text-[#cc0000]" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <div className="inline-block">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/55">
                  CONTACT FORM
                </p>
                <div className="mt-2 h-[2px] w-full bg-[#cc0000]" />
              </div>

              <form className="mt-6 space-y-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="h-11 w-full rounded-sm border border-black/40 bg-white px-4 text-sm text-black outline-none focus:border-black"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="h-11 w-full rounded-sm border border-black/40 bg-white px-4 text-sm text-black outline-none focus:border-black"
                  />
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-11 w-full rounded-sm border border-black/40 bg-white px-4 text-sm text-black outline-none focus:border-black"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="h-11 w-full rounded-sm border border-black/40 bg-white px-4 text-sm text-black outline-none focus:border-black"
                  />
                </div>

                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full resize-none rounded-sm border border-black/40 bg-white px-4 py-3 text-sm text-black outline-none focus:border-black"
                />

                <div className="mt-2 inline-flex items-center justify-between gap-4 rounded-sm border border-black/20 bg-white px-4 py-3 text-xs text-black/70">
                  <span>reCAPTCHA</span>
                  <span className="text-black/40">Privacy • Terms</span>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-[#cc0000] py-5 text-sm font-extrabold uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-[#E7000B]"
                >
                  SEND
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}