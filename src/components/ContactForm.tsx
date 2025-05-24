import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFormProps {
  onSubmit: (formData: any) => Promise<void>;
  className?: string;
}

const ContactForm = ({ onSubmit, className = '' }: ContactFormProps) => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    contactMethod: 'telegram',
    telegram: '',
    whatsapp: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Определяем обязательные поля в зависимости от способа связи
  const isTelegram = formData.contactMethod === 'telegram';
  const isWhatsapp = formData.contactMethod === 'whatsapp';
  const requiredFilled =
    formData.name.trim() !== '' &&
    formData.message.trim() !== '' &&
    ((isTelegram && formData.telegram.trim() !== '') ||
     (isWhatsapp && formData.whatsapp.trim() !== ''));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!requiredFilled) return;
    setStatus('loading');

    try {
      await onSubmit(formData);
      setStatus('success');
      setFormData({
        name: '',
        message: '',
        contactMethod: 'telegram',
        telegram: '',
        whatsapp: ''
      });
      toast({
        title: t('contact.success.title'),
        description: t('contact.success.description'),
        duration: 5000,
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactMethodChange = (value: string) => {
    setFormData(prev => ({ ...prev, contactMethod: value }));
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-solarized-base03 border border-solarized-cyan/20 rounded-lg shadow-lg overflow-hidden ${className}`}>
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
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 ml-2 bg-transparent border-b border-solarized-cyan/20 rounded-none text-solarized-base1 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-solarized-base01/50 text-sm sm:text-base"
                placeholder={t('contact.form.namePlaceholder')}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center text-solarized-base1 text-sm sm:text-base">
              <span className="text-solarized-green">$</span>
              <span className="ml-2">contact_method</span>
              <Select value={formData.contactMethod} onValueChange={handleContactMethodChange}>
                <SelectTrigger className="flex-1 ml-2 bg-transparent border-b border-solarized-cyan/20 rounded-none text-solarized-base1 focus:ring-0 focus:ring-offset-0 text-sm sm:text-base">
                  <SelectValue placeholder="Select contact method" className="text-solarized-base1" />
                </SelectTrigger>
                <SelectContent className="bg-solarized-base02 border border-solarized-cyan/20">
                  <SelectItem value="telegram" className="text-solarized-base1 hover:bg-solarized-base03 focus:bg-solarized-base03">telegram</SelectItem>
                  <SelectItem value="whatsapp" className="text-solarized-base1 hover:bg-solarized-base03 focus:bg-solarized-base03">whatsapp</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {formData.contactMethod === 'telegram' && (
            <div className="flex flex-col gap-1">
              <div className="flex items-center text-solarized-base1 text-sm sm:text-base">
                <span className="text-solarized-green">$</span>
                <span className="ml-2">user.telegram</span>
                <Input 
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  className="flex-1 ml-2 bg-transparent border-b border-solarized-cyan/20 rounded-none text-solarized-base1 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-solarized-base01/50 text-sm sm:text-base"
                  placeholder="@username"
                />
              </div>
            </div>
          )}

          {formData.contactMethod === 'whatsapp' && (
            <div className="flex flex-col gap-1">
              <div className="flex items-center text-solarized-base1 text-sm sm:text-base">
                <span className="text-solarized-green">$</span>
                <span className="ml-2">user.whatsapp</span>
                <Input 
                  name="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="flex-1 ml-2 bg-transparent border-b border-solarized-cyan/20 rounded-none text-solarized-base1 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-solarized-base01/50 text-sm sm:text-base"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1">
            <div className="flex items-start text-solarized-base1 text-sm sm:text-base">
              <span className="text-solarized-green">$</span>
              <span className="ml-2">{t('contact.form.message')}</span>
            </div>
            <Textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 bg-solarized-base02/50 border-b border-solarized-cyan/20 rounded-none text-solarized-base1 min-h-[120px] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-solarized-base01/50 text-sm sm:text-base"
              placeholder={t('contact.form.messagePlaceholder')}
            />
          </div>

          {status === 'success' && (
            <div className="text-solarized-green font-mono text-sm">
              {t('contact.success.title')}
            </div>
          )}

          {status === 'error' && (
            <div className="text-solarized-red font-mono text-sm">
              Error sending message. Please try again.
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-solarized-green hover:bg-solarized-green/90 text-solarized-base03 font-mono mt-4 text-sm sm:text-base"
            disabled={status === 'loading' || !requiredFilled}
          >
            {status === 'loading' ? 'Sending...' : t('contact.form.submit')}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm; 