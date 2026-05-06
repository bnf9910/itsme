import type { MetadataRoute } from 'next';

const BASE_URL = 'https://itsme1.kr';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      // Allow major AI crawlers explicitly (helps with GEO / AI search visibility)
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
