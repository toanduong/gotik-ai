"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function OdooPage() {
    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.odoo-hero-1', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.odoo-hero-2', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.odoo-hero-3', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
            });

            inView('.odoo-benefit-slideLeft', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
            });

            inView('.odoo-benefit-slideRight', ({ target }: any) => {
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
                <div className="odoo-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl"></div>
                <div className="odoo-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="odoo-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                            Odoo Platform
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            Streamline Your Business with <span className="text-sky-blue italic">Odoo ERP Solutions</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            Gotik is a proud Odoo Partner. We help you transform your operations with a fully integrated, modular ERP platform designed for modern growth.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div {...withDelay(motionConfig.slideUp, 0.3)} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-sky-blue/10 p-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-24 h-24 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-600 font-bold text-2xl">
                                TN
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-navy-blue text-lg">Thao Quynh Nguyen</h3>
                                <p className="text-sky-blue text-sm font-medium">Partnerships Consultant @ HK</p>
                            </div>
                            <div className="ml-auto">
                                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-navy-blue rounded-lg hover:bg-navy-blue/90 transition-all duration-300">
                                    Book a Demo
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
                            The Odoo Advantage
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            Odoo's unique modular approach allows businesses to start with what they need and scale seamlessly as they grow.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideLeft} className="odoo-benefit-slideLeft">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-sky-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.69.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" /><path d="M23 11a2 2 0 1 1 0 4h-2l-1 6H4l-1-6H1a2 2 0 1 1 0-4h22Z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">All-in-One Integration</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            Replace multiple disconnected legacy systems with a single integrated database. Finance, HR, Sales, and Inventory all work together in perfect harmony.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="odoo-benefit-slideRight">
                            <div className="bg-sky-blue/5 rounded-3xl p-8 border border-sky-blue/10 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 text-sky-blue shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">Infinite Modularity</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            With over 30,000 apps available, Odoo can be tailored to any industry or business size. Only pay for the features you actually use.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideLeft} className="odoo-benefit-slideLeft">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="10" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">Cost-Effective Scalability</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            Enjoy lower total cost of ownership compared to traditional ERPs. Odoo's open-source core and flexible pricing make it accessible for both SMEs and enterprises.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="odoo-benefit-slideRight">
                            <div className="bg-teal-50 rounded-3xl p-8 border border-teal-100 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 text-teal-600 shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">User-Friendly Interface</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            Odoo features a modern, intuitive interface that simplifies complex business processes, leading to higher employee adoption and fewer errors.
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
                            Our Odoo Services
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            As your Odoo Partner, we provide end-to-end services to ensure your ERP implementation is a success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-sky-blue mb-6 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Implementation & Consulting</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                We guide you through the entire implementation process, from business analysis and requirement gathering to configuration and final go-live.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Business Process Mapping
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Configuration & Setup
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    User Training & Adoption
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Custom Module Development</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                If standard Odoo apps don't fit your needs, we develop tailored modules to extend Odoo's functionality, ensuring your ERP fits your business like a glove.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Technical Development (Python)
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    UI/UX Customization (XML)
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Integration with Third-party APIs
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Migration & Version Upgrades</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                We help you upgrade from older Odoo versions or migrate from other ERP systems like SAP or Microsoft Dynamics while preserving your critical data.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Legacy Data Migration
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Odoo Version Upgrades
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Ongoing Technical Support
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">E-commerce & Web Integration</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                We seamlessly connect Odoo with your e-commerce storefront or build a powerful Odoo E-commerce solution to synchronize sales, inventory, and accounting in real-time.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Shopify & WooCommerce Integration
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Odoo E-commerce Implementation
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Real-time Inventory Sync
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-white" id="testimonials">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Loved by Businesses
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 text-center max-w-4xl mx-auto">
                        <div {...motionConfig.slideUp} className="p-8 italic text-neutral-gray text-lg border-l-4 border-indigo-600 bg-slate-50 rounded-r-2xl shadow-sm">
                            "Moving to Odoo was the best decision for our warehouse management. Gotik's implementation was smooth and efficient."
                        </div>
                        <div {...motionConfig.slideUp} className="p-8 italic text-neutral-gray text-lg border-l-4 border-indigo-600 bg-slate-50 rounded-r-2xl shadow-sm">
                            "The custom modules built by Gotik allowed us to automate our unique billing process, saving us hours of manual work every week."
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50" id="faq">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Odoo FAQ
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div {...motionConfig.slideUp} className="bg-white rounded-2xl p-8 border border-sky-blue/10 shadow-sm">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Is Odoo suitable for small businesses?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Yes, Odoo is highly scalable. Small businesses can start with just one app (like Invoicing) and add more modules as they grow, making it one of the most cost-effective ERP solutions on the market.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-2xl p-8 border border-sky-blue/10 shadow-sm">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Can Odoo be hosted on-premise?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Absolutely. Odoo offers multiple hosting options: Odoo Online (SaaS), Odoo.sh (PaaS), or on-premise on your own servers for full control.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-2xl p-8 border border-sky-blue/10 shadow-sm">
                            <h3 className="font-display text-xl text-navy-blue mb-4">How long does an Odoo implementation take?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                A typical implementation can take anywhere from a few weeks for standard configurations to several months for complex, multi-departmental rollouts with extensive customizations.
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
