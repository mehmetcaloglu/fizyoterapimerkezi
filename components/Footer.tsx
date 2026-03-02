"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { contactInfo, siteConfig, navLinks } from "@/data/mockData";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-secondary-blue dark:bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-orange p-2 rounded-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold">{siteConfig.name}</div>
                  <div className="text-xs text-primary-orange font-semibold">{siteConfig.tagline}</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {siteConfig.description}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: contactInfo.instagram, label: "Instagram" },
                { icon: MessageCircle, href: `https://wa.me/${contactInfo.whatsapp}`, label: "WhatsApp" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-orange flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-xl font-bold mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-300 hover:text-primary-orange transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-orange transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-bold mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-gray-300 hover:text-primary-orange transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:animate-pulse" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-gray-300 hover:text-primary-orange transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:animate-pulse" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email2}`}
                  className="flex items-start gap-3 text-gray-300 hover:text-primary-orange transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:animate-pulse" />
                  <span>{contactInfo.email2}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-primary-orange transition-colors duration-300 group"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:animate-pulse" />
                  <span>
                    {contactInfo.address}
                    <br />
                    {contactInfo.city}
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-xl font-bold mb-6">Çalışma Saatleri</h3>
            <div className="flex items-start gap-3 text-gray-300 mb-6">
              <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary-orange" />
              <div>
                <p className="mb-1">Pazartesi - Cuma</p>
                <p className="text-white font-semibold">09:00 - 20:00</p>
                <p className="mt-3 mb-1">Cumartesi</p>
                <p className="text-white font-semibold">09:00 - 17:00</p>
                <p className="mt-3 text-gray-400">Pazar Kapalı</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary-orange hover:bg-primary-orange-hover text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Hemen Randevu Al
            </motion.button>
          </motion.div>
        </div>

        {/* Google Maps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-12"
        >
          <h3 className="font-display text-xl font-bold mb-6 text-center">Konum</h3>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <iframe
              src={contactInfo.googleMapsEmbed}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FizikEND Fizyoterapi Merkezi Konum"
              className="w-full"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href={contactInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-orange hover:text-primary-orange-hover transition-colors duration-300"
            >
              <MapPin className="w-4 h-4" />
              <span>Google Maps'te Aç</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/kvkk" className="text-gray-400 hover:text-primary-orange transition-colors duration-300">
                KVKK Aydınlatma Metni
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
