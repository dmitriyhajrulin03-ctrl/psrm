import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Ensure proper routing for Netlify
  trailingSlash: false,
  // Disable output for Netlify plugin (plugin handles this)
};

export default nextConfig;
