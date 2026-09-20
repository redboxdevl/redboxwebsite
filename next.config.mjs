/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // experimental: {
  //   webVitalsAttribution: ["CLS", "LCP"],
  // },
};

export default nextConfig;
