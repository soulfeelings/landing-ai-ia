import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';
import LegalModal from './LegalModal';

const Footer = () => {
  const { t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'cookies'>('privacy');

  const handleLegalClick = (type: 'privacy' | 'terms' | 'cookies') => {
    setLegalType(type);
    setIsLegalOpen(true);
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Main Content */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-serif italic text-primary mb-2">
                Sergei Prilepko
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-light">
                {t('hero.position')}
              </p>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <button
                onClick={() => setIsContactOpen(true)}
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300 font-light"
              >
                {t('footer.connect.contact')}
              </button>
              <span className="text-primary/30">•</span>
              <a
                href="https://t.me/TheLABL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300 font-light"
              >
                Telegram
              </a>
              <span className="text-primary/30">•</span>
              <a
                href="https://wa.me/your_number"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300 font-light"
              >
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground/60"
          >
            <p>© 2024 Sergei Prilepko</p>
            <span className="hidden sm:block text-primary/30">•</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleLegalClick('privacy')}
                className="hover:text-primary transition-colors duration-300"
              >
                {t('footer.legal.privacy')}
              </button>
              <span className="text-primary/30">•</span>
              <button
                onClick={() => handleLegalClick('terms')}
                className="hover:text-primary transition-colors duration-300"
              >
                {t('footer.legal.terms')}
              </button>
            </div>
          </motion.div>
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
    </footer>
  );
};

export default Footer;
