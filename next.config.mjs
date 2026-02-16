const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default nextConfig