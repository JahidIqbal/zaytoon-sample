import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'storage-api.dev-polygontech.xyz',
          port: '',
          pathname: '/**',
      },
  ],
  },
};

export default nextConfig;
