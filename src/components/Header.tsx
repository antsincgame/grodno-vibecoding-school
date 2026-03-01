

import { useState, useEffect } from 'react';


const NAV_LINKS = [
  { href: '#method', label: 'О методе' },
  { href: '#teacher', label: 'Наставник' },
  { href: '#program', label: 'Программа' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Контакты' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header
      className="site-header"
      style={isScrolled ? { boxShadow: '0 0 20px rgba(0, 255, 249, 0.15)' } : undefined}
    >
      <div className="header-inner">
        <a href="#" aria-label="VibeCoding Гродно — на главную">
          <img
            src="/logo.png"
            alt="VibeCoding — программирование доступное каждому"
            className="header-logo"
          />
        </a>

        <nav className="header-nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="header-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="tel:+375292828878" className="header-phone">
          +375 (29) 282-88-78
        </a>

        <a href="#contact" className="cyber-button header-cta">
          Записаться
        </a>

        <button
          className="burger-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="header-nav-link"
            onClick={handleNavClick}
          >
            {link.label}
          </a>
        ))}
        <a href="tel:+375292828878" className="header-phone">
          +375 (29) 282-88-78
        </a>
        <a href="#contact" className="cyber-button header-cta" onClick={handleNavClick}>
          Записаться
        </a>
      </nav>
    </header>
  );
}
