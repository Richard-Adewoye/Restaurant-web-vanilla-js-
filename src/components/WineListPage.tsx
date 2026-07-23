import React, { useState } from 'react';
import { Wine, ArrowLeft, Search, Filter, Award, Sparkles, GlassWater, Check, ChevronDown, BookOpen } from 'lucide-react';
import { WINE_SELECTIONS, RESTAURANT_INFO } from '../data/restaurantData';
import { WineItem } from '../types';

interface WineListPageProps {
  onBackToMain: () => void;
  onOpenReservation: () => void;
}

export const WineListPage: React.FC<WineListPageProps> = ({
  onBackToMain,
  onOpenReservation,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'red' | 'white' | 'champagne' | 'reserve'>('all');
  const [selectedBody, setSelectedBody] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'price-asc' | 'price-desc'>('rating');

  const filteredWines = WINE_SELECTIONS.filter((wine) => {
    const matchesSearch =
      wine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wine.producer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wine.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wine.country.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || wine.category === selectedCategory;
    const matchesBody = selectedBody === 'all' || wine.bodyWeight === selectedBody;

    return matchesSearch && matchesCategory && matchesBody;  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.priceBottle - b.priceBottle;
    if (sortBy === 'price-desc') return b.priceBottle - a.priceBottle;
    return b.sommelierRating.localeCompare(a.sommelierRating);
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-stone-200 font-sans selection:bg-[#C5A059]/30">
      {/* Page Header Bar */}
      <header className="sticky top-0 z-40 bg-[#0F0F0F]/95 backdrop-blur-md border-b border-white/10 py-4 px-4 sm:px-8 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToMain}
            className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-white/10 text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-black transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to L'Artisan</span>
          </button>

          <div className="text-center hidden sm:block">
            <span className="font-serif text-xl font-normal text-[#C5A059] italic">
              Sommelier Cellar Journal
            </span>
            <span className="block text-[9px] uppercase tracking-[0.3em] text-stone-500">
              {RESTAURANT_INFO.name} • 480+ Cellar Labels
            </span>
          </div>

          <button
            onClick={onOpenReservation}
            className="px-5 py-2 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all cursor-pointer"
          >
            Book Table
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative py-16 px-4 sm:px-8 border-b border-white/10 bg-gradient-to-b from-[#141414] to-[#0A0A0A]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F0F0F] border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.25em]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Master Sommelier Collection</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#E5E5E5]">
            The Sommelier Wine & Beverage Journal
          </h1>
          <p className="text-stone-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Curated by Master Sommelier Clara Vance. Explore our complete cellar catalog featuring rare vintage allocations from Burgundy, Bordeaux, Piedmont, Napa Valley, and biodynamic estates.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Filter Controls Bar */}
        <div className="p-6 bg-[#141414] border border-white/10 space-y-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search producer, region, vintage or grape..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0F0F0F] border border-white/10 text-xs text-stone-200 focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            {/* Body Weight Selector */}
            <div className="md:col-span-4 flex items-center gap-2">
              <span className="text-[10px] uppercase text-stone-400 font-semibold tracking-wider shrink-0">
                Body Tone:
              </span>
              <select
                value={selectedBody}
                onChange={(e) => setSelectedBody(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#0F0F0F] border border-white/10 text-xs text-stone-200 focus:outline-none focus:border-[#C5A059]"
              >
                <option value="all">All Weights</option>
                <option value="Light">Light & Crisp</option>
                <option value="Medium">Medium & Balanced</option>
                <option value="Full-Bodied">Full-Bodied</option>
                <option value="Crisp & Effervescent">Effervescent</option>
              </select>
            </div>

            {/* Sort Selector */}
            <div className="md:col-span-3 flex items-center gap-2">
              <span className="text-[10px] uppercase text-stone-400 font-semibold tracking-wider shrink-0">
                Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2.5 bg-[#0F0F0F] border border-white/10 text-xs text-stone-200 focus:outline-none focus:border-[#C5A059]"
              >
                <option value="rating">Sommelier Critique</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
            {(['all', 'red', 'white', 'champagne', 'reserve'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#C5A059] text-black border-[#C5A059]'
                    : 'bg-[#0F0F0F] text-stone-400 border-white/10 hover:text-stone-200'
                }`}
              >
                {cat === 'all' ? 'All Cellar Selections' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Wine Catalog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWines.map((wine) => (
            <div
              key={wine.id}
              className="bg-[#141414] border border-white/10 p-6 flex flex-col justify-between space-y-6 shadow-xl relative hover:border-[#C5A059]/60 transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] font-bold">
                    {wine.vintage} • {wine.region}
                  </span>
                  {wine.isRareAllocation && (
                    <span className="px-2 py-0.5 bg-[#0F0F0F] border border-[#C5A059] text-[#C5A059] text-[9px] font-bold uppercase tracking-[0.15em]">
                      Vault Reserve
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-serif text-xl font-normal text-[#E5E5E5] group-hover:text-[#C5A059] transition-colors">
                    {wine.name}
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">{wine.producer} • {wine.country}</p>
                </div>

                <div className="p-3 bg-[#0F0F0F] border border-white/10 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-stone-500 uppercase text-[9px] block">Bottle</span>
                    <span className="text-base font-bold text-[#C5A059]">${wine.priceBottle}</span>
                  </div>
                  {wine.priceGlass && (
                    <div>
                      <span className="text-stone-500 uppercase text-[9px] block">By Glass</span>
                      <span className="text-base font-bold text-stone-200">${wine.priceGlass}</span>
                    </div>
                  )}
                  <div className="text-right">
                    <span className="text-stone-500 uppercase text-[9px] block">Rating</span>
                    <span className="text-xs font-semibold text-amber-300 flex items-center gap-1">
                      <Award className="w-3 h-3 text-[#C5A059]" />
                      {wine.sommelierRating}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed font-serif italic">
                  "{wine.description}"
                </p>

                {/* Flavor Notes */}
                <div>
                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#C5A059] block mb-1.5 font-bold">
                    Tasting Profile:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {wine.tastingNotes.map((note, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-[#0F0F0F] border border-white/10 text-[10px] text-stone-300"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-[#0F0F0F] border border-[#C5A059]/30 text-[11px] space-y-0.5">
                  <span className="text-stone-500 uppercase text-[9px] block font-semibold">
                    Ideal Hearth Dish Pairing:
                  </span>
                  <span className="text-stone-200 font-medium">{wine.pairingDish}</span>
                </div>
              </div>

              <button
                onClick={onOpenReservation}
                className="w-full py-3 bg-[#0F0F0F] border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-black transition-all cursor-pointer"
              >
                Pre-Select For Dining
              </button>
            </div>
          ))}
        </div>

        {/* Sommelier Cellar Policy Note */}
        <div className="p-8 bg-[#141414] border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-400">
          <div className="space-y-1">
            <h4 className="font-serif text-sm font-normal text-[#E5E5E5] uppercase tracking-wider">
              Bespoke Corkage Policy
            </h4>
            <p>$95 per 750ml bottle (up to 2 bottles per table). Corkage is waived for each bottle purchased from our Cellar Vault list.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-serif text-sm font-normal text-[#E5E5E5] uppercase tracking-wider">
              Temperature Preservation
            </h4>
            <p>Our cellar maintains a strict 55°F temperature and 65% humidity standard to protect fragile vintage corks and aged tannins.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-serif text-sm font-normal text-[#E5E5E5] uppercase tracking-wider">
              Sommelier Consultations
            </h4>
            <p>For custom rare vintage tastings or cellar acquisitions, Master Sommelier Clara Vance is available prior to your arrival.</p>
          </div>
        </div>
      </main>
    </div>
  );
};
