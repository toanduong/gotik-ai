"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import Link from "next/link";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function BIM2FM() {
    useEffect(() => {
            // Animate sections with Motion.dev
            if (typeof window !== 'undefined' && (window as any).Motion) {
                const { inView } = (window as any).Motion;

                inView('.bim2fm-hero-1', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
                });

                inView('.bim2fm-hero-2', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
                });

                inView('.bim2fm-hero-3', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
                });

                inView('.bim2fm-features-slideLeft', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
                });

                inView('.bim2fm-features-slideRight', ({ target }: any) => {
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
                <div className="bim2fm-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl"></div>
                <div className="bim2fm-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="bim2fm-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                            LCDM Hub
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            BIM to Facility Management <span className="text-sky-blue italic">Made Simple</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            Transform your Building Information Modeling data into actionable facility management insights. The award-winning platform for seamless data exchange and quality management.
                        </p>
                    </div>

                    {/* Key Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 lg:gap-6 h-auto md:h-[600px]" data-motion-stagger="0.1">
                        {/* Data Synchronization - Large */}
                        <a href="#data-sync" {...withDelay(motionConfig.slideUp, 0.2)} className="group relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 bg-white p-8 flex flex-col justify-between hover:scale-[1.01] hover:shadow-2xl transition-all duration-300">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-sky-blue mb-6 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
                                </div>
                                <h3 className="text-3xl font-display font-medium text-navy-blue mb-2 group-hover:text-sky-blue transition-colors">Bi-directional Data Sync</h3>
                                <p className="text-neutral-gray max-w-sm">Seamlessly synchronize data between BIM models and facility management systems in real-time.</p>
                            </div>
                            <div className="flex items-center text-sky-blue font-semibold text-sm mt-4 group-hover:translate-x-2 transition-transform">
                                Explore Sync <span className="ml-2">→</span>
                            </div>
                        </a>

                        {/* Quality Control */}
                        <a href="#quality-control" {...withDelay(motionConfig.scaleIn, 0.3)} className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden shadow-md border border-sky-blue/10 bg-slate-50 p-6 flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl transition-all duration-300 hover:bg-white">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                </div>
                                <span className="text-gray-300 group-hover:text-purple-500 transition-colors">↗</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-navy-blue mb-1">Quality Control</h4>
                                <p className="text-xs text-neutral-gray">Visual data quality assurance.</p>
                            </div>
                        </a>

                        {/* User-Friendly Design */}
                        <a href="#user-friendly" {...withDelay(motionConfig.slideRight, 0.4)} className="group relative md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 bg-sky-blue/5 p-6 flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl transition-all duration-300 hover:bg-sky-blue/10">
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-sky-blue/10 rounded-full blur-2xl group-hover:bg-sky-blue/20 transition-colors"></div>
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-sky-blue mb-6 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                </div>
                                <h3 className="text-xl font-display font-medium text-navy-blue mb-2">User-Friendly</h3>
                                <p className="text-sm text-neutral-gray leading-relaxed">
                                    No deep IT knowledge required. Designed for facility management professionals to work intuitively.
                                </p>
                            </div>
                            <div className="mt-4">
                                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-[10px] font-bold uppercase tracking-wide text-sky-blue shadow-sm">
                                    Easy to Use
                                </span>
                            </div>
                        </a>

                        {/* Data Filtering */}
                        <a href="#data-filtering" {...withDelay(motionConfig.scaleIn, 0.5)} className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden shadow-md border border-sky-blue/10 bg-slate-50 p-6 flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl transition-all duration-300 hover:bg-white">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                                </div>
                                <span className="text-gray-300 group-hover:text-teal-500 transition-colors">↗</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-navy-blue mb-1">Smart Filtering</h4>
                                <p className="text-xs text-neutral-gray">Control data detail levels.</p>
                            </div>
                        </a>

                        {/* Contact CTA */}
                        <a href="#contact" {...withDelay(motionConfig.slideLeft, 0.7)} className="group relative md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden shadow-md border border-sky-blue/10 bg-white p-6 flex items-center justify-between hover:scale-[1.01] hover:shadow-xl transition-all duration-300 border-l-4 border-l-sky-blue">
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-navy-blue">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-navy-blue">Get Started with BIM2FM</h3>
                                    <p className="text-xs text-neutral-gray uppercase tracking-widest">Transform Your Data Today</p>
                                </div>
                            </div>
                            <span className="inline-flex items-center justify-center px-6 py-2 text-xs font-bold tracking-widest uppercase text-white bg-black rounded-full hover:bg-gray-800 transition-all duration-300">
                                Contact Us
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Data Synchronization Section */}
            <section className="py-24 bg-white" id="data-sync">
                <div className=" max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft} className="bim2fm-features-slideLeft">
                            <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                                Seamless <span className="text-sky-blue">Data Synchronization</span>
                            </h2>
                            <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                                The LCDM Hub enables bi-directional data synchronization between BIM models and facility management systems, keeping your building data up-to-date across all platforms.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-3 mt-1 flex-shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                    <span className="text-neutral-gray">Automatic synchronization of cleaning, maintenance, and changes</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-3 mt-1 flex-shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                    <span className="text-neutral-gray">Faster building commissioning and operational readiness</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-3 mt-1 flex-shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                    <span className="text-neutral-gray">Real-time data availability for increased planning reliability</span>
                                </li>
                            </ul>
                        </div>
                        <div {...motionConfig.slideRight} className="bim2fm-features-slideRight relative rounded-3xl overflow-hidden shadow-2xl bg-slate-50 border border-sky-blue/10 p-8">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-6 bg-white rounded-lg border border-sky-blue/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mx-auto mb-3"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
                                    <p className="text-sm font-bold text-neutral-gray">BIM Model</p>
                                </div>
                                <div className="text-center p-6 bg-white rounded-lg border border-sky-blue/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mx-auto mb-3"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                                    <p className="text-sm font-bold text-neutral-gray">FM System</p>
                                </div>
                                <div className="col-span-2 flex items-center justify-center p-4">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue"><path d="M7 17 17 7"/><path d="M17 17V7H7"/></svg>
                                        <span className="text-xs font-bold text-sky-blue uppercase">Bi-directional Sync</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue"><path d="M17 7 7 17"/><path d="M7 7h10v10"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Control Section */}
            <section className="py-24 bg-slate-50 border-y border-sky-blue/10" id="quality-control">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <span className="text-sky-blue font-bold tracking-widest uppercase text-xs mb-3 block">Visual Quality Assurance</span>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">Quality Control Center</h2>
                        <p className="text-neutral-gray">
                            The LCDM Hub includes a comprehensive quality control center that visually displays the entire data processing workflow, ensuring the highest data quality standards.
                        </p>
                    </div>

                    <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-sky-blue/10 overflow-hidden" {...withDelay(motionConfig.slideUp, 0.2)}>
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-sky-blue border border-sky-blue/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-blue mb-2">Visual Workflow Display</h4>
                                    <p className="text-sm text-neutral-gray">See the entire data processing pipeline in real-time with intuitive visualizations.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600 border border-purple-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-blue mb-2">Automated Validation</h4>
                                    <p className="text-sm text-neutral-gray">Automatic data quality checks at every stage of the transfer process.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 text-teal-600 border border-teal-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-blue mb-2">Error Detection & Correction</h4>
                                    <p className="text-sm text-neutral-gray">Identify and resolve data inconsistencies before they impact operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Smart Filtering Section */}
            <section className="py-24 bg-white" id="data-filtering">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <div className="inline-block px-4 py-1.5 mb-6 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                                User Control
                            </div>
                            <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">Smart Data Filtering</h2>
                            <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                                Take full control of your data transfers. Easily specify the level of detail you need and decide which data is relevant for your facility management operations.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-sky-blue/10 text-sky-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-blue">Custom Detail Levels</h4>
                                        <p className="text-sm text-neutral-gray">Choose exactly how much detail you need for each data transfer.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-sky-blue/10 text-sky-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-blue">Selective Data Transfer</h4>
                                        <p className="text-sm text-neutral-gray">Transfer only the data you need, reducing complexity and processing time.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-sky-blue/10 text-sky-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-blue">User-Driven Transformation</h4>
                                        <p className="text-sm text-neutral-gray">Actively control selection, transformation, and conversion during transfers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="relative bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 shadow-2xl">
                            <div className="bg-white rounded-xl p-6 border border-sky-blue/10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm border-b border-sky-blue/10 pb-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="font-bold text-xs text-navy-blue uppercase tracking-wider">Active Data Transfer</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                            <span className="text-xs text-neutral-gray">Detail Level</span>
                                            <span className="text-xs text-navy-blue font-bold">High</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                            <span className="text-xs text-neutral-gray">Data Elements</span>
                                            <span className="text-xs text-navy-blue font-bold">2,847</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-sky-blue/5 rounded-lg border border-sky-blue/20">
                                            <span className="text-xs text-neutral-gray">Transfer Status</span>
                                            <span className="text-xs text-sky-blue font-bold">In Progress</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-slate-50" id="benefits">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">Key Benefits</h2>
                        <p className="max-w-2xl mx-auto text-neutral-gray">
                            Discover how the  LCDM Hub transforms building lifecycle management and accelerates operational efficiency.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-motion-stagger="0.1">
                        <div {...motionConfig.slideUp} className="bg-white p-6 rounded-2xl shadow-lg border border-sky-blue/10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                            </div>
                            <h3 className="font-bold text-lg text-navy-blue mb-2">Faster Commissioning</h3>
                            <p className="text-sm text-neutral-gray">Get buildings operational faster with early data availability and improved planning reliability.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-sky-blue/20 hover:-translate-y-2 transition-transform duration-300 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Featured</div>
                            <div className="w-12 h-12 bg-sky-blue/10 rounded-xl flex items-center justify-center text-sky-blue mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                            </div>
                            <h3 className="font-bold text-lg text-navy-blue mb-2">Improved Maintenance</h3>
                            <p className="text-sm text-neutral-gray">Access building component data instantly, significantly speeding up maintenance operations.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white p-6 rounded-2xl shadow-lg border border-sky-blue/10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
                            </div>
                            <h3 className="font-bold text-lg text-navy-blue mb-2">Digital Twin Benefits</h3>
                            <p className="text-sm text-neutral-gray">Leverage digital building twins for facility management, sustainability, and change management.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white p-6 rounded-2xl shadow-lg border border-sky-blue/10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <h3 className="font-bold text-lg text-navy-blue mb-2">Better Coordination</h3>
                            <p className="text-sm text-neutral-gray">Improve collaboration between architects, clients, and designers throughout the building lifecycle.</p>
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
