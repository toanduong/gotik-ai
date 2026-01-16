"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function MobileWebApps() {
    useEffect(() => {
            if (typeof window !== 'undefined' && (window as any).Motion) {
                const { inView } = (window as any).Motion;

                inView('.mwa-hero-1', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
                });

                inView('.mwa-hero-2', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
                });

                inView('.mwa-hero-3', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
                });

                inView('.mwa-benefit-slideLeft', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
                });

                inView('.mwa-benefit-slideRight', ({ target }: any) => {
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
                <div className="mwa-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
                <div className="mwa-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="mwa-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-violet-500/30 rounded-full bg-violet-500/5 text-violet-600 text-xs font-bold tracking-wider uppercase">
                            Mobile & Web Apps
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            Build Powerful Apps for <span className="text-violet-500 italic">Every Platform</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            From concept to launch – we create custom mobile and web applications that drive business growth. Native, cross-platform, or progressive web apps with powerful cloud backends.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div {...withDelay(motionConfig.slideUp, 0.3)} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-violet-500/10 p-8">
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

            {/* App Solutions Grid */}
            <section className="py-24 bg-white" id="solutions">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Comprehensive App Solutions
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            Choose the right approach for your business – native performance, cross-platform efficiency, or web flexibility.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-sky-blue mb-4 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="13" x="6" y="4" rx="1"/><path d="M10.5 17H13"/><path d="M9 7h6"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Native iOS & Android Apps</h3>
                            <p className="text-sm text-neutral-gray mb-4">Custom native apps delivering the best performance and user experience on each platform.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M14 8h7"/><path d="M14 12h7"/><path d="M14 16h7"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Cross-Platform Apps</h3>
                            <p className="text-sm text-neutral-gray mb-4">Single codebase for iOS and Android using React Native, Flutter, or .NET MAUI.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Progressive Web Apps (PWA)</h3>
                            <p className="text-sm text-neutral-gray mb-4">Web apps that work offline, send push notifications, and feel like native apps.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Enterprise Apps</h3>
                            <p className="text-sm text-neutral-gray mb-4">Custom enterprise solutions for sales, marketing, and customer service automation.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">E-Commerce Solutions</h3>
                            <p className="text-sm text-neutral-gray mb-4">Full-featured online stores with secure payments and inventory management.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Custom Web Portals</h3>
                            <p className="text-sm text-neutral-gray mb-4">Tailored portals for customers, partners, or employees with role-based access.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-2">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                                </div>
                                <div>
                                    <h3 className="font-display text-lg text-navy-blue mb-3">Cloud Backend Integration</h3>
                                    <p className="text-sm text-neutral-gray mb-4">Modern web and mobile applications with powerful, scalable cloud backends on AWS, Azure, or Google Cloud.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Stack Section */}
            <section className="py-24 bg-slate-50" id="technology">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Our Technology Stack
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideLeft} className="mwa-benefit-slideLeft bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <h3 className="font-display text-2xl text-navy-blue mb-6">Mobile Technologies</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <div>
                                        <p className="font-semibold text-navy-blue">iOS (Swift & SwiftUI)</p>
                                        <p className="text-sm text-neutral-gray">Native development for iPhone and iPad</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <div>
                                        <p className="font-semibold text-navy-blue">Android (Kotlin & Jetpack Compose)</p>
                                        <p className="text-sm text-neutral-gray">Modern Android app development</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <div>
                                        <p className="font-semibold text-navy-blue">React Native</p>
                                        <p className="text-sm text-neutral-gray">Cross-platform with JavaScript/TypeScript</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <div>
                                        <p className="font-semibold text-navy-blue">Flutter</p>
                                        <p className="text-sm text-neutral-gray">Beautiful cross-platform UI with Dart</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="mwa-benefit-slideRight bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <h3 className="font-display text-2xl text-navy-blue mb-6">Web Technologies</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <div>
                                        <p className="font-semibold text-navy-blue">React & Next.js</p>
                                        <p className="text-sm text-neutral-gray">Modern web apps with server-side rendering</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <div>
                                        <p className="font-semibold text-navy-blue">Vue.js & Nuxt</p>
                                        <p className="text-sm text-neutral-gray">Progressive and performant web applications</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <div>
                                        <p className="font-semibold text-navy-blue">.NET & ASP.NET Core</p>
                                        <p className="text-sm text-neutral-gray">Enterprise-grade web applications</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500 mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <div>
                                        <p className="font-semibold text-navy-blue">Java & Spring Boot</p>
                                        <p className="text-sm text-neutral-gray">Robust backend services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-24 bg-white" id="approach">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Our Development Approach
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            From concept to launch, we guide you through every step with proven agile methodologies and user-centered design.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-violet-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                1
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Discovery & Design</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">Understanding your vision</p>
                            <p className="text-neutral-gray leading-relaxed">
                                We work closely with you to understand your goals, define features, and create user-centered designs that delight your customers.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-violet-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                2
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Agile Development</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">Iterative and collaborative</p>
                            <p className="text-neutral-gray leading-relaxed">
                                Using agile methodologies, we deliver working software in sprints, allowing you to see progress and provide feedback continuously.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-violet-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                3
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Launch & Support</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">Successful deployment</p>
                            <div className="space-y-2">
                                <p className="text-neutral-gray text-sm">• App store submission & approval</p>
                                <p className="text-neutral-gray text-sm">• Performance monitoring & analytics</p>
                                <p className="text-neutral-gray text-sm">• Ongoing maintenance & updates</p>
                                <p className="text-neutral-gray text-sm">• User support & bug fixes</p>
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
                                Why Choose Gotik for App Development?
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Comprehensive support from initial concept to successful launch. We create apps that users love and businesses rely on.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Full-stack expertise in mobile and web technologies</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">User-centered design and exceptional UX</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Agile development with continuous delivery</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Comprehensive maintenance and support services</span>
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideRight} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <div className="grid grid-cols-2 gap-6 text-center">
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-violet-400 mb-2">200+</div>
                                    <p className="text-sm text-gray-300">Apps Launched</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-violet-400 mb-2">5M+</div>
                                    <p className="text-sm text-gray-300">Active Users</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-violet-400 mb-2">4.8/5</div>
                                    <p className="text-sm text-gray-300">Average App Rating</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-violet-400 mb-2">98%</div>
                                    <p className="text-sm text-gray-300">Client Satisfaction</p>
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
                            <h3 className="font-display text-xl text-navy-blue mb-4">Should I build a native or cross-platform app?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                The choice depends on your requirements. Native apps (Swift for iOS, Kotlin for Android) offer the best performance and access to all platform features, making them ideal for complex apps or those requiring cutting-edge features. Cross-platform frameworks like React Native or Flutter are excellent for faster time-to-market and when you want to maintain a single codebase. We'll help you evaluate factors like budget, timeline, required features, and target audience to make the best choice.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">What is a Progressive Web App (PWA)?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Progressive Web Apps are web applications that use modern web technologies to deliver app-like experiences. PWAs work on any device with a web browser, can be installed on the home screen, work offline, send push notifications, and update automatically. They're cost-effective because you maintain one codebase for all platforms, and users don't need to download them from app stores. PWAs are ideal for content-heavy apps, e-commerce, and when you want to reach users across all platforms efficiently.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">How long does it take to develop a mobile app?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Development timelines vary based on app complexity. A simple app with basic features can take 2-3 months, while a medium-complexity app with custom features and backend integration typically requires 4-6 months. Complex apps with advanced features, third-party integrations, and sophisticated backends may take 6-12 months or more. We use agile methodologies to deliver working software incrementally, so you'll see progress throughout the development process and can start testing early versions.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Do you provide post-launch support and maintenance?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Yes, we offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, OS compatibility updates, feature enhancements, and technical support. We can provide ongoing maintenance contracts or on-demand support based on your needs. Our support services ensure your app stays current with the latest platform requirements, maintains optimal performance, and continues to delight your users long after launch.
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
