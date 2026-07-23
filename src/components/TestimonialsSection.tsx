import React, { useState } from 'react';
import { Star, Quote, Award, MessageSquarePlus, Sparkles, CheckCircle2, X } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [userReviews, setUserReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    title: '',
    quote: '',
    rating: 5,
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.quote) return;

    const added: Testimonial = {
      id: `user-test-${Date.now()}`,
      author: newReview.author,
      title: newReview.title || 'Honored Guest',
      publication: 'Verified L\'Artisan Visitor',
      quote: newReview.quote,
      rating: newReview.rating,
      year: '2026',
      badge: 'Guest Reflection',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    };

    setUserReviews([added, ...userReviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setIsSubmitOpen(false);
      setNewReview({ author: '', title: '', quote: '', rating: 5 });
    }, 2000);
  };

  return (
    <section id="guest-honors" className="py-24 bg-[#0A0A0A] text-stone-200 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#C5A059]/30 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.25em] mb-3">
              <Award className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Section 06 • Accolades & Guest Honors</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#E5E5E5]">
              Press Critique & Reflections
            </h2>
            <p className="text-stone-400 text-sm max-w-2xl mt-3 leading-relaxed">
              Words from esteemed Michelin Guide inspectors, culinary critics, and valued guests who have dined around our woodfire hearth.
            </p>
          </div>

          <button
            onClick={() => setIsSubmitOpen(true)}
            className="px-6 py-3 bg-[#141414] border border-[#C5A059]/50 text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-black transition-all cursor-pointer flex items-center gap-2 shadow-lg"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Leave Guest Reflection</span>
          </button>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userReviews.map((item) => (
            <div
              key={item.id}
              className="bg-[#141414] border border-white/10 p-8 flex flex-col justify-between space-y-6 shadow-xl relative group hover:border-[#C5A059]/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-[#0F0F0F] border border-[#C5A059]/40 text-[#C5A059] text-[9px] font-bold uppercase tracking-[0.2em]">
                    {item.badge || 'Accolade'}
                  </span>
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                    ))}
                  </div>
                </div>

                <Quote className="w-8 h-8 text-[#C5A059]/30" />

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed italic font-serif">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                {item.avatar && (
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 object-cover rounded-full border border-[#C5A059]/40"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#E5E5E5]">
                    {item.author}
                  </h4>
                  <p className="text-[10px] text-stone-500 uppercase tracking-wider">
                    {item.title} • {item.publication}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guest Review Submit Modal */}
      {isSubmitOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#141414] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setIsSubmitOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] font-bold block mb-1">
                Guest Experience Feedback
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#E5E5E5]">
                Share Your Dining Reflection
              </h3>
            </div>

            {submittedMessage ? (
              <div className="p-6 bg-[#0F0F0F] border border-[#C5A059] text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#C5A059] mx-auto" />
                <p className="text-sm font-bold text-[#E5E5E5]">Thank You For Your Reflection</p>
                <p className="text-xs text-stone-400">Your review has been added to our guest honors log.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[10px] uppercase text-stone-400 tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Eleanor Vance"
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0F0F0F] border border-white/10 text-stone-200 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase text-stone-400 tracking-wider mb-1">
                    Dining Occasion / Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anniversary Tasting at Chef's Counter"
                    value={newReview.title}
                    onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0F0F0F] border border-white/10 text-stone-200 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase text-stone-400 tracking-wider mb-1">
                    Your Words & Reflection
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the woodfire flavors, sommelier pairing, or atmosphere..."
                    value={newReview.quote}
                    onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0F0F0F] border border-white/10 text-stone-200 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all cursor-pointer"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
