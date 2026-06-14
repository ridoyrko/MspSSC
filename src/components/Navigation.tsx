import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import logo from '../assets/SCC-Logo.webp';

const navLinks = [
  { label: 'Lifetime Momentum', href: '#lifetime-momentum' },
  { label: 'Your Partnership', href: '#your-partnership' },
  { label: 'Reports', href: '#reports' },
  { label: 'Education Center', href: '#education-center' },
  { label: 'Playbooks', href: '#playbooks' },
  { label: 'Campaign Assets', href: '#campaign-assets' },
  { label: 'Podcast Network', href: '#podcast-network' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src={logo} alt="MSP Influencer Sponsor Success Center" className="h-10 lg:h-12 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 hover:text-navy-600 font-medium text-sm px-3 py-2 rounded-md hover:bg-navy-50 transition-colors duration-150 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://mspinfluencer.com/ssc/xxx2-report-6-1-26/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-primary text-sm py-2 px-4"
            >
              <ExternalLink size={14} />
              View Latest Report
            </a>
            <button
              className="xl:hidden p-2 rounded-md text-gray-600 hover:text-navy-600 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="section-container py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-gray-600 hover:text-navy-600 font-medium text-sm px-4 py-2.5 rounded-md hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href="https://mspinfluencer.com/ssc/xxx2-report-6-1-26/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm"
              >
                <ExternalLink size={14} />
                View Latest Report
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
