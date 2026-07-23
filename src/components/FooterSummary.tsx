import React from 'react';
import { UtensilsCrossed, MapPin, Phone, Mail, Clock, Award, ArrowUp, Wine, Building2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ActivePageView } from '../types';

interface FooterSummaryProps {
  onOpenReservation: () => void;
  onNavigatePage: (page: ActivePageView) => void;
}

export const FooterSummary: React.FC<FooterSummaryProps> = ({
  onOpenReservation,
  onNavigatePage,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 text-stone-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Completed Sections & Pages Map Bar */}
        <div className="p-6 bg-[#141414] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] text-[#C5A059] font-semibold uppercase tracking-[0.2em]">
              Application Map • 7 Core Sections & 2 Dedicated Pages
            </span>
            <h3 className="font-serif text-xl font-normal text-[#E5E5E5]">
              L'Artisan Gastronomy Web Application
            </h3>
            <p className="text-xs text-stone-400 max-w-2xl leading-relaxed">
              01. Welcome • 02. Our Story • 03. Signature Menu • 04. Wine Vault • 05. Spaces & Atmosphere • 06. Guest Honors • 07. Private Events
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigatePage('wine-cellar-page')}
              className="px-4 py-2.5 bg-[#0F0F0F] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-wider hover:bg-[#C5A059] hover:text-black transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Wine className="w-3.5 h-3.5" />
              <span>Wine Page</span>
            </button>
            <button
              onClick={() => onNavigatePage('private-events-page')}
              className="px-4 py-2.5 bg-[#0F0F0F] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-wider hover:bg-[#C5A059] hover:text-black transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Events Page</span>
            </button>
            <button
              onClick={onOpenReservation}
              className="px-5 py-2.5 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-amber-400 transition-colors cursor-pointer"
            >
              Book Table
            </button>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-[#0F0F0F] border border-white/10 hover:border-[#C5A059] transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>
        </div>

        {/* Restaurant Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-4">
          {/* Brand info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#151515] border border-[#C5A059]/40 flex items-center justify-center">
                <UtensilsCrossed className="w-4 h-4 text-[#C5A059]" />
              </div>
              <span className="font-serif text-2xl font-bold italic text-[#C5A059]">
                L'ARTISAN
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Gastronomy & Hearth. Artfully combining oakwood hearth flames, biodynamic estate harvests, and vintage sommelier cellar pairings.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C5A059] font-medium">
              <Award className="w-4 h-4 text-[#C5A059]" />
              <span>{RESTAURANT_INFO.michelinRating}</span>
            </div>
          </div>

          {/* All 7 Section Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E5E5E5] uppercase tracking-[0.15em]">
              Seven Sections
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <a href="#hero" onClick={() => onNavigatePage('home')} className="hover:text-[#C5A059] transition-colors">01. Hero & Welcome</a>
              </li>
              <li>
                <a href="#our-story" onClick={() => onNavigatePage('home')} className="hover:text-[#C5A059] transition-colors">02. Our Story & Philosophy</a>
              </li>
              <li>
                <a href="#featured-menu" onClick={() => onNavigatePage('home')} className="hover:text-[#C5A059] transition-colors">03. Chef's Signature Menu</a>
              </li>
              <li>
                <a href="#wine-cellar" onClick={() => onNavigatePage('home')} className="hover:text-[#C5A059] transition-colors">04. Sommelier Wine Vault</a>
              </li>
              <li>
                <a href="#atmosphere" onClick={() => onNavigatePage('home')} className="hover:text-[#C5A059] transition-colors">05. Architectural Spaces</a>
              </li>
              <li>
                <a href="#guest-honors" onClick={() => onNavigatePage('home')} className="hover:text-[#C5A059] transition-colors">06. Guest Honors & Press</a>
              </li>
              <li>
                <a href="#private-events" onClick={() => onNavigatePage('home')} className="hover:text-[#C5A059] transition-colors">07. Private Events & Buyouts</a>
              </li>
            </ul>
          </div>

          {/* Hours & Dedicated Pages */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E5E5E5] uppercase tracking-[0.15em]">
              Dedicated Pages
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={() => onNavigatePage('wine-cellar-page')}
                className="text-stone-300 hover:text-[#C5A059] flex items-center gap-1.5 cursor-pointer block text-left"
              >
                <Wine className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Full Wine Journal Page</span>
              </button>
              <button
                onClick={() => onNavigatePage('private-events-page')}
                className="text-stone-300 hover:text-[#C5A059] flex items-center gap-1.5 cursor-pointer block text-left"
              >
                <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Private Events Proposal Page</span>
              </button>

              <div className="pt-3 border-t border-white/10 space-y-1">
                <span className="text-[10px] text-[#C5A059] uppercase font-bold block">Service Hours</span>
                <p className="text-stone-400 text-[11px]">{RESTAURANT_INFO.hours.dinner}</p>
              </div>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E5E5E5] uppercase tracking-[0.15em]">
              Concierge & Location
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{RESTAURANT_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{RESTAURANT_INFO.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} L'Artisan Bistro & Vault. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-300 cursor-pointer">Privacy Policy</span>
            <span onClick={() => onNavigatePage('wine-cellar-page')} className="hover:text-stone-300 cursor-pointer">Sommelier Cellar List</span>
            <span onClick={() => onNavigatePage('private-events-page')} className="hover:text-stone-300 cursor-pointer">Private Buyouts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

