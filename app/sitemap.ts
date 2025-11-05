// import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://swarup.vercel.app'

import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://swarup.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://swarup.vercel.app/research',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    }
  ]
}
