import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
