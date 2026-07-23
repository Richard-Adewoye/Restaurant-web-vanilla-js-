import React, { useState } from 'react';
import { Flame, Sprout, Wine, Quote, CheckCircle2, ChevronRight, Sparkles, ChefHat } from 'lucide-react';
import { RESTAURANT_INFO, STORY_PILLARS, SIGNATURE_DISH_IMAGE } from '../data/restaurantData';

export const StorySection: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(STORY_PILLARS[0].id);
  const [chefModalOpen, setChefModalOpen] = useState(false);

  const activePillar = STORY_PILLARS.find((p) => p.id === selectedPillarId) || STORY_PILLARS[0];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#C5A059]" />;
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-[#C5A059]" />;
      case 'Wine':
        return <Wine className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="our-story" className="relative py-24 bg-[#0A0A0A] border-t border-b border-white/10 overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#141414] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.3em]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Section 02 • Our Culinary Heritage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#E5E5E5] tracking-tight text-balance">
            The Philosophy Behind Every <span className="italic text-[#C5A059]">Flame.</span>
          </h2>

          <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed text-balance">
            At L'Artisan, we believe culinary creation is an intimate dialog between open embers, estate harvests, and ancient French technique.
          </p>
        </div>

        {/* Story Grid: Left Chef Spotlight, Right Interactive Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Chef Portrait & Signature Statement */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group">
              <div className="relative bg-[#141414] border border-white/10 shadow-2xl">
                <img
                  src={RESTAURANT_INFO.chef.avatar}
                  alt={RESTAURANT_INFO.chef.name}
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F0F0F] border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.2em]">
                    <ChefHat className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Executive Chef</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#E5E5E5]">
                    {RESTAURANT_INFO.chef.name}
                  </h3>
                  <p className="text-xs text-[#C5A059] tracking-[0.2em] uppercase font-medium">
                    {RESTAURANT_INFO.chef.title}
                  </p>
                </div>
              </div>

              {/* Chef Floating Quote Box */}
              <div className="mt-4 p-6 bg-[#141414] border border-[#C5A059]/30 relative">
                <Quote className="w-8 h-8 text-[#C5A059]/20 absolute top-4 right-4" />
                <p className="text-stone-300 text-sm font-serif italic leading-relaxed relative z-10">
                  "{RESTAURANT_INFO.chef.quote}"
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-stone-400">Classically Trained at L'Arpège, Paris</span>
                  <button
                    onClick={() => setChefModalOpen(true)}
                    className="text-xs font-semibold text-[#C5A059] hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    <span>Read Biography</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Story Pillars Tabs & Highlight Card */}
          <div className="lg:col-span-7 space-y-8">
            {/* Pillar Tabs Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {STORY_PILLARS.map((pillar) => {
                const isSelected = pillar.id === selectedPillarId;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setSelectedPillarId(pillar.id)}
                    className={`p-4 text-left border transition-all cursor-pointer flex flex-col justify-between h-32 ${
                      isSelected
                        ? 'bg-[#141414] border-[#C5A059] shadow-xl'
                        : 'bg-[#0F0F0F] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-2 bg-[#0A0A0A] border border-white/10">
                        {getPillarIcon(pillar.iconName)}
                      </div>
                      <span className={`text-xs font-bold font-serif ${isSelected ? 'text-[#C5A059]' : 'text-white/30'}`}>
                        0{STORY_PILLARS.indexOf(pillar) + 1}
                      </span>
                    </div>

                    <div>
                      <p className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${isSelected ? 'text-[#C5A059]' : 'text-stone-400'}`}>
                        {pillar.subtitle}
                      </p>
                      <h4 className={`font-serif text-sm font-bold truncate ${isSelected ? 'text-[#E5E5E5]' : 'text-stone-300'}`}>
                        {pillar.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Pillar Detailed Showcase Card */}
            <div className="p-8 bg-[#141414] border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-[10px] text-[#C5A059] font-semibold tracking-[0.2em] uppercase">
                    Pillar Detail • {activePillar.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#E5E5E5] mt-1">
                    {activePillar.title}
                  </h3>
                </div>

                <div className="px-5 py-3 bg-[#0F0F0F] border border-[#C5A059]/40 text-center shrink-0">
                  <span className="block font-serif text-2xl font-bold text-[#C5A059]">
                    {activePillar.highlightStat}
                  </span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#C5A059]/80 font-sans">
                    {activePillar.statLabel}
                  </span>
                </div>
              </div>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {activePillar.description}
              </p>

              {/* Quality Standards List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Sustainably harvested daily at dawn</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Zero synthetic preservatives or additives</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Handcrafted by culinary artisans</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Bespoke sommelier pairing available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chef Full Story Modal */}
      {chefModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#141414] border border-white/10 max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <ChefHat className="w-6 h-6 text-[#C5A059]" />
                <h3 className="font-serif text-xl font-bold text-[#E5E5E5]">Meet Chef Henri Laurent</h3>
              </div>
              <button
                onClick={() => setChefModalOpen(false)}
                className="text-stone-400 hover:text-white text-xs uppercase tracking-widest font-bold p-1 cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-4 text-stone-300 text-sm leading-relaxed">
              <p>
                Chef Henri Laurent spent his early career in Normandy and Paris before embarking on a decade-long exploration of woodfire cooking techniques in the Basque region of Spain.
              </p>
              <p>
                At L'Artisan, Chef Henri unites old-world open-hearth grilling with contemporary French precision. Every dish on our signature menu is designed to celebrate the unvarnished essence of the ingredient.
              </p>
              <div className="p-4 bg-[#0F0F0F] border border-[#C5A059]/40 text-[#C5A059] text-xs italic">
                "We don't mask flavor with heavy sauces; we coax out its natural soul using heat, time, and gentle smoke."
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setChefModalOpen(false)}
                className="px-6 py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-amber-400 transition-colors cursor-pointer"
              >
                Close Biography
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
