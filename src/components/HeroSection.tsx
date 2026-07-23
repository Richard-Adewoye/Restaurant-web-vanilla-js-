import React from 'react';
import { Calendar, ChevronDown, Award, Star, Flame, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO, HERO_IMAGE } from '../data/restaurantData';

interface HeroSectionProps {
  onOpenReservation: () => void;
  onScrollToMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReservation, onScrollToMenu }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0F0F0F] pt-4 pb-12">
      {/* Background Hero Banner Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Atmospheric luxury dining room"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-125 opacity-50"
          referrerPolicy="no-referrer"
        />
        {/* Dark luxury vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/80 to-[#0F0F0F]/40" />
      </div>

      {/* Decorative ambient gold glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Section Indicator Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#141414] border border-[#C5A059]/40 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C5A059]">
              Est. 1994 • Section 01 • Welcome
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#E5E5E5] leading-[1.1]">
            Culinary poetry <br />in every <span className="italic text-[#C5A059]">nuance.</span>
          </h1>

          {/* Tagline & Description */}
          <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed max-w-xl text-balance">
            Experience an avant-garde approach to traditional gastronomy at SoHo's premier address, where seasonal harvests meet woodfire hearth technique.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenReservation}
              id="hero-reserve-btn"
              className="group px-9 py-4 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all shadow-2xl flex items-center gap-3 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Book a Table</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onScrollToMenu}
              id="hero-menu-btn"
              className="px-9 py-4 bg-transparent hover:bg-white/5 text-stone-200 hover:text-white text-xs font-bold uppercase tracking-[0.2em] border border-white/20 backdrop-blur-md transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>Explore Menu</span>
            </button>
          </div>

          {/* Michelin & Honor Badges */}
          <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-stone-400 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C5A059]" />
              <span className="font-medium text-stone-300">Michelin Selected 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
              <span className="font-medium text-stone-300">4.9 Guest Honor (1,200+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-stone-400">Open Tonight: 18:00 — 23:30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metric Cards Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#141414] border border-white/10 p-5 sm:p-6 shadow-2xl">
          <div className="flex items-center gap-4 p-2 border-b sm:border-b-0 sm:border-r border-white/10">
            <div className="w-12 h-12 bg-[#0F0F0F] border border-[#C5A059]/30 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-[#E5E5E5]">800°F</p>
              <p className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] font-medium">Oakwood Hearth Grill</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 border-b sm:border-b-0 sm:border-r border-white/10">
            <div className="w-12 h-12 bg-[#0F0F0F] border border-[#C5A059]/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-[#E5E5E5]">Zero-Km</p>
              <p className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] font-medium">Estate Bio-Harvest</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 bg-[#0F0F0F] border border-[#C5A059]/30 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-[#E5E5E5]">480+</p>
              <p className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] font-medium">Vintage Cellar Labels</p>
            </div>
          </div>
        </div>

        {/* Scroll Cue Indicator */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onScrollToMenu}
            className="group flex items-center gap-2 text-[10px] text-stone-400 hover:text-[#C5A059] transition-colors uppercase tracking-[0.3em] cursor-pointer"
          >
            <span>Scroll to Section 02 & 03</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#C5A059]" />
          </button>
        </div>
      </div>
    </section>
  );
};
