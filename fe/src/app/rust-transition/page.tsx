"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function RustTransition() {
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
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                <div className="rt-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="rt-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="rt-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-orange-500/30 rounded-full bg-orange-500/5 text-orange-600 text-xs font-bold tracking-wider uppercase">
                            Rust Transition Service
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            Securely into the Future with <span className="text-orange-500 italic">Rust</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            Software development is changing rapidly. Our Rust Transition Service helps your company make your software safe, efficient, and future-proof.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div {...withDelay(motionConfig.slideUp, 0.3)} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-orange-500/10 p-8">
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

            {/* Why Rust Section */}
            <section className="py-24 bg-white" id="why-rust">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Why Rust is the Right Step Now
                        </h2>
                        <p className="text-lg text-neutral-gray leading-relaxed">
                            The regulatory pressure to make software safer, more efficient, and more economical is increasing. Requirements like the Cyber Resilience Act (CRA) or standards such as IEC 62443 or IEC 60601 (medical technology) greatly increase the demands on software security. Traditional languages like C++ are reaching their limits - Rust offers decisive advantages through memory-safe and thread-safe development and deterministic performance without garbage collection.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Memory Safety</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Rust ensures memory safety through its ownership system, eliminating entire classes of security vulnerabilities.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Predictable Performance</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Deterministic performance without garbage collection, matching C++ speed and efficiency.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Safe Concurrency</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Thread-safe development that prevents data races at compile time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-slate-50" id="benefits">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Your Benefits from Using Rust
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            Rust performs formal checks during compilation based on ownership rules. This ensures that memory cannot be written to and freed at the same time when it is no longer needed.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div {...motionConfig.slideLeft} className="rt-benefit-slideLeft bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Increased Software Security</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Protection against memory errors and security vulnerabilities such as buffer overflows or use-after-free.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-sky-blue mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Optimized Regulatory Compliance</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Simplified compliance with industry-specific standards and regulations like IEC 62443, IEC 60601, and CRA.
                            </p>
                        </div>

                        <div {...motionConfig.slideRight} className="rt-benefit-slideRight bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 2v7.5"/><path d="m19 5-5.23 5.23"/><path d="M22 12h-7.5"/><path d="m19 19-5.23-5.23"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Economic Benefits</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Reduction of total cost of ownership (TCO) through fewer errors, shorter development cycles, and lower maintenance costs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Approach Section */}
            <section className="py-24 bg-white" id="approach">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                                The Key Aspect of the Gotik Rust Transition Service
                            </h2>
                            <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                                The Transition Service offers a continuous switch from traditional programming languages as a modernization of software during its further development in ongoing projects, or a "jumpstart" for new projects.
                            </p>
                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                                <p className="font-display text-xl font-semibold">Prevention of Legacy Systems</p>
                                <p className="text-white/80 mt-2">Avoid technical debt by adopting Rust from the start.</p>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="relative bg-slate-50 rounded-3xl p-8 border border-sky-blue/10">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                                    <div className="text-3xl font-display font-bold text-orange-500 mb-2">01</div>
                                    <p className="text-sm text-neutral-gray font-medium">Assessment</p>
                                </div>
                                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                                    <div className="text-3xl font-display font-bold text-orange-500 mb-2">02</div>
                                    <p className="text-sm text-neutral-gray font-medium">Planning</p>
                                </div>
                                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                                    <div className="text-3xl font-display font-bold text-orange-500 mb-2">03</div>
                                    <p className="text-sm text-neutral-gray font-medium">Migration</p>
                                </div>
                                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                                    <div className="text-3xl font-display font-bold text-orange-500 mb-2">04</div>
                                    <p className="text-sm text-neutral-gray font-medium">Optimization</p>
                                </div>
                        </div>
                            </div>
                    </div>
                </div>
            </section>

            {/* Service Details Section */}
            <section className="py-24 bg-navy-blue text-white" id="services">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <span className="text-orange-400 font-bold tracking-widest uppercase text-xs mb-3 block">Our Approach</span>
                        <h2 className="font-display text-4xl lg:text-5xl mb-6">
                            Details of the Gotik Rust Transition Service
                        </h2>
                        <p className="text-lg text-gray-300">
                            With our Rust Transition Service, we accompany you holistically and structured through the strategic switch to Rust.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <h3 className="font-display text-xl font-semibold mb-4">Organizational Support</h3>
                            <p className="text-gray-300 leading-relaxed">
                                We accompany the establishment of a specialized migration team and actively support your company in the change management process to ensure a smooth introduction of Rust.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                            <div className="w-14 h-14 rounded-2xl bg-sky-blue/20 flex items-center justify-center text-sky-blue mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
                            </div>
                            <h3 className="font-display text-xl font-semibold mb-4">Technical Implementation</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Our experts perform architecture analyses, integrate Rust sensibly into existing systems, and modernize your software while considering existing dependencies. We also optimize your CI/CD processes for efficient Rust migration.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>
                            </div>
                            <h3 className="font-display text-xl font-semibold mb-4">Staff Development</h3>
                            <p className="text-gray-300 leading-relaxed">
                                We offer individual training, workshops, and personal coaching to optimally prepare your team for using Rust and ensure sustainable skills development.
                            </p>
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
                            <h3 className="font-display text-xl text-navy-blue mb-4">Why is now the right time for switching to Rust?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Increasing regulatory requirements and growing cyber risks make it increasingly difficult to use traditional languages like C++ safely and economically. Rust, as a memory-safe language, offers an optimal solution for these challenges.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Which industries benefit most from Rust?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Especially safety-critical and highly regulated industries such as the automotive industry, medical technology, or the financial sector benefit particularly from the introduction of Rust.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Which regulatory requirements does Rust effectively support?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Rust facilitates compliance with important safety standards such as ISO 26262, IEC 62304, IEC 62443, IEC 60601, FDA guidelines, the CRA, and the European NIS2 directive.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Is a step-by-step introduction of Rust possible?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Yes, Rust can be integrated into existing projects step by step and in a controlled manner, for example via FFI (Foreign Function Interface) or special build tools like Corrosion.
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
