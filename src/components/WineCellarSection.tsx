import React, { useState } from 'react';
import { Wine, Sparkles, Award, ArrowRight, CheckCircle2, Search, GlassWater } from 'lucide-react';
import { WINE_SELECTIONS } from '../data/restaurantData';
import { WineItem } from '../types';

interface WineCellarSectionProps {
  onOpenWinePage: () => void;
  onOpenReservation: () => void;
}

export const WineCellarSection: React.FC<WineCellarSectionProps> = ({
  onOpenWinePage,
  onOpenReservation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'red' | 'white' | 'champagne' | 'reserve'>('all');
  const [activeWine, setActiveWine] = useState<WineItem>(WINE_SELECTIONS[0]);

  const filteredWines = selectedCategory === 'all'
    ? WINE_SELECTIONS
    : WINE_SELECTIONS.filter((w) => w.category === selectedCategory);

  return (
    <section id="wine-cellar" className="py-24 bg-[#0A0A0A] text-stone-200 relative border-t border-white/10">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#C5A059]/30 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.25em] mb-3">
              <Wine className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Section 04 • Curated Cellar Vault</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#E5E5E5] tracking-tight">
              Sommelier Wine Cellar & Pairings
            </h2>
            <p className="text-stone-400 text-sm max-w-2xl mt-3 leading-relaxed">
              Housing over 480 organic and biodynamic labels, curated by Master Sommelier Clara Vance. Hand-selected allocations from ancient Grand Cru slopes to rare coastal vineyards.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenWinePage}
              className="px-6 py-3 bg-[#141414] border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-black transition-all cursor-pointer flex items-center gap-2 shadow-lg group"
            >
              <span>Explore Full Wine Journal</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:text-black transition-colors" />
            </button>
          </div>
        </div>

        {/* Feature Grid: Left Interactive Sommelier Showcase, Right Wine Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Spotlight Active Wine Card */}
          <div className="lg:col-span-5 bg-[#141414] border border-white/10 p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] font-bold block mb-1">
                  {activeWine.vintage} • {activeWine.region}, {activeWine.country}
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#E5E5E5]">
                  {activeWine.name}
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">{activeWine.producer}</p>
              </div>
              {activeWine.isRareAllocation && (
                <span className="px-2.5 py-1 bg-[#0F0F0F] border border-[#C5A059] text-[#C5A059] text-[9px] font-bold uppercase tracking-[0.2em] shrink-0">
                  Rare Vault
                </span>
              )}
            </div>

            {/* Pricing & Sommelier Rating */}
            <div className="p-4 bg-[#0F0F0F] border border-white/10 flex items-center justify-between text-xs">
              <div>
                <span className="text-stone-500 uppercase text-[10px] block">Bottle Reserve</span>
                <span className="text-lg font-bold text-[#C5A059]">${activeWine.priceBottle}</span>
              </div>
              {activeWine.priceGlass && (
                <div className="text-right">
                  <span className="text-stone-500 uppercase text-[10px] block">By Glass</span>
                  <span className="text-lg font-bold text-stone-200">${activeWine.priceGlass}</span>
                </div>
              )}
              <div className="text-right">
                <span className="text-stone-500 uppercase text-[10px] block">Critique</span>
                <span className="text-xs font-semibold text-amber-300 flex items-center gap-1 justify-end">
                  <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                  {activeWine.sommelierRating}
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed italic font-serif">
              "{activeWine.description}"
            </p>

            {/* Tasting Notes */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold block mb-2">
                Flavor Profile & Palette
              </span>
              <div className="flex flex-wrap gap-2">
                {activeWine.tastingNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#0F0F0F] border border-white/10 text-xs text-stone-300 font-medium"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Recommended Hearth Dish Pairing */}
            <div className="p-4 bg-[#0F0F0F] border border-[#C5A059]/30 text-xs space-y-1">
              <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400 block font-semibold flex items-center gap-1.5">
                <GlassWater className="w-3.5 h-3.5 text-[#C5A059]" />
                Chef's Recommended Pairing
              </span>
              <p className="text-stone-200 font-semibold">{activeWine.pairingDish}</p>
            </div>

            <button
              onClick={onOpenReservation}
              className="w-full py-3.5 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all shadow-xl cursor-pointer"
            >
              Reserve Table & Cellar Pairing
            </button>
          </div>

          {/* Right Column: Filterable Cellar Selection Table */}
          <div className="lg:col-span-7 space-y-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
              {(['all', 'red', 'white', 'champagne', 'reserve'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all cursor-pointer border ${
                    selectedCategory === cat
                      ? 'bg-[#C5A059] text-black border-[#C5A059]'
                      : 'bg-[#141414] text-stone-400 border-white/10 hover:text-stone-200'
                  }`}
                >
                  {cat === 'all' ? 'All Cellar Highlights' : cat}
                </button>
              ))}
            </div>

            {/* List of Wines */}
            <div className="space-y-3">
              {filteredWines.map((wine) => {
                const isSelected = activeWine.id === wine.id;
                return (
                  <div
                    key={wine.id}
                    onClick={() => setActiveWine(wine)}
                    className={`p-5 bg-[#141414] border transition-all cursor-pointer flex items-center justify-between gap-4 hover:border-[#C5A059]/60 ${
                      isSelected ? 'border-[#C5A059] bg-[#1a1916]' : 'border-white/10'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.15em] font-bold">
                          {wine.vintage} • {wine.region}
                        </span>
                        {wine.isRareAllocation && (
                          <span className="text-[9px] px-1.5 py-0.5 bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40 uppercase">
                            Rare
                          </span>
                        )}
                      </div>
                      <h4 className="font-serif text-lg font-normal text-stone-100">
                        {wine.name}
                      </h4>
                      <p className="text-xs text-stone-400 line-clamp-1">{wine.producer}</p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-stone-200 font-bold text-sm block">${wine.priceBottle}</span>
                      <span className="text-[10px] text-stone-500 uppercase">Per Bottle</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Prompt */}
            <div className="p-4 bg-[#141414] border border-white/10 flex items-center justify-between text-xs text-stone-400">
              <span>Looking for rare vintage years or custom corkage?</span>
              <button
                onClick={onOpenWinePage}
                className="text-[#C5A059] hover:underline font-bold uppercase tracking-wider text-[11px]"
              >
                View Sommelier Journal →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
