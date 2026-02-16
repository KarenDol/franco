"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Footer() {
  const [servicesOpen, setServicesOpen] = useState(false)

  const servicesLinks = [
    { label: "PARKING STRUCTURE RESTORATION", href: "/services/parking" },
    { label: "MASONRY RESTORATION", href: "/services/masonry" },
    { label: "CONCRETE RESTORATION", href: "/services/concrete" },
    { label: "HISTORIC RESTORATIONS", href: "/services/historic" },
    { label: "WATERPROOFING", href: "/services/waterproofing" },
    { label: "HIGH-RISE RESTORATION", href: "/services/high-rise" },
  ]

  return (
    <footer className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center justify-center bg-[#E7000B] px-3 py-3">
              <Image
                src="/logo.png"
                alt="Logo"
                width={270}
                height={90}
                className="h-10 sm:h-10 md:h-12 w-auto"
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            <Link
              href="/about"
              className="text-base font-semibold tracking-wider text-foreground transition-colors hover:text-[#E7000B]"
            >
              ABOUT US
            </Link>

            {/* ===== SERVICES DROPDOWN ===== */}
            <div className="relative group">
              {/* Desktop trigger (hover) */}
              <Link
                href="/services"
                className="hidden md:inline-flex items-center gap-1 text-base font-semibold tracking-wider text-foreground transition-colors hover:text-[#E7000B]"
              >
                SERVICES <ChevronDown size={16} />
              </Link>

              {/* Mobile trigger (tap) */}
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className="md:hidden inline-flex items-center gap-1 text-base font-semibold tracking-wider text-foreground transition-colors hover:text-[#E7000B]"
                aria-expanded={servicesOpen}
              >
                SERVICES{" "}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Desktop hover bridge (prevents flicker when moving from link to menu) */}
              <div className="hidden md:block absolute left-1/2 bottom-full h-3 w-56 -translate-x-1/2" />

              {/* Desktop dropdown (opens UP) */}
              <div
                className="
                  hidden md:block
                  absolute left-1/2 bottom-full mb-3 z-50 w-[340px]
                  -translate-x-1/2
                  bg-[#E7000B]
                  shadow-2xl rounded-sm
                  opacity-0 scale-95 pointer-events-none
                  transition-all duration-200 ease-out
                  group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                  origin-bottom
                "
              >
                {servicesLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="
                      block text-center
                      px-6 py-4
                      text-sm font-semibold tracking-wider text-white
                      hover:bg-black/20
                    "
                  >
                    <span className="inline-block transition-transform duration-150 ease-out hover:scale-110">
                      {service.label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Mobile dropdown (opens UP) */}
              {servicesOpen && (
                <div
                  className="
                    md:hidden
                    absolute left-1/2 bottom-full mb-3 z-50 w-[260px]
                    -translate-x-1/2
                    bg-[#E7000B]
                    shadow-2xl rounded-sm
                    origin-bottom
                  "
                >
                  {servicesLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="
                        block text-center
                        px-6 py-4
                        text-sm font-semibold tracking-wider text-white
                        hover:bg-black/20
                      "
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className="text-base font-semibold tracking-wider text-foreground transition-colors hover:text-[#E7000B]"
            >
              PROJECTS
            </Link>

            <Link
              href="/contact"
              className="text-base font-semibold tracking-wider text-foreground transition-colors hover:text-[#E7000B]"
            >
              CONTACT
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/frankcapassoandsons/"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7000B] text-white transition-opacity hover:opacity-80"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/frankcapassoandsons/"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7000B] text-white transition-opacity hover:opacity-80"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/frank-capasso-&-sons/"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7000B] text-white transition-opacity hover:opacity-80"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-6 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; 2026 Frank Capasso & Sons. All rights reserved.
        </p>
      </div>
    </footer>
  )
}