"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motion, Variants, Transition, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const containerVariants: Variants = {
    initial: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" } as Transition
    }
};

const heroSlides = [
    {
        badge: "Gen AI Powered Intelligence",
        title: <>Data Solutions <br /><span className="text-sky-blue italic">Redefined</span></>,
        description: "Unlock the potential of enterprise data with Generative AI. We build resilient data architectures that drive predictive analytics and automated decision-making.",
        cta: "Explore Solutions",
        ctaHref: "#solutions-grid",
        visual: (
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F3F6F9] to-white dark:from-[#162033] dark:to-[#0B1120] rounded-3xl overflow-hidden border border-[#E2E8F0] dark:border-[#334155] shadow-2xl">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4A90E2 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                    <motion.div
                        className="relative w-56 h-56 bg-white dark:bg-[#162033] rounded-full shadow-[0_0_60px_rgba(74,144,226,0.15)] flex items-center justify-center z-10"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="material-symbols-outlined text-8xl text-sky-blue">neurology</span>
                    </motion.div>
                    <motion.div
                        className="absolute top-1/4 left-10 p-3 bg-white dark:bg-[#162033] rounded-xl shadow-lg border border-[#E2E8F0] dark:border-[#334155]"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <span className="material-symbols-outlined text-indigo-500">analytics</span>
                    </motion.div>
                    <motion.div
                        className="absolute bottom-1/4 right-10 p-3 bg-white dark:bg-[#162033] rounded-xl shadow-lg border border-[#E2E8F0] dark:border-[#334155]"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    >
                        <span className="material-symbols-outlined text-emerald-500">database</span>
                    </motion.div>
                </div>
            </div>
        )
    },
    {
        badge: "Predictive Analytics",
        badgeColor: "indigo",
        title: <>From Hindsight to <br /><span className="text-indigo-500 italic">Foresight</span></>,
        description: "Go beyond descriptive dashboards. Leverage our predictive and prescriptive models to anticipate market shifts and automate complex business decisions with confidence.",
        cta: "View Analytics",
        ctaHref: "#solutions-grid",
        visual: (
            <div className="absolute inset-0 bg-gradient-to-bl from-indigo-50 to-white dark:from-[#162033] dark:to-[#0B1120] rounded-3xl overflow-hidden border border-[#E2E8F0] dark:border-[#334155] shadow-2xl flex items-center justify-center">
                <div className="relative w-3/4 h-3/4 bg-white dark:bg-[#162033]/50 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="flex gap-2">
                            <div className="h-2 w-2 bg-red-400 rounded-full"></div>
                            <div className="h-2 w-2 bg-yellow-400 rounded-full"></div>
                            <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex-1 flex items-end justify-between gap-4 px-2">
                        {[40, 60, 50, 85].map((h, i) => (
                            <motion.div
                                key={i}
                                className={`w-full ${i === 3 ? 'bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]' : 'bg-indigo-200 dark:bg-indigo-900/50'} rounded-t-lg relative`}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                            >
                                {i === 3 && (
                                    <motion.div
                                        className="absolute -top-10 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg"
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        +124%
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        )
    },
    {
        badge: "Unified Data Fabric",
        badgeColor: "emerald",
        title: <>Single Source of <br /><span className="text-emerald-500 italic">Truth</span></>,
        description: "Break down silos. We architect a unified data layer with automated governance and security, ensuring your Gen AI applications are built on a solid foundation.",
        cta: "Explore Governance",
        ctaHref: "#solutions-grid",
        visual: (
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 to-white dark:from-[#162033] dark:to-[#0B1120] rounded-3xl overflow-hidden border border-[#E2E8F0] dark:border-[#334155] shadow-2xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 rotate-[-12deg] scale-90 opacity-90">
                    <div className="w-32 h-32 bg-white dark:bg-[#162033] rounded-2xl shadow-lg border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center animate-pulse">
                        <span className="material-symbols-outlined text-4xl text-emerald-500">database</span>
                    </div>
                    <div className="w-32 h-32 bg-white dark:bg-[#162033] rounded-2xl shadow-lg border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center mt-8">
                        <span className="material-symbols-outlined text-4xl text-emerald-500">cloud</span>
                    </div>
                    <div className="w-32 h-32 bg-emerald-500 text-white rounded-2xl shadow-xl shadow-emerald-500/30 flex items-center justify-center -mt-8 relative z-10">
                        <span className="material-symbols-outlined text-5xl">shield_lock</span>
                    </div>
                    <div className="w-32 h-32 bg-white dark:bg-[#162033] rounded-2xl shadow-lg border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl text-emerald-500">api</span>
                    </div>
                </div>
            </div>
        )
    }
];

export default function DataSolutionsPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

    return (
        <main className="relative bg-[#F3F6F9] dark:bg-[#0B1120] min-h-screen font-sans overflow-x-hidden">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />

            <Navbar />

            {/* Carousel Hero Section */}
            <header className="relative pt-28 pb-12 lg:pt-36 lg:pb-24 overflow-hidden bg-white dark:bg-[#0B1120] min-h-[800px] flex flex-col justify-center">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl dark:bg-sky-blue/10"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#0B2347]/5 rounded-full blur-3xl dark:bg-[#0B2347]/10"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                    <div className="relative overflow-hidden min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                            >
                                <div className="lg:col-span-7 flex flex-col justify-center">
                                    <div className={`inline-flex items-center px-3 py-1 mb-6 border border-${heroSlides[currentSlide].badgeColor === 'emerald' ? 'emerald-500' : heroSlides[currentSlide].badgeColor === 'indigo' ? 'indigo-500' : 'sky-blue'}/30 rounded-full bg-${heroSlides[currentSlide].badgeColor || 'sky-blue'}/10 text-${heroSlides[currentSlide].badgeColor || 'sky-blue'} text-xs font-bold tracking-wider uppercase gap-2 self-start`}>
                                        <span className={`w-2 h-2 rounded-full ${heroSlides[currentSlide].badgeColor === 'emerald' ? 'bg-emerald-500' : heroSlides[currentSlide].badgeColor === 'indigo' ? 'bg-indigo-500' : 'bg-sky-blue'} animate-pulse`}></span>
                                        {heroSlides[currentSlide].badge}
                                    </div>
                                    <h1 className="font-display text-5xl lg:text-7xl leading-[1.1] text-[#0B2347] dark:text-white mb-6">
                                        {heroSlides[currentSlide].title}
                                    </h1>
                                    <p className={`text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 border-l-4 border-${heroSlides[currentSlide].badgeColor || 'sky-blue'} pl-6 max-w-xl`}>
                                        {heroSlides[currentSlide].description}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a href={heroSlides[currentSlide].ctaHref} className={`inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white ${heroSlides[currentSlide].badgeColor === 'indigo' ? 'bg-indigo-600' : heroSlides[currentSlide].badgeColor === 'emerald' ? 'bg-emerald-600' : 'bg-[#0B2347]'} rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg group`}>
                                            {heroSlides[currentSlide].cta}
                                            <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform">
                                                {heroSlides[currentSlide].badgeColor === 'indigo' ? 'insights' : heroSlides[currentSlide].badgeColor === 'emerald' ? 'lock' : 'arrow_forward'}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="lg:col-span-5 relative h-[400px] lg:h-[500px]">
                                    {heroSlides[currentSlide].visual}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Carousel Controls */}
                    <div className="absolute bottom-4 left-6 lg:left-8 flex items-center gap-4 z-20">
                        <div className="flex gap-2">
                            {heroSlides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === i ? 'bg-[#0B2347] dark:bg-white' : 'bg-gray-300'}`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-2 ml-4 border-l pl-4 border-gray-300">
                            <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white dark:bg-[#162033] border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[#0B2347] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                            </button>
                            <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white dark:bg-[#162033] border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[#0B2347] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Core Capabilities Grid */}
            <section className="py-16 bg-[#F3F6F9] dark:bg-[#0B1120]" id="solutions-grid">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        variants={itemVariants}
                        initial="initial"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-3xl lg:text-4xl text-[#0B2347] dark:text-white mb-4">Core Capabilities</h2>
                        <p className="text-gray-600 dark:text-gray-300">A structured approach to data mastery.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        {/* Unified Data Fabric - Large Card */}
                        <motion.div
                            className="lg:col-span-2 row-span-2 bg-white dark:bg-[#0B1120] rounded-3xl p-8 border border-[#E2E8F0] dark:border-[#334155] shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                            variants={itemVariants}
                            initial="initial"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-blue/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-sky-blue/10 transition-colors"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                                        <span className="material-symbols-outlined text-2xl">grid_on</span>
                                    </div>
                                    <h3 className="font-display text-3xl text-[#0B2347] dark:text-white mb-4">Unified Data Fabric</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                                        Establish a robust data lakehouse architecture. We ingest, clean, and structure your
                                        data to create a single source of truth across the enterprise, breaking down silos and
                                        enabling seamless access.
                                    </p>
                                </div>
                                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 mt-auto">
                                    <img alt="Data Center Architecture" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsLJwb8UIavwu2OESZAI3QLWn8XIa368WKz46h4nqbrH4x5J1nLfClv0JPQpu_L6gzJxhU1Li6A88L58_LSUcutWT2OIkADj3ZWggBZ9EZASXL1nn8v8zaKtXUgRBaKT-A5sqfcN9pLg0gFp_RB7c1UAD4rqZvF-Pl3znLKGUg6jq1CjjKat_m3Hs7xUGytTOab6CIvGbSV806ZXknzIQSEXES1Roepeng5ckPJBMMUeCMqK4Rdh6pTLdDEGhwbWLncCqVW3YaI-E" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                        <span className="text-white font-medium">Foundation Layer</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Generative Intelligence */}
                        <motion.div
                            className="bg-[#0B2347] text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                            variants={itemVariants}
                            initial="initial"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-sky-blue">
                                        <span className="material-symbols-outlined text-2xl">neurology</span>
                                    </div>
                                    <span className="bg-sky-blue text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">New</span>
                                </div>
                                <h3 className="font-display text-2xl mb-3">Generative Intelligence</h3>
                                <p className="text-blue-100 text-sm mb-6">
                                    Leverage LLMs to interact with your data naturally. Generate prescriptive insights and
                                    automate complex decisions.
                                </p>
                            </div>
                            <div className="relative h-40 rounded-xl overflow-hidden border border-white/20">
                                <img alt="AI Network Visualization" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzbxUgjuk4MBv-HIS3eLoj4EK0Kgp83zsMWHWdn2XR6lJcinvtfkdnMWxdrk7kEGYx-6IYFjxPVbjVe5FbBGL-ddusyIjpug9dcsjHy0rRjGilm_rkXFeYLJJGQhv3BmwMGAWHrehp1kJAPNnQlKAb4R7VzShmQ_PmuIuYC0X6G4gRGMD9VQRuvdUzUubLXOkLCazR2lrxyYh0H3VqyO0M1CSKG2-rbB29mTozovYJoKmzqOoTMXvH1768B74waGpCDzrNJruMg9Y" />
                            </div>
                        </motion.div>

                        {/* Governance & Security */}
                        <motion.div
                            className="bg-white dark:bg-[#0B1120] rounded-3xl p-8 border border-[#E2E8F0] dark:border-[#334155] shadow-sm hover:shadow-md transition-all duration-300"
                            variants={itemVariants}
                            initial="initial"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                                <span className="material-symbols-outlined text-2xl">admin_panel_settings</span>
                            </div>
                            <h3 className="font-display text-xl text-[#0B2347] dark:text-white mb-3">Governance & Security</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Automated lineage, role-based access, and regulatory compliance baked into every layer of your
                                data stack.
                            </p>
                        </motion.div>

                        {/* Advanced Analytics - Wide Card */}
                        <motion.div
                            className="lg:col-span-2 bg-white dark:bg-[#0B1120] rounded-3xl p-8 border border-[#E2E8F0] dark:border-[#334155] shadow-sm hover:shadow-md transition-all duration-300 group"
                            variants={itemVariants}
                            initial="initial"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                                <div className="order-2 md:order-1">
                                    <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                                        <span className="material-symbols-outlined text-2xl">show_chart</span>
                                    </div>
                                    <h3 className="font-display text-2xl text-[#0B2347] dark:text-white mb-3">Advanced Analytics</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                                        Deploy descriptive and predictive models. Visualize hidden trends through interactive
                                        dashboards and on-demand reporting tools that empower every department.
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                        <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sky-blue text-base">check_circle</span> Predictive Forecasting</li>
                                        <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sky-blue text-base">check_circle</span> Real-time Dashboards</li>
                                        <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sky-blue text-base">check_circle</span> Customer Segmentation</li>
                                    </ul>
                                </div>
                                <div className="order-1 md:order-2 h-full min-h-[200px] relative rounded-2xl overflow-hidden shadow-md">
                                    <img alt="Analytics Dashboard" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFrofx3jC1iCOWZLKWZ4SRjD0pxi_IcvOrPCQX00R9Yf4H1W9KISN0Gff6v6lbL02ufIPKx_YSMAmLua2M1Vna_Cbq9VfPA5TQzRAuV69FYMq6sdwvwO3Sh2DfeMZ8uBtI3gP7FZ5OFybXGVApry61uKrHR6TX7K8DaGp-VnghLXirPRe1-NaNyPMcV0RUweuJwONhLBeMWMZJjqTVDwudDqDfX1w4uVqIIjNHhE7tDW4fNTjsgfipfLgmJVhvRkq8XpduGwz0Ux4" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Real-time Action */}
                        <motion.div
                            className="bg-white dark:bg-[#0B1120] rounded-3xl p-8 border border-[#E2E8F0] dark:border-[#334155] shadow-sm hover:shadow-md transition-all duration-300"
                            variants={itemVariants}
                            initial="initial"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                                <span className="material-symbols-outlined text-2xl">bolt</span>
                            </div>
                            <h3 className="font-display text-xl text-[#0B2347] dark:text-white mb-3">Real-time Action</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Stream processing for instant insights and immediate business response to changing market
                                conditions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Grid? Section */}
            <section className="py-24 bg-white dark:bg-[#0B1120] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4A90E2 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={itemVariants}
                            initial="initial"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <h2 className="font-display text-4xl lg:text-5xl text-[#0B2347] dark:text-white mb-6">Why is Data important?</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                Data isn&apos;t just an asset; it&apos;s a performance driver. Our AI-driven solutions significantly
                                reduce analysis time while improving prediction accuracy for critical business metrics.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-[#F3F6F9] dark:bg-[#162033] p-6 rounded-2xl">
                                    <div className="text-4xl font-display font-bold mb-2 text-sky-blue">10x</div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Faster Insights</p>
                                </div>
                                <div className="bg-[#F3F6F9] dark:bg-[#162033] p-6 rounded-2xl">
                                    <div className="text-4xl font-display font-bold mb-2 text-sky-blue">92%</div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Prediction Accuracy</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: "cloud_sync", title: "Scalable", desc: "Cloud-native growth", color: "blue" },
                                { icon: "psychology", title: "Intelligent", desc: "Self-learning models", color: "indigo" },
                                { icon: "security", title: "Secure", desc: "Enterprise grade", color: "emerald" },
                                { isAction: true, title: "Start Now", color: "navy" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className={`p-6 rounded-2xl flex flex-col items-center text-center transition-colors ${item.isAction ? 'bg-[#0B2347] text-white cursor-pointer hover:bg-opacity-90 group' : 'bg-[#F3F6F9] dark:bg-[#162033] hover:bg-blue-50 dark:hover:bg-blue-900/10'}`}
                                    variants={itemVariants}
                                    initial="initial"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {item.isAction ? (
                                        <>
                                            <span className="text-sm font-bold mb-2">{item.title}</span>
                                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className={`material-symbols-outlined text-4xl text-${item.color}-500 mb-3`}>{item.icon}</span>
                                            <h3 className="font-bold text-[#0B2347] dark:text-white mb-1">{item.title}</h3>
                                            <p className="text-xs text-gray-500">{item.desc}</p>
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
