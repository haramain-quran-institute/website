import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "6mb",
    },
  },
  images: {
    qualities: [75, 85, 95],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.haramainquraninstitute.com" }],
        destination: "https://haramainquraninstitute.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
