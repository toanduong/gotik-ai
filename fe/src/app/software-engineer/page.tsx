"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function SoftwareEngineer() {
    useEffect(() => {
            if (typeof window !== 'undefined' && (window as any).Motion) {
                const { inView } = (window as any).Motion;
    
                inView('.se-hero-1', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
                });

                inView('.se-hero-2', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
                });
    
                inView('.se-hero-3', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
                });

                inView('.se-benefit-slideLeft', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
                });
    
                inView('.se-benefit-slideRight', ({ target }: any) => {
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
                <div className="se-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl"></div>
                <div className="se-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="se-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                            Software Engineering
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            Transform Your Ideas into <span className="text-sky-blue italic">Excellent Software</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            We turn your ideas into excellent software solutions. Benefit from our expertise and the latest methodological insights.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div {...withDelay(motionConfig.slideUp, 0.3)} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-sky-blue/10 p-8">
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

            {/* Benefits Section */}
            <section className="py-24 bg-white" id="benefits">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Benefits of Professional Software Engineering
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            With over 25 years of experience in software development, we have a deep understanding of the challenges and needs of companies of all sizes and industries.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideLeft} className="se-benefit-slideLeft">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-sky-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">Excellent Custom Software</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            Our tailored software solutions are characterized by the highest quality down to the smallest detail. We implement your project not only skillfully technically, but also incorporate the latest methodological insights to develop excellent custom software.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="se-benefit-slideRight">
                            <div className="bg-sky-blue/5 rounded-3xl p-8 border border-sky-blue/10 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 text-sky-blue shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">Comprehensive Solution Portfolio</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            Our offering covers the entire solution spectrum, from components and interfaces to comprehensive platforms and entire software suites. Whether simple or highly complex requirements, we develop tailored solutions for Cloud, Web, Mobile, Desktop, and Embedded systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideLeft} className="se-benefit-slideLeft">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/><path d="m1 12h6m6 0h6"/><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">Versatile Technology Competence</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            We are familiar with a wide range of technologies, methods, and tools. This broad spectrum of expertise allows us to select the best options for your specific project.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="se-benefit-slideRight">
                            <div className="bg-teal-50 rounded-3xl p-8 border border-teal-100 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 text-teal-600 shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">Cross-Industry Know-how</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            Our team consists of proven specialists who are familiar with different domains and technologies. This cross-industry expertise enables us to respond flexibly and effectively to the individual requirements and challenges of your project.
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
                            Our Software Engineering Services
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            From the initial idea to successful implementation – we accompany you throughout the entire software development lifecycle.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-sky-blue mb-6 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><rect width="20" height="20" x="2" y="2" rx="2"/></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">End-to-End Software Development</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                Our experts support you from the initial idea to successful introduction – for simple as well as highly complex projects. Our engineering portfolio includes all types of software – from components and interfaces to extensive platforms and entire software suites. We turn your ideas into powerful applications for Cloud, Web, Mobile, Desktop, and Embedded systems.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Cloud & Web Applications
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Mobile & Desktop Solutions
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Embedded Systems
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Technology Consulting</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                Our technology experts advise you on selecting and deploying the best technologies for your project. We are always at the cutting edge and offer you innovative and future-proof solutions.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Technology Selection & Evaluation
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Architecture Design
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Future-Proof Solutions
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Project Management</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                Our experienced project managers ensure smooth execution of your software projects. They master both classical and agile methods and ensure your project is completed on time and within budget.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Agile & Waterfall Methods
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Risk Management
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    On-Time Delivery
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Managed Teams</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                With our managed teams, we offer you an effective solution to relieve your organization and flexibly strengthen it with the required expertise and manpower at short notice. Together with you, we put together a dedicated team that is precisely tailored to your individual requirements in terms of size and skill set.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Dedicated Team Assembly
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Flexible Scaling
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                                    Skill Matching
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Map Section */}
            <section className="py-24 bg-white" id="quality-map">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <div className="inline-block px-4 py-1.5 mb-6 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                                Quality Assurance
                            </div>
                            <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">Software Development Quality Map</h2>
                            <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                                Good software quality is close to every development team's heart. But what to do when the software hasn't reached the desired quality yet? The Software Development Quality Map shows the solution path: It takes teams on a discovery journey through 80 different topics.
                            </p>
                        </div>
                        <div {...motionConfig.slideRight} className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-50 border border-sky-blue/10">
                            <img
                                src="/images/quality-map.jpg"
                                alt="Software Development Quality Map"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-white font-display text-xl font-semibold">80 Topics for Excellence</p>
                                <p className="text-white/80 text-sm mt-2">Your path to better software quality</p>
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
                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue/30 mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                            <p className="text-neutral-gray text-lg leading-relaxed mb-6">
                                "Gotik was able to quickly implement our requirements into high-quality software. We are thrilled with the good collaboration and the high quality of the software."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-navy-blue font-bold">
                                    DM
                                </div>
                                <div>
                                    <p className="font-bold text-navy-blue">Daniel Mayer</p>
                                    <p className="text-sm text-neutral-gray">Head of Technology, Member of Management, René Koch AG</p>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue/30 mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                            <p className="text-neutral-gray text-lg leading-relaxed mb-6">
                                "Gotik is the ideal software partner for us: great expertise, strong in analysis, and efficient in implementation."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-navy-blue font-bold">
                                    IS
                                </div>
                                <div>
                                    <p className="font-bold text-navy-blue">Istvan Szalai</p>
                                    <p className="text-sm text-neutral-gray">CEO, Garaventa AG</p>
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
                            FAQ About Software Engineering
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">What is custom software?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Custom software is a tailored software solution developed specifically according to the requirements and needs of your company or project. Our experience, know-how, and quality standards ensure that your individual software solution is perfect down to the smallest detail.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">What are the advantages of custom software over standard software?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Custom software offers flexibility, scalability, and perfect alignment with your business processes. While standard software may require compromises, custom solutions are designed exactly for your needs. This leads to higher efficiency, better user experience, and competitive advantages.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Can Gotik also further develop or modernize existing software?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Yes, we not only offer the development of new software solutions but can also further develop or modernize your existing software. Use our expertise to modernize your software so that it can flexibly adapt to changing business requirements.
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
