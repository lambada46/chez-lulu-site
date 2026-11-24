import Image from 'next/image';

type ShopPreviewProps = {
  eyebrow: string;
  title: string;
  cta: string;
};

const featured = [
  { name: 'Lulu, c’est vous', image: '/images/boutique/lulu-cest-vous.jpg', className: 'shopPreviewFeatured' },
  { name: 'Crème brûlée pistache', image: '/images/boutique/creme-brulee.png', className: '' },
  { name: 'Le tablier', image: '/images/boutique/tablier-photo.jpg', className: '' },
  { name: 'Le cabas', image: '/images/boutique/cabas.jpg', className: '' },
] as const;

export default function ShopPreview({ eyebrow, title, cta }: ShopPreviewProps) {
  return (
    <section className="shopPreview" id="boutique" aria-labelledby="shop-preview-title">
      <div className="shopPreviewHeader">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2 id="shop-preview-title">{title}</h2>
        </div>
        <a className="shopPreviewLink" href="/boutique">{cta}<span aria-hidden="true">↗</span></a>
      </div>
      <div className="shopPreviewGallery" aria-label="Sélection de la collection inaugurale 2026">
        {featured.map((product, i) => (
          <a className={'shopPreviewItem ' + product.className} href="/boutique" key={product.name} aria-label={'Découvrir ' + product.name}>
            <Image
              src={product.image}
              alt={product.name + ' — collection inaugurale Chez Lulu'}
              fill
              sizes={i === 0 ? '(max-width: 680px) 78vw, (max-width: 1000px) 48vw, 42vw' : '(max-width: 680px) 72vw, (max-width: 1000px) 45vw, 20vw'}
            />
            <span className="shopPreviewItemLabel">{product.name}</span>
          </a>
        ))}
      </div>
      <a className="shopPreviewMobileLink" href="/boutique">{cta}<span aria-hidden="true">↗</span></a>
    </section>
  );
}
