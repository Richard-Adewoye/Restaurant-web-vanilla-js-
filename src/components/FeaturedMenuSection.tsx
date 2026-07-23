import React, { useState, useMemo } from 'react';
import { Sparkles, Utensils, Star, Flame, Eye, Wine, Filter, Search, Check } from 'lucide-react';
import { FEATURED_MENU_ITEMS } from '../data/restaurantData';
import { MenuItem, MenuCategory } from '../types';

interface FeaturedMenuSectionProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenReservation: () => void;
}

export const FeaturedMenuSection: React.FC<FeaturedMenuSectionProps> = ({ onSelectDish, onOpenReservation }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [filterGlutenFree, setFilterGlutenFree] = useState(false);
  const [filterVegetarian, setFilterVegetarian] = useState(false);
  const [filterChefPicks, setFilterChefPicks] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'All Signature Dishes' },
    { id: 'starters', label: 'Starters & Crudo' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'grill', label: 'Woodfire Grill' },
    { id: 'desserts', label: 'Desserts & Pairings' },
  ];

  const filteredDishes = useMemo(() => {
    return FEATURED_MENU_ITEMS.filter((dish) => {
      // Category match
      if (selectedCategory !== 'all' && dish.category !== selectedCategory) {
        return false;
      }
      // Dietary filters
      if (filterGlutenFree && !dish.dietaryFlags?.glutenFree) {
        return false;
      }
      if (filterVegetarian && !dish.dietaryFlags?.vegetarian) {
        return false;
      }
      if (filterChefPicks && !dish.isChefPick) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const nameMatch = dish.name.toLowerCase().includes(query);
        const descMatch = dish.description.toLowerCase().includes(query);
        const subMatch = dish.subtitle?.toLowerCase().includes(query) || false;
        if (!nameMatch && !descMatch && !subMatch) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, filterGlutenFree, filterVegetarian, filterChefPicks, searchQuery]);

  return (
    <section id="featured-menu" className="relative py-24 bg-[#0F0F0F] text-[#E5E5E5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#141414] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.3em]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Section 03 • Signature Menu Selection</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#E5E5E5] tracking-tight">
              Culinary Creations & <span className="italic text-[#C5A059]">Tasting Selection</span>
            </h2>

            <p className="text-white/60 text-sm sm:text-base font-light">
              Each dish is cooked over aged oak embers or cold-infused with botanical aromatics. Click any dish to inspect wine pairings & dietary details.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenReservation}
              id="menu-reserve-cta"
              className="px-6 py-3.5 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-amber-400 transition-all shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <Utensils className="w-4 h-4 text-black" />
              <span>Book Tasting Table</span>
            </button>
          </div>
        </div>

        {/* Category Tabs & Dietary Filter Controls */}
        <div className="bg-[#141414] border border-white/10 p-4 sm:p-6 mb-10 space-y-4 shadow-xl">
          {/* Top Category Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-all cursor-pointer ${
                    active
                      ? 'bg-[#C5A059] text-black font-bold'
                      : 'bg-[#0F0F0F] text-stone-300 hover:text-white border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search bar & Filter Toggles */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search ingredients, truffle, wagyu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#0F0F0F] border border-white/10 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#C5A059] transition-colors"
              />
            </div>

            {/* Quick Dietary Filters */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <span className="text-xs text-stone-400 font-medium flex items-center gap-1.5 mr-1">
                <Filter className="w-3.5 h-3.5 text-[#C5A059]" />
                Filter:
              </span>

              <button
                onClick={() => setFilterChefPicks(!filterChefPicks)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors flex items-center gap-1.5 cursor-pointer ${
                  filterChefPicks
                    ? 'bg-[#0F0F0F] border-[#C5A059] text-[#C5A059]'
                    : 'bg-[#0F0F0F] border-white/10 text-stone-400 hover:text-stone-200'
                }`}
              >
                <Star className="w-3 h-3 text-[#C5A059]" />
                <span>Chef Picks</span>
              </button>

              <button
                onClick={() => setFilterGlutenFree(!filterGlutenFree)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors flex items-center gap-1.5 cursor-pointer ${
                  filterGlutenFree
                    ? 'bg-[#0F0F0F] border-[#C5A059] text-[#C5A059]'
                    : 'bg-[#0F0F0F] border-white/10 text-stone-400 hover:text-stone-200'
                }`}
              >
                {filterGlutenFree && <Check className="w-3 h-3 text-[#C5A059]" />}
                <span>Gluten-Free</span>
              </button>

              <button
                onClick={() => setFilterVegetarian(!filterVegetarian)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors flex items-center gap-1.5 cursor-pointer ${
                  filterVegetarian
                    ? 'bg-[#0F0F0F] border-[#C5A059] text-[#C5A059]'
                    : 'bg-[#0F0F0F] border-white/10 text-stone-400 hover:text-stone-200'
                }`}
              >
                {filterVegetarian && <Check className="w-3 h-3 text-[#C5A059]" />}
                <span>Vegetarian</span>
              </button>
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 bg-[#141414] border border-white/10 p-8 space-y-3">
            <Utensils className="w-10 h-10 text-stone-600 mx-auto" />
            <p className="text-stone-300 font-serif text-lg">No signature dishes match your current filter criteria.</p>
            <p className="text-stone-500 text-xs">Try clearing dietary filters or searching for another ingredient.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setFilterGlutenFree(false);
                setFilterVegetarian(false);
                setFilterChefPicks(false);
                setSearchQuery('');
              }}
              className="mt-2 px-5 py-2.5 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-400 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                onClick={() => onSelectDish(dish)}
                className="group relative bg-[#141414] border border-white/10 hover:border-[#C5A059]/80 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Dish Thumbnail Image Container */}
                  <div className="relative h-56 overflow-hidden bg-[#0F0F0F]">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40" />

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 px-3.5 py-1.5 bg-[#0F0F0F] border border-[#C5A059]/50 backdrop-blur-md shadow-lg">
                      <span className="font-serif text-lg font-bold text-[#C5A059]">${dish.price}</span>
                    </div>

                    {/* Chef Pick Ribbon */}
                    {dish.isChefPick && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-[#C5A059] text-black text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-1 shadow-md">
                        <Flame className="w-3 h-3 fill-black" />
                        <span>Chef Signature</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div>
                      {dish.subtitle && (
                        <p className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] font-semibold mb-1">
                          {dish.subtitle}
                        </p>
                      )}
                      <h3 className="font-serif text-xl font-normal text-[#E5E5E5] group-hover:text-[#C5A059] transition-colors">
                        {dish.name}
                      </h3>
                    </div>

                    <p className="text-stone-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>

                    {/* Flavor Notes Pills */}
                    {dish.flavorNotes && dish.flavorNotes.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {dish.flavorNotes.map((note, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-[#0F0F0F] border border-white/10 text-[10px] text-stone-300 font-medium"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  {dish.pairingRecommendation ? (
                    <span className="text-stone-400 truncate max-w-[180px] flex items-center gap-1.5">
                      <Wine className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span className="truncate">{dish.pairingRecommendation}</span>
                    </span>
                  ) : (
                    <span className="text-stone-500">Fresh Daily Prep</span>
                  )}

                  <span className="text-[#C5A059] group-hover:text-amber-300 font-semibold flex items-center gap-1 shrink-0 uppercase text-[10px] tracking-[0.2em]">
                    <span>Inspect</span>
                    <Eye className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
