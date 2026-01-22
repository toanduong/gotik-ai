"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function DataManagement() {
    const t = useTranslations('pages.dataManagement');

    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.dm-hero-1', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.dm-hero-2', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.dm-hero-3', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
            });

            inView('.dm-benefit-slideLeft', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
            });

            inView('.dm-benefit-slideRight', ({ target }: any) => {
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
                <div className="dm-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
                <div className="dm-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="dm-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-teal-500/30 rounded-full bg-teal-500/5 text-teal-600 text-xs font-bold tracking-wider uppercase">
                            {t('hero.badge')}
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            {t('hero.title')} <span className="text-teal-500 italic">{t('hero.titleHighlight')}</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            {t('hero.description')}
                        </p>
                    </div>

                </div>
            </section>

            {/* Entry Points Grid */}
            <section className="pb-24 bg-white" id="entry-points">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('entryPoints.title')}
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            {t('entryPoints.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-sky-blue mb-4 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">{t('entryPoints.items.strategy.title')}</h3>
                            <p className="text-sm text-neutral-gray mb-4">{t('entryPoints.items.strategy.description')}</p>
                            <a href="/data-strategy" className="text-sky-blue font-semibold text-sm hover:text-navy-blue transition-colors">
                                {t('entryPoints.items.strategy.cta')} →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="7.5 4.21 12 6.81 16.5 4.21" /><polyline points="7.5 19.79 7.5 14.6 3 12" /><polyline points="21 12 16.5 14.6 16.5 19.79" /></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">{t('entryPoints.items.analytics.title')}</h3>
                            <p className="text-sm text-neutral-gray mb-4">{t('entryPoints.items.analytics.description')}</p>
                            <a href="/data-and-analytics" className="text-purple-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                {t('entryPoints.items.analytics.cta')} →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">{t('entryPoints.items.bim2fm.title')}</h3>
                            <p className="text-sm text-neutral-gray mb-4">{t('entryPoints.items.bim2fm.description')}</p>
                            <a href="/bim2fm" className="text-green-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                {t('entryPoints.items.bim2fm.cta')} →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">{t('entryPoints.items.architecture.title')}</h3>
                            <p className="text-sm text-neutral-gray mb-4">{t('entryPoints.items.architecture.description')}</p>
                            <a href="/data-architecture" className="text-indigo-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                {t('entryPoints.items.architecture.cta')} →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v6m0 6v6" /><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24" /><path d="m1 12h6m6 0h6" /><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24" /></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">{t('entryPoints.items.ai.title')}</h3>
                            <p className="text-sm text-neutral-gray mb-4">{t('entryPoints.items.ai.description')}</p>
                            <a href="/ai-consulting" className="text-orange-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                {t('entryPoints.items.ai.cta')} →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-2">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-display text-lg text-navy-blue mb-3">{t('entryPoints.items.pimcore.title')}</h3>
                                    <p className="text-sm text-neutral-gray mb-4">{t('entryPoints.items.pimcore.description')}</p>
                                    <a href="/pimcore" className="text-rose-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                        {t('entryPoints.items.pimcore.cta')} →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-slate-50" id="testimonials">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('testimonials.title')}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideLeft} className="dm-benefit-slideLeft bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500/30 mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
                            <p className="text-neutral-gray text-lg leading-relaxed mb-6">
                                {t('testimonials.items.0.content')}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-600 font-bold">
                                    {t('testimonials.items.0.initials')}
                                </div>
                                <div>
                                    <p className="font-bold text-navy-blue">{t('testimonials.items.0.author')}</p>
                                    <p className="text-sm text-neutral-gray">{t('testimonials.items.0.role')}</p>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="dm-benefit-slideRight bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500/30 mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
                            <p className="text-neutral-gray text-lg leading-relaxed mb-6">
                                {t('testimonials.items.1.content')}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-600 font-bold">
                                    {t('testimonials.items.1.initials')}
                                </div>
                                <div>
                                    <p className="font-bold text-navy-blue">{t('testimonials.items.1.author')}</p>
                                    <p className="text-sm text-neutral-gray">{t('testimonials.items.1.role')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-24 bg-white" id="methodology">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('methodology.title')}
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            {t('methodology.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-teal-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                1
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">{t('methodology.steps.0.title')}</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">{t('methodology.steps.0.duration')}</p>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('methodology.steps.0.description')}
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-teal-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                2
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">{t('methodology.steps.1.title')}</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">{t('methodology.steps.1.subtitle')}</p>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('methodology.steps.1.description')}
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-teal-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                3
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">{t('methodology.steps.2.title')}</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">{t('methodology.steps.2.subtitle')}</p>
                            <div className="space-y-2">
                                {(t.raw('methodology.steps.2.items') as string[]).map((item, idx) => (
                                    <p key={idx} className="text-neutral-gray text-sm">• {item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-navy-blue text-white" id="benefits">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <h2 className="font-display text-4xl lg:text-5xl mb-6">
                                {t('benefits.title')}
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                {t('benefits.description')}
                            </p>
                            <ul className="space-y-4">
                                {(t.raw('benefits.list') as string[]).map((item, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400 mr-3"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span className="text-gray-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div {...motionConfig.slideRight} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <div className="grid grid-cols-2 gap-6 text-center">
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-teal-400 mb-2">{t('stats.experience.value')}</div>
                                    <p className="text-sm text-gray-300">{t('stats.experience.label')}</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-teal-400 mb-2">{t('stats.projects.value')}</div>
                                    <p className="text-sm text-gray-300">{t('stats.projects.label')}</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-teal-400 mb-2">{t('stats.locations.value')}</div>
                                    <p className="text-sm text-gray-300">{t('stats.locations.label')}</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-teal-400 mb-2">{t('stats.experts.value')}</div>
                                    <p className="text-sm text-gray-300">{t('stats.experts.label')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white" id="faq">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('faq.title')}
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {(t.raw('faq.items') as any[]).map((item, index) => (
                            <div key={index} {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                                <h3 className="font-display text-xl text-navy-blue mb-4">{item.question}</h3>
                                <p className="text-neutral-gray leading-relaxed">
                                    {item.answer}
                                </p>
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
