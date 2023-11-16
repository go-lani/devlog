/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({});

const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-**',
      },
    ],
  },
  env: {
    CLIENT_URL: process.env.CLIENT_URL,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

module.exports = withMDX(nextConfig);
