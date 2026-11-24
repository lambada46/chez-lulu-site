import type { Locale } from './i18n';

const copy = {
  fr: {
    section: 'EN CE MOMENT',
    marketType: 'RENDEZ-VOUS · 09.12.2026',
    marketTitle: 'Marché de Noël',
    marketDate: 'Mercredi 9 décembre 2026 · 15h–18h30',
    marketDetails: 'Bijoux Victoria · Parfums & cosmétiques · Bijoux artisanaux homme',
    marketAccess: 'Entrée gratuite · Marché en extérieur',
    exhibitionType: 'EXPOSITION',
    exhibitionTitle: 'MAT GM',
    exhibitionSubtitle: 'Exposition de peintures',
    exhibitionDate: 'Du 20 novembre 2026 au 7 février 2027',
    opening: 'Vernissage · Vendredi 4 décembre à 18h',
    social: 'Suivre les événements',
  },
  en: {
    section: 'WHAT’S ON',
    marketType: 'EVENT · 09.12.2026',
    marketTitle: 'Christmas Market',
    marketDate: 'Wednesday 9 December 2026 · 3–6:30 pm',
    marketDetails: 'Victoria jewellery · Perfumes & cosmetics · Handmade men’s jewellery',
    marketAccess: 'Free entry · Outdoor market',
    exhibitionType: 'EXHIBITION',
    exhibitionTitle: 'MAT GM',
    exhibitionSubtitle: 'Painting exhibition',
    exhibitionDate: '20 November 2026 – 7 February 2027',
    opening: 'Opening reception · Friday 4 December at 6 pm',
    social: 'Follow our events',
  },
  es: {
    section: 'AHORA EN CHEZ LULU',
    marketType: 'EVENTO · 09.12.2026',
    marketTitle: 'Mercado de Navidad',
    marketDate: 'Miércoles 9 de diciembre de 2026 · 15:00–18:30',
    marketDetails: 'Joyas Victoria · Perfumes y cosméticos · Joyería artesanal para hombre',
    marketAccess: 'Entrada gratuita · Mercado al aire libre',
    exhibitionType: 'EXPOSICIÓN',
    exhibitionTitle: 'MAT GM',
    exhibitionSubtitle: 'Exposición de pintura',
    exhibitionDate: 'Del 20 de noviembre de 2026 al 7 de febrero de 2027',
    opening: 'Inauguración · Viernes 4 de diciembre a las 18:00',
    social: 'Seguir los eventos',
  },
  it: {
    section: 'IN QUESTO MOMENTO',
    marketType: 'EVENTO · 09.12.2026',
    marketTitle: 'Mercatino di Natale',
    marketDate: 'Mercoledì 9 dicembre 2026 · 15:00–18:30',
    marketDetails: 'Gioielli Victoria · Profumi e cosmetici · Gioielli artigianali da uomo',
    marketAccess: 'Ingresso gratuito · Mercatino all’aperto',
    exhibitionType: 'MOSTRA',
    exhibitionTitle: 'MAT GM',
    exhibitionSubtitle: 'Mostra di pittura',
    exhibitionDate: 'Dal 20 novembre 2026 al 7 febbraio 2027',
    opening: 'Vernissage · Venerdì 4 dicembre alle 18:00',
    social: 'Segui gli eventi',
  },
} as const;

export default function CurrentEvents({ locale = 'fr' }: { locale?: Locale }) {
  const t = copy[locale];

  return (
    <section className="currentEvents" id="expo" aria-labelledby="current-events-title">
      <header className="currentEventsHeading">
        <span className="eyebrow">03 / {t.section}</span>
        <h2 id="current-events-title">{t.section === 'EN CE MOMENT' ? 'En ce moment.' : t.section}</h2>
      </header>
      <div className="currentEventsGrid">
        <article className="currentEventCard currentEventMarket">
          <span className="currentEventCategory">{t.marketType}</span>
          <h3>{t.marketTitle}</h3>
          <p className="currentEventDate"><time dateTime="2026-12-09">{t.marketDate}</time></p>
          <p className="currentEventDetails">{t.marketDetails}</p>
          <p className="currentEventAccess">{t.marketAccess}</p>
          <span className="currentEventLocation">CHEZ LULU · 42 RUE CARNOT · AVIGNON</span>
        </article>
        <article className="currentEventCard currentEventExhibition">
          <span className="currentEventCategory">{t.exhibitionType}</span>
          <h3>{t.exhibitionTitle}</h3>
          <p className="currentEventSubtitle">{t.exhibitionSubtitle}</p>
          <p className="currentEventDate">{t.exhibitionDate}</p>
          <p className="currentEventDetails">{t.opening}</p>
          <a href="https://www.instagram.com/chezluluavignon/" target="_blank" rel="noopener noreferrer" className="currentEventInstagram">{t.social} ↗</a>
        </article>
      </div>
    </section>
  );
}
