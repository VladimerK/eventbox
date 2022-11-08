/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["images.unsplash.com", "img.softmedal.com", "mdbcdn.b-cdn.net"],
  },
};
