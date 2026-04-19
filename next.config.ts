import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  // -- Silence workspace-root warning when there are multiple lockfiles --
  turbopack: {
    root: path.resolve(__dirname),
  },
  // -- Allow Next.js <Image> to serve local /public assets --
  images: {
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
