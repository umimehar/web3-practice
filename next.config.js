/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  generateEtags: false,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000 * 10000000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 10000,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    API_ENV: process.env.API_ENV, // serverside will always have caps and snake case
  },
  publicRuntimeConfig: {
    nodeEnv: process.env.NODE_ENV,
    apiEnv: process.env.API_ENV,
    baseAppUrl: process.env.BASE_APP_URL || "",
    cdnUrl: "",
  },
  images: {
    domains: ["nftstorage.link", "http://localhost"],
  },
};

module.exports = nextConfig;
