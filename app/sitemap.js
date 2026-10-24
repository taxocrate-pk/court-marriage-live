import { cityServices, nikahNamaServices, serviceLinks, site } from '@/lib/site-config'
import { recoveryPages } from '@/lib/recovery'

export default function sitemap() {
  const routes = [
    '/',
    ...cityServices.map((item) => item.href),
    ...nikahNamaServices.map((item) => item.href),
    serviceLinks.onlineNikah,
    serviceLinks.foreignNikah,
    serviceLinks.nikahServices,
    serviceLinks.nikahKhawan,
    serviceLinks.marriageCertificate,
    serviceLinks.about,
    serviceLinks.blogs,
    serviceLinks.contact,
    ...recoveryPages.map((page) => `/${page.slug}/`),
  ]

  return [...new Set(routes)].map((route) => ({
    url: `${site.url}${route === '/' ? '/' : route}`,
    lastModified: recoveryPages.some((page) => `/${page.slug}/` === route) ? new Date('2026-10-24T00:00:00+05:00') : undefined,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.includes('court-marriage') ? 0.9 : 0.8,
  }))
}
