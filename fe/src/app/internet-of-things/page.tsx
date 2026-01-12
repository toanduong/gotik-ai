"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function InternetOfThings() {
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
                            Internet of Things
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            Connect Your World with <span className="text-cyan-500 italic">Smart IoT Solutions</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            From strategy to implementation – we connect your devices to the cloud and transform data into actionable insights. Secure, scalable IoT solutions that drive business value.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div {...withDelay(motionConfig.slideUp, 0.3)} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-cyan-500/10 p-8">
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

            {/* IoT Use Cases Grid */}
            <section className="py-24 bg-white" id="use-cases">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            IoT Solutions Across Industries
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            Transform your operations with intelligent, connected devices and real-time data insights.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-sky-blue mb-4 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Smart Cities</h3>
                            <p className="text-sm text-neutral-gray mb-4">Improve traffic management, waste management, and public safety with intelligent IoT networks.</p>
                            <a href="#smart-cities" className="text-sky-blue font-semibold text-sm hover:text-navy-blue transition-colors">
                                Learn More →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Industrial IoT</h3>
                            <p className="text-sm text-neutral-gray mb-4">Monitor machine performance, optimize production processes, and enable predictive maintenance.</p>
                            <a href="#industrial" className="text-purple-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                Learn More →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M5 12l7-7 7 7"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Energy & Utilities</h3>
                            <p className="text-sm text-neutral-gray mb-4">Monitor and optimize energy consumption with smart metering and real-time analytics.</p>
                            <a href="#energy" className="text-green-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                Learn More →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Logistics & Transport</h3>
                            <p className="text-sm text-neutral-gray mb-4">Real-time tracking of deliveries, fleet management, and route optimization.</p>
                            <a href="#logistics" className="text-indigo-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                Learn More →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Smart Retail</h3>
                            <p className="text-sm text-neutral-gray mb-4">Inventory management, customer analytics, and personalized shopping experiences.</p>
                            <a href="#retail" className="text-orange-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                Learn More →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Smart Buildings</h3>
                            <p className="text-sm text-neutral-gray mb-4">Automated climate control, security systems, and energy-efficient building management.</p>
                            <a href="#buildings" className="text-rose-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                Learn More →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-2">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                                </div>
                                <div>
                                    <h3 className="font-display text-lg text-navy-blue mb-3">Healthcare IoT</h3>
                                    <p className="text-sm text-neutral-gray mb-4">Remote patient monitoring, medical device connectivity, and hospital asset tracking for improved patient care.</p>
                                    <a href="#healthcare" className="text-teal-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                        Learn More →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-24 bg-slate-50" id="success-stories">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            IoT Success Stories
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideLeft} className="iot-benefit-slideLeft bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <div className="mb-6">
                                <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-600 text-xs font-bold rounded-full mb-4">
                                    CABLE CAR OPERATIONS
                                </div>
                                <h3 className="font-display text-2xl text-navy-blue mb-3">SisControl Platform</h3>
                                <p className="text-neutral-gray leading-relaxed mb-4">
                                    Comprehensive IoT platform providing cable car operators in ski resorts with real-time access to the latest data and forecasts. Developed together with Sisag to enhance operational efficiency.
                                </p>
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-sm text-neutral-gray">Real-time monitoring & forecasting</span>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="iot-benefit-slideRight bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <div className="mb-6">
                                <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-600 text-xs font-bold rounded-full mb-4">
                                    INDUSTRIAL CONNECTIVITY
                                </div>
                                <h3 className="font-display text-2xl text-navy-blue mb-3">Komax Connect</h3>
                                <p className="text-neutral-gray leading-relaxed mb-4">
                                    Gives customers online insight into the productivity of their Komax machines. Complete solution from machine connectivity to data visualization and analytics.
                                </p>
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-sm text-neutral-gray">Machine performance insights</span>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideLeft} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10 md:col-span-2">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex-shrink-0">
                                    <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-600 text-xs font-bold rounded-full mb-4">
                                        SMART APPLIANCES
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-display text-2xl text-navy-blue mb-3">Thermoplan Connected Coffee Machines</h3>
                                    <p className="text-neutral-gray leading-relaxed mb-4">
                                        Innovative cloud solution connecting coffee machines worldwide. Enables remote monitoring of appliance performance and seamless delivery of new recipes and functions to enhance customer experience.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><polyline points="20 6 9 17 4 12"/></svg>
                                            <span className="text-sm text-neutral-gray">Remote performance monitoring</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><polyline points="20 6 9 17 4 12"/></svg>
                                            <span className="text-sm text-neutral-gray">Over-the-air recipe updates</span>
                                        </div>
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
                            Our IoT Approach
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            From strategy to deployment – we guide you through every step of your IoT journey with proven methodologies and expert guidance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-cyan-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                1
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Strategy & Planning</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">Define your IoT vision</p>
                            <p className="text-neutral-gray leading-relaxed">
                                We develop tailored IoT strategies aligned with your business goals, identifying high-value use cases and creating a roadmap for implementation.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-cyan-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                2
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Connectivity & Integration</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">Connect devices to cloud</p>
                            <p className="text-neutral-gray leading-relaxed">
                                Seamless device networking and cloud connectivity with robust security concepts protecting your IoT devices and data from threats.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-cyan-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                3
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Analytics & Insights</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">Transform data into value</p>
                            <div className="space-y-2">
                                <p className="text-neutral-gray text-sm">• Real-time data processing & analytics</p>
                                <p className="text-neutral-gray text-sm">• Predictive maintenance algorithms</p>
                                <p className="text-neutral-gray text-sm">• Custom dashboards & visualization</p>
                                <p className="text-neutral-gray text-sm">• Continuous monitoring & optimization</p>
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
                                Why Choose Gotik for IoT?
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                End-to-end IoT expertise from device connectivity to cloud analytics. We deliver secure, scalable solutions that transform your operations.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Complete IoT strategy and implementation</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Proven security concepts for IoT devices</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Cloud connectivity across all major platforms</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Industry-specific IoT expertise and experience</span>
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideRight} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <div className="grid grid-cols-2 gap-6 text-center">
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-cyan-400 mb-2">100+</div>
                                    <p className="text-sm text-gray-300">IoT Projects Delivered</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-cyan-400 mb-2">1M+</div>
                                    <p className="text-sm text-gray-300">Connected Devices</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-cyan-400 mb-2">15+</div>
                                    <p className="text-sm text-gray-300">Industries Served</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-cyan-400 mb-2">99.9%</div>
                                    <p className="text-sm text-gray-300">Platform Uptime</p>
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
                            <h3 className="font-display text-xl text-navy-blue mb-4">What is IoT and how can it benefit my business?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Internet of Things (IoT) refers to the network of physical devices connected to the internet, collecting and sharing data. IoT can benefit your business by enabling real-time monitoring, predictive maintenance, process automation, improved decision-making through data analytics, and enhanced customer experiences. Common applications include asset tracking, energy management, quality control, and remote operations.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">How do you ensure IoT security?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Security is paramount in IoT implementations. We employ multi-layered security approaches including device authentication, encrypted data transmission, secure cloud infrastructure, regular security audits, and over-the-air update capabilities. We also implement network segmentation, access controls, and continuous monitoring to protect against threats. Our security concepts are designed from the ground up to protect both devices and data.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">What platforms and protocols do you work with?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                We have expertise across all major IoT platforms including AWS IoT, Azure IoT, Google Cloud IoT, and industry-specific platforms. We work with standard protocols like MQTT, CoAP, HTTP/HTTPS, and support various connectivity options including WiFi, cellular (4G/5G), LoRaWAN, NB-IoT, and Bluetooth. Our platform-agnostic approach ensures we select the best technology stack for your specific requirements.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">How long does an IoT project typically take?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Project timelines vary based on complexity and scope. A pilot project with a limited number of devices can be deployed in 2-3 months, while enterprise-wide deployments may take 6-12 months. We follow an agile approach, starting with strategy development and proof of concept, then moving to pilot implementation and finally scaling to production. This phased approach allows you to see value quickly while minimizing risk.
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
