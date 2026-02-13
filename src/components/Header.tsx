import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ContactModal from './ContactModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-background/70 backdrop-blur-xl border-b border-primary/10 py-3 shadow-2xl shadow-primary/5'
            : 'bg-background/40 backdrop-blur-md border-b border-transparent py-5'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-8">
          {/* Logo & Name */}
          <Link
            to="/"
            className="group flex items-center gap-4 relative z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-amber/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-primary/30 group-hover:border-primary/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 shadow-lg shadow-primary/10">
                <img
                  src="/avatar.jpg"
                  alt="SP"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif italic text-primary text-2xl font-normal tracking-tight leading-none transition-all duration-300 group-hover:text-amber group-hover:translate-x-1">
                Sergei Prilepko
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mt-0.5 transition-all duration-300 group-hover:text-primary/60 group-hover:tracking-[0.25em]">
                Creative Director
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            <a
              href="#services"
              className="group relative px-4 py-2 font-sans text-sm font-light text-foreground/80 hover:text-foreground transition-all duration-300 overflow-hidden"
              onClick={e => {
                e.preventDefault();
                const services = document.getElementById('services');
                if (services) {
                  services.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="relative z-10 tracking-wide">{t('nav.services')}</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500" />
            </a>
            <a
              href="#projects"
              className="group relative px-4 py-2 font-sans text-sm font-light text-foreground/80 hover:text-foreground transition-all duration-300 overflow-hidden"
              onClick={e => {
                e.preventDefault();
                const projects = document.getElementById('projects');
                if (projects) {
                  projects.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="relative z-10 tracking-wide">{t('nav.projects')}</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500" />
            </a>

            {/* Premium Contact Button */}
            <button
              className="group relative ml-2 px-6 py-2.5 font-sans text-sm font-light text-primary border border-primary/40 rounded-full overflow-hidden transition-all duration-500 hover:border-primary/80 hover:shadow-lg hover:shadow-primary/20"
              onClick={() => setContactModalOpen(true)}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative flex items-center gap-2 tracking-wide">
                {t('nav.contact')}
                <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>

            {/* Language Selector */}
            <button
              className="group relative ml-1 w-10 h-10 rounded-full border border-foreground/10 hover:border-primary/40 transition-all duration-300 overflow-hidden hover:scale-110"
              onClick={toggleLanguage}
            >
              <span className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
              <span className="relative font-sans text-xs font-medium text-foreground/60 group-hover:text-primary transition-colors duration-300 tracking-wider">
                {language.toUpperCase()}
              </span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center hover:border-primary transition-all duration-300 hover:scale-110"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <div className="fixed top-20 right-6 z-50 bg-card/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-primary/10 flex flex-col md:hidden w-72 py-8 px-6 border border-primary/20 animate-fade-slide-up">
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all duration-200"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>

              <nav className="flex flex-col gap-1 mt-2">
                <a
                  onClick={() => handleNavClick('services')}
                  className="group px-4 py-3 font-sans text-base font-light text-foreground/80 hover:text-foreground hover:bg-primary/5 rounded-xl transition-all duration-200 cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary group-hover:w-2 transition-all duration-200" />
                    {t('nav.services')}
                  </span>
                </a>
                <a
                  onClick={() => handleNavClick('projects')}
                  className="group px-4 py-3 font-sans text-base font-light text-foreground/80 hover:text-foreground hover:bg-primary/5 rounded-xl transition-all duration-200 cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary group-hover:w-2 transition-all duration-200" />
                    {t('nav.projects')}
                  </span>
                </a>
              </nav>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent my-6" />

              <button
                onClick={() => {
                  setMobileOpen(false);
                  setContactModalOpen(true);
                }}
                className="group relative px-6 py-3 font-sans text-sm font-light text-primary border border-primary/40 rounded-full overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
              >
                <span className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                <span className="relative flex items-center justify-center gap-2 tracking-wide">
                  {t('nav.contact')}
                  <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>

              <button
                className="mt-3 px-6 py-3 font-sans text-xs font-medium text-foreground/60 hover:text-primary rounded-full border border-foreground/10 hover:border-primary/40 transition-all duration-300"
                onClick={toggleLanguage}
              >
                {language.toUpperCase()}
              </button>
            </div>
          </>
        )}
      </header>
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
};

export default Header;
