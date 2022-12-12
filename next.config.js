/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.corporate.walmart.com", "i5.walmartimages.com"],
  },
};

module.exports = nextConfig
