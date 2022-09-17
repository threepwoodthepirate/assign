/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["i.1337co.de"],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
