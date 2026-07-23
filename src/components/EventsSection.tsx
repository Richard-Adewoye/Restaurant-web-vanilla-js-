import React, { useState } from 'react';
import { Calendar, Users, Sparkles, Check, ArrowRight, Calculator, Building2 } from 'lucide-react';
import { EVENT_PACKAGES } from '../data/restaurantData';

interface EventsSectionProps {
  onOpenEventsPage: () => void;
  onOpenReservation: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  onOpenEventsPage,
  onOpenReservation,
}) => {
  const [guestCountEstimate, setGuestCountEstimate] = useState<number>(25);
  const [selectedPkgIndex, setSelectedPkgIndex] = useState<number>(0);

  const activePackage = EVENT_PACKAGES[selectedPkgIndex];
  const calculatedTotal = guestCountEstimate * activePackage.priceStartingPerGuest;

  return (
    <section id="private-events" className="py-24 bg-[#0F0F0F] text-stone-200 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#C5A059]/30 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.25em] mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Section 07 • Bespoke Private Celebrations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#E5E5E5]">
              Private Dining & Full Buyouts
            </h2>
            <p className="text-stone-400 text-sm max-w-2xl mt-3 leading-relaxed">
              Host intimate milestones, corporate receptions, or private dining galas with custom hearth menus, dedicated sommeliers, and tailored decor.
            </p>
          </div>

          <button
            onClick={onOpenEventsPage}
            className="px-6 py-3 bg-[#141414] border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-black transition-all cursor-pointer flex items-center gap-2 shadow-lg group"
          >
            <span>Full Event Planner & Inquiry</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:text-black transition-colors" />
          </button>
        </div>

        {/* Package Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENT_PACKAGES.map((pkg, idx) => {
            const isSelected = selectedPkgIndex === idx;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPkgIndex(idx)}
                className={`p-8 bg-[#141414] border transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
                  isSelected
                    ? 'border-[#C5A059] bg-[#191814] shadow-2xl scale-102'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] font-bold">
                      {pkg.guestCapacity}
                    </span>
                    <span className="text-xs text-stone-400">Starting at</span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#E5E5E5]">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-stone-400 italic font-serif">{pkg.subtitle}</p>

                  <div className="pt-2">
                    <span className="text-2xl font-bold text-[#C5A059]">
                      ${pkg.priceStartingPerGuest}
                    </span>
                    <span className="text-stone-500 text-xs"> / guest</span>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed pt-2">
                    {pkg.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <span className="text-[10px] uppercase text-[#C5A059] font-bold tracking-wider block">
                      Package Inclusions:
                    </span>
                    {pkg.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-400">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenEventsPage}
                  className={`w-full py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#C5A059] text-black hover:bg-amber-400'
                      : 'bg-[#0F0F0F] text-stone-300 border border-white/10 hover:border-[#C5A059]'
                  }`}
                >
                  Select Package & Inquire
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Instant Cost Estimator Widget */}
        <div className="p-8 bg-[#141414] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F0F0F] border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.2em]">
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant Event Cost Estimator</span>
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#E5E5E5]">
              Estimate Your Private Celebration Investment
            </h3>
            <p className="text-xs text-stone-400">
              Selected Package: <strong className="text-stone-200">{activePackage.name}</strong> (${activePackage.priceStartingPerGuest}/guest)
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs text-stone-300">
                <span>Estimated Guest Count:</span>
                <span className="font-bold text-[#C5A059]">{guestCountEstimate} Guests</span>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                step={5}
                value={guestCountEstimate}
                onChange={(e) => setGuestCountEstimate(Number(e.target.value))}
                className="w-full accent-[#C5A059] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-500">
                <span>10 Guests</span>
                <span>50 Guests</span>
                <span>100 Guests</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0F0F0F] border border-[#C5A059]/40 p-6 space-y-4 text-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 block">
              Estimated Investment Total
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-[#C5A059] font-serif">
              ${calculatedTotal.toLocaleString()}
            </div>
            <p className="text-[11px] text-stone-400 italic">
              Includes dining, sommelier wine pairing, and dedicated service staff. Tax & gratuity applied upon final agreement.
            </p>

            <button
              onClick={onOpenEventsPage}
              className="w-full py-3 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all cursor-pointer"
            >
              Request Formal Event Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
