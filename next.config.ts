import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["storage.cloud.google.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.cloud.google.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
