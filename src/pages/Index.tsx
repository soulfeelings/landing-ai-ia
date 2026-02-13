import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroNew from '@/components/HeroNew';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import AIPricing from '@/components/AIPricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

declare global {
  interface Window {
    hidePreloader?: () => void;
  }
}

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-reveal');

      scrollElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;

        if (isVisible) {
          el.classList.add('animate-slide-up');
        }
      });
    };

    // Add initial class to all elements that need to be revealed
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => {
      el.classList.add('opacity-0');
    });

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();

    // Notify preloader that React is ready
    if (window.hidePreloader) {
      window.hidePreloader();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      <HeroNew />
      <Services />
      <Projects />
      <AIPricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
