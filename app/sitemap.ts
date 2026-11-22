import type { MetadataRoute } from 'next';
import { siteUrl } from './site';
import { locales, localizedHref, alternativeLanguages } from './i18n';
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const translatedPages = ['', 'carte'].flatMap(path => locales.map(locale => ({
    url: new URL(localizedHref(locale,path), siteUrl).href,
    alternates: { languages: Object.fromEntries(Object.entries(alternativeLanguages(path)).map(([lang,url])=>[lang,new URL(url,siteUrl).href])) }
  })));
  return [...translatedPages, { url: new URL('/boutique', siteUrl).href }];
}
