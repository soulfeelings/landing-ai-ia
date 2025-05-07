import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-solarized-base2/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center" ref={revealRef}>
          <div className="md:w-1/2 md:mx-auto">
            <span className="font-mono text-solarized-blue text-xs sm:text-sm md:text-base lg:text-lg reveal-on-scroll opacity-0">{t('about.title')}</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-solarized-base01 mb-4 sm:mb-6 reveal-on-scroll opacity-0">
              {t('about.subtitle')} <span className="text-solarized-magenta">{t('about.subtitleHighlight')}</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-solarized-base01 mb-4 sm:mb-6 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed reveal-on-scroll opacity-0">
              {t('about.description')}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-solarized-base01 mb-4 sm:mb-6 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed reveal-on-scroll opacity-0">
              {t('about.history')}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-solarized-base01 mb-6 sm:mb-8 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed reveal-on-scroll opacity-0">
              {t('about.approach')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
