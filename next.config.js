/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com', 'drive.google.com']
  }
};


const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})

module.exports = withPWA(nextConfig);