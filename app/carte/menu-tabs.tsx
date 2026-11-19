'use client';

import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';

type Tab = { id: string; label: string; content: ReactNode };

export default function MenuTabs({ tabs }: { tabs: readonly Tab[] }) {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function selectTab(index: number, moveFocus = false) {
    setActive(index);
    const button = buttons.current[index];
    if (moveFocus) button?.focus({ preventScroll: true });
    button?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case 'ArrowRight':
        next = (index + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        next = (index - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    selectTab(next, true);
  }

  return (
    <>
      <div className="menuTabs" role="tablist" aria-label="Sections de la carte">
        {tabs.map(({ id, label }, index) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`menu-tab-${id}`}
            aria-controls={`menu-panel-${id}`}
            aria-selected={index === active}
            tabIndex={index === active ? 0 : -1}
            ref={(button) => { buttons.current[index] = button; }}
            onClick={() => selectTab(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {label}
          </button>
        ))}
      </div>
      {tabs.map(({ id, content }, index) => (
        <div
          className="menuPanel"
          key={id}
          role="tabpanel"
          id={`menu-panel-${id}`}
          aria-labelledby={`menu-tab-${id}`}
          tabIndex={0}
          hidden={index !== active}
        >
          {content}
        </div>
      ))}
    </>
  );
}
