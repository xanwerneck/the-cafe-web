import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://the-cafe-api-service-ffm7qsxejq-rj.a.run.app/api/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=60',
          },
        ],
      },
    ]
  },
  images: {
    remotePatterns: [new URL("https://storage.googleapis.com/**")]
  }
};

export default nextConfig;
