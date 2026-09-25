import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import './audit.css'

export const metadata = {
  metadataBase: new URL('https://courtmarriage.live'),
  title: 'Court Marriage in Pakistan | CourtMarriage.live',
  description: 'Court marriage, lawful Nikah, marriage registration and online Nikah assistance in Pakistan with city-based support in Karachi, Lahore, Islamabad and Rawalpindi.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://courtmarriage.live/',
    siteName: 'CourtMarriage.live',
    title: 'Court Marriage in Pakistan | CourtMarriage.live',
    description: 'Professional assistance with lawful Nikah, marriage documentation and registration in Pakistan.',
    images: [{ url: '/court-marriage-hero.png', width: 1200, height: 1350, alt: 'Court marriage and Nikah documentation in Pakistan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Court Marriage in Pakistan | CourtMarriage.live',
    description: 'Professional assistance with lawful Nikah, marriage documentation and registration in Pakistan.',
    images: ['/court-marriage-hero.png'],
  },
  robots: { index: true, follow: true },
  generator: 'CourtMarriage.live',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#24483e',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
