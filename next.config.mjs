/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.court-marriage.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/court-marriage-in-pakistan',
        destination: '/',
        permanent: true,
      },
      // Migration recovery: old indexed service URLs with verified live replacements.
      // Do not remove or rename the destination pages or their canonicals.
      {
        source: '/court-marriage-in-karachipakistan',
        destination: '/court-marriage-in-karachi/',
        permanent: true,
      },
      {
        source: '/nikah-nama-services-in-karachi',
        destination: '/nikah-nama-english-urdu-karachi/',
        permanent: true,
      },
      {
        source: '/nikah-nama-services-in-lahore',
        destination: '/nikah-nama-english-urdu-lahore/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
