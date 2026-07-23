import React, { useState } from 'react';
import { MapPin, Users, Volume2, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { DINING_SPACES } from '../data/restaurantData';
import { DiningSpace } from '../types';

interface AtmosphereSectionProps {
  onOpenReservation: (diningArea?: string) => void;
}

export const AtmosphereSection: React.FC<AtmosphereSectionProps> = ({ onOpenReservation }) => {
  const [activeSpace, setActiveSpace] = useState<DiningSpace>(DINING_SPACES[0]);

  return (
    <section id="atmosphere" className="py-24 bg-[#0F0F0F] text-stone-200 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#C5A059]/30 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Section 05 • Dining Spaces & Ambiance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#E5E5E5]">
            Architectural Dining Spaces
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed">
            Four distinct dining environments thoughtfully designed for different moods, intimate celebrations, front-row kitchen views, or subterranean wine cellar privacy.
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 border-b border-white/10 pb-6">
          {DINING_SPACES.map((space) => {
            const isSelected = activeSpace.id === space.id;
            return (
              <button
                key={space.id}
                onClick={() => setActiveSpace(space)}
                className={`px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#C5A059] text-black border-[#C5A059] shadow-xl'
                    : 'bg-[#141414] text-stone-300 border-white/10 hover:border-white/30'
                }`}
              >
                {space.name}
              </button>
            );
          })}
        </div>

        {/* Active Space Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#141414] border border-white/10 p-6 sm:p-10 shadow-2xl">
          {/* Space Image */}
          <div className="lg:col-span-6 relative h-80 sm:h-96 w-full overflow-hidden border border-white/10">
            <img
              src={activeSpace.image}
              alt={activeSpace.name}
              className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              {activeSpace.ambianceKeywords.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Space Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.25em] font-bold block mb-1">
                {activeSpace.subtitle}
              </span>
              <h3 className="font-serif text-3xl font-normal text-[#E5E5E5]">
                {activeSpace.name}
              </h3>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed">
              {activeSpace.description}
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-[#0F0F0F] border border-white/10 text-xs">
              <div className="space-y-1">
                <span className="text-stone-500 uppercase text-[10px] block flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                  Seating Capacity
                </span>
                <span className="text-stone-200 font-bold">{activeSpace.capacity}</span>
              </div>
              <div className="space-y-1">
                <span className="text-stone-500 uppercase text-[10px] block flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  Acoustic Tone
                </span>
                <span className="text-stone-200 font-bold">{activeSpace.acousticLevel}</span>
              </div>
            </div>

            {/* Key Features List */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold block">
                Atmospheric Highlights
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
                {activeSpace.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenReservation(activeSpace.name)}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Reserve in {activeSpace.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
