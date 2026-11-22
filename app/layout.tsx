import type { Metadata } from 'next';
import Header from './header';
import { siteUrl, instagramHref } from './site';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <footer>
          <strong>CHEZ LULU</strong>
          <span>La Provence, sans cérémonie.</span>
          <span>42 rue Carnot · Avignon</span>
          <a href={instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Chez Lulu sur Instagram">Instagram ↗</a>
        </footer>
      </body>
    </html>
  );
}
