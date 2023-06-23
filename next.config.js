/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname, 'src');
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['s4.anilist.co'],
  },
}

module.exports = nextConfig
