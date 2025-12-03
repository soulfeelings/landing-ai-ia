import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import CircuitBackground from './CircuitBackground';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
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
        className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-8 px-4 sm:px-6 lg:px-8 transition-transform duration-300"
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

        <div className="container mx-auto z-10 flex flex-col h-full justify-between py-4 sm:py-8 pb-24 sm:pb-16">
          {/* Top Section - Text Content */}
          <div className="text-left mb-auto">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="reveal text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-6 text-dark-text leading-tight"
            >
              {t('hero.title.main')}{' '}
              <span className="text-glow text-dark-accent block mt-1 sm:mt-2">
                {t('hero.title.highlight').split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < t('hero.title.highlight').split('\n').length - 1 && <br />}
                  </span>
                ))}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="reveal mb-4 sm:mb-8"
            >
              <div className="flex flex-col gap-2 text-lg sm:text-2xl md:text-3xl text-dark-text/80 font-light">
                <div>Web</div>
                <div>Android</div>
                <div>iOS</div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Images Grid (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="reveal relative w-full mt-auto"
          >
            <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:gap-4 h-[240px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
              {/* Top Left - Wide horizontal image (2:1) */}
              <div className="col-span-2 row-span-1 rounded-lg overflow-hidden border border-dark-accent/30 bg-dark-bg/50 backdrop-blur-sm">
                <img
                  src="/1.gif"
                  alt="Mobile app interface"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Top Right - Tall vertical image (1:2) */}
              <div className="col-span-1 row-span-2 rounded-lg overflow-hidden border border-dark-accent/30 bg-dark-bg/50 backdrop-blur-sm">
                <img
                  src="/2.gif"
                  alt="Mobile app screens"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Bottom Left - Square with laptop (1:1) */}
              <div className="col-span-1 row-span-1 rounded-lg overflow-hidden border border-dark-accent/30 bg-dark-bg/50 backdrop-blur-sm">
                <img
                  src="/3.gif"
                  alt="Mobile app statistics"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Bottom Center - Image block (1:1) */}
              <div className="col-span-1 row-span-1 rounded-lg overflow-hidden border border-dark-accent/30 bg-dark-bg/50 backdrop-blur-sm">
                <img
                  src="/4.gif"
                  alt="Development environment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="scroll-indicator"
        >
          <span className="text-dark-text font-sans text-xs sm:text-sm mb-2">{t('hero.scrollToExplore')}</span>
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-dark-accent animate-bounce" />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
