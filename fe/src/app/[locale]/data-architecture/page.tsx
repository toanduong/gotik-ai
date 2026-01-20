"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function DataArchitecture() {
    const t = useTranslations('pages.dataArchitecture');

    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.da-hero-1', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.da-hero-2', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.da-hero-3', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
            });

            inView('.da-benefit-slideLeft', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
            });

            inView('.da-benefit-slideRight', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
            });

        }
    }, []);

    return (
        <main className="relative bg-white min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                <div className="da-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
                <div className="da-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="da-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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

            {/* Challenges Section */}
            <section className="py-24 bg-white" id="challenges">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('challenges.title')}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-2">{t('challenges.items.transparency.title')}</h3>
                            <p className="text-neutral-gray text-sm">{t('challenges.items.transparency.description')}</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" /></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-2">{t('challenges.items.silos.title')}</h3>
                            <p className="text-neutral-gray text-sm">{t('challenges.items.silos.description')}</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-sky-blue mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="7.5 4.21 12 6.81 16.5 4.21" /><polyline points="7.5 19.79 7.5 14.6 3 12" /><polyline points="21 12 16.5 14.6 16.5 19.79" /></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-2">{t('challenges.items.integration.title')}</h3>
                            <p className="text-neutral-gray text-sm">{t('challenges.items.integration.description')}</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-2">{t('challenges.items.compliance.title')}</h3>
                            <p className="text-neutral-gray text-sm">{t('challenges.items.compliance.description')}</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10 md:col-span-2 lg:col-span-2">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-2">{t('challenges.items.delivery.title')}</h3>
                            <p className="text-neutral-gray text-sm">{t('challenges.items.delivery.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Assessment CTA */}
            <section className="py-16 bg-slate-100" id="assessment">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div {...motionConfig.slideLeft}>
                            <div className="inline-block px-4 py-1.5 mb-6 border border-teal-500/30 rounded-full bg-teal-500/5 text-teal-600 text-xs font-bold tracking-wider uppercase">
                                {t('assessment.badge')}
                            </div>
                            <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                                {t('assessment.title')}
                            </h2>
                            <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                                {t('assessment.description')}
                            </p>
                        </div>

                        <div {...motionConfig.slideRight} className="relative rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="/images/Teaser_Data-Management-assessment-light.jpg"
                                alt={t('assessment.imageAlt')}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-white font-display text-xl font-semibold">{t('assessment.imageTitle')}</p>
                                <p className="text-white/80 text-sm mt-2">{t('assessment.imageSubtitle')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4-Phase Approach */}
            <section className="py-24 bg-white" id="approach">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('approach.title')}
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            {t('approach.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideLeft} className="da-benefit-slideLeft bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 border border-teal-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-teal-500 text-white font-display font-bold text-xl flex items-center justify-center">
                                    1
                                </div>
                                <div>
                                    <span className="text-teal-600 text-xs font-bold tracking-wider uppercase">{t('approach.phases.0.badge')}</span>
                                    <h3 className="font-display text-2xl text-navy-blue">{t('approach.phases.0.title')}</h3>
                                </div>
                            </div>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('approach.phases.0.description')}
                            </p>
                        </div>

                        <div {...motionConfig.slideRight} className="da-benefit-slideRight bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-sky-blue text-white font-display font-bold text-xl flex items-center justify-center">
                                    2
                                </div>
                                <div>
                                    <span className="text-sky-blue text-xs font-bold tracking-wider uppercase">{t('approach.phases.1.badge')}</span>
                                    <h3 className="font-display text-2xl text-navy-blue">{t('approach.phases.1.title')}</h3>
                                </div>
                            </div>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('approach.phases.1.description')}
                            </p>
                        </div>

                        <div {...motionConfig.slideLeft} className="da-benefit-slideLeft bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 border border-purple-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-purple-500 text-white font-display font-bold text-xl flex items-center justify-center">
                                    3
                                </div>
                                <div>
                                    <span className="text-purple-600 text-xs font-bold tracking-wider uppercase">{t('approach.phases.2.badge')}</span>
                                    <h3 className="font-display text-2xl text-navy-blue">{t('approach.phases.2.title')}</h3>
                                </div>
                            </div>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('approach.phases.2.description')}
                            </p>
                        </div>

                        <div {...motionConfig.slideRight} className="da-benefit-slideRight bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 border border-green-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-green-500 text-white font-display font-bold text-xl flex items-center justify-center">
                                    4
                                </div>
                                <div>
                                    <span className="text-green-600 text-xs font-bold tracking-wider uppercase">{t('approach.phases.3.badge')}</span>
                                    <h3 className="font-display text-2xl text-navy-blue">{t('approach.phases.3.title')}</h3>
                                </div>
                            </div>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('approach.phases.3.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-24 bg-slate-50" id="results">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('results.title')}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(t.raw('results.items') as string[]).map((item, index) => (
                            <div key={index} {...motionConfig.slideUp} className="bg-white rounded-2xl p-6 shadow-md border border-sky-blue/10 flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                                <span className="text-neutral-gray">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Clients Trust Section */}
            <section className="py-24 bg-navy-blue text-white" id="why-trust">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl mb-6">
                            {t('trust.title')}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div {...motionConfig.slideUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h3 className="font-display text-xl mb-4">{t('trust.reasons.expertise.title')}</h3>
                            <p className="text-gray-300 text-sm">{t('trust.reasons.expertise.description')}</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-sky-blue/20 flex items-center justify-center text-sky-blue mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                            </div>
                            <h3 className="font-display text-xl mb-4">{t('trust.reasons.holistic.title')}</h3>
                            <p className="text-gray-300 text-sm">{t('trust.reasons.holistic.description')}</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <h3 className="font-display text-xl mb-4">{t('trust.reasons.sustainable.title')}</h3>
                            <p className="text-gray-300 text-sm">{t('trust.reasons.sustainable.description')}</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" /></svg>
                            </div>
                            <h3 className="font-display text-xl mb-4">{t('trust.reasons.enterprise.title')}</h3>
                            <p className="text-gray-300 text-sm">{t('trust.reasons.enterprise.description')}</p>
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
