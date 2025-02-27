import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // يتجاهل أخطاء TypeScript أثناء البناء
  },
  eslint: {
    ignoreDuringBuilds: true, // يتجاهل أخطاء ESLint أثناء البناء
  },
};

export default nextConfig;

