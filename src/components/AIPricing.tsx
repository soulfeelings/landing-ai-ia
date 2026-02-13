import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AIPricing = () => {
  const [request, setRequest] = useState('');
  const [estimate, setEstimate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!request.trim()) return;

    setIsLoading(true);
    setEstimate('');

    try {
      // TODO: Replace with actual OpenAI API call
      // const response = await fetch('/api/estimate', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ request }),
      // });
      // const data = await response.json();
      // setEstimate(data.estimate);

      // Simulated response for now
      await new Promise(resolve => setTimeout(resolve, 2000));
      setEstimate(
        `Based on your requirements for "${request.slice(0, 50)}...", we estimate:\n\n` +
        `💰 Price Range: $5,000 - $15,000\n` +
        `⏱️ Timeline: 4-8 weeks\n` +
        `👥 Team: 2-3 developers\n\n` +
        `This is a preliminary estimate. Let's discuss your project in detail to provide accurate pricing.`
      );
    } catch (error) {
      setEstimate('Sorry, there was an error processing your request. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('pricing.badge')}</span>
          </div>
          <h2 className="section-title">
            {t('pricing.title')}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="organic-card relative">
            {/* Decorative blob */}
            <div
              className="absolute -inset-20 blob opacity-5 -z-10 blur-3xl animate-liquid"
              style={{
                background: 'radial-gradient(circle, hsl(15, 55%, 52%) 0%, transparent 70%)',
              }}
            />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <textarea
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                  placeholder={t('pricing.placeholder')}
                  className="w-full min-h-[200px] px-6 py-4 bg-background/50 border border-border/40 rounded-[1.5rem] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none"
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !request.trim()}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mx-auto"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t('pricing.analyzing')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('pricing.getEstimate')}
                  </>
                )}
              </button>
            </form>

            {/* Results */}
            <AnimatePresence>
              {estimate && (
                <motion.div
                  initial={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -20, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 pt-8 border-t border-border/30"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-1">{t('pricing.yourEstimate')}</h3>
                      <p className="text-sm text-muted-foreground">{t('pricing.generatedBy')}</p>
                    </div>
                  </div>

                  <div className="bg-background/50 rounded-[1.5rem] p-6 border border-border/20">
                    <p className="text-foreground whitespace-pre-line leading-relaxed">
                      {estimate}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="#contact"
                      className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform duration-300 text-center"
                    >
                      {t('pricing.discuss')}
                    </a>
                    <button
                      onClick={() => {
                        setRequest('');
                        setEstimate('');
                      }}
                      className="px-6 py-3 rounded-full border border-border/40 text-foreground font-medium hover:bg-card/60 transition-all duration-300"
                    >
                      {t('pricing.newEstimate')}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm text-muted-foreground mt-6"
          >
            {t('pricing.disclaimer')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AIPricing;
