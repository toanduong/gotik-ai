"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function SoftwareArchitecture() {
    const t = useTranslations("pages.softwareArchitecture");

    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.sa-hero-1', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.sa-hero-2', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.sa-hero-3', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
            });

            inView('.sa-benefit-slideLeft', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
            });

            inView('.sa-benefit-slideRight', ({ target }: any) => {
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
                <div className="sa-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
                <div className="sa-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="sa-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-indigo-500/30 rounded-full bg-indigo-500/5 text-indigo-600 text-xs font-bold tracking-wider uppercase">
                            {t('hero.badge')}
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            {t('hero.title')} <span className="text-indigo-500 italic">{t('hero.titleHighlight')}</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            {t('hero.description')}
                        </p>
                    </div>

                </div>
            </section>

            {/* Architecture Services Grid */}
            <section className="py-24 bg-white" id="services">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('services.title')}
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            {t('services.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.raw('services.items').map((item: any, index: number) => (
                            <div
                                key={index}
                                {...motionConfig.slideUp}
                                className={`group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ${index === 6 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                            >
                                <div className={`flex ${index === 6 ? 'items-start gap-4' : 'flex-col'}`}>
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 flex-shrink-0
                                        ${index === 0 ? 'bg-blue-50 text-sky-blue group-hover:bg-sky-blue' :
                                            index === 1 ? 'bg-purple-50 text-purple-600 group-hover:bg-purple-600' :
                                                index === 2 ? 'bg-green-50 text-green-600 group-hover:bg-green-600' :
                                                    index === 3 ? 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600' :
                                                        index === 4 ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-600' :
                                                            index === 5 ? 'bg-rose-50 text-rose-600 group-hover:bg-rose-600' :
                                                                'bg-teal-50 text-teal-600 group-hover:bg-teal-600'} group-hover:text-white`}
                                    >
                                        {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" x2="12" y1="2" y2="15" /></svg>}
                                        {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" /></svg>}
                                        {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
                                        {index === 3 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>}
                                        {index === 4 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>}
                                        {index === 5 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="7.5 4.21 12 6.81 16.5 4.21" /></svg>}
                                        {index === 6 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>}
                                    </div>
                                    <div>
                                        <h3 className="font-display text-lg text-navy-blue mb-3">{item.title}</h3>
                                        <p className="text-sm text-neutral-gray mb-4">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                        {t.raw('testimonials.items').map((item: any, index: number) => (
                            <div
                                key={index}
                                {...(index === 0 ? motionConfig.slideLeft : motionConfig.slideRight)}
                                className={`${index === 0 ? 'sa-benefit-slideLeft' : 'sa-benefit-slideRight'} bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500/30 mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
                                <p className="text-neutral-gray text-lg leading-relaxed mb-6">
                                    {item.text}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-600 font-bold">
                                        {item.author.split(' ').map((n: string) => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="font-bold text-navy-blue">{item.author}</p>
                                        <p className="text-sm text-neutral-gray">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
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

                    <div className="grid md:grid-cols-3 gap-8">
                        {t.raw('approach.steps').map((step: any, index: number) => (
                            <div key={index} {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-indigo-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                    {index + 1}
                                </div>
                                <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">{step.title}</h3>
                                <p className="text-sky-blue font-semibold text-sm mb-4">{step.subtitle}</p>
                                {step.description && (
                                    <p className="text-neutral-gray leading-relaxed">
                                        {step.description}
                                    </p>
                                )}
                                {step.points && (
                                    <div className="space-y-2">
                                        {step.points.map((pt: string, ptIndex: number) => (
                                            <p key={ptIndex} className="text-neutral-gray text-sm">• {pt}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-navy-blue text-white" id="benefits">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <h2 className="font-display text-4xl lg:text-5xl mb-6">
                                {t('whyChoose.title')}
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                {t('whyChoose.description')}
                            </p>
                            <ul className="space-y-4">
                                {t.raw('whyChoose.features').map((feature: string, index: number) => (
                                    <li key={index} className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 mr-3"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span className="text-gray-200">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div {...motionConfig.slideRight} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <div className="grid grid-cols-2 gap-6 text-center">
                                {t.raw('whyChoose.stats').map((stat: any, index: number) => (
                                    <div key={index} className="bg-white/10 rounded-2xl p-6">
                                        <div className="text-4xl font-display font-bold text-indigo-400 mb-2">{stat.value}</div>
                                        <p className="text-sm text-gray-300">{stat.label}</p>
                                    </div>
                                ))}
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
