import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, Sparkles } from 'lucide-react';
import OrganicBackground from './OrganicBackground';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroNew = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showPauseHint, setShowPauseHint] = useState(false);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-24 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <OrganicBackground />
      </motion.div>

      <div className="container mx-auto z-10 relative max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 sm:gap-16 lg:gap-24 items-center">
          {/* Left: Text + Your Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10 sm:space-y-12"
          >
            {/* Your Photo with Enhanced Design */}
            <div className="relative inline-block group">
              {/* Animated glow rings */}
              <motion.div
                className="absolute -inset-6 sm:-inset-8 -z-10"
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary/20 via-amber/15 to-primary/20 blur-2xl" />
              </motion.div>

              <motion.div
                className="absolute -inset-3 sm:-inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-transparent to-sage/30 blur-xl"
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, -45, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-primary/20 shadow-2xl shadow-primary/20 group-hover:scale-[1.02] transition-transform duration-700">
                <img
                  src="/avatar.jpg"
                  alt="Sergei Prilepko"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/30 to-transparent blur-2xl" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              {/* Experience Badge - Premium Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="group relative inline-flex flex-col gap-2.5 px-6 py-4 rounded-[1.5rem] bg-gradient-to-br from-card/60 via-card/40 to-card/30 backdrop-blur-xl border border-primary/20 shadow-xl shadow-primary/5 overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <div className="relative flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                    <span className="text-base sm:text-lg font-semibold text-primary tracking-tight">
                      7+ {t('hero.experience')}
                    </span>
                  </div>

                  <div className="relative flex items-center gap-2 text-xs sm:text-sm font-medium">
                    <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary/80 border border-primary/10 hover:bg-primary/20 transition-colors duration-300">
                      ex-VK
                    </span>
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                    <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary/80 border border-primary/10 hover:bg-primary/20 transition-colors duration-300">
                      ex-Sber
                    </span>
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                    <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary/80 border border-primary/10 hover:bg-primary/20 transition-colors duration-300">
                      ex-Indrive
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Name - Enhanced Typography */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif italic leading-[1.05] tracking-tight"
              >
                <span className="relative inline-block">
                  <span className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-amber/20 to-primary/20 blur-3xl" />
                  <span className="relative bg-gradient-to-br from-primary via-amber to-primary bg-clip-text text-transparent animate-gradient">
                    {t('hero.name')}
                  </span>
                </span>
              </motion.h1>

              {/* Position - Refined Typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-2"
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/90 font-light leading-relaxed tracking-tight">
                  {t('hero.position')}
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/90 font-light leading-relaxed tracking-tight">
                  {t('hero.positionLine2')}
                </p>
              </motion.div>

              {/* CTA Buttons - Premium Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                {/* Primary CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const contact = document.getElementById('contact');
                    if (contact) {
                      const headerHeight = 80;
                      const elementPosition = contact.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - headerHeight;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary via-amber to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-primary-foreground font-medium overflow-hidden shadow-2xl shadow-primary/30 hover:shadow-3xl hover:shadow-primary/40 transition-all duration-500 text-center text-sm sm:text-base tracking-wide"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {t('hero.startProject')}
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>

                {/* Secondary CTA */}
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    const projects = document.getElementById('projects');
                    if (projects) {
                      const headerHeight = 80;
                      const elementPosition = projects.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - headerHeight;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="group relative px-8 py-4 rounded-full border border-primary/30 text-foreground font-medium hover:bg-card/60 hover:border-primary/60 transition-all duration-500 text-center text-sm sm:text-base backdrop-blur-sm overflow-hidden tracking-wide"
                >
                  <span className="relative z-10">{t('hero.viewWork')}</span>

                  {/* Background fill effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-amber/5 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-full" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Video Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-12 lg:mt-0"
          >
            {/* Decorative gradient blobs */}
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl opacity-60 animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-gradient-to-tr from-sage/20 to-transparent rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />

            <div
              className="relative aspect-[3/4] sm:aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[3.5rem] overflow-hidden bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-primary/20 shadow-2xl shadow-primary/10"
              onMouseEnter={() => setShowPauseHint(true)}
              onMouseLeave={() => setShowPauseHint(false)}
            >
              {/* Video */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                loop
                muted
                playsInline
                poster="/api/placeholder/800/1000"
                onClick={handleVideoToggle}
              >
                <source src="/video.mp4" type="video/mp4" />
              </video>

              {/* Play overlay - Premium Design */}
              {!isVideoPlaying && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/30 via-black/20 to-black/30 backdrop-blur-[3px] cursor-pointer group"
                  onClick={handleVideoToggle}
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Outer glow ring */}
                    <div className="absolute -inset-8 rounded-full bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-all duration-500" />

                    {/* Animated ring */}
                    <motion.div
                      className="absolute -inset-4 rounded-full border-2 border-primary/40"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                    />

                    {/* Play button */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary to-amber flex items-center justify-center shadow-2xl shadow-primary/50 group-hover:shadow-3xl group-hover:shadow-primary/60 transition-all duration-500">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground ml-1.5" fill="currentColor" />
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Pause overlay - Desktop only (shows on hover) */}
              {isVideoPlaying && showPauseHint && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="hidden sm:flex absolute inset-0 items-center justify-center bg-black/20 backdrop-blur-[2px] cursor-pointer"
                  onClick={handleVideoToggle}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/90 to-amber/90 backdrop-blur-xl flex items-center justify-center shadow-2xl shadow-primary/50"
                  >
                    <Pause className="w-8 h-8 text-primary-foreground" fill="currentColor" />
                  </motion.div>
                </motion.div>
              )}

              {/* Gradient overlay on video container */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating badge - Enhanced (Outside video container) */}
            {!isVideoPlaying && (
              <motion.div
                data-testid="floating-badge"
                className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: [0, -12, 0],
                }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.8 },
                  x: { duration: 0 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
                }}
              >
                <div className="relative px-6 py-4 rounded-[1.5rem] bg-card/90 backdrop-blur-2xl border border-primary/20 shadow-2xl shadow-primary/10 overflow-hidden group">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <div className="relative">
                    <p className="text-xs sm:text-sm text-muted-foreground/80 mb-1 tracking-wide">
                      {t('hero.watchHow')}
                    </p>
                    <p className="text-sm sm:text-lg font-semibold text-foreground flex items-center gap-2">
                      <Play className="w-3 h-3 sm:w-4 sm:h-4 text-primary" fill="currentColor" />
                      2-3 {t('hero.minOverview')}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Mobile pause button - Outside video container */}
            {isVideoPlaying && (
              <motion.div
                initial={{ opacity: 0, y: 20, x: '-50%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="sm:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 z-10"
              >
                <motion.button
                  onClick={handleVideoToggle}
                  whileTap={{ scale: 0.9 }}
                  className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-amber backdrop-blur-xl flex items-center justify-center shadow-2xl shadow-primary/50 border border-primary/20"
                >
                  <Pause className="w-6 h-6 text-primary-foreground" fill="currentColor" />
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
