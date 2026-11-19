import type { Metadata } from 'next';
import { menu, type MenuCategory } from './menu';
import MenuTabs from './menu-tabs';

export const metadata: Metadata = {
  title: 'La carte | Chez Lulu, café-bistrot à Avignon',
  description: 'La carte du Chez Lulu, café-bistrot à Avignon. La Provence, sans cérémonie.',
  alternates: { canonical: '/carte' },
};

const priceFormatter = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });

const tabs = [
  { id: 'manger', label: 'À manger' },
  { id: 'boissons', label: 'Boissons' },
  { id: 'vins', label: 'Vins' },
  { id: 'petit-dejeuner', label: 'Petit déjeuner' },
] as const;

type TabId = (typeof tabs)[number]['id'];

const categoryTabs: Readonly<Partial<Record<string, TabId>>> = {
  'Boissons fraîches': 'boissons',
  'Sodas & sirops': 'boissons',
  Eaux: 'boissons',
  Bières: 'boissons',
  'Apéritifs & cocktails': 'boissons',
  'Boissons chaudes': 'boissons',
  'Les spéciaux · froids ou chauds': 'boissons',
  'Vins blancs': 'vins',
  'Vins rosés': 'vins',
  'Vins rouges': 'vins',
  'Petit déjeuner · sucré': 'petit-dejeuner',
  'Petit déjeuner · salé': 'petit-dejeuner',
  'Formules petit déjeuner': 'petit-dejeuner',
  'Suppléments petit déjeuner': 'petit-dejeuner',
};

function Category({ name, dishes }: MenuCategory) {
  return (
    <section className="menuCategory">
      <h2>{name}</h2>
      <ul className="menuDishes">
        {dishes.map(({ name: dishName, description, priceEuros, priceLabel, variants, allergens }) => (
          <li key={dishName}>
            <div className="menuDishHeading">
              <h3>{dishName}</h3>
              {(priceEuros !== undefined || priceLabel) && (
                <div className="menuPrice">
                  {priceEuros !== undefined && <span>{priceFormatter.format(priceEuros)}</span>}
                  {priceLabel && <span>{priceLabel}</span>}
                </div>
              )}
            </div>
            {description && <p>{description}</p>}
            {variants && variants.length > 0 && (
              <ul className="menuVariants">
                {variants.map(({ label, priceEuros: variantPrice }) => (
                  <li key={label}>
                    <span>{label}</span>
                    <span className="menuPrice">{priceFormatter.format(variantPrice)}</span>
                  </li>
                ))}
              </ul>
            )}
            {allergens && allergens.length > 0 && <p>Allergènes : {allergens.join(', ')}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Carte() {
  const categories = menu.filter(({ dishes }) => dishes.length > 0);

  return (
    <main className="menuPage">
      <h1>La carte</h1>
      <p className="menuIntro">
        Notre cuisine suit les saisons et s'inspire des traditions du Sud, avec la liberté d'y apporter notre touche personnelle. Des plats généreux, quelques surprises et toujours le plaisir de bien manger, sans cérémonie.
      </p>
      {categories.length === 0 ? (
        <p>La carte sera publiée ici dès qu’elle sera disponible.</p>
      ) : (
        <MenuTabs tabs={tabs.map(({ id, label }) => ({
          id,
          label,
          content: categories
            .filter(({ name }) => (categoryTabs[name] ?? 'manger') === id)
            .map((category) => <Category key={category.name} {...category} />),
        }))} />
      )}
    </main>
  );
}
