"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function SoftwareModernization() {
    useEffect(() => {
            if (typeof window !== 'undefined' && (window as any).Motion) {
                const { inView } = (window as any).Motion;
    
                inView('.sm-hero-1', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
                });

                inView('.sm-hero-2', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
                });
    
                inView('.sm-hero-3', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
                });

                inView('.sm-benefit-slideLeft', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
                });
    
                inView('.sm-benefit-slideRight', ({ target }: any) => {
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
                <div className="sm-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl"></div>
                <div className="sm-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="sm-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                            Software Modernization
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            Harness the Potential of <span className="text-sky-blue italic">Software Modernization</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            Software modernization promises enormous potential: from boosting performance, improving security and quality, to developing new business ideas.
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
                                <p className="text-sky-blue text-sm font-medium">CEO & IMS Saigon Founder</p>
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
                            Your Benefits through Software Modernization
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            Make your software fit for the future. New methods open the door to significantly streamline business processes and develop new services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-sky-blue mb-6 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Enormous Potential</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Boost your software's performance, security, and quality, and develop new business ideas. Migrate legacy systems to the cloud, maintain and further develop existing applications, and integrate mobile apps.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Efficient Business Processes</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Use modern methods to optimize your business processes and create new services that drive efficiency and innovation.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Adaptive Software</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Benefit from our expertise to modernize your software so it can flexibly adapt to changing business and user requirements.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Future-Proof Solutions</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Prepare for the future and avoid costly patchwork through targeted modernization or a complete redevelopment of your software.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Quality and Stability</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Resolve existing quality and stability issues and bring user guidance up to date with modern UX standards.
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
                            Our Software Modernization Services
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            From analysis to complete redevelopment – we accompany you through the entire modernization journey.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-sky-blue mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Software Modernization Workshops</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                We show you concretely which strategies and possibilities exist for modernizing your software – and give you a recommendation for implementation at the end of each workshop.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Potential Analysis</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Our experts identify the modernization potential of your software and propose corresponding improvements tailored to your specific needs.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><rect width="20" height="20" x="2" y="2" rx="2"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Gentle Modernization or Partial Replacement</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                We analyze your software fairly and openly and recommend either a gentle modernization or a modularized partial replacement depending on the situation.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Complete Redevelopment</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                If needed, we recommend a complete redevelopment of your software. For new builds, we use quality assurance measures to ensure consistent functionality during transformation.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4v16h16"/><path d="M4 20l7-7"/><path d="M15 4l5 5"/><path d="M20 9l-5 5"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Minimal Invasive Refactoring</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                We specifically address those components of your software that absolutely need to be adapted to increase development speed without disrupting the entire system.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/><path d="m1 12h6m6 0h6"/><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Architecture Renovation</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                If needed, we modernize the software architecture so that fast adjustments and continuous improvements to your software are flexibly possible in the future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-white" id="testimonials">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideLeft} className="bg-sky-blue/5 rounded-3xl p-8 border border-sky-blue/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue/30 mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                            <p className="text-neutral-gray text-lg leading-relaxed mb-6">
                                "IMS Saigon supported us in modernizing our software to a highly flexible system. We benefited enormously from the know-how of the various IMS Saigon experts."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-sky-blue/20 flex items-center justify-center text-navy-blue font-bold">
                                    RT
                                </div>
                                <div>
                                    <p className="font-bold text-navy-blue">Rolf Traber</p>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="bg-slate-50 rounded-3xl p-8 border border-sky-blue/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue/30 mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                            <p className="text-neutral-gray text-lg leading-relaxed mb-6">
                                "We brought in IMS Saigon so that we can implement future innovations faster in our software. The collaboration with IMS Saigon was first-class – technically and personally."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-navy-blue font-bold">
                                    CK
                                </div>
                                <div>
                                    <p className="font-bold text-navy-blue">Christian Königsdorfer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshop Series Section */}
            <section className="py-24 bg-navy-blue text-white" id="workshops">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <h2 className="font-display text-4xl lg:text-5xl mb-6">
                                Software Modernization Workshop Series
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                We show you concretely which strategies and possibilities exist for modernizing your software. Tailored entirely to your situation and business, we give you a recommendation for implementation at the end of each workshop.
                            </p>
                        </div>

                        <div {...motionConfig.slideRight} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 rounded-2xl p-6 text-center">
                                    <div className="text-3xl font-display font-bold text-sky-blue mb-2">01</div>
                                    <p className="text-sm text-white/80">Strategy Workshop</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6 text-center">
                                    <div className="text-3xl font-display font-bold text-sky-blue mb-2">02</div>
                                    <p className="text-sm text-white/80">Architecture Review</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6 text-center">
                                    <div className="text-3xl font-display font-bold text-sky-blue mb-2">03</div>
                                    <p className="text-sm text-white/80">Technology Assessment</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6 text-center">
                                    <div className="text-3xl font-display font-bold text-sky-blue mb-2">04</div>
                                    <p className="text-sm text-white/80">Implementation Plan</p>
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
                            FAQ on Modernization
                        </h2>
                    </div>

                    <div {...motionConfig.slideUp} className="bg-slate-50 rounded-3xl p-8 border border-sky-blue/10">
                        <h3 className="font-display text-2xl text-navy-blue mb-6">
                            What opportunities does software modernization offer?
                        </h3>
                        <p className="text-neutral-gray mb-6 leading-relaxed">
                            Software modernization offers numerous opportunities that go far beyond a simple update. Here are some of the most important benefits:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-3 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="text-neutral-gray"><strong>Competitiveness:</strong> By implementing new technologies and features, you can gain an advantage over your competitors.</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-3 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="text-neutral-gray"><strong>Efficiency:</strong> Modernized software can automate processes and optimize workflows, leading to higher productivity.</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-3 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="text-neutral-gray"><strong>Cost savings:</strong> Improved system performance and reduced maintenance costs can lead to long-term savings.</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-3 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="text-neutral-gray"><strong>Scalability:</strong> Modern software architectures are often more scalable and allow your company to flexibly adapt to market changes and growth.</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-3 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="text-neutral-gray"><strong>Security:</strong> Modernized software is generally safer and better protected against current threats.</span>
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-3 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                <span className="text-neutral-gray"><strong>Customer orientation:</strong> Modernization enables new, customer-oriented features that improve user experience and increase customer loyalty.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <Contact />
            <Footer />
        </main>
    );
}
