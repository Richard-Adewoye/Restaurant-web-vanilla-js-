import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { FeaturedMenuSection } from './components/FeaturedMenuSection';
import { ReservationModal } from './components/ReservationModal';
import { DishDetailModal } from './components/DishDetailModal';
import { FooterSummary } from './components/FooterSummary';
import { MenuItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [preSelectedDishName, setPreSelectedDishName] = useState<string | undefined>(undefined);

  // Scroll active section observer
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const story = document.getElementById('our-story');
      const menu = document.getElementById('featured-menu');

      const scrollPosition = window.scrollY + 200;

      if (menu && scrollPosition >= menu.offsetTop) {
        setActiveSection('featured-menu');
      } else if (story && scrollPosition >= story.offsetTop) {
        setActiveSection('our-story');
      } else {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenReservation = (dishName?: string) => {
    setPreSelectedDishName(dishName);
    setIsReservationOpen(true);
  };

  const handleScrollToMenu = () => {
    const menuElement = document.getElementById('featured-menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Sticky Header Navbar */}
      <Navbar
        onOpenReservation={() => handleOpenReservation()}
        activeSection={activeSection}
      />

      {/* SECTION 01: Hero Section */}
      <HeroSection
        onOpenReservation={() => handleOpenReservation()}
        onScrollToMenu={handleScrollToMenu}
      />

      {/* SECTION 02: Our Story & Culinary Philosophy */}
      <StorySection />

      {/* SECTION 03: Chef's Signature Featured Menu */}
      <FeaturedMenuSection
        onSelectDish={(dish) => setSelectedDish(dish)}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* Footer Summary Bar */}
      <FooterSummary onOpenReservation={() => handleOpenReservation()} />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => {
          setIsReservationOpen(false);
          setPreSelectedDishName(undefined);
        }}
        preSelectedDishName={preSelectedDishName}
      />

      {/* Interactive Dish Inspection Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onPreSelectForReservation={(dishName) => {
          setSelectedDish(null);
          handleOpenReservation(dishName);
        }}
      />
    </div>
  );
}
