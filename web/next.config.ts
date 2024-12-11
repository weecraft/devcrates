import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'cdn.hashnode.com' }],
  },
  skipTrailingSlashRedirect: true,
}

export default nextConfig
