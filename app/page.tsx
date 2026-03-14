"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hand,
  Dumbbell,
  Zap,
  Activity,
  Brain,
  Heart,
  Award,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  ClipboardList,
  HandMetal,
  ChevronDown,
  X,
  ZoomIn,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import Image from "next/image";
import {
  services as servicesTR,
  certifications as certificationsTR,
  statistics as statisticsTR,
  siteConfig,
  contactInfo,
  teamMembers,
  careerSteps as careerStepsTR,
  aboutSection as aboutSectionTR,
  therapySteps as therapyStepsTR,
  visionMission,
  specialInterestAreas,
  galleryImages,
  gallerySectionData,
} from "@/data/mockData";
import {
  servicesEn,
  certificationsEn,
  statisticsEn,
  teamMemberEn,
  aboutSectionEn,
  careerStepsEn,
  therapyStepsEn,
  visionMissionEn,
  specialInterestAreasEn,
} from "@/lib/i18n/content-en";
import { useLanguage } from "@/contexts/LanguageContext";

// Icon mapping
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

function GallerySection({ locale }: { locale: string }) {
  const [activeCategory, setActiveCategory] = useState<string>("tumu");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const isEn = locale === "en";
  const title = isEn ? gallerySectionData.title_en : gallerySectionData.title;
  const subtitle = isEn ? gallerySectionData.subtitle_en : gallerySectionData.subtitle;

  const filtered = activeCategory === "tumu"
    ? galleryImages
    : galleryImages.filter((img) =>
        isEn ? img.category_en === activeCategory : img.category === activeCategory
      );

  const activeLightboxImg = galleryImages.find((img) => img.id === lightbox);

  return (
    <section id="galeri" className="relative py-24 bg-gray-50 dark:bg-secondary-blue/20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-blue dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-secondary-blue-muted dark:text-gray-300 max-w-xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Kategori filtre */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {gallerySectionData.categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-primary-orange text-white shadow-md shadow-primary-orange/30"
                  : "bg-white dark:bg-white/10 text-secondary-blue dark:text-white border border-gray-200 dark:border-white/10 hover:border-primary-orange/40"
              }`}
            >
              {isEn ? cat.label_en : cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
        >
          {filtered.map((img, index) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setLightbox(img.id)}
              className="relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5"
            >
              <Image
                src={img.src}
                alt={isEn ? img.alt_en : img.alt}
                width={400}
                height={300}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-secondary-blue/0 group-hover:bg-secondary-blue/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
              </div>
              {/* Alt etiket */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium truncate">
                  {isEn ? img.alt_en : img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && activeLightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={activeLightboxImg.src}
                alt={isEn ? activeLightboxImg.alt_en : activeLightboxImg.alt}
                width={1200}
                height={800}
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-white font-medium">
                  {isEn ? activeLightboxImg.alt_en : activeLightboxImg.alt}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function MobileServicesAccordion({
  services,
  iconMap,
  detailLink,
}: {
  services: { id: string; icon: string; title: string; description: string; features: string[] }[];
  iconMap: Record<string, any>;
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
              isOpen
                ? "border-primary-orange/40 shadow-md"
                : "border-gray-200 dark:border-white/10"
            } bg-white dark:bg-secondary-blue/30`}
          >
            {/* Başlık satırı — her zaman görünür */}
            <button
              onClick={() => setOpenId(isOpen ? null : service.id)}
              className="w-full flex items-center gap-4 px-5 py-4 text-left"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                isOpen ? "bg-primary-orange" : "bg-primary-orange/10 dark:bg-primary-orange/20"
              }`}>
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

            {/* Genişletilen içerik */}
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

export default function LandingPage() {
  const { locale, t } = useLanguage();

  const services = locale === "en" ? servicesEn : servicesTR;
  const certifications = locale === "en" ? certificationsEn : certificationsTR;
  const statistics = locale === "en" ? statisticsEn : statisticsTR;
  const careerSteps = locale === "en" ? careerStepsEn : careerStepsTR;
  const aboutSection = locale === "en" ? aboutSectionEn : aboutSectionTR;
  const visionMissionData = locale === "en" ? visionMissionEn : visionMission;
  const specialInterests = locale === "en" ? specialInterestAreasEn : specialInterestAreas;
  const therapySteps = locale === "en" ? therapyStepsEn : therapyStepsTR;
  const teamMember = locale === "en"
    ? { ...teamMembers[0], ...teamMemberEn }
    : teamMembers[0];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <Navbar />
      <FloatingControls />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(/hero.png)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-blue/95 via-secondary-blue/85 to-transparent" />
        </div>

        {/* Animated Particles */}
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

        {/* Content */}
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

        {/* Scroll Indicator */}
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

      {/* Statistics Section */}
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
                <div className="text-secondary-blue dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy Process Section */}
      <section id="terapi-sureci" className="relative py-24 bg-white dark:bg-secondary-blue overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }} />
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

          {/* Adımlar */}
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

                      {/* Numara + ikon yan yana */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-primary-orange flex items-center justify-center shadow-md shadow-primary-orange/30 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-5xl font-display font-black text-primary-orange/25 dark:text-primary-orange/30 leading-none select-none group-hover:text-primary-orange/50 transition-colors duration-300">
                          {String(step.step).padStart(2, "0")}
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
                            <span className="text-sm text-secondary-blue-muted dark:text-gray-400 leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Masaüstü: yatay ok */}
                  {index < therapySteps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center px-3 flex-shrink-0">
                      <ArrowRight className="w-6 h-6 text-primary-orange/40" />
                    </div>
                  )}

                  {/* Mobil: dikey bağlantı */}
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

          {/* Alt CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-secondary-blue-muted dark:text-gray-400 text-sm mb-5">
              {t.therapyProcess.ctaText}
            </p>
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

      {/* Services Section */}
      <section id="services" className="relative py-24 bg-white dark:bg-background-dark">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }} />
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

          {/* Masaüstü: Grid */}
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

          {/* Mobil: Accordion */}
          <MobileServicesAccordion services={services} iconMap={iconMap} detailLink={t.services.detailLink} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 bg-gray-50 dark:bg-secondary-blue/20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Başlık */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-blue dark:text-white mb-4">
              {t.about.title}
            </h2>
            <p className="text-lg text-secondary-blue-muted dark:text-gray-300 max-w-2xl mx-auto">
              {t.about.subtitle}
            </p>
          </motion.div>

          {/* Ana İçerik: Fotoğraf + Biyografi */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Sol: Profil Kartı */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center lg:items-start"
            >
              {/* Fotoğraf */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-primary-orange rounded-3xl blur-2xl opacity-20 scale-110" />
                <div className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/10">
                  <Image
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Kurucu rozeti */}
                <div className="absolute -bottom-4 -right-4 bg-primary-orange text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  {t.about.founderBadge}
                </div>
              </div>

              {/* İsim & Unvan */}
              <h3 className="text-3xl font-display font-bold text-secondary-blue dark:text-white mb-2 text-center lg:text-left">
                {teamMember.name}
              </h3>
              <p className="text-primary-orange font-semibold mb-6 text-center lg:text-left">
                {teamMember.specialization}
              </p>

              {/* Uzmanlık Rozeti */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {(locale === "en"
                  ? ["IKOMT Advanced Practitioner", "ISST Schroth Therapist", "Manual Therapy"]
                  : ["IKOMT Advanced Practitioner", "ISST Schroth Therapist", "Manuel Terapi"]
                ).map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 rounded-full bg-secondary-blue/10 dark:bg-white/10 text-secondary-blue dark:text-white text-xs font-semibold border border-secondary-blue/10 dark:border-white/10"
                  >
                    {badge}
                  </span>
                ))}
              </div>


            </motion.div>

            {/* Sağ: Biyografi + Kariyer Zaman Çizelgesi */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Biyografi */}
              <div className="text-secondary-blue-muted dark:text-gray-300 leading-relaxed mb-10 text-base space-y-4">
                {teamMember.bio.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Kariyer Zaman Çizelgesi */}
              <h4 className="text-lg font-display font-bold text-secondary-blue dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-primary-orange" />
                {t.about.careerTitle}
              </h4>

              <div className="relative">
                {/* Dikey çizgi */}
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-orange via-primary-orange/50 to-transparent" />

                <div className="space-y-6">
                  {careerSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="relative pl-12"
                    >
                      {/* Nokta */}
                      <div className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center shadow-md ${index === careerSteps.length - 1 ? "bg-primary-orange" : "bg-white dark:bg-secondary-blue border-2 border-primary-orange"}`}>
                        <div className={`w-2 h-2 rounded-full ${index === careerSteps.length - 1 ? "bg-white" : "bg-primary-orange"}`} />
                      </div>

                      {/* İçerik */}
                      <div className={`p-4 rounded-xl border transition-all duration-300 ${index === careerSteps.length - 1 ? "bg-primary-orange/5 border-primary-orange/30 dark:bg-primary-orange/10" : "bg-white dark:bg-secondary-blue/30 border-gray-100 dark:border-white/5"}`}>
                        <span className="text-xs font-bold text-primary-orange uppercase tracking-wider block mb-1">
                          {step.year}
                        </span>
                        <h5 className="font-display font-bold text-secondary-blue dark:text-white text-sm mb-1">
                          {step.title}
                        </h5>
                        <p className="text-xs text-secondary-blue-muted dark:text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Vizyon & Misyon */}
              <div className="mt-12 space-y-8">
                <div>
                  <h4 className="text-lg font-display font-bold text-secondary-blue dark:text-white mb-3 flex items-center gap-3">
                    <span className="w-8 h-0.5 bg-primary-orange" />
                    {visionMissionData.vision.title}
                  </h4>
                  <p className="text-secondary-blue-muted dark:text-gray-300 text-sm leading-relaxed pl-11">
                    {visionMissionData.vision.text}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-secondary-blue dark:text-white mb-3 flex items-center gap-3">
                    <span className="w-8 h-0.5 bg-primary-orange" />
                    {visionMissionData.mission.title}
                  </h4>
                  <p className="text-secondary-blue-muted dark:text-gray-300 text-sm leading-relaxed pl-11">
                    {visionMissionData.mission.text}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Özel İlgi Alanları — Alt Bölüm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <h4 className="text-lg font-display font-bold text-secondary-blue dark:text-white mb-6 flex items-center justify-center gap-3">
              <span className="w-8 h-0.5 bg-primary-orange" />
              {t.about.specialInterests}
              <span className="w-8 h-0.5 bg-primary-orange" />
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {specialInterests.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-secondary-blue/40 border border-gray-200 dark:border-white/10 text-secondary-blue dark:text-white text-sm font-medium shadow-sm hover:border-primary-orange/40 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary-orange flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section (Hasta yorumları yerine) */}
      <section id="certifications" className="relative py-24 bg-white dark:bg-secondary-blue overflow-hidden">
        {/* Subtle Background Pattern */}
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
                  {/* Öne Çıkan rozeti */}
                  {isFeatured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary-blue text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                      {t.certifications.featuredBadge}
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${
                    isFeatured ? "bg-white/20" : "bg-primary-orange shadow-primary-orange/30"
                  }`}>
                    <Award className={`w-8 h-8 ${isFeatured ? "text-white" : "text-white"}`} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-display font-bold mb-2 ${isFeatured ? "text-white" : "text-secondary-blue dark:text-white"}`}>
                    {cert.title}
                  </h3>

                  {/* Organization */}
                  <p className={`font-semibold text-sm mb-4 ${isFeatured ? "text-white/80" : "text-primary-orange"}`}>
                    {cert.organization}
                  </p>

                  {/* Description */}
                  <p className={`leading-relaxed ${isFeatured ? "text-white/90" : "text-secondary-blue-muted dark:text-gray-300"}`}>
                    {cert.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary-blue/5 dark:bg-white/5 border border-secondary-blue/10 dark:border-white/10">
              <CheckCircle2 className="w-5 h-5 text-primary-orange" />
              <span className="text-secondary-blue dark:text-white font-medium">
                {t.certifications.badge}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection locale={locale} />

      {/* CTA Section */}
      <section id="contact" className="relative py-24 bg-gradient-to-br from-primary-orange to-primary-orange-hover overflow-hidden">
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/5" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t.cta.title}
            </h2>
            <p className="text-lg text-white/95 mb-10 leading-relaxed">
              {t.cta.subtitle}
            </p>
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

      <Footer />
    </div>
  );
}
