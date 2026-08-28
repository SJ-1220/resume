import type { NextConfig } from "next";

// Static export for GitHub Pages.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/resume",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
