import pages from './recovery-pages.json'

export const recoveryPages = pages
export const recoveryDate = '2026-10-24'
export const recoveryDateLabel = '24 October 2026'
export const recoveryPage = (slug) => pages.find((page) => page.slug === slug)
export const recoveryHref = (page) => `/${page.slug}/`
export const recoveryAnchor = (index) => `guide-section-${index + 1}`

export function recoveryMetadata(page) {
  const url = `https://courtmarriage.live${recoveryHref(page)}`
  return {
    title: page.seo,
    description: page.description,
    alternates: { canonical: recoveryHref(page) },
    robots: { index: true, follow: true },
    openGraph: {
      title: page.seo,
      description: page.description,
      url,
      type: page.kind === 'article' ? 'article' : 'website',
      siteName: 'CourtMarriage.live',
      images: [{ url: `/images/recovery/${page.image}.webp`, width: 1200, height: 800, alt: page.title }],
      ...(page.kind === 'article' ? { modifiedTime: recoveryDate } : {}),
    },
    twitter: { card: 'summary_large_image', title: page.seo, description: page.description, images: [`/images/recovery/${page.image}.webp`] },
  }
}
