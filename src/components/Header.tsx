import { useState } from 'react';

const navLinks = [
  { label: 'About us', href: '#who-we-are' },
  { label: 'Services', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact us', href: '#contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container container--wide site-header__inner">
        <a
          href="#"
          className="site-header__brand"
          aria-label="Air home"
        >
          Air
        </a>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="site-header__link"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="site-header__cta"
          >
            Hire us
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`site-header__menu-button ${open ? 'site-header__menu-button--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="site-header__menu-line" />
          <span className="site-header__menu-line" />
          <span className="site-header__menu-line" />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="site-header__mobile-nav"
          aria-label="Mobile navigation"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="site-header__mobile-link"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="site-header__mobile-cta"
          >
            Hire us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
