import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
// import AboutSection from '@/components/AboutSection';
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
    <div className="min-h-screen bg-dark-bg relative overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Process />
      {/* <AboutSection /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
