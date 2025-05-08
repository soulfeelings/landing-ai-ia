import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

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

        {/* Team Section */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-solarized-base01 mb-6 sm:mb-8 md:mb-12 text-center">{t('team.title')}</h2>
          <p className="text-lg sm:text-xl md:text-2xl font-mono text-solarized-blue mb-8 sm:mb-10 md:mb-12 text-center">{t('team.subtitle')}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto">
            {/* AI Team Member */}
            <div className="bg-solarized-base2/50 rounded-lg p-2 sm:p-3 md:p-4 border border-solarized-base1/20 hover:border-solarized-blue/50 transition-colors">
              <div className="w-full h-[100px] sm:h-[120px] md:h-[140px] flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                <img 
                  src="./aipic.svg" 
                  alt={t('team.aiMember.alt')} 
                  className="w-auto h-full object-contain"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-mono text-solarized-blue mb-1 text-center">{t('team.aiMember.title')}</h3>
              <p className="text-xs sm:text-sm text-solarized-base01 text-center">
                {t('team.aiMember.description')}
              </p>
            </div>

            {/* Human Team Members */}
            <div className="bg-solarized-base2/50 rounded-lg p-2 sm:p-3 md:p-4 border border-solarized-base1/20 hover:border-solarized-blue/50 transition-colors">
              <div className="w-full h-[100px] sm:h-[120px] md:h-[140px] flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                <img 
                  src="./people.svg" 
                  alt={t('team.humanMembers.alt')} 
                  className="w-auto h-full object-contain"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-mono text-solarized-blue mb-1 text-center">{t('team.humanMembers.title')}</h3>
              <p className="text-xs sm:text-sm text-solarized-base01 text-center">
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
