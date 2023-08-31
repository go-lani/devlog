/** @type {import('next').NextConfig} */
const development = process.env.NODE_ENV !== 'production';

const nextConfig = {
  output: 'export',
  basePath: !development ? '/devlog' : '',
  assetPrefix: !development ? '/devlog/' : '',
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
};

module.exports = nextConfig;
