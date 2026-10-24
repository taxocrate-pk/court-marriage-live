import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import './audit.css'
import { pageHeadings } from '@/lib/page-headings'

export const metadata = {
  metadataBase: new URL('https://courtmarriage.live'),
  title: pageHeadings['/'].seo,
  description: 'Court marriage, Nikah and marriage registration assistance in Pakistan. Document guidance for Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad and Multan.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://courtmarriage.live/',
    siteName: 'CourtMarriage.live',
    title: pageHeadings['/'].seo,
    description: 'Professional assistance with lawful Nikah, marriage documentation and registration in Pakistan.',
    images: [{ url: '/court-marriage-hero.png', width: 1200, height: 1350, alt: 'Court marriage and Nikah documentation in Pakistan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageHeadings['/'].seo,
    description: 'Professional assistance with lawful Nikah, marriage documentation and registration in Pakistan.',
    images: ['/court-marriage-hero.png'],
  },
  robots: { index: true, follow: true },
  generator: 'CourtMarriage.live',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64 128x128 256x256' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
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
