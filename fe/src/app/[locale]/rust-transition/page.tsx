"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function RustTransition() {
    const t = useTranslations("pages.rustTransition");

    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.rt-hero-1', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.rt-hero-2', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.rt-hero-3', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
            });

            inView('.rt-benefit-slideLeft', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
            });

            inView('.rt-benefit-slideRight', ({ target }: any) => {
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
                <div className="rt-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="rt-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="rt-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-orange-500/30 rounded-full bg-orange-500/5 text-orange-600 text-xs font-bold tracking-wider uppercase">
                            {t('hero.badge')}
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            {t('hero.title')} <span className="text-orange-500 italic">{t('hero.titleHighlight')}</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            {t('hero.description')}
                        </p>
                    </div>

                </div>
            </section>

            {/* Why Rust Section */}
            <section className="pb-24 bg-white" id="why-rust">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('whyRust.title')}
                        </h2>
                        <p className="text-lg text-neutral-gray leading-relaxed">
                            {t('whyRust.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {t.raw('whyRust.features').map((feature: any, index: number) => (
                            <div key={index} {...motionConfig.slideUp} className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white mx-auto mb-6">
                                    {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                                    {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>}
                                    {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
                                </div>
                                <h3 className="font-display text-xl text-navy-blue mb-4">{feature.title}</h3>
                                <p className="text-neutral-gray leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-slate-50" id="benefits">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('benefits.title')}
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            {t('benefits.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {t.raw('benefits.items').map((item: any, index: number) => (
                            <div
                                key={index}
                                {...(index === 0 ? motionConfig.slideLeft : index === 2 ? motionConfig.slideRight : motionConfig.slideUp)}
                                className={`${index === 0 ? 'rt-benefit-slideLeft' : index === 2 ? 'rt-benefit-slideRight' : ''} bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 
                                    ${index === 0 ? 'bg-green-50 text-green-600' :
                                        index === 1 ? 'bg-blue-50 text-sky-blue' :
                                            'bg-orange-50 text-orange-600'}`}
                                >
                                    {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>}
                                    {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 15l2 2 4-4" /></svg>}
                                    {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M12 2v7.5" /><path d="m19 5-5.23 5.23" /><path d="M22 12h-7.5" /><path d="m19 19-5.23-5.23" /></svg>}
                                </div>
                                <h3 className="font-display text-xl text-navy-blue mb-4">{item.title}</h3>
                                <p className="text-neutral-gray leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Approach Section */}
            <section className="py-24 bg-white" id="approach">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                                {t('approach.title')}
                            </h2>
                            <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                                {t('approach.description')}
                            </p>
                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                                <p className="font-display text-xl font-semibold">{t('approach.highlight.title')}</p>
                                <p className="text-white/80 mt-2">{t('approach.highlight.description')}</p>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="relative bg-slate-50 rounded-3xl p-8 border border-sky-blue/10">
                            <div className="grid grid-cols-2 gap-4">
                                {t.raw('approach.steps').map((step: any, index: number) => (
                                    <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                                        <div className="text-3xl font-display font-bold text-orange-500 mb-2">{step.id}</div>
                                        <p className="text-sm text-neutral-gray font-medium">{step.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Details Section */}
            <section className="py-24 bg-navy-blue text-white" id="services">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <span className="text-orange-400 font-bold tracking-widest uppercase text-xs mb-3 block">{t('details.badge')}</span>
                        <h2 className="font-display text-4xl lg:text-5xl mb-6">
                            {t('details.title')}
                        </h2>
                        <p className="text-lg text-gray-300">
                            {t('details.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {t.raw('details.items').map((item: any, index: number) => (
                            <div key={index} {...motionConfig.slideUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 
                                    ${index === 0 ? 'bg-orange-500/20 text-orange-400' :
                                        index === 1 ? 'bg-sky-blue/20 text-sky-blue' :
                                            'bg-green-500/20 text-green-400'}`}
                                >
                                    {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
                                    {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" /></svg>}
                                    {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M12 18v-6" /><path d="m9 15 3 3 3-3" /></svg>}
                                </div>
                                <h3 className="font-display text-xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {item.description}
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
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('faq.title')}
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {t.raw('faq.items').map((item: any, index: number) => (
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
