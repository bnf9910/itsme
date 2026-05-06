import type { MetadataRoute } from 'next';

const BASE_URL = 'https://itsme1.kr';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/treatments`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/results`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];
}
