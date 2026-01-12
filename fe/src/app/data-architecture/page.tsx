"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function DataArchitecture() {
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
                            Data Architecture
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            Foundation for <span className="text-teal-500 italic">Sustainable Data Management</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            A well-thought-out data architecture forms the backbone of successful data management. It defines how data is captured, stored, integrated, transformed, and used to efficiently meet business requirements and enable innovation.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div {...withDelay(motionConfig.slideUp, 0.3)} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-teal-500/10 p-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-24 h-24 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600 font-bold text-2xl">
                                DV
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-navy-blue text-lg">Dao Vo</h3>
                                <p className="text-teal-600 text-sm font-medium">CEO & Gotik Founder</p>
                            </div>
                            <div className="ml-auto">
                                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-navy-blue rounded-lg hover:bg-navy-blue/90 transition-all duration-300">
                                    Free Consultation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="py-24 bg-white" id="challenges">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Do These Data Challenges Sound Familiar?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-2">Lack of Transparency</h3>
                            <p className="text-neutral-gray text-sm">About existing data stocks and their quality</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-2">Data Silos</h3>
                            <p className="text-neutral-gray text-sm">Redundant data storage leading to inconsistencies</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-sky-blue mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-2">Integration Gaps</h3>
                            <p className="text-neutral-gray text-sm">Insufficient integration of new data sources like IoT</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-2">Compliance Issues</h3>
                            <p className="text-neutral-gray text-sm">Difficulties in complying with data protection requirements</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10 md:col-span-2 lg:col-span-2">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-2">Slow Data Delivery</h3>
                            <p className="text-neutral-gray text-sm">For analysis and reporting</p>
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
                                Quick Check
                            </div>
                            <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                                Data Strategy Assessment Light
                            </h2>
                            <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                                You want to know how your company's data strategy stands but have little time? Our Assessment Light is the perfect starting point to evaluate your data maturity.
                            </p>
                        </div>

                        <div {...motionConfig.slideRight} className="relative rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="/images/content/data-management-assessment.jpg"
                                alt="Data Management Assessment"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-white font-display text-xl font-semibold">Your Quick Maturity Check</p>
                                <p className="text-white/80 text-sm mt-2">Get started in minutes</p>
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
                            The 4-Phase Journey to the Right Data Architecture
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            We accompany you through every step of your data architecture transformation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideLeft} className="da-benefit-slideLeft bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 border border-teal-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-teal-500 text-white font-display font-bold text-xl flex items-center justify-center">
                                    1
                                </div>
                                <div>
                                    <span className="text-teal-600 text-xs font-bold tracking-wider uppercase">Phase 1</span>
                                    <h3 className="font-display text-2xl text-navy-blue">Analysis & Goal Definition</h3>
                                </div>
                            </div>
                            <p className="text-neutral-gray leading-relaxed">
                                We capture your business requirements, analyze existing data landscapes, and identify weaknesses and potential for improvement.
                            </p>
                        </div>

                        <div {...motionConfig.slideRight} className="da-benefit-slideRight bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-sky-blue text-white font-display font-bold text-xl flex items-center justify-center">
                                    2
                                </div>
                                <div>
                                    <span className="text-sky-blue text-xs font-bold tracking-wider uppercase">Phase 2</span>
                                    <h3 className="font-display text-2xl text-navy-blue">Conceptualization & Modeling</h3>
                                </div>
                            </div>
                            <p className="text-neutral-gray leading-relaxed">
                                We develop a customized data architecture blueprint – from conceptual to logical to physical data models. Standards, guidelines, and governance are clearly defined.
                            </p>
                        </div>

                        <div {...motionConfig.slideLeft} className="da-benefit-slideLeft bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 border border-purple-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-purple-500 text-white font-display font-bold text-xl flex items-center justify-center">
                                    3
                                </div>
                                <div>
                                    <span className="text-purple-600 text-xs font-bold tracking-wider uppercase">Phase 3</span>
                                    <h3 className="font-display text-2xl text-navy-blue">Implementation & Integration</h3>
                                </div>
                            </div>
                            <p className="text-neutral-gray leading-relaxed">
                                We implement the architecture, integrate relevant data sources, establish ETL processes, and ensure consistent data management across your organization.
                            </p>
                        </div>

                        <div {...motionConfig.slideRight} className="da-benefit-slideRight bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 border border-green-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-green-500 text-white font-display font-bold text-xl flex items-center justify-center">
                                    4
                                </div>
                                <div>
                                    <span className="text-green-600 text-xs font-bold tracking-wider uppercase">Phase 4</span>
                                    <h3 className="font-display text-2xl text-navy-blue">Quality Assurance & Optimization</h3>
                                </div>
                            </div>
                            <p className="text-neutral-gray leading-relaxed">
                                We check data quality, establish monitoring, and continuously optimize the architecture to flexibly support future requirements.
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
                            Results and Artifacts
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Documented as-is analysis of the data landscape",
                            "Target picture and blueprint of data architecture (including data models and data flows)",
                            "Detailed integration and migration plans",
                            "Guidelines and standards for data management and governance",
                            "Implemented data platforms (e.g., Data Warehouse, Data Lake)",
                            "Monitoring and quality reports on data availability and consistency"
                        ].map((item, index) => (
                            <div key={index} {...motionConfig.slideUp} className="bg-white rounded-2xl p-6 shadow-md border border-sky-blue/10 flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
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
                            Why Clients Trust Gotik
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div {...motionConfig.slideUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <h3 className="font-display text-xl mb-4">Comprehensive Expertise</h3>
                            <p className="text-gray-300 text-sm">Over 300 specialists in software engineering, data management, AI, and digital transformation.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-sky-blue/20 flex items-center justify-center text-sky-blue mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                            </div>
                            <h3 className="font-display text-xl mb-4">Holistic Approach</h3>
                            <p className="text-gray-300 text-sm">We think along with you – from the first idea to successful operation.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            </div>
                            <h3 className="font-display text-xl mb-4">Sustainable Results</h3>
                            <p className="text-gray-300 text-sm">Flexible, future-proof digital architectures that deliver real value.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
                            </div>
                            <h3 className="font-display text-xl mb-4">Enterprise Experience</h3>
                            <p className="text-gray-300 text-sm">Understanding complex IT landscapes and demanding integrations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white" id="faq">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            FAQ on Data Strategy
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">What exactly is a data strategy and why is it important for my company?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                A data strategy is a comprehensive plan that defines how your company captures, stores, manages, shares, and uses data as a strategic asset to achieve business goals. It's important because it helps break down data silos, make informed decisions, optimize processes, ensure compliance, and ultimately gain competitive advantages. Without a strategy, data often remains untapped potential or can even lead to inefficiencies and risks.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Is a data strategy also relevant for small and medium-sized enterprises (SMEs)?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Yes, absolutely. SMEs in particular can benefit enormously from a clear data strategy. It enables more efficient operations, better customer knowledge, and faster responses to market changes – often with fewer resources than large corporations. A data strategy tailored to SMEs ensures that data investments are targeted and deliver maximum benefit.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">What is the process for developing a data strategy with Gotik?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Our approach is collaborative and customized. We typically start with an assessment to understand your current situation, challenges, and goals. Based on this, we develop the strategy together with you, define concrete measures, and create an implementation roadmap. We emphasize that the strategy is practical and fits your company.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Is it only about the strategy on paper, or does Gotik also support with implementation?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                We accompany you beyond pure strategy development if desired. Our offering also includes support for implementing data management processes, introducing governance structures, integrating systems, and training your employees. Our goal is to ensure your data strategy is sustainably embedded in the company and delivers measurable results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <Contact />
            <Footer />
        </main>
    );
}
