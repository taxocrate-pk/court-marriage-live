import { site } from '@/lib/site-config'
import { allSiteSlugs, getSitePage } from '@/lib/site-pages'

export default function sitemap() {
  const routes = ['/', ...allSiteSlugs.map(slug => `/${slug}/`)]
  return [...new Set(routes)].map(route => ({
    url: `${site.url}${route}`,
    lastModified: new Date(`${route === '/' ? '2026-10-31' : getSitePage(route.slice(1, -1))?.updated || '2026-10-24'}T00:00:00+05:00`),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.includes('court-marriage') ? 0.9 : 0.8,
  }))
}

