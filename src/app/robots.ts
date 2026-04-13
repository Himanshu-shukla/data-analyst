import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://britinstitute.uk/sitemap.xml',
    host: 'https://britinstitute.uk',
  };
}
