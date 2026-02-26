import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { clsx } from 'clsx';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <header 
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/95 backdrop-blur-sm py-6 shadow-sm'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-red rounded-full flex items-center justify-center text-white font-bold text-xl">
              H
            </div>
            <span className="text-2xl font-bold font-heading text-slate-900">
              HUNDREDS <span className="text-primary-red">BISTRO</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-600 font-medium hover:text-primary-red transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="accent" 
            size="sm"
            onClick={() => window.open('https://www.zomato.com/chennai/hundreds-bistro-1-chetpet', '_blank')}
          >
            Book a Table
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-4 border-t border-slate-100 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-slate-800 hover:text-primary-red py-2 border-b border-slate-50 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="accent" 
            size="sm" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.open('https://www.zomato.com/chennai/hundreds-bistro-1-chetpet', '_blank');
            }}
          >
            Book a Table
          </Button>
        </div>
      )}
    </header>
  );
};
