/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/J-Portfolio",
  assetPrefix: "/J-Portfolio",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;