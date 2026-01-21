import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://the-cafe-api-service-ffm7qsxejq-rj.a.run.app/:path*', // URL da sua API real
      },
    ]
  },
  images: {
    remotePatterns: [new URL("https://storage.googleapis.com/**")]
  }
};

export default nextConfig;
