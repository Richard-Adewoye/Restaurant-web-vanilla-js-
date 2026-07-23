import React, { useState } from 'react';
import { ArrowLeft, Building2, Users, Calendar, CheckCircle2, Clock, Mail, Phone, Sparkles, Check, ChevronDown, UtensilsCrossed } from 'lucide-react';
import { EVENT_PACKAGES, DINING_SPACES, RESTAURANT_INFO } from '../data/restaurantData';

interface EventsPageProps {
  onBackToMain: () => void;
  onOpenReservation: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onBackToMain, onOpenReservation }) => {
  const [formData, setFormData] = useState({
    guestName: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: 'Private Birthday / Milestone',
    guestCount: 25,
    selectedPackage: EVENT_PACKAGES[0].name,
    preferredSpace: DINING_SPACES[0].name,
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `LARTISAN-EVT-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryCode(code);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-stone-200 font-sans selection:bg-[#C5A059]/30">
      {/* Header Bar */}
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
              Bespoke Events & Celebrations
            </span>
            <span className="block text-[9px] uppercase tracking-[0.3em] text-stone-500">
              {RESTAURANT_INFO.name} • SoHo Private Residence
            </span>
          </div>

          <button
            onClick={onOpenReservation}
            className="px-5 py-2 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all cursor-pointer"
          >
            Regular Table Booking
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative py-16 px-4 sm:px-8 border-b border-white/10 bg-gradient-to-b from-[#141414] to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F0F0F] border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.25em]">
            <Building2 className="w-3.5 h-3.5" />
            <span>Concierge Event Services</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#E5E5E5]">
            Private Dining & Event Proposals
          </h1>
          <p className="text-stone-400 text-sm max-w-2xl mx-auto leading-relaxed">
            From intimate multi-course tasting dinners in our Subterranean Vault to grand 120-guest restaurant buyouts. Request a formal proposal tailored to your celebration.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Spaces Overview Cards */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-normal text-[#E5E5E5] border-b border-white/10 pb-4">
            01. Choose Your Preferred Venue Space
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DINING_SPACES.map((space) => (
              <div
                key={space.id}
                className="bg-[#141414] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between space-y-4"
              >
                <div className="relative h-48 w-full">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover filter brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 px-3 py-1 bg-black/80 border border-[#C5A059] text-[#C5A059] text-[10px] font-bold uppercase">
                    {space.capacity}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-normal text-[#E5E5E5]">
                    {space.name}
                  </h3>
                  <p className="text-xs text-stone-400">{space.description}</p>

                  <div className="pt-2 flex flex-wrap gap-2 text-[10px] text-[#C5A059]">
                    {space.features.map((f, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-[#0F0F0F] border border-white/10">
                        • {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packages Comparison */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-normal text-[#E5E5E5] border-b border-white/10 pb-4">
            02. Bespoke Celebration Curations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENT_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="bg-[#141414] border border-white/10 p-6 space-y-6 shadow-xl flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] font-bold block">
                    {pkg.guestCapacity}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#E5E5E5]">
                    {pkg.name}
                  </h3>
                  <div className="text-xl font-bold text-[#C5A059]">
                    ${pkg.priceStartingPerGuest} <span className="text-xs text-stone-500 font-normal">/ guest</span>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">{pkg.description}</p>

                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <span className="text-[10px] uppercase text-[#C5A059] font-bold">
                      Sample Course Progression:
                    </span>
                    {pkg.sampleMenuCourses.map((c, idx) => (
                      <div key={idx} className="p-2 bg-[#0F0F0F] border border-white/5 text-[11px]">
                        <strong className="text-stone-200 block">{c.courseName}</strong>
                        <span className="text-stone-400">{c.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Event Inquiry Form */}
        <div className="bg-[#141414] border border-[#C5A059]/40 p-8 sm:p-12 shadow-2xl space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F0F0F] border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.25em] mb-2">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Concierge Proposal Inquiry</span>
            </div>
            <h2 className="font-serif text-3xl font-normal text-[#E5E5E5]">
              Request Your Custom Event Proposal
            </h2>
            <p className="text-xs text-stone-400 mt-1">
              Our Private Dining Director will review your requirements and respond within 12 business hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 bg-[#0F0F0F] border border-[#C5A059] text-center space-y-4 max-w-xl mx-auto">
              <CheckCircle2 className="w-12 h-12 text-[#C5A059] mx-auto animate-bounce" />
              <span className="text-xs text-[#C5A059] uppercase tracking-[0.2em] font-bold block">
                Inquiry Received
              </span>
              <h3 className="font-serif text-2xl text-[#E5E5E5]">
                Proposal Request Confirmed
              </h3>
              <p className="text-xs text-stone-300">
                Inquiry Reference Code: <strong className="text-[#C5A059] font-mono">{inquiryCode}</strong>
              </p>
              <p className="text-xs text-stone-400 leading-relaxed">
                Thank you, {formData.guestName}. Our Concierge Event Team has logged your inquiry for {formData.guestCount} guests on {formData.eventDate || 'your preferred date'}. We will reach out to {formData.email} shortly.
              </p>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onBackToMain();
                }}
                className="px-8 py-3 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all cursor-pointer"
              >
                Return to Experience
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitInquiry} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] uppercase text-stone-400 tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Victoria Sterling"
                    value={formData.guestName}
                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-white/10 text-stone-200 text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase text-stone-400 tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="victoria@sterling.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-white/10 text-stone-200 text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase text-stone-400 tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 345-6789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-white/10 text-stone-200 text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] uppercase text-stone-400 tracking-wider mb-1">
                    Target Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-white/10 text-stone-200 text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase text-stone-400 tracking-wider mb-1">
                    Estimated Guest Count
                  </label>
                  <input
                    type="number"
                    min={6}
                    max={120}
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-white/10 text-stone-200 text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase text-stone-400 tracking-wider mb-1">
                    Celebration Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-white/10 text-stone-200 text-xs focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Private Birthday / Milestone">Private Birthday / Milestone</option>
                    <option value="Corporate Executive Dinner">Corporate Executive Dinner</option>
                    <option value="Wedding Reception / Dinner">Wedding Reception / Dinner</option>
                    <option value="Full Restaurant Buyout Gala">Full Restaurant Buyout Gala</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase text-stone-400 tracking-wider mb-1">
                    Preferred Space
                  </label>
                  <select
                    value={formData.preferredSpace}
                    onChange={(e) => setFormData({ ...formData, preferredSpace: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-white/10 text-stone-200 text-xs focus:outline-none focus:border-[#C5A059]"
                  >
                    {DINING_SPACES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.capacity})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase text-stone-400 tracking-wider mb-1">
                    Selected Curation Package
                  </label>
                  <select
                    value={formData.selectedPackage}
                    onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-white/10 text-stone-200 text-xs focus:outline-none focus:border-[#C5A059]"
                  >
                    {EVENT_PACKAGES.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} (${p.priceStartingPerGuest}/guest)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase text-stone-400 tracking-wider mb-1">
                  Custom Dietary Preferences or Special Setup Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Kosher / Vegan preferences, acoustic live jazz trio setup, floral arrangement requests..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-white/10 text-stone-200 text-xs focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all shadow-xl cursor-pointer"
              >
                Submit Event Proposal Request
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};
