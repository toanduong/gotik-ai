"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function DataStrategy() {
    const t = useTranslations("pages.dataStrategy");

    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.ds-hero-1', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.ds-hero-2', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.ds-hero-3', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
            });

            inView('.ds-benefit-slideLeft', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
            });

            inView('.ds-benefit-slideRight', ({ target }: any) => {
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
                <div className="ds-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl"></div>
                <div className="ds-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="ds-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                            {t('hero.badge')}
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            {t('hero.title')} <span className="text-sky-blue italic">{t('hero.titleHighlight')}</span>
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
                        <p className="text-lg text-neutral-gray">
                            {t('benefits.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {t.raw('benefits.items').map((item: any, index: number) => (
                            <div
                                key={index}
                                {...(index % 2 === 0 ? motionConfig.slideLeft : motionConfig.slideRight)}
                                className={index % 2 === 0 ? "ds-benefit-slideLeft" : "ds-benefit-slideRight"}
                            >
                                <div className={`${index % 2 === 0 ? 'bg-slate-50' : 'bg-sky-blue/5'} rounded-3xl p-8 border border-sky-blue/10 h-full`}>
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className={`w-12 h-12 rounded-xl ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white shadow-sm'} flex items-center justify-center flex-shrink-0 text-sky-blue`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" x2="12" y1="22" y2="12" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="font-display text-2xl text-navy-blue mb-3">{item.title}</h3>
                                            <p className="text-neutral-gray leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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

                    <div className="grid md:grid-cols-2 gap-8">
                        {t.raw('services.items').map((service: any, index: number) => (
                            <div key={index} {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                                <div className={`w-14 h-14 rounded-2xl ${index === 0 ? 'bg-blue-50 text-sky-blue group-hover:bg-sky-blue' : index === 1 ? 'bg-purple-50 text-purple-600 group-hover:bg-purple-600' : index === 2 ? 'bg-teal-50 text-teal-600 group-hover:bg-teal-600' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600'} flex items-center justify-center mb-6 group-hover:text-white transition-colors duration-300`}>
                                    {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>}
                                    {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h10" /><path d="M7 12h10" /><path d="M7 17h10" /></svg>}
                                    {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="7.5 4.21 12 6.81 16.5 4.21" /><polyline points="7.5 19.79 7.5 14.6 3 12" /><polyline points="21 12 16.5 14.6 16.5 19.79" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" x2="12" y1="22.08" y2="12" /></svg>}
                                    {index === 3 && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
                                </div>
                                <h3 className="font-display text-2xl text-navy-blue mb-4">{service.title}</h3>
                                <p className="text-neutral-gray leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.points.map((point: string, pIndex: number) => (
                                        <li key={pIndex} className="flex items-center text-sm text-neutral-gray">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-24 bg-white" id="approach">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <div className="inline-block px-4 py-1.5 mb-6 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                                {t('approach.badge')}
                            </div>
                            <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">{t('approach.title')}</h2>
                            <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                                {t('approach.description')}
                            </p>
                            <div className="space-y-6">
                                {t.raw('approach.steps').map((step: any, index: number) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-sky-blue/10 flex items-center justify-center flex-shrink-0 text-sky-blue font-bold">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-display text-lg text-navy-blue mb-2">{step.title}</h4>
                                            <p className="text-neutral-gray text-sm">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div {...motionConfig.slideRight} className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-50 border border-sky-blue/10 p-12">
                            <div className="aspect-square bg-gradient-to-br from-sky-blue/20 to-navy-blue/20 rounded-2xl flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    <polyline points="3.29 7 12 12 20.71 7" />
                                    <line x1="12" x2="12" y1="22" y2="12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50" id="faq">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('faq.title')}
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {t.raw('faq.items').map((item: any, index: number) => (
                            <div key={index} {...motionConfig.slideUp} className="bg-white rounded-2xl p-8 border border-sky-blue/10">
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
