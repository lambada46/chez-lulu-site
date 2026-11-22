'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { type Locale, isForeignLocale, localizedHref, texts } from './i18n';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const prefix = pathname.split('/')[1] || '';
  const locale: Locale = isForeignLocale(prefix) ? prefix : 'fr';
  const isMenu = pathname.endsWith('/carte');
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  const homeHref = localizedHref(locale);
  const menuHref = localizedHref(locale, 'carte');
  const reservationHref = homeHref + '#infos';
  const navLabels = locale === 'fr' ? ['La carte','Notre histoire','Exposition','Boutique','Dans la presse','Nous trouver'] : [...texts[locale].nav];
  const navDestinations = [menuHref,homeHref+'#histoire',homeHref+'#expo','/boutique',homeHref+'#presse',homeHref+'#infos'];
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="header"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen && menuButton.current?.getClientRects().length) {
          event.preventDefault();
          setMenuOpen(false);
          menuButton.current.focus();
        }
      }}
    >
      <a className="logo" href={homeHref+"#accueil"} onClick={() => setMenuOpen(false)}>
        CHEZ LULU
      </a>
      <button
        className="menuToggle"
        type="button"
        ref={menuButton}
        aria-controls="site-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d={menuOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 6h16M4 12h16M4 18h16'} />
        </svg>
      </button>
      <nav id="site-navigation" className="mainNavigation" aria-label="Navigation principale" data-open={menuOpen}>
        {navLabels.map((label,index)=>(
          <a href={navDestinations[index]} key={label} onClick={()=>setMenuOpen(false)}>{label}</a>
        ))}
        <a className="mobileReserve" href={reservationHref} onClick={() => setMenuOpen(false)}>
          {locale === 'fr' ? 'Réserver' : texts[locale].reserve} <span aria-hidden="true">↗</span>
        </a>
        <div className="mobileLanguages" aria-label="Language / Langue">
          {(['fr','en','es','it'] as const).map(lang => (
            <a key={lang} href={localizedHref(lang, isMenu ? 'carte' : '')} hrefLang={lang} lang={lang} aria-current={locale === lang ? 'page' : undefined}>{lang.toUpperCase()}</a>
          ))}
        </div>
      </nav>
      <nav className="languageSwitcher" aria-label="Language / Langue">
        {(['fr','en','es','it'] as const).map(lang => (
          <a key={lang} href={localizedHref(lang, isMenu ? 'carte' : '')} hrefLang={lang} lang={lang} aria-current={locale === lang ? 'page' : undefined}>{lang.toUpperCase()}</a>
        ))}
      </nav>
      <a className="reserve desktopReserve" href={reservationHref} onClick={() => setMenuOpen(false)}>
        {locale === 'fr' ? 'Réserver' : texts[locale].reserve} <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
