/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com', 'drive.google.com']
  }
};

module.exports = nextConfig;
