/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Netlify deployment configuration
  output: 'export', // Enable static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
