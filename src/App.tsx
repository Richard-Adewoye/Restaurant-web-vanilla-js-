import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { FeaturedMenuSection } from './components/FeaturedMenuSection';
import { WineCellarSection } from './components/WineCellarSection';
import { AtmosphereSection } from './components/AtmosphereSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EventsSection } from './components/EventsSection';
import { WineListPage } from './components/WineListPage';
import { EventsPage } from './components/EventsPage';
import { ReservationModal } from './components/ReservationModal';
import { DishDetailModal } from './components/DishDetailModal';
import { FooterSummary } from './components/FooterSummary';
import { MenuItem, ActivePageView } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activePage, setActivePage] = useState<ActivePageView>('home');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [preSelectedDishName, setPreSelectedDishName] = useState<string | undefined>(undefined);

  // Scroll active section observer across all 7 sections
  useEffect(() => {
    if (activePage !== 'home') return;

    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const story = document.getElementById('our-story');
      const menu = document.getElementById('featured-menu');
      const wine = document.getElementById('wine-cellar');
      const atmosphere = document.getElementById('atmosphere');
      const honors = document.getElementById('guest-honors');
      const events = document.getElementById('private-events');

      const scrollPosition = window.scrollY + 250;

      if (events && scrollPosition >= events.offsetTop) {
        setActiveSection('private-events');
      } else if (honors && scrollPosition >= honors.offsetTop) {
        setActiveSection('guest-honors');
      } else if (atmosphere && scrollPosition >= atmosphere.offsetTop) {
        setActiveSection('atmosphere');
      } else if (wine && scrollPosition >= wine.offsetTop) {
        setActiveSection('wine-cellar');
      } else if (menu && scrollPosition >= menu.offsetTop) {
        setActiveSection('featured-menu');
      } else if (story && scrollPosition >= story.offsetTop) {
        setActiveSection('our-story');
      } else {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  const handleOpenReservation = (dishName?: string) => {
    setPreSelectedDishName(dishName);
    setIsReservationOpen(true);
  };

  const handleScrollToMenu = () => {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const menuElement = document.getElementById('featured-menu');
        if (menuElement) menuElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const menuElement = document.getElementById('featured-menu');
      if (menuElement) {
        menuElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigatePage = (page: ActivePageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-stone-100 flex flex-col font-sans selection:bg-[#C5A059]/30 selection:text-amber-200">
      {/* If Dedicated Wine Journal Page View */}
      {activePage === 'wine-cellar-page' && (
        <WineListPage
          onBackToMain={() => handleNavigatePage('home')}
          onOpenReservation={() => handleOpenReservation()}
        />
      )}

      {/* If Dedicated Private Events Page View */}
      {activePage === 'private-events-page' && (
        <EventsPage
          onBackToMain={() => handleNavigatePage('home')}
          onOpenReservation={() => handleOpenReservation()}
        />
      )}

      {/* Primary Home 7-Section Flow View */}
      {activePage === 'home' && (
        <>
          {/* Sticky Header Navbar */}
          <Navbar
            onOpenReservation={() => handleOpenReservation()}
            activeSection={activeSection}
            activePage={activePage}
            onNavigatePage={handleNavigatePage}
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

          {/* SECTION 04: Sommelier Wine Cellar & Vault */}
          <WineCellarSection
            onOpenWinePage={() => handleNavigatePage('wine-cellar-page')}
            onOpenReservation={() => handleOpenReservation()}
          />

          {/* SECTION 05: Architectural Dining Spaces & Atmosphere */}
          <AtmosphereSection
            onOpenReservation={(spaceName) => handleOpenReservation(spaceName ? `Space: ${spaceName}` : undefined)}
          />

          {/* SECTION 06: Press Critique & Guest Honors */}
          <TestimonialsSection />

          {/* SECTION 07: Private Dining & Bespoke Events */}
          <EventsSection
            onOpenEventsPage={() => handleNavigatePage('private-events-page')}
            onOpenReservation={() => handleOpenReservation()}
          />

          {/* Footer Summary Map Bar & Links */}
          <FooterSummary
            onOpenReservation={() => handleOpenReservation()}
            onNavigatePage={handleNavigatePage}
          />
        </>
      )}

      {/* Interactive Reservation Modal (Global) */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => {
          setIsReservationOpen(false);
          setPreSelectedDishName(undefined);
        }}
        preSelectedDishName={preSelectedDishName}
      />

      {/* Interactive Dish Inspection Modal (Global) */}
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

