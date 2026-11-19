import type { Metadata } from 'next';
import Header from './header';
import { phoneHref, siteUrl } from './site';
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
          <span>Avignon · France</span>
        </footer>
      </body>
    </html>
  );
}
