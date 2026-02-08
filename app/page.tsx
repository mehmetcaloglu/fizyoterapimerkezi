"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PainMap from "@/components/PainMap";
import DarkModeToggle from "@/components/DarkModeToggle";
import {
  heroContent,
  services,
  certifications,
  statistics,
  siteConfig,
  contactInfo,
} from "@/data/mockData";

// Icon mapping
const iconMap: Record<string, any> = {
  Hand,
  Dumbbell,
  Zap,
  Activity,
  Brain,
  Heart,
  Award,
};

export default function LandingPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <Navbar />
      <DarkModeToggle />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroContent.backgroundImage})`,
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
                {siteConfig.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight"
            >
              {heroContent.title.split(" ").map((word, index) => (
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
              {heroContent.subtitle}
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
                {heroContent.primaryCta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-blue font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara
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

      {/* Services Section */}
      <section id="services" className="relative py-24 bg-white dark:bg-background-dark">
        {/* Subtle Background Pattern */}
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
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-secondary-blue-muted dark:text-gray-300 max-w-2xl mx-auto">
              Bilimsel temelli, modern ve efektif fizyoterapi yaklaşımı ile size özel tedavi planları sunuyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary-orange/10 dark:bg-primary-orange/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-primary-orange" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-secondary-blue dark:text-white mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-secondary-blue-muted dark:text-gray-300 mb-5 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary-orange flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-secondary-blue-muted dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <Link
                      href={`/hizmetler/${service.id}`}
                      className="mt-5 text-primary-orange font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    >
                      Detaylı Bilgi
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pain Map Section */}
      <PainMap />

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
              Sertifikalar ve Uzmanlıklar
            </h2>
            <p className="text-lg text-secondary-blue-muted dark:text-gray-300 max-w-2xl mx-auto">
              Uluslararası geçerliliği olan sertifikalarımız ve uzmanlaşma alanlarımız
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-orange/5 to-primary-orange/10 dark:from-primary-orange/10 dark:to-primary-orange/20 rounded-2xl p-8 border border-primary-orange/20"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary-orange flex items-center justify-center mb-6 shadow-lg shadow-primary-orange/30">
                  <Award className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-secondary-blue dark:text-white mb-2">
                  {cert.title}
                </h3>

                {/* Organization */}
                <p className="text-primary-orange font-semibold text-sm mb-4">
                  {cert.organization}
                </p>

                {/* Description */}
                <p className="text-secondary-blue-muted dark:text-gray-300 leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
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
                Tüm sertifikalar uluslararası geçerliliğe sahiptir
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-orange to-primary-orange-hover overflow-hidden">
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
              Değişime Hazır Mısın?
            </h2>
            <p className="text-lg text-white/95 mb-10 leading-relaxed">
              Size en uygun fizyoterapi yöntemini belirliyor, kas-iskelet ve sinir sistemi problemlerinize hızlı ve efektif çözüm haritası çiziyoruz.
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
                WhatsApp ile Randevu Al
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
