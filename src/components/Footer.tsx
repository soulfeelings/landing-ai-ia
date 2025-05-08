import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ContactModal from './ContactModal';
import LegalModal from './LegalModal';
import CareersModal from './CareersModal';

const Footer = () => {
  const { t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'cookies'>('privacy');

  const handleLegalClick = (type: 'privacy' | 'terms' | 'cookies') => {
    setLegalType(type);
    setIsLegalOpen(true);
  };

  return (
    <footer className="bg-solarized-base03 border-t border-solarized-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-solarized-blue font-mono text-sm sm:text-base">{t('footer.company.title')}</h3>
            <p className="text-solarized-base1 text-xs sm:text-sm">{t('footer.description')}</p>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-solarized-base1 hover:text-solarized-blue text-xs sm:text-sm transition-colors"
              >
                {t('footer.company.about')}
              </a>
              <button
                onClick={() => setIsCareersOpen(true)}
                className="block text-solarized-base1 hover:text-solarized-blue text-xs sm:text-sm transition-colors w-full text-left"
              >
                {t('footer.company.careers')}
              </button>
              <button
                onClick={() => handleLegalClick('privacy')}
                className="block text-solarized-base1 hover:text-solarized-blue text-xs sm:text-sm transition-colors"
              >
                {t('footer.legal.privacy')}
              </button>
              <button
                onClick={() => handleLegalClick('terms')}
                className="block text-solarized-base1 hover:text-solarized-blue text-xs sm:text-sm transition-colors"
              >
                {t('footer.legal.terms')}
              </button>
              <button
                onClick={() => handleLegalClick('cookies')}
                className="block text-solarized-base1 hover:text-solarized-blue text-xs sm:text-sm transition-colors"
              >
                {t('footer.legal.cookies')}
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-solarized-blue font-mono text-sm sm:text-base">{t('footer.connect.title')}</h3>
            <div className="space-y-2">
              <button
                onClick={() => setIsContactOpen(true)}
                className="block text-solarized-base1 hover:text-solarized-blue text-xs sm:text-sm transition-colors"
              >
                {t('footer.connect.contact')}
              </button>
              <a
                href="https://t.me/TheLABL"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-solarized-base1 hover:text-solarized-blue text-xs sm:text-sm transition-colors"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/your_number"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-solarized-base1 hover:text-solarized-blue text-xs sm:text-sm transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="space-y-4">
            <p className="text-solarized-base1 text-xs sm:text-sm">© 2024 ByteCraft. {t('footer.rights')}</p>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Legal Modal */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        type={legalType}
      />

      {/* Careers Modal */}
      <CareersModal
        isOpen={isCareersOpen}
        onClose={() => setIsCareersOpen(false)}
      />
    </footer>
  );
};

export default Footer;
