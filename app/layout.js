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
  // The commissioned 120x120 Court Marriage Live Services logo is also
  // the favicon: use one consistent brand mark instead of generic starter icons.
  icons: {
    icon: [{ url: '/court-marriage-live-services-logo.png', type: 'image/png', sizes: '120x120' }],
    shortcut: '/court-marriage-live-services-logo.png',
    apple: '/court-marriage-live-services-logo.png',
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
