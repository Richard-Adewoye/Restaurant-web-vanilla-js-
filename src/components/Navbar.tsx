import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Calendar, Clock, MapPin, Phone, Menu as MenuIcon, X, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '01. Welcome', href: '#hero', id: 'hero' },
    { name: '02. Our Story', href: '#our-story', id: 'our-story' },
    { name: '03. Signature Menu', href: '#featured-menu', id: 'featured-menu' },
  ];

  return (
    <>
      {/* Top Banner Info Strip */}
      <div className="bg-[#0A0A0A] border-b border-white/10 text-stone-300 text-xs py-2 px-4 hidden md:block backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-[#C5A059]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
              {RESTAURANT_INFO.michelinRating}
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              {RESTAURANT_INFO.hours.dinner}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              SoHo, New York
            </span>
            <span className="text-white/20">•</span>
            <a href={`tel:${RESTAURANT_INFO.phone}`} className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F0F0F]/95 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Restaurant Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#151515] border border-[#C5A059]/40 flex items-center justify-center shadow-lg group-hover:border-[#C5A059] transition-colors">
              <UtensilsCrossed className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider italic text-[#C5A059] group-hover:text-amber-200 transition-colors">
                L'ARTISAN
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-white/50 uppercase -mt-0.5 font-sans font-semibold">
                Gastronomy & Hearth
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 bg-[#141414]/90 backdrop-blur-md px-8 py-2.5 border border-white/10 shadow-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#C5A059] font-bold'
                      : 'text-stone-300 hover:text-[#C5A059]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenReservation}
              id="nav-reserve-btn"
              className="relative inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all shadow-lg hover:shadow-[#C5A059]/20 cursor-pointer active:scale-98"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Book Table</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 bg-[#141414] border border-white/10 text-stone-300 hover:text-[#C5A059] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F0F0F] border-b border-white/10 px-6 py-6 mt-3 space-y-4 backdrop-blur-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-stone-200 hover:text-[#C5A059] text-xs font-semibold tracking-[0.2em] uppercase py-2.5 border-b border-white/5 flex justify-between items-center"
                >
                  <span>{link.name}</span>
                  <span className="text-[#C5A059]">→</span>
                </a>
              ))}
            </div>

            <div className="pt-3 text-xs text-stone-400 space-y-2 border-t border-white/10">
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                {RESTAURANT_INFO.hours.dinner}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                {RESTAURANT_INFO.address}
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
