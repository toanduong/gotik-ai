"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function SalesforcePage() {
    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.sf-hero-1', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.sf-hero-2', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.sf-hero-3', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
            });

            inView('.sf-benefit-slideLeft', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
            });

            inView('.sf-benefit-slideRight', ({ target }: any) => {
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
                <div className="sf-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl"></div>
                <div className="sf-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="sf-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                            Salesforce Solutions
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            Transform Your Business with <span className="text-sky-blue italic">Expert Salesforce Solutions</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            Unlock the full potential of your CRM. We provide tailored Salesforce implementations and custom development to drive efficiency and growth.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div {...withDelay(motionConfig.slideUp, 0.3)} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-sky-blue/10 p-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-24 h-24 rounded-full bg-sky-blue/10 flex items-center justify-center text-sky-blue font-bold text-2xl">
                                SF
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-navy-blue text-lg">Salesforce Expertise</h3>
                                <p className="text-sky-blue text-sm font-medium">Certified CRM Strategists</p>
                            </div>
                            <div className="ml-auto">
                                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-navy-blue rounded-lg hover:bg-navy-blue/90 transition-all duration-300">
                                    Request a Quote
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
                            Why Choose Our Salesforce Services?
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            We bridge the gap between business needs and Salesforce capabilities, ensuring your platform is a catalyst for success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideLeft} className="sf-benefit-slideLeft">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-sky-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">Enhanced Customer 360</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            Gain a complete, unified view of your customers across all departments. We optimize your Salesforce instance to deliver personalized experiences that drive loyalty.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="sf-benefit-slideRight">
                            <div className="bg-sky-blue/5 rounded-3xl p-8 border border-sky-blue/10 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 text-sky-blue shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">Automated Workflows</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            Eliminate manual tasks and boost productivity with advanced Salesforce Flow and Process Builder automation. Let your team focus on high-value activities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideLeft} className="sf-benefit-slideLeft">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">Seamless Integrations</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            Connect Salesforce with your existing ERP, marketing, and accounting tools. We ensure data flows smoothly across your entire tech stack for a single source of truth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="sf-benefit-slideRight">
                            <div className="bg-teal-50 rounded-3xl p-8 border border-teal-100 h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 text-teal-600 shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M9 20v-10M12 20v-4M15 20v-2M18 20v-8M21 20v-5" /><path d="M3 20c0-9.39 7.61-17 17-17" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-navy-blue mb-3">Actionable Analytics</h3>
                                        <p className="text-neutral-gray leading-relaxed">
                                            Leverage Salesforce reports and dashboards to make informed decisions. We help you visualize key metrics and predict future trends with precision.
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
                            Our Salesforce Expertise
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            From initial setup to complex custom development, we cover the full spectrum of Salesforce services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-sky-blue mb-6 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Implementation & Customization</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                We help you set up Sales Cloud, Service Cloud, and Marketing Cloud from scratch or refine your current configuration to better align with your business goals.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Standard & Custom Object Configuration
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Security & Access Models
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Data Migration & Cleansing
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Custom Development (Apex & LWC)</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                When out-of-the-box features aren't enough, our developers build custom components and logic using Lightning Web Components and Apex to meet your unique needs.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Custom UI with Lightning Web Components
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Apex Triggers & Controllers
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Complex Business Logic Implementation
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">API & System Integration</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                We connect Salesforce with external systems using REST/SOAP APIs and middleware like MuleSoft or Dell Boomi to ensure seamless data exchange.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Third-party App Integrations
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    External Data Sources (OData)
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Custom API Development
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideUp} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Managed Services & Support</h3>
                            <p className="text-neutral-gray leading-relaxed mb-6">
                                Keep your Salesforce environment running at peak performance with our ongoing administrative support, health checks, and user training programs.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Regular Health Checks & Audits
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    User Training & Adoption
                                </li>
                                <li className="flex items-center text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Continuous Support & Optimization
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section (Placeholder consistent with design) */}
            <section className="py-24 bg-white" id="testimonials">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Driving Success with Salesforce
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 text-center max-w-4xl mx-auto">
                        <div {...motionConfig.slideUp} className="p-8 italic text-neutral-gray text-lg border-l-4 border-sky-blue bg-slate-50 rounded-r-2xl shadow-sm">
                            "Thanks to their Salesforce expertise, our sales cycle was reduced by 30% through automation and better data visibility."
                        </div>
                        <div {...motionConfig.slideUp} className="p-8 italic text-neutral-gray text-lg border-l-4 border-sky-blue bg-slate-50 rounded-r-2xl shadow-sm">
                            "The custom Lightning components they built transformed our user experience and significantly increased CRM adoption."
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50" id="faq">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Salesforce FAQ
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div {...motionConfig.slideUp} className="bg-white rounded-2xl p-8 border border-sky-blue/10 shadow-sm">
                            <h3 className="font-display text-xl text-navy-blue mb-4">What Salesforce Clouds do you support?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                we support the entire Salesforce ecosystem, with specialized expertise in Sales Cloud, Service Cloud, Marketing Cloud, and Community Cloud.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-2xl p-8 border border-sky-blue/10 shadow-sm">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Can you integrate Salesforce with my existing ERP?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Yes, we have extensive experience integrating Salesforce with SAP, Oracle, Microsoft Dynamics, and custom legacy systems using both point-to-point APIs and enterprise service buses.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-2xl p-8 border border-sky-blue/10 shadow-sm">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Do you provide ongoing administrative support?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Absolutely. We offer managed services packages that include daily user support, periodic system maintenance, and strategic roadmapping to ensure your platform evolves with your business.
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
