"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Activity, MessageCircle } from "lucide-react";
import { painPoints, contactInfo, type PainPoint } from "@/data/mockData";
import Image from "next/image";

type Gender = "male" | "female";
type View = "front" | "back";

// Pain point positions for image-based body (percentages relative to image)
const painPointPositions: Record<string, { male: { front?: { x: number, y: number }, back?: { x: number, y: number } }, female: { front?: { x: number, y: number }, back?: { x: number, y: number } } }> = {
  "tension-headache": {
    male: { back: { x: 50, y: 7 } },
    female: { back: { x: 50, y: 6 } }
  },
  "tmj-jaw": {
    male: { front: { x: 53, y: 10 } },
    female: { front: { x: 53, y: 9 } }
  },
  neck: {
    male: { front: { x: 50, y: 13 } },
    female: { front: { x: 50, y: 12 } }
  },
  "upper-trap": {
    male: { front: { x: 38, y: 16 } },
    female: { front: { x: 37, y: 15 } }
  },
  shoulder: {
    male: { front: { x: 33, y: 20 } },
    female: { front: { x: 32, y: 19 } }
  },
  "thoracic-pain": {
    male: { back: { x: 50, y: 28 } },
    female: { back: { x: 50, y: 27 } }
  },
  "scoliosis-spine": {
    male: { back: { x: 50, y: 38 } },
    female: { back: { x: 50, y: 37 } }
  },
  "lumbar-hernia": {
    male: { back: { x: 50, y: 48 } },
    female: { back: { x: 50, y: 47 } }
  },
  "psoas-hip": {
    male: { front: { x: 44, y: 46 } },
    female: { front: { x: 44, y: 45 } }
  },
  "de-quervain": {
    male: { front: { x: 28, y: 55 } },
    female: { front: { x: 27, y: 54 } }
  },
  coccydynia: {
    male: { back: { x: 50, y: 60 } },
    female: { back: { x: 50, y: 59 } }
  },
  "acl-knee": {
    male: { front: { x: 45, y: 70 } },
    female: { front: { x: 44, y: 69 } }
  },
  "lateral-ankle": {
    male: { front: { x: 41, y: 92 } },
    female: { front: { x: 41, y: 91 } }
  },
  "plantar-fasiit": {
    male: { back: { x: 45, y: 96 } },
    female: { back: { x: 44, y: 95 } }
  }
};

export default function PainMap() {
  const [selectedPain, setSelectedPain] = useState<PainPoint | null>(null);
  const [gender, setGender] = useState<Gender>("male");
  const [activeView, setActiveView] = useState<View>("front");

  // Get image path based on gender and view
  const getImagePath = () => {
    if (gender === "male") {
      return activeView === "front" ? "/images/man-front.png" : "/images/man-back.png";
    } else {
      return activeView === "front" ? "/images/women-front.png" : "/images/woment-back.png";
    }
  };

  // Filter pain points by view
  const currentPains = painPoints.filter((p) => p.view === activeView);

  // Get position for a pain point
  const getPosition = (painId: string) => {
    const positions = painPointPositions[painId];
    if (!positions) return null;
    const genderPos = positions[gender];
    if (!genderPos) return null;
    return genderPos[activeView] || null;
  };

  return (
    <section id="pain-map" className="relative py-12 md:py-16 bg-gray-50 dark:bg-background-dark overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-blue dark:text-background-light mb-2">
            Ağrı Haritası
          </h2>
          <p className="text-base text-secondary-blue-muted dark:text-gray-300 max-w-2xl mx-auto">
            Ağrılı bölgeyi seçin, size özel tedavi önerilerimizi keşfedin
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-3 mb-6">
          {/* Gender Toggle */}
          <div className="inline-flex rounded-full bg-white dark:bg-secondary-blue/50 p-1 shadow-lg">
            <button
              onClick={() => setGender("male")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${gender === "male"
                ? "bg-secondary-blue text-white shadow-lg"
                : "text-secondary-blue-muted dark:text-gray-300 hover:text-secondary-blue dark:hover:text-white"
                }`}
            >
              Erkek
            </button>
            <button
              onClick={() => setGender("female")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${gender === "female"
                ? "bg-secondary-blue text-white shadow-lg"
                : "text-secondary-blue-muted dark:text-gray-300 hover:text-secondary-blue dark:hover:text-white"
                }`}
            >
              Kadın
            </button>
          </div>

          {/* View Toggle */}
          <div className="inline-flex rounded-full bg-white dark:bg-secondary-blue/50 p-1 shadow-lg">
            <button
              onClick={() => setActiveView("front")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeView === "front"
                ? "bg-primary-orange text-white shadow-lg"
                : "text-secondary-blue-muted dark:text-gray-300 hover:text-secondary-blue dark:hover:text-white"
                }`}
            >
              Ön Görünüm
            </button>
            <button
              onClick={() => setActiveView("back")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeView === "back"
                ? "bg-primary-orange text-white shadow-lg"
                : "text-secondary-blue-muted dark:text-gray-300 hover:text-secondary-blue dark:hover:text-white"
                }`}
            >
              Arka Görünüm
            </button>
          </div>
        </div>

        {/* Body Image with Hotspots */}
        <div className="flex justify-center items-center">
          <motion.div
            key={`${gender}-${activeView}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Body Image */}
            <div className="relative mx-auto" style={{ maxHeight: '60vh' }}>
              <Image
                src={getImagePath()}
                alt={`${gender === "male" ? "Erkek" : "Kadın"} vücut ${activeView === "front" ? "ön" : "arka"} görünümü`}
                width={400}
                height={800}
                className="h-full max-h-[60vh] w-auto object-contain drop-shadow-xl"
                priority
              />

              {/* Pain Hotspots */}
              {currentPains.map((pain, index) => {
                const position = getPosition(pain.id);
                if (!position) return null;

                return (
                  <motion.button
                    key={pain.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    onClick={() => setSelectedPain(pain)}
                    className="absolute group z-10"
                    style={{
                      left: `${position.x}%`,
                      top: `${position.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Pulsing Circle */}
                    <div className="relative">
                      <motion.div
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full bg-primary-orange"
                      />
                      <div className="relative w-6 h-6 rounded-full bg-primary-orange shadow-lg group-hover:bg-primary-orange-hover transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110">
                        <div className="w-2.5 h-2.5 rounded-full bg-white" />
                      </div>
                    </div>

                    {/* Label on Hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[60]">
                      <div className="bg-secondary-blue dark:bg-white text-white dark:text-secondary-blue px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl">
                        {pain.label}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary-blue dark:bg-white rotate-45" />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Instruction Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-secondary-blue-muted dark:text-gray-400 mt-4 text-xs"
        >
          💡 Ağrı noktalarına tıklayarak detaylı bilgi alabilirsiniz
        </motion.p>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedPain && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPain(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.4 }}
                onClick={() => setSelectedPain(null)}
                className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white dark:bg-secondary-blue rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedPain(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors duration-300 z-10"
                  >
                    <X className="w-5 h-5 text-secondary-blue dark:text-white" />
                  </button>

                  {/* Content */}
                  <div className="p-6">
                    {/* Label */}
                    <div className="inline-block px-3 py-1 rounded-full bg-primary-orange/10 text-primary-orange text-sm font-semibold mb-3">
                      {selectedPain.label}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-display font-bold text-secondary-blue dark:text-white mb-3 pr-8">
                      {selectedPain.condition}
                    </h3>

                    {/* Description */}
                    <p className="text-secondary-blue-muted dark:text-gray-300 mb-4 leading-relaxed text-sm">
                      {selectedPain.description}
                    </p>

                    {/* Recommended Therapy */}
                    <div className="bg-gradient-to-br from-primary-orange/5 to-primary-orange/10 dark:from-primary-orange/10 dark:to-primary-orange/20 rounded-xl p-4 mb-4">
                      <div className="flex items-start gap-3 mb-3">
                        <Activity className="w-5 h-5 text-primary-orange flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-secondary-blue dark:text-white mb-1 text-sm">
                            Önerilen Tedavi
                          </h4>
                          <p className="text-secondary-blue-muted dark:text-gray-300 text-sm">
                            {selectedPain.recommendedTherapy}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-3 border-t border-gray-200 dark:border-white/10">
                        <Clock className="w-4 h-4 text-primary-orange" />
                        <span className="text-xs text-secondary-blue-muted dark:text-gray-300">
                          Tahmini Süre: <span className="font-semibold text-secondary-blue dark:text-white">{selectedPain.duration}</span>
                        </span>
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/30 rounded-lg p-3 mb-4">
                      <p className="text-xs text-yellow-800 dark:text-yellow-200">
                        ⚠️ <strong>Önemli:</strong> Bu bilgiler yalnızca genel bilgilendirme amaçlıdır ve tıbbi teşhis yerine geçmez. Kesin tanı ve tedavi için mutlaka bir sağlık uzmanına başvurunuz.
                      </p>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp}?text=Merhaba, ${selectedPain.condition} hakkında bilgi almak istiyorum.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary-orange hover:bg-primary-orange-hover text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp ile Randevu Al
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
