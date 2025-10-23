import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const currentDate = new Date()

  // Generate routes from navigation config + additional nested routes
  const navigationRoutes = siteConfig.navigation.map((item) => ({
    url: item.href,
    priority: item.href === '/' ? 1.0 : 0.8,
    changeFrequency: 'monthly' as const,
  }))

  // Additional nested routes not in main navigation
  const additionalRoutes = [
    {
      url: '/visit/from-tirana',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/visit/nearby',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
  ]

  const allRoutes = [...navigationRoutes, ...additionalRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
