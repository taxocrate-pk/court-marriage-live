const legacyRedirects = [
  {
    "source": "/nikah-nama-services-in-karachi",
    "destination": "/nikah-nama-english-urdu-karachi/",
    "permanent": true
  },
  {
    "source": "/nikah-nama-services-in-lahore",
    "destination": "/nikah-nama-english-urdu-lahore/",
    "permanent": true
  },
  {
    "source": "/nikah-nama-services-in-rawalpindi",
    "destination": "/nikah-nama-english-urdu-rawalpindi/",
    "permanent": true
  },
  {
    "source": "/the-best-court-marriage-services-in-karachi",
    "destination": "/court-marriage-in-karachi/",
    "permanent": true
  },
  {
    "source": "/court-marriage-and-civil-marriage-lawyers-rawalpindi",
    "destination": "/court-marriage-in-karachi-lahore-islamabad-rawalpindi/",
    "permanent": true
  },
  {
    "source": "/court-marriage-procedure-pakistan-and-our-services",
    "destination": "/court-marriage-in-pakistan-complete-guide-by-court-marriage-live/",
    "permanent": true
  },
  {
    "source": "/step-by-step-guide-to-court-marriage-in-pakistan",
    "destination": "/court-marriage-in-pakistan-complete-guide-by-court-marriage-live/",
    "permanent": true
  },
  {
    "source": "/online-nikah-complete-guide-for-pakistanis",
    "destination": "/online-nikah-a-comprehensive-guide-to-online-nikah-services-in-karachi-lahore-islamabad-and-rawalpindi/",
    "permanent": true
  }
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
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
      ...legacyRedirects,
      {
        source: '/court-marriage-in-pakistan',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
