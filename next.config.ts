import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: true },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  devIndicators: false,
  trailingSlash: true,
  // basePath: "/rahul-269.github.io",
  // assetPrefix: "/rahul-269.github.io",
  transpilePackages: ['three'],
};

export default nextConfig;
