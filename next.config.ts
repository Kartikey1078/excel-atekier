import type { NextConfig } from "next";
import { CACHE_ONE_YEAR_IMMUTABLE, ONE_YEAR_SECONDS } from "./src/lib/cache-control";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    minimumCacheTTL: ONE_YEAR_SECONDS,
  },
  // Asset Cache-Control is applied at the Vercel CDN via vercel.json (production).
  // Security headers apply in all environments.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/:path*\\.(woff2|woff|ttf|otf|eot)",
        headers: [{ key: "Cache-Control", value: CACHE_ONE_YEAR_IMMUTABLE }],
      },
    ];
  },
};

export default nextConfig;
