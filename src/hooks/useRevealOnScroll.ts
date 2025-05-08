import { useRef, useEffect } from 'react';

export const useRevealOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-slide-up');
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.2,
    });
    node.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}; 