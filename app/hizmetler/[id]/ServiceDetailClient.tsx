"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    CheckCircle2,
    MessageCircle,
    Phone,
    Hand,
    Dumbbell,
    Zap,
    Activity,
    Brain,
    Heart
} from "lucide-react";
import { services as servicesTR, contactInfo } from "@/data/mockData";
import { servicesEn } from "@/lib/i18n/content-en";
import { useLanguage } from "@/contexts/LanguageContext";
import { HOME_SCROLL_HASH_KEY } from "@/lib/homeSections";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const iconMap: Record<string, any> = {
    Hand, Dumbbell, Zap, Activity, Brain, Heart,
};

export default function ServiceDetailClient() {
    const { id } = useParams();
    const router = useRouter();
    const { locale, t } = useLanguage();

    const services = locale === "en" ? servicesEn : servicesTR;
    const service = services.find((s) => s.id === id);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">{t.serviceDetail.notFound}</h1>
                    <button
                        onClick={() => router.push("/")}
                        className="text-primary-orange font-semibold flex items-center gap-2 mx-auto"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        {t.serviceDetail.backHome}
                    </button>
                </div>
            </div>
        );
    }

    const IconComponent = iconMap[service.icon] || Activity;
    const sd = t.serviceDetail;

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => {
                            sessionStorage.setItem(HOME_SCROLL_HASH_KEY, "#services");
                            router.push("/");
                        }}
                        className="flex items-center gap-2 text-secondary-blue-muted dark:text-gray-400 hover:text-primary-orange transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        {sd.backButton}
                    </motion.button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-20 h-20 rounded-2xl bg-primary-orange/10 dark:bg-primary-orange/20 flex items-center justify-center mb-8">
                                <IconComponent className="w-10 h-10 text-primary-orange" />
                            </div>

                            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-blue dark:text-white mb-6">
                                {service.title}
                            </h1>

                            <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
                                <p className="text-xl text-secondary-blue-muted dark:text-gray-300 leading-relaxed">
                                    {service.fullDescription}
                                </p>
                            </div>

                            <div className="space-y-4 mb-12">
                                <h3 className="text-xl font-bold text-secondary-blue dark:text-white">
                                    {sd.features}
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 bg-white dark:bg-secondary-blue/20 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-white/5">
                                            <CheckCircle2 className="w-5 h-5 text-primary-orange flex-shrink-0 mt-0.5" />
                                            <span className="text-secondary-blue dark:text-gray-300 font-medium">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Right Contact Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:sticky lg:top-32"
                        >
                            <div className="bg-secondary-blue rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-orange/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                                <h2 className="text-3xl font-display font-bold text-white mb-6 relative z-10">
                                    {sd.contactCard.title}
                                </h2>

                                <p className="text-gray-300 mb-8 relative z-10 leading-relaxed text-lg">
                                    {service.title} {sd.contactCard.subtitle}
                                </p>

                                <div className="space-y-4 relative z-10">
                                    <a
                                        href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
                                            locale === "en"
                                                ? `Hello, I would like to get information about ${service.title}.`
                                                : `Merhaba, ${service.title} hakkında bilgi almak istiyorum.`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-primary-orange hover:bg-primary-orange-hover text-white font-bold py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-primary-orange/30"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                        {sd.contactCard.whatsappButton}
                                    </a>

                                    <a
                                        href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                                        className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg border border-white/10"
                                    >
                                        <Phone className="w-6 h-6" />
                                        {sd.contactCard.callButton}
                                    </a>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                                    <p className="text-gray-400 text-sm text-center">
                                        {sd.contactCard.workingHoursLabel} {contactInfo.workingHours}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
