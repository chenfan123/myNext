import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 如果使用 Turbopack 遇到原生模块问题，可以尝试禁用 Turbopack
  // 使用 webpack 代替：运行 next dev --no-turbo
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindcss.com',
      },
    ],
  },
};

export default nextConfig;
