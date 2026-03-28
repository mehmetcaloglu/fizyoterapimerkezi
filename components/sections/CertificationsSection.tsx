"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { certifications as certificationsTR } from "@/data/mockData";
import { certificationsEn } from "@/lib/i18n/content-en";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CertificationsSection({ sectionId = "certifications" }: { sectionId?: string }) {
  const { locale, t } = useLanguage();
  const certifications = locale === "en" ? certificationsEn : certificationsTR;

  return (
    <section id={sectionId} className="relative py-24 bg-white dark:bg-secondary-blue overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-blue dark:text-white mb-4">
            {t.certifications.title}
          </h2>
          <p className="text-lg text-secondary-blue-muted dark:text-gray-300 max-w-2xl mx-auto">
            {t.certifications.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const isFeatured = index === 0;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 border ${
                  isFeatured
                    ? "bg-gradient-to-br from-primary-orange to-primary-orange-hover border-primary-orange/0 shadow-2xl shadow-primary-orange/30 md:-mt-4 md:mb-4"
                    : "bg-gradient-to-br from-primary-orange/5 to-primary-orange/10 dark:from-primary-orange/10 dark:to-primary-orange/20 border-primary-orange/20"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary-blue text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                    {t.certifications.featuredBadge}
                  </div>
                )}

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${
                    isFeatured ? "bg-white/20" : "bg-primary-orange shadow-primary-orange/30"
                  }`}
                >
                  <Award className={`w-8 h-8 ${isFeatured ? "text-white" : "text-white"}`} />
                </div>

                <h3
                  className={`text-2xl font-display font-bold mb-2 ${
                    isFeatured ? "text-white" : "text-secondary-blue dark:text-white"
                  }`}
                >
                  {cert.title}
                </h3>

                <p
                  className={`font-semibold text-sm mb-4 ${
                    isFeatured ? "text-white/80" : "text-primary-orange"
                  }`}
                >
                  {cert.organization}
                </p>

                <p
                  className={`leading-relaxed ${
                    isFeatured ? "text-white/90" : "text-secondary-blue-muted dark:text-gray-300"
                  }`}
                >
                  {cert.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary-blue/5 dark:bg-white/5 border border-secondary-blue/10 dark:border-white/10">
            <CheckCircle2 className="w-5 h-5 text-primary-orange" />
            <span className="text-secondary-blue dark:text-white font-medium">{t.certifications.badge}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
