import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import CircuitBackground from './CircuitBackground';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationId: number;
    let isDrawing = false;

    const updateCanvasSizes = () => {
      canvasRefs.current.forEach((canvas) => {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        // Use device pixel ratio for sharper rendering
        const dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;

        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.scale(dpr, dpr);
        }
      });
    };

    const drawVideoToCanvas = () => {
      const canvases = canvasRefs.current;

      // Configuration for each canvas: which part of the video to show
      const configs = [
        { sx: 0, sy: 0, sw: 0.667, sh: 0.5 },           // Top Left (2/3 width, 1/2 height)
        { sx: 0.667, sy: 0, sw: 0.333, sh: 1 },         // Top Right (1/3 width, full height)
        { sx: 0, sy: 0.5, sw: 0.333, sh: 0.5 },         // Bottom Left (1/3 width, 1/2 height)
        { sx: 0.333, sy: 0.5, sw: 0.333, sh: 0.5 }      // Bottom Center (1/3 width, 1/2 height)
      ];

      canvases.forEach((canvas, index) => {
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const config = configs[index];
        const rect = canvas.getBoundingClientRect();

        if (rect.width === 0 || rect.height === 0) return;

        // Source coordinates in the video
        const sx = video.videoWidth * config.sx;
        const sy = video.videoHeight * config.sy;
        const sw = video.videoWidth * config.sw;
        const sh = video.videoHeight * config.sh;

        // Clear canvas before drawing
        ctx.clearRect(0, 0, rect.width, rect.height);

        // Draw the specific portion of the video to fill the entire canvas
        ctx.drawImage(
          video,
          sx, sy, sw, sh,           // Source rectangle
          0, 0, rect.width, rect.height  // Destination rectangle
        );
      });

      if (isDrawing) {
        animationId = requestAnimationFrame(drawVideoToCanvas);
      }
    };

    const startDrawing = () => {
      if (isDrawing) return;
      isDrawing = true;
      drawVideoToCanvas();
    };

    const handleLoadedMetadata = () => {
      updateCanvasSizes();
    };

    const handleCanPlay = () => {
      updateCanvasSizes();
      startDrawing();
    };

    const handleResize = () => {
      updateCanvasSizes();
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('play', startDrawing);
    window.addEventListener('resize', handleResize);

    // Initialize with a slight delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      if (video.readyState >= 3) {
        handleCanPlay();
      } else if (video.readyState >= 1) {
        updateCanvasSizes();
      }
    }, 100);

    return () => {
      isDrawing = false;
      clearTimeout(initTimeout);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('play', startDrawing);
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
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

          {/* Bottom Section - Video Grid (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="reveal relative w-full mt-auto"
          >
            {/* Hidden video element - loaded once */}
            <video
              ref={videoRef}
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              crossOrigin="anonymous"
              style={{ display: 'none' }}
            />

            {/* Video grid - each block shows a part of the same video using canvas */}
            <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:gap-4 h-[240px] sm:h-[400px] md:h-[500px] lg:h-[550px]" style={{ position: 'relative' }}>
              {/* Top Left - shows top-left part (2/3 width, 1/2 height) */}
              <div className="col-span-2 row-span-1 rounded-lg overflow-hidden border border-dark-accent/30 bg-dark-bg/50 backdrop-blur-sm relative">
                <canvas
                  ref={(el) => (canvasRefs.current[0] = el)}
                  className="w-full h-full"
                  style={{ display: 'block' }}
                />
              </div>

              {/* Top Right - shows right part (1/3 width, full height) */}
              <div className="col-span-1 row-span-2 rounded-lg overflow-hidden border border-dark-accent/30 bg-dark-bg/50 backdrop-blur-sm relative">
                <canvas
                  ref={(el) => (canvasRefs.current[1] = el)}
                  className="w-full h-full"
                  style={{ display: 'block' }}
                />
              </div>

              {/* Bottom Left - shows bottom-left part (1/3 width, 1/2 height) */}
              <div className="col-span-1 row-span-1 rounded-lg overflow-hidden border border-dark-accent/30 bg-dark-bg/50 backdrop-blur-sm relative">
                <canvas
                  ref={(el) => (canvasRefs.current[2] = el)}
                  className="w-full h-full"
                  style={{ display: 'block' }}
                />
              </div>

              {/* Bottom Center - shows bottom-center part (1/3 width, 1/2 height) */}
              <div className="col-span-1 row-span-1 rounded-lg overflow-hidden border border-dark-accent/30 bg-dark-bg/50 backdrop-blur-sm relative">
                <canvas
                  ref={(el) => (canvasRefs.current[3] = el)}
                  className="w-full h-full"
                  style={{ display: 'block' }}
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
