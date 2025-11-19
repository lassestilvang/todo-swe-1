/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
