import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ppsindustrialproducts.com',
      },
      {
        protocol: 'https',
        hostname: 'ppsindustrialproducts.com',
      },
      {
        protocol: 'https',
        hostname: 'deburringtools.com',
      },
      {
        protocol: 'https',
        hostname: 'www.deburringtools.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'companieslogo.com',
      },
    ],
  },
};

export default nextConfig;
