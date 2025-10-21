import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shebenik-park.vercel.app'
  const currentDate = new Date()

  // Define all routes with their priorities and change frequencies
  const routes = [
    {
      url: '',
      priority: 1.0,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/about',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/wildlife',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/activities',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/visit',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/accommodation',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/gallery',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: '/testimonials',
      priority: 0.7,
      changeFrequency: 'weekly' as const,
    },
    {
      url: '/faq',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/contact',
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    },
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

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
