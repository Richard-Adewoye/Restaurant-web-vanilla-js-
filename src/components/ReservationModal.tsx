import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, Users, MapPin, Sparkles, CheckCircle, Utensils, ShieldCheck } from 'lucide-react';
import { ReservationData } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedDishName?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  preSelectedDishName,
}) => {
  const [formData, setFormData] = useState<ReservationData>({
    guestName: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: 2,
    diningArea: 'Main Dining Room',
    specialOccasion: 'None',
    dietaryNotes: preSelectedDishName ? `Pre-selected Dish Interest: ${preSelectedDishName}` : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const timeSlots = ['17:00', '18:15', '19:30', '20:45', '22:00'];
  const diningAreas: ReservationData['diningArea'][] = [
    'Main Dining Room',
    "Chef's Counter",
    'Garden Terrace',
    'Private Tasting Vault',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockCode = 'AURA-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(mockCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#141414] border border-white/10 p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-400 hover:text-white p-2 bg-[#0F0F0F] border border-white/10 hover:border-[#C5A059]/50 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F0F0F] border border-[#C5A059]/30 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.2em] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Bespoke Table Reservation</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#E5E5E5]">
                Reserve Your Dining Experience
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">
                L'ARTISAN • {RESTAURANT_INFO.address}
              </p>
            </div>

            {preSelectedDishName && (
              <div className="p-3.5 bg-[#0F0F0F] border border-[#C5A059]/40 text-[#C5A059] text-xs flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>
                  You are reserving with pre-selection for <strong>{preSelectedDishName}</strong>.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-medium text-stone-300 uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-white/10 text-stone-200 text-sm focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-medium text-stone-300 uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                    Guest Count
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-white/10 text-stone-200 text-sm focus:outline-none focus:border-[#C5A059]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Time Slots selector */}
              <div>
                <label className="block text-[10px] font-medium text-stone-300 uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  Select Seating Time Slot
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, time: slot })}
                      className={`py-2 text-xs font-bold transition-all border cursor-pointer ${
                        formData.time === slot
                          ? 'bg-[#C5A059] text-black border-[#C5A059]'
                          : 'bg-[#0F0F0F] text-stone-300 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dining Area */}
              <div>
                <label className="block text-[10px] font-medium text-stone-300 uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  Preferred Atmosphere / Seating Area
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {diningAreas.map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setFormData({ ...formData, diningArea: area })}
                      className={`p-3 text-left text-xs font-semibold border transition-all cursor-pointer ${
                        formData.diningArea === area
                          ? 'bg-[#0F0F0F] border-[#C5A059] text-[#C5A059]'
                          : 'bg-[#0F0F0F] border-white/10 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div>
                  <label className="block text-[10px] text-stone-400 uppercase tracking-[0.15em] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Wright"
                    value={formData.guestName}
                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#0F0F0F] border border-white/10 text-stone-200 text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-stone-400 uppercase tracking-[0.15em] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alexander@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#0F0F0F] border border-white/10 text-stone-200 text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-stone-400 uppercase tracking-[0.15em] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#0F0F0F] border border-white/10 text-stone-200 text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              {/* Dietary / Special Notes */}
              <div>
                <label className="block text-[10px] text-stone-400 uppercase tracking-[0.15em] mb-1">
                  Dietary Restrictions or Special Occasion
                </label>
                <input
                  type="text"
                  placeholder="e.g. Birthday celebration, nut allergy..."
                  value={formData.dietaryNotes}
                  onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                  className="w-full px-3.5 py-2 bg-[#0F0F0F] border border-white/10 text-stone-200 text-xs focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-stone-400">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Instant Concierge Confirmation</span>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all shadow-xl cursor-pointer"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 bg-[#0F0F0F] border border-[#C5A059] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-[#C5A059]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs text-[#C5A059] uppercase tracking-[0.2em] font-semibold">
                Reservation Confirmed
              </span>
              <h2 className="font-serif text-3xl font-normal text-[#E5E5E5]">
                We Look Forward to Welcoming You
              </h2>
              <p className="text-stone-300 text-sm max-w-md mx-auto">
                Thank you, <strong>{formData.guestName}</strong>. Your reservation details have been dispatched to our concierge team.
              </p>
            </div>

            {/* Ticket summary card */}
            <div className="bg-[#0F0F0F] border border-[#C5A059]/40 p-6 max-w-md mx-auto text-left space-y-3 font-mono text-xs text-stone-300">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-stone-500">Confirmation ID:</span>
                <span className="text-[#C5A059] font-bold">{confirmationCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Date & Time:</span>
                <span>{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Party Size:</span>
                <span>{formData.guests} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Atmosphere:</span>
                <span>{formData.diningArea}</span>
              </div>
              {formData.dietaryNotes && (
                <div className="border-t border-white/10 pt-2 text-[11px] text-[#C5A059]">
                  Note: {formData.dietaryNotes}
                </div>
              )}
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-amber-400 cursor-pointer"
              >
                Return to Experience
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
