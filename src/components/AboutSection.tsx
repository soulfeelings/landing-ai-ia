import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const useRevealOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-slide-up');
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.2,
    });
    node.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
};

const AboutSection = () => {
  const revealRef = useRevealOnScroll();
  return (
    <section id="about" className="py-24 bg-solarized-base2/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center" ref={revealRef}>
          <div className="md:w-1/2 md:mx-auto">
            <span className="font-mono text-solarized-blue reveal-on-scroll opacity-0">ABOUT US</span>
            <h2 className="section-title reveal-on-scroll opacity-0">Who We <span className="text-solarized-magenta">Are</span></h2>
            <p className="text-lg text-solarized-base01 mb-6 reveal-on-scroll opacity-0">
              ByteCraft is a team of passionate technologists and creatives who love building innovative web solutions.
            </p>
            <p className="text-lg text-solarized-base01 mb-6 reveal-on-scroll opacity-0">
              Founded in 2018, we've helped dozens of businesses transform their digital presence and operations through custom web applications, stunning websites, and strategic digital solutions.
            </p>
            <p className="text-lg text-solarized-base01 mb-8 reveal-on-scroll opacity-0">
              Our approach combines technical excellence with creative problem-solving to deliver results that exceed expectations and drive real business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
