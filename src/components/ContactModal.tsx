import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "./ContactForm";
import { API_URL } from "@/constants";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (formData: any) => {
    try {
      const response = await fetch(`${API_URL}/api/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        toast({
          title: t("contact.success.title"),
          description: t("contact.success.description"),
          duration: 5000,
        });
        onClose();
      } else {
        toast({
          title: "Error",
          description: "Error sending message. Please try again.",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Error sending message. Please try again.",
        duration: 5000,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[600px] max-h-[90vh] bg-dark-bg p-0 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 pt-4 sm:pt-6 px-2 sm:px-4"
        >
          <span className="font-sans text-dark-accent text-xs sm:text-sm md:text-base">
            {t("contact.title")}
          </span>
        </motion.div>
        <ContactForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
