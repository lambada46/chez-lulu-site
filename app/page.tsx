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
const magretPhoto = existsSync(join(process.cwd(), 'public/images/chez-lulu-magret.jpg')) ? '/images/chez-lulu-magret.jpg' : '/images/brandade.jpg';
const planchePhoto = existsSync(join(process.cwd(), 'public/images/chez-lulu-planche.jpg')) ? '/images/chez-lulu-planche.jpg' : '/images/terrasse.jpg';
const hasPinsaPhoto = existsSync(join(process.cwd(), 'public/images/chez-lulu-daube-pinsa.jpg'));


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
<section className="section intro" id="carte" tabIndex={-1}>
  <div className="sectionText">
    <span className="eyebrow">01 / À TABLE</span>
    <h2>Simplement<br/>bon.</h2>
    <p>Une cuisine de saison, inspirée du Sud et libre de ses envies.</p>
    <a className="textLink" href="/carte">Découvrir la carte</a>
  </div>
  <div className="introGallery">
    <div className="photo"><Image src={magretPhoto} alt="Magret de canard servi chez Lulu" fill sizes="(max-width: 850px) 90vw, 36vw"/></div>
    {hasPinsaPhoto && <div className="photo introPinsa"><Image src="/images/chez-lulu-daube-pinsa.jpg" alt="Pinsa garnie à la daube et salade, servie chez Lulu" fill sizes="(max-width: 850px) 45vw, 20vw"/></div>}
  </div>
</section>
<section className="section story" id="histoire" tabIndex={-1}>
  <div className="photo"><Image src={planchePhoto} alt="Planche à partager et vin sur une table chez Lulu" fill sizes="(max-width: 850px) 88vw, 46vw"/></div>
  <div className="sectionText">
    <span className="eyebrow">02 / L’ESPRIT LULU</span>
    <h2>Chez Lulu,<br/>tout simplement.</h2>
    <p>Un café, un déjeuner, un verre entre amis. Une cuisine inspirée des traditions du Sud, de l’art sur les murs et le plaisir de se retrouver, sans cérémonie.</p>
  </div>
</section>
<section className="section exhibit compactSection" id="expo" tabIndex={-1} aria-labelledby="expo-title">
<div className="exhibitInner">
  <span className="eyebrow">03 / EN CE MOMENT</span>
  <h2 id="expo-title">MAT GM<br/><span className="exhibitSubtitle">Exposition de peintures</span></h2>
  <p className="exhibitDates">Du 20 novembre 2026 au 7 février 2027</p>
  
  <p className="exhibitEvent"><strong>Vernissage</strong> · Vendredi 4 décembre 2026 à 18h</p>
  <a className="textLink" href="https://www.instagram.com/chezluluavignon/" target="_blank" rel="noopener noreferrer">Suivre les expositions sur Instagram ↗</a>
</div>
</section>
<section className="section shop compactSection" id="boutique" tabIndex={-1}><div><span className="eyebrow">04 / LA BOUTIQUE</span><h2>Un peu de Lulu<br/>chez vous.</h2><p>Objets, textiles et petites idées à emporter. Une première sélection arrive bientôt.</p><span className="smallNote">Boutique MVP · produits et prix à confirmer</span></div></section>
<section className="press" id="presse" aria-labelledby="press-title">
  <span className="eyebrow">05 / DANS LA PRESSE</span>
  <h2 id="press-title">On parle de nous.</h2>
  <div className="pressArticles">
    <article className="pressArticle">
      <a className="pressBrandLink" href="https://www.avignon.fr/fileadmin/actualites/Documents/2026/11_novembre/Kiosque/Avignons_108_p1_p32-DP1.pdf#page=20" target="_blank" rel="noopener noreferrer" aria-label="Lire la publication du magazine Avignon(s)">
        <span className="pressMagazineLogo">avignon<span>(s)</span></span>
      </a>
      <blockquote>« … un espace cocon et gourmand qui accueille aussi des expositions »</blockquote>
    </article>
    <article className="pressArticle">
      <a className="pressBrandLink" href="https://www.ledauphine.com/economie/2026/07/03/chez-lulu-un-nouveau-bistrot-en-ville-faute-de-buvette-au-rocher-des-doms" target="_blank" rel="noopener noreferrer" aria-label="Lire l’article sur Chez Lulu dans Le Dauphiné Libéré">
        <span className="pressDauphineLogo">Le Dauphiné <strong>Libéré</strong></span>
      </a>
      <blockquote>« nouveau bistrot convivial du centre-ville pour se sentir comme chez soi »</blockquote>
    </article>
    <article className="pressArticle">
      <a className="pressBrandLink" href="https://www.ledauphine.com/culture-loisirs/2026/07/01/marc-simeliere-expose-dans-le-nouveau-bistrot-chez-lulu" target="_blank" rel="noopener noreferrer" aria-label="Lire l’article sur l’exposition de Marc Simelière dans Le Dauphiné Libéré">
        <span className="pressDauphineLogo">Le Dauphiné <strong>Libéré</strong></span>
      </a>
      <blockquote>« Marc Simelière expose dans le nouveau bistrot Chez Lulu »</blockquote>
    </article>
  </div>
</section>
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
  <details><summary>Où se garer ?</summary><p>Le parking des Halles est le plus pratique pour venir chez Lulu, à environ 3 minutes à pied du restaurant. <a href="https://www.google.com/maps/search/?api=1&query=Parking+des+Halles+Avignon" target="_blank" rel="noopener noreferrer">Voir le parking sur Google Maps ↗</a></p></details>
  <details><summary>Faut-il réserver ?</summary><p>Pour réserver une table, appelez-nous au <a href={phoneHref}>{phone}</a>.</p></details>
  <details><summary>Proposez-vous des plats végétariens ?</summary><p>Oui, notre carte comprend des propositions végétariennes. <a href="/carte">Consultez la carte</a> pour les plats du moment.</p></details>
  <details><summary>Où se trouve Chez Lulu ?</summary><p>Au 42 rue Carnot, dans le centre d’Avignon. <a href={mapsHref} target="_blank" rel="noopener noreferrer">Préparer votre itinéraire</a>.</p></details>
</div>
</section>
</main></>}
