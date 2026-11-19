import type { Metadata } from 'next';
import { menu } from './menu';

export const metadata: Metadata = {
  title: 'La carte | Chez Lulu, café-bistrot à Avignon',
  description: 'La carte du Chez Lulu, café-bistrot à Avignon. La Provence, sans cérémonie.',
  alternates: { canonical: '/carte' },
};

const priceFormatter = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });

export default function Carte() {
  const categories = menu.filter(({ dishes }) => dishes.length > 0);

  return (
    <main className="menuPage">
      <h1>La carte</h1>
      {categories.length === 0 && (
        <p>La carte sera publiée ici dès qu’elle sera disponible.</p>
      )}
      {categories.map(({ name, dishes }) => (
        <section className="menuCategory" key={name}>
          <h2>{name}</h2>
          <ul className="menuDishes">
            {dishes.map(({ name: dishName, description, priceEuros, allergens }) => (
              <li key={dishName}>
                <div className="menuDishHeading">
                  <h3>{dishName}</h3>
                  {priceEuros !== undefined && <span>{priceFormatter.format(priceEuros)}</span>}
                </div>
                {description && <p>{description}</p>}
                {allergens && allergens.length > 0 && (
                  <p className="muted">Allergènes : {allergens.join(', ')}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
