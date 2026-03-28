"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import Image from "next/image";
import { statistics as statisticsTR, contactInfo } from "@/data/mockData";
import { statisticsEn } from "@/lib/i18n/content-en";
import { useLanguage } from "@/contexts/LanguageContext";
import { HOME_SCROLL_HASH_KEY } from "@/lib/homeSections";
import TherapyProcessSection from "@/components/sections/TherapyProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";

export default function LandingPage() {
  const { locale, t } = useLanguage();
  const statistics = locale === "en" ? statisticsEn : statisticsTR;

  useEffect(() => {
    const scrollToHash = () => {
      const stored = sessionStorage.getItem(HOME_SCROLL_HASH_KEY);
      if (stored) {
        sessionStorage.removeItem(HOME_SCROLL_HASH_KEY);
        const el = document.querySelector(stored);
        if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 120);
        window.history.replaceState(null, "", stored);
        return;
      }
      const h = window.location.hash;
      if (!h) return;
      const el = document.querySelector(h);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 120);
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <Navbar />
      <FloatingControls />

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-blue/95 via-secondary-blue/85 to-transparent" />
        </div>

        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-orange/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 rounded-full bg-primary-orange/20 text-primary-orange font-semibold text-sm backdrop-blur-sm border border-primary-orange/30">
                {t.hero.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight"
            >
              {t.hero.title.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-primary-orange hover:bg-primary-orange-hover text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-primary-orange/50 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {t.hero.primaryCta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-blue font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {t.hero.secondaryCta}
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-20 bg-white dark:bg-secondary-blue/30 border-y border-gray-100 dark:border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary-orange mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-blue dark:text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TherapyProcessSection />
      <ServicesSection />
      <AboutSection />
      <CertificationsSection />
      <GallerySection locale={locale} />
      <ContactSection />

      <Footer />
    </div>
  );
}
