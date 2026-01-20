import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gotik.ai'

  // Current date for lastModified
  const currentDate = new Date()

  // Define all routes with their priorities and change frequencies
  const routes = [
    {
      url: '',
      priority: 1.0,
      changeFrequency: 'weekly' as const,
    },
    // AI Services
    {
      url: '/ai-consulting',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/ai-solutions',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    // Software Services
    {
      url: '/software-engineer',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/software-modernization',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/software-architecture',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/rust-transition',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    // Cloud Services
    {
      url: '/cloud-services',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/cloud-solutions',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    // Data Services
    {
      url: '/data-management',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/data-architecture',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/data-and-analytics',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/data-solutions',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/data-strategy',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    // Industry Solutions
    {
      url: '/bim2fm',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/erp-system',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/internet-of-things',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/mobile-web-apps',
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
