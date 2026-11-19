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
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon-32x32.png?v=2', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png?v=2', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-icon.png?v=2', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico?v=2',
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
