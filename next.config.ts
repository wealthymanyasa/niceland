import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
        search: '?q=80&auto=format&fit=crop&w=800',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
        search: '?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  },
};

export default nextConfig;
