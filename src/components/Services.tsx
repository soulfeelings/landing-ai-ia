import React from "react";
import CanvasWave from "./CanvasWave";
import CanvasCodeWave from "./CanvasCodeWave";
import CanvasPhone from "./CanvasPhone";
import CanvasMatrix from "./CanvasMatrix";
import { CanvasElementProps } from "./CanvasElementProps.type";
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const CanvasMap: Record<string, React.ComponentType<CanvasElementProps>> = {
  wave: CanvasWave,
  codeWave: CanvasCodeWave,
  phone: CanvasPhone,
  matrix: CanvasMatrix,
};

type Service = {
  title: string;
  description: string;
  canvas: keyof typeof CanvasMap;
  price: string;
  time: string;
};

const ServiceCard = ({ title, description, canvas, price, time }: Service) => {
  const CanvasComponent = canvas ? CanvasMap[canvas] : null;

  return (
    <div className="retro-card group flex flex-col h-full">
      <div className="mb-2 flex gap-2 items-center">
        {CanvasComponent && <CanvasComponent width={160} height={200} />}
      </div>
      <h3 className="text-2xl font-sans font-semibold text-dark-text mb-3">
        {title}
      </h3>
      <p className="text-dark-text mb-4 flex-grow">{description}</p>
      
      {/* Pricing Section with Water Wave Animation */}
      <div className="mt-auto relative overflow-hidden rounded-md bg-dark-bg/50 border border-dark-text/30">
        <div className="relative p-4">
          <div className="flex justify-between items-center">
            <div className="relative font-sans text-dark-accent overflow-hidden h-8 min-w-[120px]">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-dark-accent/20 to-dark-accent/20"
                style={{
                  clipPath: "polygon(0% 100%, 20% 80%, 40% 100%, 60% 80%, 80% 100%, 100% 80%, 100% 100%, 0% 100%)"
                }}
                animate={{
                  clipPath: [
                    "polygon(0% 100%, 20% 80%, 40% 100%, 60% 80%, 80% 100%, 100% 80%, 100% 100%, 0% 100%)",
                    "polygon(0% 60%, 20% 40%, 40% 60%, 60% 40%, 80% 60%, 100% 40%, 100% 100%, 0% 100%)",
                    "polygon(0% 100%, 20% 80%, 40% 100%, 60% 80%, 80% 100%, 100% 80%, 100% 100%, 0% 100%)"
                  ]
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
              <span className="relative z-10">{price}</span>
            </div>
            <div className="font-sans text-dark-accent min-w-[100px] text-right">{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const { t } = useLanguage();
  
  const services: Service[] = [
    {
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      canvas: "codeWave",
      price: t('services.webDev.price'),
      time: t('services.webDev.time'),
    },
    {
      title: t('services.mobileDev.title'),
      description: t('services.mobileDev.description'),
      canvas: "phone",
      price: t('services.mobileDev.price'),
      time: t('services.mobileDev.time'),
    },
    {
      title: t('services.customSoftware.title'),
      description: t('services.customSoftware.description'),
      canvas: "matrix",
      price: t('services.customSoftware.price'),
      time: t('services.customSoftware.time'),
    },
    {
      title: t('services.apiIntegration.title'),
      description: t('services.apiIntegration.description'),
      canvas: "wave",
      price: t('services.apiIntegration.price'),
      time: t('services.apiIntegration.time'),
    },
  ];

  return (
    <section id="services" className="py-24 bg-dark-bg/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-dark-accent">{t('services.title')}</span>
          <h2 className="section-title">
            {t('services.subtitle')} <span className="text-dark-accent">{t('services.subtitleHighlight')}</span>
          </h2>
          <p className="section-subtitle">
            {t('services.tagline')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              canvas={service.canvas}
              price={service.price}
              time={service.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;