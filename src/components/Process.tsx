import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProcessStep = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-start">
      <div className="flex-shrink-0">
        <div className="bg-dark-bg border border-dark-accent/30 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-sans text-xl sm:text-2xl text-dark-accent shadow-lg">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-sans font-semibold text-dark-text mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-dark-text">{description}</p>
      </div>
    </div>
  );
};

const Process = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      title: t('process.steps.research.title'),
      description: t('process.steps.research.description')
    },
    {
      title: t('process.steps.design.title'),
      description: t('process.steps.design.description')
    },
    {
      title: t('process.steps.development.title'),
      description: t('process.steps.development.description')
    }
  ];

  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/5">
            <span className="font-sans text-dark-accent">{t('process.title')}</span>
            <h2 className="section-title">{t('process.subtitle')} <span className="text-dark-accent">{t('process.subtitleHighlight')}</span></h2>
            <p className="section-subtitle">{t('process.tagline')}</p>
          </div>
          
          <div className="md:w-3/5">
            <div className="space-y-12 relative">
              {steps.map((step, index) => (
                <ProcessStep 
                  key={index}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
