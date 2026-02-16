import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
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
            <Link
              href="/services"
              className="text-base font-semibold tracking-wider text-foreground transition-colors hover:text-[#E7000B]"
            >
              SERVICES
            </Link>
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
