import type { MetadataRoute } from 'next';
import { siteUrl } from './site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/carte'].map((path) => ({ url: new URL(path, siteUrl).href }));
}
