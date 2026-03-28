"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { contactInfo } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection({ sectionId = "contact" }: { sectionId?: string }) {
  const { t } = useLanguage();

  return (
    <section id={sectionId} className="relative py-24 bg-gradient-to-br from-primary-orange to-primary-orange-hover overflow-hidden">
      <div className="absolute inset-0 bg-black/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-lg text-white/95 mb-10 leading-relaxed">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-orange hover:bg-gray-50 font-bold px-10 py-4 rounded-full shadow-lg transition-all duration-300 text-lg flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {t.cta.whatsapp}
            </motion.a>
            <motion.a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-orange font-bold px-10 py-4 rounded-full transition-all duration-300 text-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {contactInfo.phone}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
