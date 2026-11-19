'use client';

import { useRef, useState } from 'react';

export default function Header({ phoneHref }: { phoneHref?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <a className="logo" href="/#accueil" onClick={() => setMenuOpen(false)}>
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
        <a href="/carte" onClick={() => setMenuOpen(false)}>La carte</a>
        <a href="/#histoire" onClick={() => setMenuOpen(false)}>Notre histoire</a>
        <a href="/#expo" onClick={() => setMenuOpen(false)}>Exposition</a>
        <a href="/#boutique" onClick={() => setMenuOpen(false)}>Boutique</a>
        <a href="/#presse" onClick={() => setMenuOpen(false)}>Dans la presse</a>
        <a href="/#infos" onClick={() => setMenuOpen(false)}>Nous trouver</a>
      </nav>
      {phoneHref ? (
        <a className="reserve" href={phoneHref} aria-label="Appeler pour réserver">
          Réserver ↗
        </a>
      ) : (
        <button type="button" className="reserve disabled" disabled aria-label="Téléphone à renseigner">
          Téléphone à renseigner
        </button>
      )}
    </header>
  );
}
