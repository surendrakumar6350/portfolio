import { MetadataRoute } from 'next'
import { Projects } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL
  const defaultUrl = 'https://surendrakumar6350.vercel.app'
  const base = envUrl ? (envUrl.startsWith('http') ? envUrl : `https://${envUrl}`) : defaultUrl
  const baseUrl = base.endsWith('/') ? base : base + '/'
  
  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/project`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hackathons`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Add individual project routes
  const projectRoutes = Projects.map((project) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...projectRoutes]
} 