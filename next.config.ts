// next.config.js または next.config.ts
import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'], // 対応するページの拡張子を設定

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'), // 'src'ディレクトリをエイリアスで参照可能に
    };
    return config;
  },
};

export default nextConfig;
