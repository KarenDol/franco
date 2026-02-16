"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const navLinks = [
    { label: "ABOUT US", href: "/about" },
    { label: "PROJECTS", href: "/projects" },
    { label: "CONTACT", href: "/contact" },
  ]

  const servicesLinks = [
    { label: "PARKING STRUCTURE RESTORATION", href: "/services/parking" },
    { label: "MASONRY RESTORATION", href: "/services/masonry" },
    { label: "CONCRETE RESTORATION", href: "/services/concrete" },
    { label: "HISTORIC RESTORATIONS", href: "/services/historic" },
    { label: "WATERPROOFING", href: "/services/waterproofing" },
    { label: "HIGH-RISE RESTORATION", href: "/services/high-rise" },
  ]

  const isServicesActive =
    pathname === "/services" || pathname?.startsWith("/services/")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#101828] backdrop-blur-sm shadow-[0_10px_12px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6 lg:px-8">
        <Link href="/" className="flex-shrink-0">
          <div className="flex items-center justify-center bg-[#E7000B] px-3 py-3">
            <Image
              src="/logo.png"
              alt="Logo"
              width={270}
              height={90}
              className="h-10 sm:h-10 md:h-12 w-auto"
              priority
            />
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-8 md:flex lg:gap-10 relative">
          {/* ABOUT US */}
          <Link
            href="/about"
            className={`text-lg font-bold tracking-wider transition-colors hover:text-[#E7000B] ${
              pathname === "/about" ? "text-[#E7000B]" : "text-white"
            }`}
          >
            ABOUT US
          </Link>

          {/* SERVICES */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 text-lg font-bold tracking-wider transition-colors hover:text-[#E7000B] ${
                isServicesActive ? "text-[#E7000B]" : "text-white"
              }`}
              type="button"
            >
              SERVICES
              <ChevronDown size={18} />
            </button>

            {/* Invisible hover bridge (prevents flicker) */}
            <div className="absolute left-1/2 top-full h-3 w-48 -translate-x-1/2" />

            {/* Dropdown */}
            <div
              className="
                absolute left-1/2 top-full mt-3 z-50 w-[340px]
                -translate-x-1/2
                bg-[#E7000B]
                shadow-2xl
                rounded-sm
                opacity-0 scale-95 pointer-events-none
                transition-all duration-200 ease-out
                group-hover:opacity-100
                group-hover:scale-100
                group-hover:pointer-events-auto
                origin-top
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
                  <span
                    className="
                      inline-block
                      transition-transform duration-150 ease-out
                      hover:scale-110
                    "
                  >
                    {service.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <Link
            href="/projects"
            className={`text-lg font-bold tracking-wider transition-colors hover:text-[#E7000B] ${
              pathname === "/projects" ? "text-[#E7000B]" : "text-white"
            }`}
          >
            PROJECTS
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className={`text-lg font-bold tracking-wider transition-colors hover:text-[#E7000B] ${
              pathname === "/contact" ? "text-[#E7000B]" : "text-white"
            }`}
          >
            CONTACT
          </Link>
        </nav>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#222222] md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {/* ABOUT US */}
            <Link
              href="/about"
              className={`py-3 text-sm font-semibold tracking-wider transition-colors ${
                pathname === "/about" ? "text-[#E7000B]" : "text-white"
              } hover:text-[#E7000B]`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            {/* SERVICES */}
            <button
              onClick={() => setServicesOpen((v) => !v)}
              type="button"
              className={`
                flex items-center justify-between py-3 text-sm font-semibold tracking-wider
                transition-colors
                ${servicesOpen || isServicesActive ? "text-[#E7000B]" : "text-white"}
                hover:text-[#E7000B]
                focus:outline-none focus:ring-2 focus:ring-[#4da3ff] focus:ring-offset-0
              `}
            >
              Services
              <ChevronDown
                size={18}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Services options (DARK like screenshot, not red) */}
            {servicesOpen && (
              <div className="mt-1 flex flex-col">
                {servicesLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="
                      py-3 pl-4 text-sm font-medium tracking-wide
                      text-white transition-colors
                      hover:text-[#E7000B]
                    "
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setServicesOpen(false)
                    }}
                  >
                    {service.label
                      .toLowerCase()
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                ))}
              </div>
            )}

            {/* PROJECTS */}
            <Link
              href="/projects"
              className={`py-3 text-sm font-semibold tracking-wider transition-colors ${
                pathname === "/projects" ? "text-[#E7000B]" : "text-white"
              } hover:text-[#E7000B]`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              className={`py-3 text-sm font-semibold tracking-wider transition-colors ${
                pathname === "/contact" ? "text-[#E7000B]" : "text-white"
              } hover:text-[#E7000B]`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}