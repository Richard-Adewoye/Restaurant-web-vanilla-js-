import React from 'react';
import { X, Wine, Flame, Clock, Calendar, Check, Sparkles, Utensils } from 'lucide-react';
import { MenuItem } from '../types';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onPreSelectForReservation: (dishName: string) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onPreSelectForReservation,
}) => {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#141414] border border-white/10 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-stone-300 hover:text-white p-2 bg-[#0F0F0F] border border-white/10 hover:border-[#C5A059]/50 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Dish Image Column */}
          <div className="md:col-span-5 relative h-64 md:h-full min-h-[280px] bg-[#0F0F0F]">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover object-center filter brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#141414]" />

            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="px-3.5 py-1.5 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-wider shadow-md">
                ${dish.price}
              </span>
              {dish.isChefPick && (
                <span className="px-3 py-1 bg-[#0F0F0F] border border-[#C5A059] text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-1 shadow-md">
                  <Flame className="w-3 h-3 text-[#C5A059]" />
                  <span>Chef Pick</span>
                </span>
              )}
            </div>
          </div>

          {/* Dish Details Content Column */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.2em] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{dish.category} • Signature Selection</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#E5E5E5]">
                {dish.name}
              </h2>

              {dish.subtitle && (
                <p className="text-stone-400 text-xs italic mt-0.5">
                  {dish.subtitle}
                </p>
              )}
            </div>

            <p className="text-white/70 text-sm leading-relaxed">
              {dish.description}
            </p>

            {/* Flavor Notes */}
            {dish.flavorNotes && dish.flavorNotes.length > 0 && (
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-2">
                  Flavor Profile Notes
                </span>
                <div className="flex flex-wrap gap-2">
                  {dish.flavorNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#0F0F0F] border border-white/10 text-[#C5A059] text-xs font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Wine Pairing Recommendation */}
            {dish.pairingRecommendation && (
              <div className="p-4 bg-[#0F0F0F] border border-[#C5A059]/40 space-y-1">
                <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em]">
                  <Wine className="w-4 h-4 text-[#C5A059]" />
                  <span>Master Sommelier Pairing</span>
                </div>
                <p className="text-stone-300 text-xs italic font-serif">
                  {dish.pairingRecommendation}
                </p>
              </div>
            )}

            {/* Prep Info & Dietary Flags */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10 text-xs text-stone-400">
              <div className="flex items-center gap-4">
                {dish.preparationTime && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    {dish.preparationTime}
                  </span>
                )}
                {dish.calories && (
                  <span>{dish.calories} kcal</span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {dish.dietaryFlags?.glutenFree && (
                  <span className="px-2 py-0.5 bg-[#0F0F0F] border border-white/10 text-[#C5A059] text-[10px]">Gluten-Free</span>
                )}
                {dish.dietaryFlags?.vegetarian && (
                  <span className="px-2 py-0.5 bg-[#0F0F0F] border border-white/10 text-[#C5A059] text-[10px]">Vegetarian</span>
                )}
                {dish.dietaryFlags?.dairyFree && (
                  <span className="px-2 py-0.5 bg-[#0F0F0F] border border-white/10 text-stone-300 text-[10px]">Dairy-Free</span>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  onPreSelectForReservation(dish.name);
                }}
                className="w-full py-3.5 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Pre-Select & Book Table</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
