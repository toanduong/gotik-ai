"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function SoftwareArchitecture() {
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
                            Software Architecture
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            Agile Architectures for <span className="text-indigo-500 italic">Future-Ready Software</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            We develop evolutionary architectures that enable quick adjustments and continuous improvements. Robust, scalable solutions that master current challenges and flexibly adapt to future requirements.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div {...withDelay(motionConfig.slideUp, 0.3)} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-indigo-500/10 p-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-24 h-24 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600 font-bold text-2xl">
                                DV
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-navy-blue text-lg">Dao Vo</h3>
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

            {/* Architecture Services Grid */}
            <section className="py-24 bg-white" id="services">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Our Architecture Services
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            From cloud-native solutions to microservices architectures – we design systems that grow with your business.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-sky-blue mb-4 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Cloud Architecture</h3>
                            <p className="text-sm text-neutral-gray mb-4">Scalable and efficient cloud solutions with expertise in Cloud-Native, IaaS, PaaS, and SaaS implementations.</p>
                            
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Microservices</h3>
                            <p className="text-sm text-neutral-gray mb-4">Independent, scalable services that each cover specific business functions with high flexibility and modularity.</p>
                           
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Serverless Architecture</h3>
                            <p className="text-sm text-neutral-gray mb-4">Cost-effective and easily scalable applications using modern serverless technologies and paradigms.</p>
                            
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Evolutionary Architecture</h3>
                            <p className="text-sm text-neutral-gray mb-4">Adaptable architectures designed for incremental change, ensuring long-term value and business agility.</p>
                            
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Service-Oriented Architecture</h3>
                            <p className="text-sm text-neutral-gray mb-4">SOA solutions enabling modular and reusable software components for maximum flexibility.</p>
                            
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Distributed Systems</h3>
                            <p className="text-sm text-neutral-gray mb-4">Components and services running across multiple machines for enhanced reliability and performance.</p>
                            
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-2">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                                </div>
                                <div>
                                    <h3 className="font-display text-lg text-navy-blue mb-3">Domain-Driven Design</h3>
                                    <p className="text-sm text-neutral-gray mb-4">Strategic approach to software design that focuses on the core domain and domain logic, with strong bounded contexts and clear separation of concerns.</p>
                                    
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
                            What Our Clients Say
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideLeft} className="sa-benefit-slideLeft bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500/30 mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                            <p className="text-neutral-gray text-lg leading-relaxed mb-6">
                                "The microservices architecture that Gotik designed for us has transformed our ability to scale. We can now deploy updates independently and respond to market changes faster than ever before."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-600 font-bold">
                                    MS
                                </div>
                                <div>
                                    <p className="font-bold text-navy-blue">Michael S.</p>
                                    <p className="text-sm text-neutral-gray">CTO, Technology Company</p>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="sa-benefit-slideRight bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500/30 mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                            <p className="text-neutral-gray text-lg leading-relaxed mb-6">
                                "Working with Gotik on our cloud migration was a game-changer. Their evolutionary architecture approach meant we could migrate incrementally without disrupting our business operations."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-600 font-bold">
                                    LW
                                </div>
                                <div>
                                    <p className="font-bold text-navy-blue">Laura W.</p>
                                    <p className="text-sm text-neutral-gray">Head of IT, Financial Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-24 bg-white" id="approach">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Our Architecture Approach
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            We follow a systematic approach to ensure your software architecture is robust, scalable, and aligned with your business goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-indigo-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                1
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Analysis & Assessment</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">Understanding your current state</p>
                            <p className="text-neutral-gray leading-relaxed">
                                We analyze your existing systems, identify bottlenecks, and assess your technical debt to create a clear baseline.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-indigo-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                2
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Architecture Design</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">Crafting the optimal solution</p>
                            <p className="text-neutral-gray leading-relaxed">
                                We design evolutionary architectures that balance current needs with future flexibility, selecting the right patterns and technologies.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-indigo-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                3
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Implementation & Evolution</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">Building for continuous improvement</p>
                            <div className="space-y-2">
                                <p className="text-neutral-gray text-sm">• Incremental implementation with quick wins</p>
                                <p className="text-neutral-gray text-sm">• DevOps practices & automation</p>
                                <p className="text-neutral-gray text-sm">• Continuous monitoring & optimization</p>
                                <p className="text-neutral-gray text-sm">• Knowledge transfer & team enablement</p>
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
                                Why Choose Gotik for Software Architecture?
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Our expertise in software architecture guarantees robust and performant solutions that efficiently support your business processes with maximum flexibility.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Evolutionary architectures designed for incremental change</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Cloud-native expertise across all major platforms</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Microservices and distributed systems specialists</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Future-proof solutions with high scalability</span>
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideRight} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <div className="grid grid-cols-2 gap-6 text-center">
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-indigo-400 mb-2">20+</div>
                                    <p className="text-sm text-gray-300">Years Architecting Software</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-indigo-400 mb-2">300+</div>
                                    <p className="text-sm text-gray-300">Architectures Designed</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-indigo-400 mb-2">99.9%</div>
                                    <p className="text-sm text-gray-300">System Uptime</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-indigo-400 mb-2">50+</div>
                                    <p className="text-sm text-gray-300">Architecture Experts</p>
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
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">What is evolutionary architecture?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Evolutionary architecture is an approach that designs for incremental change as a first principle. Rather than trying to predict all future requirements upfront, evolutionary architectures embrace change and make it easy to modify the system over time. This approach uses principles like strong bounded contexts, advanced DevOps practices, and automated testing to enable safe, continuous evolution of the software.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">When should I consider microservices architecture?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Microservices are ideal when you need high scalability, independent deployment of different business capabilities, or have multiple teams working on different parts of the system. They're particularly valuable for complex domains that benefit from clear separation of concerns and when you need to use different technologies for different services. However, they add operational complexity, so they're best suited for organizations ready to invest in DevOps practices and distributed systems management.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">How do you ensure our architecture remains flexible?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                We design architectures with flexibility in mind by using principles like loose coupling, strong cohesion, and clear boundaries between components. We employ patterns like Domain-Driven Design to align software structure with business domains, use cloud-native approaches for scalability, and implement comprehensive automated testing to enable safe refactoring. Regular architecture reviews and continuous improvement practices ensure the architecture evolves with your business needs.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">What's the difference between cloud-native and cloud-ready?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Cloud-ready applications can run in the cloud but may not fully leverage cloud capabilities. Cloud-native applications are specifically designed to take advantage of cloud computing frameworks – they're built for scalability, resilience, and agility. Cloud-native architectures typically use microservices, containers, dynamic orchestration, and DevOps practices. They enable you to experiment with innovative services, scale automatically based on demand, and achieve higher resilience through distributed architectures.
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
