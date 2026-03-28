"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { teamMembers, careerSteps as careerStepsTR, visionMission, specialInterestAreas } from "@/data/mockData";
import { teamMemberEn, careerStepsEn, visionMissionEn, specialInterestAreasEn } from "@/lib/i18n/content-en";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection({ sectionId = "about" }: { sectionId?: string }) {
  const { locale, t } = useLanguage();
  const careerSteps = locale === "en" ? careerStepsEn : careerStepsTR;
  const visionMissionData = locale === "en" ? visionMissionEn : visionMission;
  const specialInterests = locale === "en" ? specialInterestAreasEn : specialInterestAreas;
  const teamMember =
    locale === "en" ? { ...teamMembers[0], ...teamMemberEn } : teamMembers[0];

  return (
    <section id={sectionId} className="relative py-24 bg-gray-50 dark:bg-secondary-blue/20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]">
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-blue dark:text-white mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-secondary-blue-muted dark:text-gray-300 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-primary-orange rounded-3xl blur-2xl opacity-20 scale-110" />
              <div className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/10">
                <Image src={teamMembers[0].image} alt={teamMembers[0].name} fill className="object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-orange text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                {t.about.founderBadge}
              </div>
            </div>

            <h3 className="text-3xl font-display font-bold text-secondary-blue dark:text-white mb-2 text-center lg:text-left">
              {teamMember.name}
            </h3>
            <p className="text-primary-orange font-semibold mb-6 text-center lg:text-left">
              {teamMember.specialization}
            </p>

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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="text-secondary-blue-muted dark:text-gray-300 leading-relaxed mb-10 text-base space-y-4">
              {teamMember.bio.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <h4 className="text-lg font-display font-bold text-secondary-blue dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-primary-orange" />
              {t.about.careerTitle}
            </h4>

            <div className="relative">
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
                    <div
                      className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center shadow-md ${
                        index === careerSteps.length - 1
                          ? "bg-primary-orange"
                          : "bg-white dark:bg-secondary-blue border-2 border-primary-orange"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          index === careerSteps.length - 1 ? "bg-white" : "bg-primary-orange"
                        }`}
                      />
                    </div>

                    <div
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        index === careerSteps.length - 1
                          ? "bg-primary-orange/5 border-primary-orange/30 dark:bg-primary-orange/10"
                          : "bg-white dark:bg-secondary-blue/30 border-gray-100 dark:border-white/5"
                      }`}
                    >
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
  );
}
