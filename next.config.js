/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.corporate.walmart.com",
      "i5.walmartimages.com",
      "images.unsplash.com",
      "store.storeimages.cdn-apple.com",
    ],
  },
};

module.exports = nextConfig;
