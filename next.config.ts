import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 如果使用 Turbopack 遇到原生模块问题，可以尝试禁用 Turbopack
  // 使用 webpack 代替：运行 next dev --no-turbo
  reactStrictMode: false, // 禁用严格模式
};

export default nextConfig;
