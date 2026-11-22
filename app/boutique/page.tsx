import type { Metadata } from 'next';
import Boutique from './boutique-client';
export const metadata: Metadata = {
 title: 'Collection inaugurale 2026 | La boutique Chez Lulu',
 description: 'La collection inaugurale Chez Lulu : vêtements et objets du bistrot à Avignon. Inscrivez-vous pour être informé de la sortie.',
 alternates:{canonical:'/boutique'},
};
export default function BoutiquePage(){ return <Boutique/>; }
