'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
    Cloud,
    Settings,
    Users,
    Terminal,
    Zap,
    BarChart,
    Lock,
    Repeat,
    Mail,
    Database,
    Cpu,
    LifeBuoy,
    CheckCircle2,
    ArrowRight,
    Star,
} from 'lucide-react';
import { motionConfig, withDelay } from '@/lib/animations';
import { useTranslations } from 'next-intl';
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

const SalesforcePage = () => {
    const t = useTranslations('pages.salesforce');
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, {
        amount: 0.1,
        once: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const benefits = [
        { icon: <Users className="w-6 h-6" /> },
        { icon: <Zap className="w-6 h-6" /> },
        { icon: <Repeat className="w-6 h-6" /> },
        { icon: <BarChart className="w-6 h-6" /> },
    ];

    const services = [
        { icon: <Settings className="w-6 h-6" /> },
        { icon: <Terminal className="w-6 h-6" /> },
        { icon: <Database className="w-6 h-6" /> },
        { icon: <LifeBuoy className="w-6 h-6" /> },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-1/4 -z-10" />
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            className="lg:w-1/2"
                            initial="hidden"
                            animate="visible"
                            variants={motionConfig.fadeInUp}
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                                {t('hero.badge')}
                            </span>
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                {t('hero.title')}{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    {t('hero.titleHighlight')}
                                </span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                {t('hero.description')}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                                    {t('consultant.cta')}
                                </button>
                                <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-xl border border-slate-200">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Cloud className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">{t('consultant.name')}</div>
                                        <div className="text-xs text-slate-500">{t('consultant.role')}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:w-1/2 relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative z-10 p-8 bg-white rounded-3xl shadow-2xl border border-slate-100">
                                <div className="grid grid-cols-2 gap-4">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className={`h-32 rounded-2xl bg-slate-50 flex items-center justify-center ${i === 1 ? 'bg-blue-50' : ''}`}>
                                            <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center ${i === 1 ? 'text-blue-600' : 'text-slate-400'}`}>
                                                {i === 0 && <Users />}
                                                {i === 1 && <Cloud />}
                                                {i === 2 && <BarChart />}
                                                {i === 3 && <Zap />}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-20" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-200 rounded-full blur-3xl opacity-20" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section ref={ref} className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold mb-6">{t('benefits.title')}</h2>
                        <p className="text-lg text-slate-600">
                            {t('benefits.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.raw('benefits.items').map((item: any, idx: number) => (
                            <motion.div
                                key={idx}
                                variants={withDelay(motionConfig.fadeInUp, idx * 0.1)}
                                initial="hidden"
                                animate={controls}
                                className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {benefits[idx]?.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-600 line-height-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                        <div className="lg:w-2/3">
                            <h2 className="text-4xl font-bold mb-6">{t('services.title')}</h2>
                            <p className="text-xl text-slate-400">
                                {t('services.description')}
                            </p>
                        </div>
                        <button className="px-8 py-4 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center gap-2">
                            {t('consultant.cta')} <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {t.raw('services.items').map((service: any, idx: number) => (
                            <div key={idx} className="p-8 rounded-3xl border border-slate-800 bg-slate-800/50 hover:border-blue-500/50 transition-all group">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center shrink-0">
                                        {services[idx]?.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-400 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {service.points.map((point: string, pIdx: number) => (
                                                <li key={pIdx} className="flex items-center gap-3 text-slate-300">
                                                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">{t('testimonials.title')}</h2>
                        <div className="flex justify-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {t.raw('testimonials.items').map((text: string, idx: number) => (
                            <div key={idx} className="relative p-10 bg-slate-50 rounded-3xl">
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-2xl text-4xl font-serif">
                                    &ldquo;
                                </div>
                                <p className="text-xl text-slate-700 italic leading-relaxed">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">{t('faq.title')}</h2>
                        <div className="space-y-6">
                            {t.raw('faq.items').map((item: any, idx: number) => (
                                <div key={idx} className="p-8 bg-white rounded-2xl border border-slate-200">
                                    <h3 className="text-xl font-bold mb-4 flex gap-4">
                                        <span className="text-blue-600">0{idx + 1}.</span>
                                        {item.question}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed pl-12">
                                        {item.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default SalesforcePage;
