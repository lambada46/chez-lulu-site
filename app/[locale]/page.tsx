import ShopPreview from '../shop-preview';
import type { Metadata } from 'next';
import Image from 'next/image';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { notFound } from 'next/navigation';
import { address, instagramHref, mapsHref, openingHours, phone, phoneHref } from '../site';
import { alternativeLanguages, foreignLocales, isForeignLocale, texts } from '../i18n';

export const dynamicParams = false;
export function generateStaticParams() { return foreignLocales.map(locale => ({locale})); }
export async function generateMetadata({params}:{params: Promise<{locale:string}>}):Promise<Metadata>{
 const {locale}=await params;
 if(!isForeignLocale(locale)) return {};
 const t=texts[locale];
 return {title:`Chez Lulu | ${t.slogan} | Avignon`,description:`Chez Lulu — ${t.hero} 42 Rue Carnot, Avignon.`,alternates:{canonical:`/${locale}`,languages: alternativeLanguages()}};
}
export default async function LocalizedHome({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;
 if(!isForeignLocale(locale)) notFound();
 const t=texts[locale];
 const days=openingHours.map((v,i)=>({day:t.days[i],hours:v.hours==='Fermé'?t.closed:v.hours}));
 const menuHref=`/${locale}/carte`;
 const magretPhoto = existsSync(join(process.cwd(), 'public/images/chez-lulu-magret.jpg')) ? '/images/chez-lulu-magret.jpg' : '/images/brandade.jpg';
 const planchePhoto = existsSync(join(process.cwd(), 'public/images/chez-lulu-planche.jpg')) ? '/images/chez-lulu-planche.jpg' : '/images/terrasse.jpg';
 const hasPinsaPhoto = existsSync(join(process.cwd(), 'public/images/chez-lulu-daube-pinsa.jpg'));
 return <main id="accueil" tabIndex={-1} lang={locale}>
   <section className="hero">
     <picture className="heroPhoto"><source media="(max-width: 850px)" srcSet="/images/hero-mobile.png"/><img src="/images/hero-desktop.png" alt="Chez Lulu, café-bistrot in Avignon" fetchPriority="high"/></picture>
     <div className="heroContent"><span className="eyebrow">CHEZ LULU · AVIGNON</span><h1>{t.slogan}</h1><p>{t.hero}</p><a className="lightButton" href={menuHref}>{t.viewMenu}</a></div>
   </section>
   <section className="section intro" id="carte">
     <div className="sectionText"><span className="eyebrow">01 / {t.atTable}</span><h2>{t.simply}</h2><p>{t.intro}</p><a className="textLink" href={menuHref}>{t.viewMenu}</a></div>
     <div className="introGallery">
       <div className="photo"><Image src={magretPhoto} alt="Duck magret served at Chez Lulu" fill sizes="(max-width: 850px) 90vw, 36vw"/></div>
       {hasPinsaPhoto && <div className="photo introPinsa"><Image src="/images/chez-lulu-daube-pinsa.jpg" alt="Daube pinsa with salad served at Chez Lulu" fill sizes="(max-width: 850px) 45vw, 20vw"/></div>}
     </div>
   </section>
   <section className="section story" id="histoire">
     <div className="photo"><Image src={planchePhoto} alt="Charcuterie board and wine at Chez Lulu" fill sizes="(max-width: 850px) 88vw, 46vw"/></div>
     <div className="sectionText"><span className="eyebrow">02 / {t.spirit}</span><h2>{t.storyTitle}</h2><p>{t.story1}</p></div>
   </section>
   <section className="section exhibit compactSection" id="expo"><div className="exhibitInner"><span className="eyebrow">03 / {t.now}</span><h2>MAT GM<br/><span className="exhibitSubtitle">{t.exhibit}</span></h2><p className="exhibitDates">{t.dates}</p><p className="exhibitEvent">{t.vernissage}</p><a className="textLink" href={instagramHref} target="_blank" rel="noopener noreferrer">{t.instagram} ↗</a></div></section>
   <ShopPreview eyebrow={'04 / '+t.shop+' · ÉDITION 001'} title={t.shopTitle} cta={t.viewMenu==='Explore the menu'?'Discover the collection':locale==='es'?'Descubrir la colección':'Scopri la collezione'} />
   <section className="press" id="presse"><span className="eyebrow">05 / {t.press}</span><h2>{t.pressTitle}</h2><div className="pressArticles">
     <article className="pressArticle"><a className="pressBrandLink" href="https://www.avignon.fr/fileadmin/actualites/Documents/2026/11_novembre/Kiosque/Avignons_108_p1_p32-DP1.pdf#page=20" target="_blank" rel="noopener noreferrer" aria-label="Avignon(s), original article"><span className="pressMagazineLogo">avignon<span>(s)</span></span></a><blockquote lang="fr">« … un espace cocon et gourmand qui accueille aussi des expositions »</blockquote></article>
     <article className="pressArticle"><a className="pressBrandLink" href="https://www.ledauphine.com/economie/2026/07/03/chez-lulu-un-nouveau-bistrot-en-ville-faute-de-buvette-au-rocher-des-doms" target="_blank" rel="noopener noreferrer" aria-label="Le Dauphiné Libéré, original article"><span className="pressDauphineLogo">Le Dauphiné <strong>Libéré</strong></span></a><blockquote lang="fr">« nouveau bistrot convivial du centre-ville pour se sentir comme chez soi »</blockquote></article>
     <article className="pressArticle"><a className="pressBrandLink" href="https://www.ledauphine.com/culture-loisirs/2026/07/01/marc-simeliere-expose-dans-le-nouveau-bistrot-chez-lulu" target="_blank" rel="noopener noreferrer" aria-label="Le Dauphiné Libéré, original article"><span className="pressDauphineLogo">Le Dauphiné <strong>Libéré</strong></span></a><blockquote lang="fr">« Marc Simelière expose dans le nouveau bistrot Chez Lulu »</blockquote></article>
   </div></section>
   <section className="section location" id="infos"><div><span className="eyebrow">06 / {t.find}</span><h2>{t.findTitle}</h2><p>{t.findText} {address}.</p><div className="locationLinks"><a className="textLink" href={mapsHref} target="_blank" rel="noopener noreferrer">{t.directions} ↗</a><a className="textLink" href={phoneHref}>{t.call}: {phone}</a><a className="textLink" href={instagramHref} target="_blank" rel="noopener noreferrer">Instagram @chezluluavignon ↗</a></div><h3 className="hoursHeading">{t.hours}</h3><dl className="openingHours">{days.map(({day,hours})=><div key={day}><dt>{day}</dt><dd>{hours}</dd></div>)}</dl></div>
   <div className="faq"><h3>{t.faq}</h3><details><summary>{t.qParking}</summary><p>{t.aParking} <a href="https://www.google.com/maps/search/?api=1&query=Parking+des+Halles+Avignon" target="_blank" rel="noopener noreferrer">{t.parkingLink} ↗</a></p></details><details><summary>{t.qBooking}</summary><p>{t.aBooking} <a href={phoneHref}>{phone}</a>.</p></details><details><summary>{t.qVeg}</summary><p>{t.aVeg} <a href={menuHref}>{t.viewMenu}</a>.</p></details><details><summary>{t.qWhere}</summary><p>{t.aWhere} <a href={mapsHref} target="_blank" rel="noopener noreferrer">{t.planRoute} ↗</a>.</p></details></div></section>
 </main>;
}
