import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/portfolio/:slug*',
        destination: '/work/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
