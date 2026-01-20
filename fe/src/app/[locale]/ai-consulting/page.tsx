"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function AIConsulting() {
    const t = useTranslations('pages.aiConsulting');
    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.ac-hero-1', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.ac-hero-2', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.ac-hero-3', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
            });

            inView('.ac-benefit-slideLeft', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
            });

            inView('.ac-benefit-slideRight', ({ target }: any) => {
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
                <div className="ac-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="ac-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="ac-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-purple-500/30 rounded-full bg-purple-500/5 text-purple-600 text-xs font-bold tracking-wider uppercase">
                            {t('hero.badge')}
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            {t('hero.title')} <span className="text-purple-500 italic">{t('hero.titleHighlight')}</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            {t('hero.description')}
                        </p>
                    </div>

                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white" id="benefits">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('benefits.title')}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div {...motionConfig.slideLeft} className="ac-benefit-slideLeft bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 border border-purple-100">
                            <div className="w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center text-white mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">{t('benefits.items.optimize.title')}</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('benefits.items.optimize.description')}
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 border border-purple-100">
                            <div className="w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center text-white mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">{t('benefits.items.knowledge.title')}</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('benefits.items.knowledge.description')}
                            </p>
                        </div>

                        <div {...motionConfig.slideRight} className="ac-benefit-slideRight bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 border border-purple-100">
                            <div className="w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center text-white mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" /></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">{t('benefits.items.automate.title')}</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('benefits.items.automate.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-slate-50" id="services">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('services.title')}
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            {t('services.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="group bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M12 18v-6" /><path d="m9 15 3 3 3-3" /></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">{t('services.items.innovation.title')}</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                {t('services.items.innovation.description')}
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-sky-blue mb-6 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v6m0 6v6" /><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24" /><path d="m1 12h6m6 0h6" /><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24" /></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">{t('services.items.solutions.title')}</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                {t('services.items.solutions.description')}
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" /><path d="M12 2v8" /><path d="M12 14v6" /></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">{t('services.items.hub.title')}</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                {t('services.items.hub.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Hub Section */}
            <section className="py-24 bg-white" id="ai-hub">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <div className="inline-block px-4 py-1.5 mb-6 border border-purple-500/30 rounded-full bg-purple-500/5 text-purple-600 text-xs font-bold tracking-wider uppercase">
                                {t('aiHub.badge')}
                            </div>
                            <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                                {t('aiHub.title')}
                            </h2>
                            <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                                {t('aiHub.description')}
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-blue mb-1">{t('aiHub.features.configurable.title')}</h4>
                                        <p className="text-sm text-neutral-gray">{t('aiHub.features.configurable.description')}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-blue mb-1">{t('aiHub.features.protection.title')}</h4>
                                        <p className="text-sm text-neutral-gray">{t('aiHub.features.protection.description')}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 text-sky-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-blue mb-1">{t('aiHub.features.llm.title')}</h4>
                                        <p className="text-sm text-neutral-gray">{t('aiHub.features.llm.description')}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0 text-teal-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-blue mb-1">{t('aiHub.features.insights.title')}</h4>
                                        <p className="text-sm text-neutral-gray">{t('aiHub.features.insights.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-50 border border-sky-blue/10">
                            <img
                                src="/images/Use_Cases_Umfassendes-Wissensmanagement.jpg"
                                alt={t('aiHub.imageAlt')}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-white font-display text-xl font-semibold">{t('aiHub.imageTitle')}</p>
                                <p className="text-white/80 text-sm mt-2">{t('aiHub.imageSubtitle')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation Workshop Section */}
            <section className="py-24 bg-navy-blue text-white" id="workshop">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <span className="text-purple-400 font-bold tracking-widest uppercase text-xs mb-3 block">{t('workshop.badge')}</span>
                            <h2 className="font-display text-4xl lg:text-5xl mb-6">
                                {t('workshop.title')}
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                {t('workshop.description')}
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-navy-blue bg-white rounded-lg hover:bg-gray-100 transition-all duration-300"
                            >
                                {t('workshop.cta')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                            </a>
                        </div>

                        <div {...motionConfig.slideRight} className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/Generative-AI-Innovation-Workshop.jpg"
                                alt={t('workshop.imageAlt')}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-white font-display text-xl font-semibold">{t('workshop.imageTitle')}</p>
                                <p className="text-white/80 text-sm mt-2">{t('workshop.imageSubtitle')}</p>
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
                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">{t('faq.items.whatIs.question')}</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('faq.items.whatIs.answer')}
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">{t('faq.items.agents.question')}</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('faq.items.agents.answer')}
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">{t('faq.items.apps.question')}</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('faq.items.apps.answer')}
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">{t('faq.items.act.question')}</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                {t('faq.items.act.answer')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-purple-600" id="cta">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="font-display text-4xl lg:text-5xl text-white mb-6">
                        {t('finalCta.title')}
                    </h2>
                    <p className="text-lg text-white/90 mb-8">
                        {t('finalCta.description')}
                    </p>
                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-purple-600 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300">
                        {t('finalCta.cta')}
                    </a>
                </div>
            </section>

            {/* Contact Section */}
            <Contact />
            <Footer />
        </main>
    );
}
