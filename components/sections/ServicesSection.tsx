"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Hand,
  Dumbbell,
  Zap,
  Activity,
  Brain,
  Heart,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { services as servicesTR } from "@/data/mockData";
import { servicesEn } from "@/lib/i18n/content-en";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap: Record<string, any> = {
  Hand,
  Dumbbell,
  Zap,
  Activity,
  Brain,
  Heart,
};

function AnimatePresenceWrapper({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  return (
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
}

function MobileServicesAccordion({
  services,
  detailLink,
}: {
  services: { id: string; icon: string; title: string; description: string; features: string[] }[];
  detailLink: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="md:hidden space-y-2">
      {services.map((service, index) => {
        const IconComponent = iconMap[service.icon] || Activity;
        const isOpen = openId === service.id;
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen ? "border-primary-orange/40 shadow-md" : "border-gray-200 dark:border-white/10"
            } bg-white dark:bg-secondary-blue/30`}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : service.id)}
              className="w-full flex items-center gap-4 px-5 py-4 text-left"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  isOpen ? "bg-primary-orange" : "bg-primary-orange/10 dark:bg-primary-orange/20"
                }`}
              >
                <IconComponent className={`w-5 h-5 ${isOpen ? "text-white" : "text-primary-orange"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-bold text-secondary-blue dark:text-white text-base leading-tight">
                  {service.title}
                </p>
                {!isOpen && (
                  <p className="text-xs text-secondary-blue-muted dark:text-gray-400 mt-0.5 truncate">
                    {service.description}
                  </p>
                )}
              </div>
              <ChevronDown
                className={`w-5 h-5 text-primary-orange flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresenceWrapper isOpen={isOpen}>
              <div className="px-5 pb-5">
                <p className="text-secondary-blue-muted dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-orange flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-blue-muted dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/hizmetler/${service.id}`}
                  className="inline-flex items-center gap-2 text-primary-orange font-semibold text-sm"
                >
                  {detailLink}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatePresenceWrapper>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function ServicesSection({ sectionId = "services" }: { sectionId?: string }) {
  const { locale, t } = useLanguage();
  const services = locale === "en" ? servicesEn : servicesTR;

  return (
    <section id={sectionId} className="relative py-24 bg-white dark:bg-background-dark">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-blue dark:text-background-light mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-secondary-blue-muted dark:text-gray-300 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Activity;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-secondary-blue/30 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/5 hover:border-primary-orange/20"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-orange/10 dark:bg-primary-orange/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-primary-orange" />
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-blue dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-blue-muted dark:text-gray-300 mb-5 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-orange flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-blue-muted dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/hizmetler/${service.id}`}
                  className="text-primary-orange font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  {t.services.detailLink}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <MobileServicesAccordion services={services} detailLink={t.services.detailLink} />
      </div>
    </section>
  );
}
