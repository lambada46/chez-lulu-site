import type { Metadata } from 'next';
import Header from './header';
import { phoneHref, siteUrl, instagramHref } from './site';
import './style.css';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Chez Lulu | Café-bistrot à Avignon',
  description: 'Chez Lulu — La Provence, sans cérémonie. Café-bistrot à Avignon.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header phoneHref={phoneHref} />
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
