import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

export const metadata: Metadata = {
  title: "Frank Capasso & Sons, Inc.",
  description:
    "Connecticut-based masonry and concrete restoration firm specializing in the repair, stabilization, and preservation of existing structures. Family owned and operated since 1970.",
}

const helveticaNeue = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNeue-Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={helveticaNeue.variable}>
      <body className="antialiased font-sans">
        {/* Push all content below fixed header */}
        <div className="pt-[96px]">
          {children}
        </div>
      </body>
    </html>
  )
}