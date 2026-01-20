"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function InternetOfThings() {
    const t = useTranslations("pages.internetOfThings");

    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.iot-hero-1', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.iot-hero-2', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.iot-hero-3', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
            });

            inView('.iot-benefit-slideLeft', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
            });

            inView('.iot-benefit-slideRight', ({ target }: any) => {
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
                <div className="iot-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="iot-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="iot-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-cyan-500/30 rounded-full bg-cyan-500/5 text-cyan-600 text-xs font-bold tracking-wider uppercase">
                            {t('hero.badge')}
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            {t('hero.title')} <span className="text-cyan-500 italic">{t('hero.titleHighlight')}</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            {t('hero.description')}
                        </p>
                    </div>

                </div>
            </section>

            {/* IoT Use Cases Grid */}
            <section className="py-24 bg-white" id="use-cases">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('useCases.title')}
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            {t('useCases.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.raw('useCases.items').map((item: any, index: number) => (
                            <div
                                key={item.id}
                                {...motionConfig.slideUp}
                                className={`group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ${index >= 6 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                            >
                                <div className={`flex ${index >= 6 ? 'items-start gap-4' : 'flex-col'}`}>
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 flex-shrink-0
                                        ${index === 0 ? 'bg-blue-50 text-sky-blue group-hover:bg-sky-blue' :
                                            index === 1 ? 'bg-purple-50 text-purple-600 group-hover:bg-purple-600' :
                                                index === 2 ? 'bg-green-50 text-green-600 group-hover:bg-green-600' :
                                                    index === 3 ? 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600' :
                                                        index === 4 ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-600' :
                                                            index === 5 ? 'bg-rose-50 text-rose-600 group-hover:bg-rose-600' :
                                                                'bg-teal-50 text-teal-600 group-hover:bg-teal-600'} group-hover:text-white`}
                                    >
                                        {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" /></svg>}
                                        {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>}
                                        {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M5 12l7-7 7 7" /></svg>}
                                        {index === 3 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>}
                                        {index === 4 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" /><path d="M12 3v6" /></svg>}
                                        {index === 5 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>}
                                        {index >= 6 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>}
                                    </div>
                                    <div>
                                        <h3 className="font-display text-lg text-navy-blue mb-3">{item.title}</h3>
                                        <p className="text-sm text-neutral-gray mb-4">{item.description}</p>
                                        <a href={`#${item.id}`} className={`font-semibold text-sm hover:text-navy-blue transition-colors
                                            ${index === 0 ? 'text-sky-blue' :
                                                index === 1 ? 'text-purple-600' :
                                                    index === 2 ? 'text-green-600' :
                                                        index === 3 ? 'text-indigo-600' :
                                                            index === 4 ? 'text-orange-600' :
                                                                index === 5 ? 'text-rose-600' :
                                                                    'text-teal-600'}`}
                                        >
                                            {item.cta}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-24 bg-slate-50" id="success-stories">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            {t('successStories.title')}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {t.raw('successStories.items').map((story: any, index: number) => (
                            <div
                                key={index}
                                {...(index % 2 === 0 ? motionConfig.slideLeft : motionConfig.slideRight)}
                                className={`bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10 ${index === 2 ? 'md:col-span-2' : (index % 2 === 0 ? 'iot-benefit-slideLeft' : 'iot-benefit-slideRight')}`}
                            >
                                <div className={`flex flex-col ${index === 2 ? 'md:flex-row gap-6' : ''} items-start`}>
                                    <div className="flex-shrink-0">
                                        <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-600 text-xs font-bold rounded-full mb-4 uppercase">
                                            {story.badge}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">{story.title}</h3>
                                        <p className="text-neutral-gray leading-relaxed mb-4">
                                            {story.description}
                                        </p>
                                        {story.points ? (
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {story.points.map((pt: string, ptIndex: number) => (
                                                    <div key={ptIndex} className="flex items-center gap-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><polyline points="20 6 9 17 4 12" /></svg>
                                                        <span className="text-sm text-neutral-gray">{pt}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : story.point ? (
                                            <div className="flex items-center gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><polyline points="20 6 9 17 4 12" /></svg>
                                                <span className="text-sm text-neutral-gray">{story.point}</span>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
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
                                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-cyan-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 mr-3"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span className="text-gray-200">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div {...motionConfig.slideRight} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <div className="grid grid-cols-2 gap-6 text-center">
                                {t.raw('whyChoose.stats').map((stat: any, index: number) => (
                                    <div key={index} className="bg-white/10 rounded-2xl p-6">
                                        <div className="text-4xl font-display font-bold text-cyan-400 mb-2">{stat.value}</div>
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
