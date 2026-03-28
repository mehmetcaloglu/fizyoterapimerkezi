"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, Instagram } from "lucide-react";
import { siteConfig, contactInfo } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";
import LogoName from "@/components/LogoName";
import { HOME_SECTION_HASHES, homeHref } from "@/lib/homeSections";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLabels = [t.nav.home, t.nav.services, t.nav.therapyProcess, t.nav.about, t.nav.certifications, t.nav.gallery, t.nav.contact];
  const navLinks = HOME_SECTION_HASHES.map((hash, i) => ({ hash, href: homeHref(hash), label: navLabels[i] }));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHash = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", hash);
  };

  const onSectionNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    setIsMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      scrollToHash(hash);
    }
  };

  const onLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      scrollToHash("#hero");
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 dark:bg-secondary-blue/80 backdrop-blur-xl shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-0 xl:px-4">
          <div className="flex items-center justify-between h-20">
            <Link href={homeHref("#hero")} onClick={onLogoClick} className="flex items-center group flex-shrink-0 min-w-0">
              <LogoName
                className="h-12 xl:h-20 w-auto transition-opacity duration-300 group-hover:opacity-80 flex-shrink-0"
                aria-label={siteConfig.name}
              />
            </Link>

            <div className="hidden lg:flex items-center gap-4 nav:gap-6 2xl:gap-8 flex-shrink min-w-0">
              {navLinks.map((link) => (
                <Link
                  key={link.hash}
                  href={link.href}
                  onClick={(e) => onSectionNavClick(e, link.hash)}
                  className="text-secondary-blue dark:text-white hover:text-primary-orange dark:hover:text-primary-orange transition-colors duration-300 font-semibold text-sm nav:text-base whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              <motion.a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-primary-orange dark:hover:bg-primary-orange flex items-center justify-center transition-colors duration-300 text-secondary-blue dark:text-white hover:text-white"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>

              <motion.a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="hidden xl:flex items-center gap-2 text-secondary-blue dark:text-white hover:text-primary-orange dark:hover:text-primary-orange transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold text-sm">{contactInfo.phone}</span>
              </motion.a>

              <motion.a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-orange hover:bg-primary-orange-hover text-white font-semibold px-4 py-2 xl:px-5 xl:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                {t.nav.appointment}
              </motion.a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-secondary-blue dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-secondary-blue dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-secondary-blue shadow-2xl z-50 lg:hidden"
            >
              <div className="p-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-secondary-blue dark:text-white" />
                </button>

                <div className="mb-8">
                  <div className="flex items-center mb-2">
                    <LogoName className="h-12 w-auto" aria-label={siteConfig.name} />
                  </div>
                  <div className="text-sm text-primary-orange font-semibold">{t.hero.tagline}</div>
                </div>

                <div className="space-y-6 mb-12">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.hash}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => onSectionNavClick(e, link.hash)}
                        className="block text-2xl font-semibold text-secondary-blue dark:text-white hover:text-primary-orange dark:hover:text-primary-orange transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4 mb-8">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-secondary-blue-muted dark:text-gray-300 hover:text-primary-orange dark:hover:text-primary-orange transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">{contactInfo.phone}</span>
                  </a>
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-secondary-blue-muted dark:text-gray-300 hover:text-primary-orange dark:hover:text-primary-orange transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="font-semibold">@fizikend</span>
                  </a>
                </div>

                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary-orange hover:bg-primary-orange-hover text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t.nav.appointment}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
