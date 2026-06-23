import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 静态导出配置（用于 GitHub Pages）
  output: 'export',
  
  // GitHub Pages 子路径配置
  basePath: '/ihealth',
  
  // 允许的开发源
  allowedDevOrigins: ['*.dev.coze.site'],
  
  // 图片配置 - 静态导出时使用 unoptimized
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
  
  // 禁用 trailing slash 重定向
  trailingSlash: true,
};

export default nextConfig;