import type { Metadata } from 'next';
import Header from './header';
import { siteUrl, instagramHref, phone, openingHours } from './site';
import './style.css';
import { alternativeLanguages } from './i18n';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Chez Lulu | Café-bistrot à Avignon',
  description: 'Chez Lulu — La Provence, sans cérémonie. Café-bistrot à Avignon.',
  alternates: { languages: alternativeLanguages() },
  icons: {
    icon: [{ url: '/lu-favicon.svg?v=3', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon.png?v=2', sizes: '180x180', type: 'image/png' }],
    shortcut: '/lu-favicon.svg?v=3',
  },
};

const restaurantStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': 'https://chez-lulu.fr/#restaurant',
  name: 'Chez Lulu',
  url: siteUrl.href,
  description: 'Café-bistrot à Avignon. La Provence, sans cérémonie.',
  image: new URL('/images/hero-desktop.png', siteUrl).href,
  telephone: phone,
  servesCuisine: 'Cuisine provençale et bistrot',
  hasMenu: new URL('/carte', siteUrl).href,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '42 Rue Carnot',
    addressLocality: 'Avignon',
    postalCode: '84000',
    addressCountry: 'FR',
  },
  sameAs: [instagramHref],
  openingHoursSpecification: openingHours.flatMap(({day,hours}) => {
    const days: Record<string,string> = {
      Lundi: 'Monday', Mardi: 'Tuesday', Mercredi: 'Wednesday',
      Jeudi: 'Thursday', Vendredi: 'Friday', Samedi: 'Saturday', Dimanche: 'Sunday',
    };
    if (hours === 'Fermé') return [];
    const [opens,closes] = hours.split('–').map(value => value.replace('h', ':').padEnd(5, '0'));
    return [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: days[day],
      opens,
      closes,
    }];
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantStructuredData).replace(/</g, '\\u003c') }} />
        <Header />
        {children}
        <footer>
          <strong>CHEZ LULU</strong>
          <span>La Provence, sans cérémonie.</span>
          <span>42 rue Carnot · Avignon</span>
          <a href={instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Chez Lulu sur Instagram"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg></a>
        </footer>
      </body>
    </html>
  );
}
