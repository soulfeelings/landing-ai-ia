import React, { useState } from 'react';
import ContactModal from './ContactModal';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { t } = useLanguage();

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const about = document.getElementById('about');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-solarized-base01 text-solarized-base2 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div className="md:w-1/3">
              <div className="flex items-center mb-4">
                <span className="font-mono text-solarized-blue text-2xl font-semibold">BYTE</span>
                <span className="font-mono text-solarized-cyan ml-1 text-2xl">CRAFT</span>
              </div>
              <p className="max-w-xs text-solarized-base1">
                {t('footer.description')}
              </p>
            </div>
            
            <div className="md:w-1/3">
              <h3 className="font-mono text-lg font-semibold mb-4 text-solarized-base2">{t('footer.company.title')}</h3>
              <ul className="space-y-2">
                <li><a href="#about" onClick={handleAboutClick} className="text-solarized-base1 hover:text-solarized-blue">{t('footer.company.about')}</a></li>
                <li><a href="#" className="text-solarized-base1 hover:text-solarized-blue">{t('footer.company.team')}</a></li>
                <li><a href="#/careers" className="text-solarized-base1 hover:text-solarized-blue">{t('footer.company.careers')}</a></li>
                <li><a href="#" className="text-solarized-base1 hover:text-solarized-blue">{t('footer.company.blog')}</a></li>
              </ul>
            </div>
            
            <div className="md:w-1/3">
              <h3 className="font-mono text-lg font-semibold mb-4 text-solarized-base2">{t('footer.connect.title')}</h3>
              <ul className="space-y-2">
                <li><a href="#" onClick={() => setContactModalOpen(true)} className="text-solarized-base1 hover:text-solarized-blue">{t('footer.connect.contact')}</a></li>
                <li><a href="https://t.me/TheLABL" target="_blank" rel="noopener noreferrer" className="text-solarized-base1 hover:text-solarized-blue">Telegram</a></li>
                <li><a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer" className="text-solarized-base1 hover:text-solarized-blue">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-solarized-base00/30 flex flex-col md:flex-row justify-between items-center">
            <p className="text-solarized-base1 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ByteCraft. {t('footer.rights')}
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-solarized-base1 hover:text-solarized-blue">{t('footer.legal.terms')}</a>
              <a href="#" className="text-solarized-base1 hover:text-solarized-blue">{t('footer.legal.privacy')}</a>
              <a href="#" className="text-solarized-base1 hover:text-solarized-blue">{t('footer.legal.cookies')}</a>
            </div>
          </div>
        </div>
      </footer>
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
};

export default Footer;
