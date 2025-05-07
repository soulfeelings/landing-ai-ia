import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
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
    
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[600px] max-h-[90vh] bg-solarized-base3 p-0 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 pt-4 sm:pt-6 px-2 sm:px-4"
        >
          <span className="font-mono text-solarized-blue text-xs sm:text-sm md:text-base">{t('contact.title')}</span>
        </motion.div>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-solarized-base03 border border-solarized-cyan/20 rounded-lg shadow-lg overflow-hidden mx-2 sm:mx-4 mb-4 sm:mb-6"
        >
          {/* Terminal Header */}
          <div className="bg-solarized-base02 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 flex items-center gap-1 sm:gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-solarized-red"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-solarized-yellow"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-solarized-green"></div>
            <span className="ml-1 sm:ml-2 font-mono text-[10px] sm:text-xs md:text-sm text-solarized-base1">new_message.sh</span>
          </div>

          {/* Terminal Body */}
          <div className="p-2 sm:p-4 md:p-6 font-mono">
            {/* Command Line Style Inputs */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <div className="flex items-center text-solarized-base1 text-xs sm:text-sm md:text-base">
                  <span className="text-solarized-green">$</span>
                  <span className="ml-1 sm:ml-2">{t('contact.form.name')}</span>
                  <Input 
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="flex-1 ml-1 sm:ml-2 bg-transparent border-b border-solarized-cyan/20 rounded-none text-solarized-base1 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-solarized-base01/50 text-xs sm:text-sm md:text-base"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-0.5 sm:gap-1">
                <div className="flex items-center text-solarized-base1 text-xs sm:text-sm md:text-base">
                  <span className="text-solarized-green">$</span>
                  <span className="ml-1 sm:ml-2">{t('contact.form.email')}</span>
                  <Input 
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="flex-1 ml-1 sm:ml-2 bg-transparent border-b border-solarized-cyan/20 rounded-none text-solarized-base1 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-solarized-base01/50 text-xs sm:text-sm md:text-base"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-0.5 sm:gap-1">
                <div className="flex items-center text-solarized-base1 text-xs sm:text-sm md:text-base">
                  <span className="text-solarized-green">$</span>
                  <span className="ml-1 sm:ml-2">{t('contact.form.subject')}</span>
                  <Input 
                    id="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="flex-1 ml-1 sm:ml-2 bg-transparent border-b border-solarized-cyan/20 rounded-none text-solarized-base1 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-solarized-base01/50 text-xs sm:text-sm md:text-base"
                    placeholder={t('contact.form.subjectPlaceholder')}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-0.5 sm:gap-1">
                <div className="flex items-start text-solarized-base1 text-xs sm:text-sm md:text-base">
                  <span className="text-solarized-green">$</span>
                  <span className="ml-1 sm:ml-2">{t('contact.form.message')}</span>
                </div>
                <Textarea 
                  id="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="mt-1 sm:mt-2 bg-solarized-base02/50 border-b border-solarized-cyan/20 rounded-none text-solarized-base1 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-solarized-base01/50 text-xs sm:text-sm md:text-base"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
                <div className="flex text-solarized-base1 text-xs sm:text-sm md:text-base">
                  <span className="text-solarized-green">$</span>
                  <span className="ml-1 sm:ml-2">"""</span>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-solarized-green hover:bg-solarized-green/90 text-solarized-base03 font-mono mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base"
                >
                  {t('contact.form.submit')}
                </Button>
              </motion.div>
            </div>

            <div className="mt-2 sm:mt-4 md:mt-6 text-center text-[10px] sm:text-xs md:text-sm text-solarized-base1 font-mono">
              <p>{t('contact.form.alternative')} <span className="text-solarized-blue">{t('contact.form.emailAddress')}</span></p>
            </div>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal; 