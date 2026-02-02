import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'skillicons.dev',
      },
    ],
  },
};

export default nextConfig;
