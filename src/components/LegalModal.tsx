import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'cookies';
}

const LegalModal = ({ isOpen, onClose, type }: LegalModalProps) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(type);

  const tabs = [
    { id: 'privacy', label: t('legal.privacy') },
    { id: 'terms', label: t('legal.terms') },
    { id: 'cookies', label: t('legal.cookies') }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[800px] max-h-[90vh] bg-dark-bg p-0 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 pt-4 sm:pt-6 px-2 sm:px-4"
        >
          <span className="font-sans text-dark-accent text-xs sm:text-sm md:text-base">{t('legal.title')}</span>
        </motion.div>

        <div className="bg-dark-text3 border border-dark-accent/20 rounded-lg shadow-lg overflow-hidden mx-2 sm:mx-4 mb-4 sm:mb-6">
          {/* Terminal Header */}
          <div className="bg-dark-text2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 flex items-center gap-1 sm:gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-dark-accent"></div>
            <span className="ml-1 sm:ml-2 font-sans text-[10px] sm:text-xs md:text-sm text-dark-text">legal_docs.sh</span>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-dark-accent/20">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm md:text-base font-sans transition-colors ${
                  activeTab === tab.id
                    ? 'text-dark-accent border-b-2 border-dark-accent'
                    : 'text-dark-text hover:text-dark-accent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="prose prose-invert max-w-none">
              {activeTab === 'privacy' && (
                <div className="space-y-4 text-dark-text text-sm sm:text-base">
                  <h3 className="text-dark-accent text-lg sm:text-xl md:text-2xl font-sans mb-4">{t('legal.privacyTitle')}</h3>
                  <p>{t('legal.privacyContent.1')}</p>
                  <p>{t('legal.privacyContent.2')}</p>
                  <p>{t('legal.privacyContent.3')}</p>
                  <p>{t('legal.privacyContent.4')}</p>
                </div>
              )}

              {activeTab === 'terms' && (
                <div className="space-y-4 text-dark-text text-sm sm:text-base">
                  <h3 className="text-dark-accent text-lg sm:text-xl md:text-2xl font-sans mb-4">{t('legal.termsTitle')}</h3>
                  <p>{t('legal.termsContent.1')}</p>
                  <p>{t('legal.termsContent.2')}</p>
                  <p>{t('legal.termsContent.3')}</p>
                  <p>{t('legal.termsContent.4')}</p>
                </div>
              )}

              {activeTab === 'cookies' && (
                <div className="space-y-4 text-dark-text text-sm sm:text-base">
                  <h3 className="text-dark-accent text-lg sm:text-xl md:text-2xl font-sans mb-4">{t('legal.cookiesTitle')}</h3>
                  <p>{t('legal.cookiesContent.1')}</p>
                  <p>{t('legal.cookiesContent.2')}</p>
                  <p>{t('legal.cookiesContent.3')}</p>
                  <p>{t('legal.cookiesContent.4')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LegalModal; 