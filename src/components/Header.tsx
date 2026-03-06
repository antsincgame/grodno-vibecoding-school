

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#method', label: 'О методе' },
  { href: '#teacher', label: 'Наставник' },
  { href: '#program', label: 'Программа' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Контакты' },
];

const SOCIAL_LINKS = [
  { url: 'https://t.me/vibecodingby', label: 'Telegram', icon: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.242-1.865-.442-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.325.016.093.036.305.02.47z' },
  { url: 'https://www.youtube.com/@vibecodingby', label: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { url: 'https://www.instagram.com/dzmitry_arlou', label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.549.07 3.052.148 4.771 1.691 4.919 4.919.058.965.07 1.345.07 4.549s-.012 3.584-.07 4.549c-.149 3.025-1.664 4.771-4.919 4.919-.965.058-1.345.07-4.549.07s-3.584-.012-4.549-.07c-3.026-.149-4.771-1.664-4.919-4.919-.058-.965-.07-1.345-.07-4.549s.012-3.584.07-4.549c.149-3.026 1.664-4.771 4.919-4.919.965-.058 1.345-.07 4.549-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.072 1.689-.072 4.948s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.072-1.689.072-4.948s-.015-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z' },
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

        <div className="header-socials">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="header-social-link"
              title={link.label}
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                <path d={link.icon} />
              </svg>
            </a>
          ))}
        </div>

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
        <div className="mobile-socials">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="header-social-link"
              title={link.label}
            >
              <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                <path d={link.icon} />
              </svg>
              <span style={{ fontSize: '13px' }}>{link.label}</span>
            </a>
          ))}
        </div>
        <a href="#contact" className="cyber-button header-cta" onClick={handleNavClick}>
          Записаться
        </a>
      </nav>
    </header>
  );
}
