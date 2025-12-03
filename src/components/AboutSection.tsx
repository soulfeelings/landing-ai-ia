import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import CanvasMatrix from './CanvasMatrix';

const AboutSection = () => {
  const revealRef = useRevealOnScroll();
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-dark-bg/50 relative overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <CanvasMatrix width={window.innerWidth} height={window.innerHeight} color="#D6FF3F" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center" ref={revealRef}>
          <div className="md:w-1/2 md:mx-auto">
            <span className="font-sans text-dark-accent text-xs sm:text-sm md:text-base lg:text-lg reveal-on-scroll opacity-0">{t('about.title')}</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-text mb-4 sm:mb-6 reveal-on-scroll opacity-0">
              {t('about.subtitle')} <span className="text-dark-accent">{t('about.subtitleHighlight')}</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dark-text mb-4 sm:mb-6 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed reveal-on-scroll opacity-0">
              {t('about.description')}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dark-text mb-6 sm:mb-8 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed reveal-on-scroll opacity-0">
              {t('about.approach')}
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-sans text-dark-accent mb-8 sm:mb-10 md:mb-12 text-center">{t('team.subtitle')}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto">
            {/* AI Team Member */}
            <div className="bg-dark-bg/50 rounded-lg p-2 sm:p-3 md:p-4 border border-dark-accent/20 hover:border-dark-accent/50 transition-colors">
              <div className="w-full h-[100px] sm:h-[120px] md:h-[140px] flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                <img
                  src="./aipic.svg"
                  alt={t('team.aiMember.alt')}
                  className="w-auto h-full object-contain"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-sans text-dark-accent mb-1 text-center">{t('team.aiMember.title')}</h3>
              <p className="text-xs sm:text-sm text-dark-text text-center">
                {t('team.aiMember.description')}
              </p>
            </div>

            {/* Human Team Members */}
            <div className="bg-dark-bg/50 rounded-lg p-2 sm:p-3 md:p-4 border border-dark-accent/20 hover:border-dark-accent/50 transition-colors">
              <div className="w-full h-[100px] sm:h-[120px] md:h-[140px] flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                <img
                  src="./people.svg"
                  alt={t('team.humanMembers.alt')}
                  className="w-auto h-full object-contain"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-sans text-dark-accent mb-1 text-center">{t('team.humanMembers.title')}</h3>
              <p className="text-xs sm:text-sm text-dark-text text-center">
                {t('team.humanMembers.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
