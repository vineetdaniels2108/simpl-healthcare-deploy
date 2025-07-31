/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/simpl-healthcare/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/simpl-healthcare' : '',
}

module.exports = nextConfig 