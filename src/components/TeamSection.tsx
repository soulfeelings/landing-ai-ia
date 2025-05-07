import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const TeamSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="team" className="py-20 bg-solarized-base3 relative">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-mono text-solarized-base01 mb-12 text-center">{t('team.title')}</h2>
        <p className="text-xl font-mono text-solarized-blue mb-12 text-center">{t('team.subtitle')}</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* AI Team Member */}
          <div className="bg-solarized-base2/50 rounded-lg p-6 border border-solarized-base1/20 hover:border-solarized-blue/50 transition-colors">
            <div className="w-full h-[200px] flex items-center justify-center mb-6">
              <img 
                src="./aipic.svg" 
                alt={t('team.aiMember.alt')} 
                className="w-auto h-full object-contain"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
            <h3 className="text-xl font-mono text-solarized-blue mb-2 text-center">{t('team.aiMember.title')}</h3>
            <p className="text-solarized-base01 text-center">
              {t('team.aiMember.description')}
            </p>
          </div>

          {/* Human Team Members */}
          <div className="bg-solarized-base2/50 rounded-lg p-6 border border-solarized-base1/20 hover:border-solarized-blue/50 transition-colors">
            <div className="w-full h-[200px] flex items-center justify-center mb-6">
              <img 
                src="./people.svg" 
                alt={t('team.humanMembers.alt')} 
                className="w-auto h-full object-contain"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
            <h3 className="text-xl font-mono text-solarized-blue mb-2 text-center">{t('team.humanMembers.title')}</h3>
            <p className="text-solarized-base01 text-center">
              {t('team.humanMembers.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 