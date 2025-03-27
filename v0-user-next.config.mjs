/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Enable React 19 features
    serverActions: true,
    serverComponents: true,
  },
  // Configure Docker-friendly settings
  output: 'standalone',
};

export default nextConfig;

