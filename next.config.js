/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/biopoints-web",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
