import { cityServices, nikahNamaServices, serviceLinks, site } from '@/lib/site-config'

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
  ]

  return [...new Set(routes)].map((route) => ({
    url: `${site.url}${route === '/' ? '/' : route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.includes('court-marriage') ? 0.9 : 0.8,
  }))
}
