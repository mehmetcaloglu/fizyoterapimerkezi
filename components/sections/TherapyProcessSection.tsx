"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Hand,
  Dumbbell,
  Zap,
  Activity,
  Brain,
  Heart,
  Award,
  ClipboardList,
  HandMetal,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { contactInfo, therapySteps as therapyStepsTR } from "@/data/mockData";
import { therapyStepsEn } from "@/lib/i18n/content-en";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap: Record<string, any> = {
  Hand,
  Dumbbell,
  Zap,
  Activity,
  Brain,
  Heart,
  Award,
  ClipboardList,
  HandMetal,
};

export default function TherapyProcessSection({ sectionId = "terapi-sureci" }: { sectionId?: string }) {
  const { locale, t } = useLanguage();
  const therapySteps = locale === "en" ? therapyStepsEn : therapyStepsTR;

  return (
    <section id={sectionId} className="relative py-24 bg-white dark:bg-secondary-blue overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-orange/10 text-primary-orange text-sm font-semibold mb-4 border border-primary-orange/20">
            {t.therapyProcess.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-blue dark:text-white mb-4">
            {t.therapyProcess.title}
          </h2>
          <p className="text-lg text-secondary-blue-muted dark:text-gray-300 max-w-2xl mx-auto">
            {t.therapyProcess.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {therapySteps.map((step, index) => {
            const IconComponent = iconMap[step.icon] || Activity;
            return (
              <React.Fragment key={step.step}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex-1"
                >
                  <div className="h-full bg-gray-50 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-primary-orange/40 dark:hover:border-primary-orange/40 hover:shadow-xl rounded-2xl p-6 md:p-8 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary-orange flex items-center justify-center shadow-md shadow-primary-orange/30 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span
                        className="text-5xl font-display font-black  leading-none select-none group-hover:text-primary-orange/50 transition-colors duration-300"
                        style={{ color: "rgb(215 92 0)" }}
                      >
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-secondary-blue dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-secondary-blue-muted dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary-orange flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-secondary-blue-muted dark:text-gray-400 leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {index < therapySteps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center px-3 flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-primary-orange/40" />
                  </div>
                )}

                {index < therapySteps.length - 1 && (
                  <div className="flex md:hidden justify-center py-2">
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-0.5 h-4 bg-primary-orange/30" />
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-primary-orange/50 bg-primary-orange/10" />
                      <div className="w-0.5 h-4 bg-primary-orange/30" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-secondary-blue-muted dark:text-gray-400 text-sm mb-5">{t.therapyProcess.ctaText}</p>
          <motion.a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary-orange hover:bg-primary-orange-hover text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            {t.therapyProcess.ctaButton}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
