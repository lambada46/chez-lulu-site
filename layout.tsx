import type { Metadata } from 'next';
import './style.css';
export const metadata: Metadata = {title:'Chez Lulu | Café-bistrot à Avignon',description:'Chez Lulu — La Provence, sans cérémonie. Café-bistrot à Avignon.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="fr"><body>{children}</body></html>}
