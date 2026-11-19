import { existsSync } from 'node:fs';
import { join } from 'node:path';
import type { Metadata } from 'next';
import Image from 'next/image';
import { phone, phoneHref, address, mapsHref, openingHours, instagramHref } from './site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const desktopHero = '/images/hero-desktop.png';
const mobileHero = '/images/hero-mobile.png';
const desktopHeroSource = existsSync(join(process.cwd(), 'public', desktopHero))
  ? desktopHero
  : '/images/facade.jpg';
const hasMobileHero = existsSync(join(process.cwd(), 'public', mobileHero));

export default function Home(){return <>
<main id="accueil" tabIndex={-1}>
<section className="hero">
  <picture className="heroPhoto">
    {hasMobileHero && <source media="(max-width: 850px)" srcSet={mobileHero} />}
    <img src={desktopHeroSource} alt="La terrasse du Chez Lulu à Avignon, le soir" fetchPriority="high" />
  </picture>
  <div className="heroContent">
    <span className="eyebrow">CAFÉ–BISTROT · AVIGNON</span>
    <h1>La Provence,<br />sans cérémonie.</h1>
    <p>Une cuisine généreuse, un lieu où l’on se retrouve.</p>
    <a className="lightButton" href="/carte">Découvrir la carte</a>
  </div>
</section>
<section className="section intro" id="carte" tabIndex={-1}><div className="sectionText"><span className="eyebrow">01 / À TABLE</span><h2>Simplement<br/>bon.</h2><p>Une cuisine de bistrot, des plats généreux et le plaisir de partager un bon moment.</p><a className="textLink" href="/carte">Voir la carte</a></div><div className="photo"><Image src="/images/brandade.jpg" alt="Plat de brandade et salade au comptoir" fill sizes="(max-width: 850px) 88vw, 46vw"/></div></section>
<section className="section story" id="histoire" tabIndex={-1}>
<div className="photo"><Image src="/images/terrasse.jpg" alt="Terrasse du Chez Lulu dans les rues d’Avignon" fill sizes="(max-width: 850px) 88vw, 46vw"/></div>
<div className="sectionText">
  <span className="eyebrow">02 / L’ESPRIT LULU</span>
  <h2>Chez Lulu,<br/>tout simplement.</h2>
  <p>Une cuisine inspirée des traditions du Sud, des plats qui suivent les saisons et la liberté d’y mettre notre touche personnelle.</p>
  <p>On vient pour un café, pour déjeuner, pour se retrouver autour d’un verre. Et, au fil des mois, découvrir les artistes qui exposent sur nos murs.</p>
  <p>À Avignon, la Provence se vit ici sans cérémonie.</p>
</div>
</section>
<section className="section exhibit compactSection" id="expo" tabIndex={-1}><div><span className="eyebrow">03 / EN CE MOMENT</span><h2>De l’art<br/>chez Lulu.</h2><p>Les murs du bistrot accueillent régulièrement des artistes. Découvrez bientôt l’exposition du moment.</p><span className="smallNote">Artiste, œuvres et dates à confirmer</span></div></section>
<section className="section shop compactSection" id="boutique" tabIndex={-1}><div><span className="eyebrow">04 / LA BOUTIQUE</span><h2>Un peu de Lulu<br/>chez vous.</h2><p>Objets, textiles et petites idées à emporter. Une première sélection arrive bientôt.</p><span className="smallNote">Boutique MVP · produits et prix à confirmer</span></div></section>
<section className="press"><span className="eyebrow">05 / ON PARLE DE NOUS</span><h2>On parle de nous.</h2><p>Les articles et leurs liens seront ajoutés après vérification.</p></section>
<section className="section location" id="infos" tabIndex={-1}>
<div>
  <span className="eyebrow">06 / NOUS TROUVER</span>
  <h2>On se retrouve ?</h2>
  <p>Au cœur d’Avignon, au {address}.</p>
  <div className="locationLinks">
    <a className="textLink" href={mapsHref} target="_blank" rel="noopener noreferrer">Itinéraire sur Google Maps ↗</a>
    <a className="textLink" href={phoneHref}>Réserver par téléphone : {phone}</a>
    <a className="textLink" href={instagramHref} target="_blank" rel="noopener noreferrer">Instagram @chezluluavignon ↗</a>
  </div>
  <h3 className="hoursHeading">Horaires d’ouverture</h3>
  <dl className="openingHours">
    {openingHours.map(({day,hours}) => <div key={day}><dt>{day}</dt><dd>{hours}</dd></div>)}
  </dl>
</div>
<div className="faq">
  <h3>Questions fréquentes</h3>
  <details><summary>Où se garer ?</summary><p>Retrouvez les parkings du centre-ville et l’itinéraire vers le restaurant sur <a href={mapsHref} target="_blank" rel="noopener noreferrer">Google Maps</a>.</p></details>
  <details><summary>Faut-il réserver ?</summary><p>Pour réserver une table, appelez-nous au <a href={phoneHref}>{phone}</a>.</p></details>
  <details><summary>Proposez-vous des plats végétariens ?</summary><p>Oui, notre carte comprend des propositions végétariennes. <a href="/carte">Consultez la carte</a> pour les plats du moment.</p></details>
  <details><summary>Où se trouve Chez Lulu ?</summary><p>Au 42 rue Carnot, dans le centre d’Avignon. <a href={mapsHref} target="_blank" rel="noopener noreferrer">Préparer votre itinéraire</a>.</p></details>
</div>
</section>
</main></>}
