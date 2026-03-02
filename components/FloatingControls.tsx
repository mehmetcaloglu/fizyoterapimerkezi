"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FloatingControls() {
  const [isDark, setIsDark] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Dışarı tıklanınca kapat
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLocale = (l: "tr" | "en") => {
    setLocale(l);
    setLangOpen(false);
  };

  const buttonBase =
    "p-3.5 rounded-full bg-white dark:bg-secondary-blue shadow-xl border border-gray-200 dark:border-primary-orange/20 hover:shadow-primary-orange/20 transition-all duration-300";

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* Dil seçici dropdown */}
      <div ref={langRef} className="relative">
        <AnimatePresence>
          {langOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.92 }}
              transition={{ duration: 0.18 }}
              className="absolute bottom-14 right-0 bg-white dark:bg-secondary-blue border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden min-w-[80px]"
            >
              {(["tr", "en"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLocale(lang)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-bold uppercase transition-colors duration-200 ${
                    locale === lang
                      ? "bg-primary-orange text-white"
                      : "text-secondary-blue dark:text-white hover:bg-gray-50 dark:hover:bg-white/10"
                  }`}
                >
                  <span>{lang}</span>
                  {locale === lang && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white ml-2 flex-shrink-0" />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Globe butonu */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLangOpen(!langOpen)}
          aria-label="Language selector"
          className={`${buttonBase} relative`}
        >
          <Globe className="w-5 h-5 text-primary-orange" />
          {/* Aktif dil rozeti */}
          <span className="absolute -top-1 -right-1 bg-primary-orange text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center leading-none uppercase">
            {locale}
          </span>
        </motion.button>
      </div>

      {/* Tema toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className={buttonBase}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-primary-orange" />
          ) : (
            <Sun className="w-5 h-5 text-primary-orange" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
