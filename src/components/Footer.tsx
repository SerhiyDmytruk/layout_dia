const footerLinks = [
  { label: 'About Us', href: '#who-we-are' },
  { label: 'Home', href: '#' },
  { label: 'Work', href: '#expertise' },
  { label: 'Services', href: '#expertise' },
  { label: 'Contact Us', href: '#contact' },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="container site-footer__inner">
      <a
        href="#top"
        className="site-footer__brand"
      >
        Air
      </a>
      <nav className="site-footer__nav" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="site-footer__link"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
