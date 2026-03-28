"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryImages, gallerySectionData } from "@/data/mockData";

export default function GallerySection({ locale }: { locale: string }) {
  const [activeCategory, setActiveCategory] = useState<string>("tumu");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const isEn = locale === "en";
  const title = isEn ? gallerySectionData.title_en : gallerySectionData.title;
  const subtitle = isEn ? gallerySectionData.subtitle_en : gallerySectionData.subtitle;

  const filtered =
    activeCategory === "tumu"
      ? galleryImages
      : galleryImages.filter((img) =>
          isEn ? img.category_en === activeCategory : img.category === activeCategory
        );

  const activeLightboxImg = galleryImages.find((img) => img.id === lightbox);

  return (
    <section id="galeri" className="relative py-24 bg-gray-50 dark:bg-secondary-blue/20 overflow-hidden">
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
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-blue dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-secondary-blue-muted dark:text-gray-300 max-w-xl mx-auto">{subtitle}</p>
        </motion.div>

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

        <motion.div layout className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, index) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={() => setLightbox(img.id)}
              className="relative group cursor-pointer break-inside-avoid mb-4"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/20 border border-gray-100/80 dark:border-white/5 bg-gray-100 dark:bg-white/5 ring-2 ring-transparent group-hover:ring-primary-orange/30 transition-all duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={isEn ? img.alt_en : img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center">
                  <div className="p-4 w-full flex items-center justify-between gap-2">
                    <p className="text-white text-sm font-medium truncate drop-shadow-md">
                      {isEn ? img.alt_en : img.alt}
                    </p>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary-orange transition-colors duration-300">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && activeLightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeLightboxImg.src}
                alt={isEn ? activeLightboxImg.alt_en : activeLightboxImg.alt}
                width={activeLightboxImg.width}
                height={activeLightboxImg.height}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-white font-medium text-lg">
                  {isEn ? activeLightboxImg.alt_en : activeLightboxImg.alt}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Kapat"
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/60 hover:bg-primary-orange flex items-center justify-center transition-all duration-300"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
