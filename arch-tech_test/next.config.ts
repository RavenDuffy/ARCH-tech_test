import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images2.imgbox.com",
        pathname: "**",
      },
    ],
  },
}

export default nextConfig
