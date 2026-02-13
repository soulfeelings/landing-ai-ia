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
};

const ServiceCard = ({ title, description, canvas }: Service) => {
  const CanvasComponent = canvas ? CanvasMap[canvas] : null;

  return (
    <div className="organic-card group flex flex-col h-full hover:shadow-2xl">
      <div className="mb-4 flex gap-2 items-center">
        {CanvasComponent && <CanvasComponent width={160} height={200} />}
      </div>
      <h3 className="text-xl sm:text-2xl font-sans font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground flex-grow leading-relaxed">{description}</p>
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
    },
    {
      title: t('services.mobileDev.title'),
      description: t('services.mobileDev.description'),
      canvas: "phone",
    },
    {
      title: t('services.customSoftware.title'),
      description: t('services.customSoftware.description'),
      canvas: "matrix",
    },
    {
      title: t('services.apiIntegration.title'),
      description: t('services.apiIntegration.description'),
      canvas: "wave",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4">
              {t('services.title')}
            </span>
            <h2 className="section-title">
              {t('services.subtitle')} <span className="text-primary">{t('services.subtitleHighlight')}</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              canvas={service.canvas}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;