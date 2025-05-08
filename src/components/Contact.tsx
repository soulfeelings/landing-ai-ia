import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: t('contact.success.title'),
      description: t('contact.success.description'),
      duration: 5000,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="font-mono text-solarized-blue text-sm sm:text-base">{t('contact.title')}</span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">{t('contact.subtitle')} <span className="text-solarized-green">{t('contact.subtitleHighlight')}</span></h2>
          <p className="section-subtitle font-mono text-solarized-base01 text-sm sm:text-base">{t('contact.tagline')}</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-solarized-base03 border border-solarized-cyan/20 rounded-lg shadow-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-solarized-base02 px-3 sm:px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-solarized-red"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-solarized-yellow"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-solarized-green"></div>
              <span className="ml-2 font-mono text-xs sm:text-sm text-solarized-base1">new_message.sh</span>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 font-mono">
              {/* Command Line Style Inputs */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center text-solarized-base1 text-sm sm:text-base">
                    <span className="text-solarized-green">$</span>
                    <span className="ml-2">{t('contact.form.name')}</span>
                    <Input 
                      id="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="flex-1 ml-2 bg-transparent border-b border-solarized-cyan/20 rounded-none text-solarized-base1 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-solarized-base01/50 text-sm sm:text-base"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center text-solarized-base1 text-sm sm:text-base">
                    <span className="text-solarized-green">$</span>
                    <span className="ml-2">{t('contact.form.email')}</span>
                    <Input 
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="flex-1 ml-2 bg-transparent border-b border-solarized-cyan/20 rounded-none text-solarized-base1 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-solarized-base01/50 text-sm sm:text-base"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center text-solarized-base1 text-sm sm:text-base">
                    <span className="text-solarized-green">$</span>
                    <span className="ml-2">{t('contact.form.subject')}</span>
                    <Input 
                      id="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="flex-1 ml-2 bg-transparent border-b border-solarized-cyan/20 rounded-none text-solarized-base1 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-solarized-base01/50 text-sm sm:text-base"
                      placeholder={t('contact.form.subjectPlaceholder')}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-start text-solarized-base1 text-sm sm:text-base">
                    <span className="text-solarized-green">$</span>
                    <span className="ml-2">{t('contact.form.message')}</span>
                  </div>
                  <Textarea 
                    id="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="mt-2 bg-solarized-base02/50 border-b border-solarized-cyan/20 rounded-none text-solarized-base1 min-h-[120px] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-solarized-base01/50 text-sm sm:text-base"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                  <div className="flex text-solarized-base1 text-sm sm:text-base">
                    <span className="text-solarized-green">$</span>
                    <span className="ml-2">"""</span>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-solarized-green hover:bg-solarized-green/90 text-solarized-base03 font-mono mt-4 text-sm sm:text-base"
                >
                  {t('contact.form.submit')}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
