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
  images: {
    remotePatterns: [new URL("https://storage.googleapis.com/**")]
  }
};

export default nextConfig;
