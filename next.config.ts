import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // add trusted sources here then external images will be used (allow these domain)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
