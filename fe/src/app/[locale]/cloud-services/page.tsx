"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function CloudServices() {
    const t = useTranslations('pages.cloudServices');
    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.cs-hero-1', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.cs-hero-2', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.cs-hero-3', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
            });

            inView('.cs-benefit-slideLeft', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
            });

            inView('.cs-benefit-slideRight', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
            });

        }
    }, []);

    return (
        <main className="relative bg-white min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 lg:pt-40 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                <div className="cs-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="cs-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="cs-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-6 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                            {t('hero.badge')}
                        </div>
                        <h1 className="font-display text-5xl lg:text-7xl text-navy-blue mb-8 leading-[1.1]">
                            {t('hero.title')} <br />
                            <span className="text-sky-blue italic relative inline-block">
                                {t('hero.titleHighlight')}
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 10C50 4 150 4 298 10" stroke="#00AEEF" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-xl text-neutral-gray mb-10 max-w-2xl leading-relaxed">
                            {t('hero.description')}
                        </p>
                    </div>

                </div>
            </section>

            {/* Cloud Solutions Grid */}
            <section className="pb-24 bg-white" id="solutions">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">{t('solutions.title')}</h2>
                        <p className="text-lg text-neutral-gray italic">
                            {t('solutions.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Strategy */}
                        <div {...motionConfig.slideUp} className="bg-white p-8 rounded-3xl border border-sky-blue/10 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-sky-blue mb-6 group-hover:bg-sky-blue group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy-blue mb-4">{t('solutions.items.strategy.title')}</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('solutions.items.strategy.description')}
                            </p>
                        </div>

                        {/* Migration */}
                        <div {...withDelay(motionConfig.slideUp, 0.1)} className="bg-white p-8 rounded-3xl border border-sky-blue/10 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy-blue mb-4">{t('solutions.items.migration.title')}</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('solutions.items.migration.description')}
                            </p>
                        </div>

                        {/* Native */}
                        <div {...withDelay(motionConfig.slideUp, 0.2)} className="bg-white p-8 rounded-3xl border border-sky-blue/10 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy-blue mb-4">{t('solutions.items.native.title')}</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('solutions.items.native.description')}
                            </p>
                        </div>

                        {/* Multi-Cloud */}
                        <div {...withDelay(motionConfig.slideUp, 0.3)} className="bg-white p-8 rounded-3xl border border-sky-blue/10 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy-blue mb-4">{t('solutions.items.multiCloud.title')}</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('solutions.items.multiCloud.description')}
                            </p>
                        </div>

                        {/* Security */}
                        <div {...withDelay(motionConfig.slideUp, 0.4)} className="bg-white p-8 rounded-3xl border border-sky-blue/10 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy-blue mb-4">{t('solutions.items.security.title')}</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('solutions.items.security.description')}
                            </p>
                        </div>

                        {/* Optimization */}
                        <div {...withDelay(motionConfig.slideUp, 0.5)} className="bg-white p-8 rounded-3xl border border-sky-blue/10 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy-blue mb-4">{t('solutions.items.optimization.title')}</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('solutions.items.optimization.description')}
                            </p>
                        </div>

                        {/* Swiss */}
                        <div {...withDelay(motionConfig.slideUp, 0.6)} className="bg-navy-blue p-8 rounded-3xl shadow-xl transition-all duration-300 group col-span-full mt-8">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 md:mb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{t('solutions.items.swiss.title')}</h3>
                                    <p className="text-white/70 leading-relaxed max-w-3xl">
                                        {t('solutions.items.swiss.description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Expertise Section */}
            <section className="py-24 bg-slate-50" id="platforms">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">{t('platforms.title')}</h2>
                        <p className="text-lg text-neutral-gray">
                            {t('platforms.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="bg-white p-8 rounded-3xl border border-sky-blue/10 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                            <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy-blue mb-4">{t('platforms.aws.title')}</h3>
                            <p className="text-neutral-gray text-sm leading-relaxed">
                                {t('platforms.aws.description')}
                            </p>
                        </div>

                        <div {...withDelay(motionConfig.slideUp, 0.1)} className="bg-white p-8 rounded-3xl border border-sky-blue/10 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy-blue mb-4">{t('platforms.azure.title')}</h3>
                            <p className="text-neutral-gray text-sm leading-relaxed">
                                {t('platforms.azure.description')}
                            </p>
                        </div>

                        <div {...withDelay(motionConfig.slideUp, 0.2)} className="bg-white p-8 rounded-3xl border border-sky-blue/10 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                            <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy-blue mb-4">{t('platforms.gcp.title')}</h3>
                            <p className="text-neutral-gray text-sm leading-relaxed">
                                {t('platforms.gcp.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-24 bg-white" id="approach">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">{t('approach.title')}</h2>
                        <p className="text-lg text-neutral-gray leading-relaxed">
                            {t('approach.description')}
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-sky-blue/20 -translate-y-1/2"></div>

                        <div className="grid lg:grid-cols-3 gap-12 relative z-10">
                            {[
                                { step: t('approach.steps.strategy.step'), title: t('approach.steps.strategy.title'), desc: t('approach.steps.strategy.description'), color: "bg-blue-600" },
                                { step: t('approach.steps.migration.step'), title: t('approach.steps.migration.title'), desc: t('approach.steps.migration.description'), color: "bg-sky-blue" },
                                { step: t('approach.steps.optimization.step'), title: t('approach.steps.optimization.title'), desc: t('approach.steps.optimization.description'), color: "bg-teal-500" }
                            ].map((item, index) => (
                                <div key={index} {...withDelay(motionConfig.slideUp, index * 0.1)} className="bg-white p-8 rounded-3xl border border-sky-blue/10 shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className={`w-12 h-12 ${item.color} text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto lg:mx-0 shadow-lg`}>
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-navy-blue mb-4">{item.title}</h3>
                                    <p className="text-neutral-gray leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-navy-blue text-white" id="benefits">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">{t('whyChoose.title')}</h2>
                        <p className="text-lg text-neutral-gray leading-relaxed">
                            {t('whyChoose.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: t('whyChoose.items.certified.title'), desc: t('whyChoose.items.certified.description'), icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, color: "text-blue-600", bg: "bg-blue-50" },
                            { title: t('whyChoose.items.custom.title'), desc: t('whyChoose.items.custom.description'), icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>, color: "text-sky-blue", bg: "bg-sky-blue/10" },
                            { title: t('whyChoose.items.security.title'), desc: t('whyChoose.items.security.description'), icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>, color: "text-red-500", bg: "bg-red-50" },
                            { title: t('whyChoose.items.support.title'), desc: t('whyChoose.items.support.description'), icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, color: "text-teal-600", bg: "bg-teal-50" }
                        ].map((item, index) => (
                            <div key={index} {...withDelay(motionConfig.scaleIn, index * 0.1)} className="p-8 rounded-3xl bg-white border border-sky-blue/10 text-center transition-all hover:shadow-xl group">
                                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-navy-blue mb-4">{item.title}</h3>
                                <p className="text-neutral-gray text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white" id="faq">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">{t('faq.title')}</h2>
                    </div>

                    <div className="space-y-6">
                        {(t.raw('faq.items') as any[]).map((item, index) => (
                            <div key={index} {...withDelay(motionConfig.slideUp, index * 0.1)} className="bg-slate-50 p-8 rounded-3xl border border-sky-blue/10 hover:bg-white hover:shadow-lg transition-all duration-300">
                                <h3 className="text-lg font-bold text-navy-blue mb-3">{item.question}</h3>
                                <p className="text-neutral-gray leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <Contact />
            <Footer />
        </main>
    );
}
