import type { Metadata } from 'next';
import Image from 'next/image';
import { phone, phoneHref } from './site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const address = process.env.NEXT_PUBLIC_RESTAURANT_ADDRESS || '';
export default function Home(){return <>
<main id="accueil" tabIndex={-1}>
<section className="hero">
  <div className="heroPhoto">
    <Image src="/images/facade.jpg" alt="La terrasse du Chez Lulu à Avignon, le soir" fill priority sizes="100vw" />
  </div>
  <div className="heroContent">
    <span className="eyebrow">CAFÉ–BISTROT · AVIGNON</span>
    <h1>La Provence,<br />sans cérémonie.</h1>
    <p>Une cuisine généreuse, un lieu où l’on se retrouve.</p>
    <a className="lightButton" href="/carte">Découvrir la carte</a>
  </div>
</section>
<section className="section intro" id="carte" tabIndex={-1}><div className="sectionText"><span className="eyebrow">01 / À TABLE</span><h2>Simplement<br/>bon.</h2><p>Une cuisine de bistrot, des plats généreux et le plaisir de partager un bon moment.</p><a className="textLink" href="/carte">Voir la carte</a></div><div className="photo"><Image src="/images/brandade.jpg" alt="Plat de brandade et salade au comptoir" fill sizes="(max-width: 850px) 88vw, 46vw"/></div></section>
<section className="section story" id="histoire" tabIndex={-1}><div className="photo"><Image src="/images/terrasse.jpg" alt="Terrasse du Chez Lulu dans les rues d’Avignon" fill sizes="(max-width: 850px) 88vw, 46vw"/></div><div className="sectionText"><span className="eyebrow">02 / L’ESPRIT LULU</span><h2>Un bistrot,<br/>un lieu de vie.</h2><p>Chez Lulu, on vient pour manger, discuter, se retrouver. Et parfois découvrir une exposition.</p><p className="muted">Notre histoire et les visages de l’équipe seront ajoutés ici.</p></div></section>
<section className="section exhibit compactSection" id="expo" tabIndex={-1}><div><span className="eyebrow">03 / EN CE MOMENT</span><h2>De l’art<br/>chez Lulu.</h2><p>Les murs du bistrot accueillent régulièrement des artistes. Découvrez bientôt l’exposition du moment.</p><span className="smallNote">Artiste, œuvres et dates à confirmer</span></div></section>
<section className="section shop compactSection" id="boutique" tabIndex={-1}><div><span className="eyebrow">04 / LA BOUTIQUE</span><h2>Un peu de Lulu<br/>chez vous.</h2><p>Objets, textiles et petites idées à emporter. Une première sélection arrive bientôt.</p><span className="smallNote">Boutique MVP · produits et prix à confirmer</span></div></section>
<section className="press"><span className="eyebrow">05 / ON PARLE DE NOUS</span><h2>On parle de nous.</h2><p>Les articles et leurs liens seront ajoutés après vérification.</p></section>
<section className="section location" id="infos" tabIndex={-1}><div><span className="eyebrow">06 / NOUS TROUVER</span><h2>On se retrouve ?</h2><p>Au cœur d’Avignon.</p>{address?<><p>{address}</p><a className="textLink" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">Itinéraire sur Google Maps ↗</a></>:<p className="muted">Adresse exacte à renseigner</p>}{phoneHref&&<p><a className="textLink" href={phoneHref}>Appeler pour réserver : {phone}</a></p>}<p className="muted">Horaires à confirmer avant publication.</p></div><div className="faq"><h3>Questions fréquentes</h3><details><summary>Où se garer ?</summary><p>Les parkings conseillés seront indiqués ici.</p></details><details><summary>Faut-il réserver ?</summary><p>Vous pouvez nous appeler pour réserver une table.</p></details><details><summary>Proposez-vous des plats végétariens ?</summary><p>Consultez notre carte actualisée pour les propositions du moment.</p></details><details><summary>Comment accéder au restaurant ?</summary><p>Retrouvez notre emplacement et votre itinéraire via Google Maps.</p></details></div></section>
</main></>}
