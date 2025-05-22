import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { API_URL } from "@/constants";
import ContactForm from './ContactForm';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (formData: any) => {
    try {
      const response = await fetch(API_URL + "/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        toast({
          title: t('contact.success.title'),
          description: t('contact.success.description'),
          duration: 5000,
        });
      } else {
        toast({
          title: 'Error',
          description: 'Error sending message. Please try again.',
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Error sending message. Please try again.',
        duration: 5000,
      });
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="font-mono text-solarized-blue text-sm sm:text-base">
            {t("contact.title")}
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            {t("contact.subtitle")}{" "}
            <span className="text-solarized-green">
              {t("contact.subtitleHighlight")}
            </span>
          </h2>
          <p className="section-subtitle font-mono text-solarized-base01 text-sm sm:text-base">
            {t("contact.tagline")}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
