"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function DataStrategy() {
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
                            Data Strategy
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            Transform Data into <span className="text-sky-blue italic">Strategic Value</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            We help you develop a comprehensive data strategy that turns your data into actionable insights and competitive advantages.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div {...withDelay(motionConfig.slideUp, 0.3)} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-sky-blue/10 p-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                           <div className="w-24 h-24 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600 font-bold text-2xl">
                                DV
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-navy-blue text-lg">David Vu</h3>
                                <p className="text-sky-blue text-sm font-medium">CEO & Gotik Founder</p>
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

            {/* Benefits Section */}
            <section className="py-24 bg-white" id="benefits">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Why Your Business Needs a Data Strategy
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            In today's data-driven world, organizations that can effectively leverage their data gain significant competitive advantages. A well-crafted data strategy enables better decision-making, operational efficiency, and innovation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideLeft} className="ds-benefit-slideLeft">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-sky-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">Data-Driven Decision Making</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            Transform raw data into actionable insights that drive strategic decisions. Our data strategy consulting helps you establish frameworks for evidence-based decision-making across all levels of your organization.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="ds-benefit-slideRight">
                            <div className="bg-sky-blue/5 rounded-3xl p-8 border border-sky-blue/10 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 text-sky-blue shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">Enhanced Operational Efficiency</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            Optimize your business processes through data-driven insights. We help you identify inefficiencies, streamline operations, and automate decision processes to reduce costs and improve performance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideLeft} className="ds-benefit-slideLeft">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">Monetize Your Data Assets</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            Unlock new revenue streams by leveraging your data assets strategically. We guide you in identifying opportunities to monetize data through new products, services, or partnerships.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="ds-benefit-slideRight">
                            <div className="bg-teal-50 rounded-3xl p-8 border border-teal-100 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 text-teal-600 shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">Ensure Data Governance & Compliance</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            Establish robust data governance frameworks that ensure data quality, security, and compliance with regulations like GDPR. Protect your organization while maximizing data value.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-slate-50" id="services">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Our Data Strategy Services
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            Comprehensive consulting services to develop and implement a data strategy aligned with your business objectives.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-sky-blue mb-6 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Data Strategy Development</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                We work with you to develop a comprehensive data strategy that aligns with your business goals. From vision definition to roadmap creation, we ensure your data strategy drives tangible business value.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Data Vision & Mission
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Strategic Roadmap Planning
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Business Value Alignment
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Data Governance Framework</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                Establish robust data governance structures to ensure data quality, security, and compliance. We help you define policies, processes, and organizational structures for effective data management.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Data Quality Standards
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Compliance & Security
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Data Stewardship Models
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Data Architecture Design</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                Design scalable and future-proof data architectures that support your strategic objectives. From data lakes to modern data platforms, we architect solutions that enable innovation.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Modern Data Platform Design
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Data Lake & Warehouse Solutions
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Integration Architecture
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Data Culture & Change Management</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                Foster a data-driven culture throughout your organization. We help you develop the people, processes, and mindset needed to successfully leverage data as a strategic asset.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Data Literacy Programs
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Organizational Change
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Skills Development
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-24 bg-white" id="approach">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <div className="inline-block px-4 py-1.5 mb-6 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                                Our Approach
                            </div>
                            <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">Strategic & Practical Data Strategy</h2>
                            <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                                We combine strategic thinking with practical implementation expertise. Our approach ensures your data strategy is not just a document, but a living framework that drives continuous value creation and adapts to changing business needs.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-sky-blue/10 flex items-center justify-center flex-shrink-0 text-sky-blue font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-display text-lg text-navy-blue mb-2">Assessment & Discovery</h4>
                                        <p className="text-neutral-gray text-sm">Evaluate your current data landscape and identify opportunities</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-sky-blue/10 flex items-center justify-center flex-shrink-0 text-sky-blue font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-display text-lg text-navy-blue mb-2">Strategy Design</h4>
                                        <p className="text-neutral-gray text-sm">Develop a comprehensive strategy aligned with business goals</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-sky-blue/10 flex items-center justify-center flex-shrink-0 text-sky-blue font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-display text-lg text-navy-blue mb-2">Implementation & Execution</h4>
                                        <p className="text-neutral-gray text-sm">Execute the strategy with clear milestones and measurable outcomes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div {...motionConfig.slideRight} className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-50 border border-sky-blue/10 p-12">
                            <div className="aspect-square bg-gradient-to-br from-sky-blue/20 to-navy-blue/20 rounded-2xl flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                    <polyline points="3.29 7 12 12 20.71 7"/>
                                    <line x1="12" x2="12" y1="22" y2="12"/>
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
                            FAQ About Data Strategy
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div {...motionConfig.slideUp} className="bg-white rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">What is a data strategy?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                A data strategy is a comprehensive plan that defines how an organization will collect, manage, analyze, and leverage data to achieve business objectives. It encompasses data governance, architecture, analytics, and organizational change to turn data into a strategic asset.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Why do I need a data strategy?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Without a clear data strategy, organizations struggle with data silos, poor data quality, compliance risks, and missed opportunities. A data strategy provides direction, ensures alignment with business goals, and enables you to maximize the value of your data assets while managing risks effectively.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">How long does it take to develop a data strategy?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                The timeline varies based on organization size and complexity, but typically ranges from 8-16 weeks for strategy development. Implementation is an ongoing process that unfolds over months or years. We work in phases to deliver value incrementally while building toward the long-term vision.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">What's the difference between data strategy and data architecture?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Data strategy is the "what" and "why" – it defines your vision, objectives, and approach to data management. Data architecture is the "how" – it's the technical blueprint for implementing the strategy. A strong data strategy informs and guides architectural decisions, while architecture makes the strategy actionable.
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
