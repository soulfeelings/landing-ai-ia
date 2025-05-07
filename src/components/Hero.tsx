import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import CircuitBackground from './CircuitBackground';
import ContactModal from './ContactModal';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.9]);

  const springConfig = { stiffness: 50, damping: 20 };
  const springY = useSpring(y, springConfig);
  const springOpacity = useSpring(opacity, springConfig);
  const springScale = useSpring(scale, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const moveX = (x - centerX) / 40;
    const moveY = (y - centerY) / 40;

    container.style.transform = `perspective(2000px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    
    const container = containerRef.current;
    if (!container) return;
    container.style.transform = 'perspective(2000px) rotateX(0) rotateY(0)';
  };

  return (
    <>
      <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 pb-8 px-4 sm:px-6 lg:px-8 transition-transform duration-300"
      >
        <motion.div 
          style={{ 
            y: isMobile ? 0 : springY, 
            opacity: isMobile ? 1 : springOpacity, 
            scale: isMobile ? 1 : springScale 
          }}
          className="absolute inset-0"
        >
          <CircuitBackground className={`opacity-50 ${isMobile ? 'opacity-30' : ''}`} />
        </motion.div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="reveal mb-2"
          >
            <div className="inline-block bg-solarized-base2 px-3 py-1 mb-4 border border-solarized-base1/30 rounded-full">
              <span className="text-solarized-blue font-mono text-xs sm:text-sm">{t('hero.tagline')}</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-solarized-base01"
          >
            <span className="text-glow text-solarized-blue">{t('hero.title')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="reveal text-base sm:text-lg md:text-xl lg:text-2xl text-solarized-base00 mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="reveal flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Button 
              size={isMobile ? "default" : "lg"} 
              className="bg-solarized-blue hover:bg-solarized-blue/90 text-white font-mono w-full sm:w-auto"
              onClick={() => setContactModalOpen(true)}
            >
              {t('hero.startProject')}
            </Button>
            <Button size={isMobile ? "default" : "lg"} variant="outline" className="border-solarized-base01/30 font-mono w-full sm:w-auto">
              {t('hero.exploreServices')}
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="scroll-indicator mt-8 sm:mt-12"
        >
          <span className="text-solarized-base01 font-mono text-xs sm:text-sm mb-2">{t('hero.scrollToExplore')}</span>
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-solarized-blue animate-bounce" />
        </motion.div>
      </section>
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
};

export default Hero;
