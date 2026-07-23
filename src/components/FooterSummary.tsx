import React from 'react';
import { UtensilsCrossed, MapPin, Phone, Mail, Clock, Award, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterSummaryProps {
  onOpenReservation: () => void;
}

export const FooterSummary: React.FC<FooterSummaryProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 text-stone-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Completed Sections Quick Map Bar */}
        <div className="p-6 bg-[#141414] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] text-[#C5A059] font-semibold uppercase tracking-[0.2em]">
              Application Overview • Sections 01, 02 & 03
            </span>
            <h3 className="font-serif text-xl font-normal text-[#E5E5E5]">
              First Three Sections Complete
            </h3>
            <p className="text-xs text-stone-400 max-w-xl">
              01. Hero & Welcome • 02. Our Story & Culinary Philosophy • 03. Chef's Signature Featured Menu
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenReservation}
              className="px-6 py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-amber-400 transition-colors cursor-pointer"
            >
              Book Table
            </button>
            <button
              onClick={scrollToTop}
              className="p-3 bg-[#0F0F0F] border border-white/10 hover:border-[#C5A059] transition-colors cursor-pointer"
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

          {/* Quick Section Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E5E5E5] uppercase tracking-[0.15em]">
              Sections
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#hero" className="hover:text-[#C5A059] transition-colors">01. Hero & Welcome</a>
              </li>
              <li>
                <a href="#our-story" className="hover:text-[#C5A059] transition-colors">02. Our Story & Philosophy</a>
              </li>
              <li>
                <a href="#featured-menu" className="hover:text-[#C5A059] transition-colors">03. Chef's Signature Menu</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E5E5E5] uppercase tracking-[0.15em]">
              Dining Hours
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-stone-200 block">Dinner Service</strong>
                  {RESTAURANT_INFO.hours.dinner}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-stone-200 block">Weekend Lunch</strong>
                  {RESTAURANT_INFO.hours.lunch}
                </span>
              </p>
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
          <p>© {new Date().getFullYear()} L'Artisan Bistro & Lounge. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-300 cursor-pointer">Sommelier Cellar List</span>
            <span className="hover:text-stone-300 cursor-pointer">Press Enquiries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
