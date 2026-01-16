"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function CloudServices() {
    useEffect(() => {
            if (typeof window !== 'undefined' && (window as any).Motion) {
                const { inView } = (window as any).Motion;

                inView('.cs-hero-1', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
                });

                inView('.cs-hero-2', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
                });

                inView('.cs-hero-3', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
                });

                inView('.cs-benefit-slideLeft', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
                });

                inView('.cs-benefit-slideRight', ({ target }: any) => {
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
                <div className="cs-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="cs-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="cs-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-blue-500/30 rounded-full bg-blue-500/5 text-blue-600 text-xs font-bold tracking-wider uppercase">
                            Cloud Services
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            Transform Your Business with <span className="text-blue-500 italic">Cloud Solutions</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            Custom cloud strategies tailored to your needs. From migration to optimization, we deliver secure, scalable cloud solutions on AWS, Azure, and Google Cloud.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div {...withDelay(motionConfig.slideUp, 0.3)} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-blue-500/10 p-8">
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

            {/* Cloud Solutions Grid */}
            <section className="py-24 bg-white" id="solutions">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Comprehensive Cloud Solutions
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            Whether cloud-first or hybrid – we design the perfect cloud strategy for your business requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-sky-blue mb-4 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Cloud Strategy & Consulting</h3>
                            <p className="text-sm text-neutral-gray mb-4">Custom cloud strategies tailored to your business goals with cloud-first or hybrid approaches.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Cloud Migration</h3>
                            <p className="text-sm text-neutral-gray mb-4">Seamless migration of applications and data to AWS, Azure, or Google Cloud platforms.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Cloud-Native Development</h3>
                            <p className="text-sm text-neutral-gray mb-4">Build applications designed specifically for cloud platforms with microservices and containers.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Multi-Cloud Strategy</h3>
                            <p className="text-sm text-neutral-gray mb-4">Reduce vendor lock-in with multi-cloud strategies and open standards across platforms.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Cloud Security</h3>
                            <p className="text-sm text-neutral-gray mb-4">Enterprise-grade security ensuring the highest standards for your cloud infrastructure.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">Cloud Optimization</h3>
                            <p className="text-sm text-neutral-gray mb-4">Cost optimization and performance tuning to maximize your cloud ROI.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-2">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>
                                </div>
                                <div>
                                    <h3 className="font-display text-lg text-navy-blue mb-3">Swiss Data Centers</h3>
                                    <p className="text-sm text-neutral-gray mb-4">Cloud solutions with data centers in Switzerland for organizations with high security and compliance requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Expertise Section */}
            <section className="py-24 bg-slate-50" id="platforms">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Multi-Cloud Expertise
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            We work with all major cloud platforms to deliver the best solution for your needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="cs-benefit-slideLeft bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl mb-6">
                                AWS
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Amazon Web Services</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>EC2, Lambda, ECS/EKS</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>S3, RDS, DynamoDB</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>CloudFormation & CDK</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>AWS IoT & AI/ML services</span>
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl mb-6">
                                Azure
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Microsoft Azure</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>App Service, Functions, AKS</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>Azure SQL, Cosmos DB</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>Azure DevOps & ARM</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>Azure AI & Cognitive Services</span>
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideUp} className="cs-benefit-slideRight bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center text-white font-bold text-xl mb-6">
                                GCP
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4">Google Cloud Platform</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>Compute Engine, Cloud Run, GKE</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>Cloud Storage, BigQuery</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>Cloud Build & Deployment Manager</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-neutral-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>Vertex AI & ML services</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-24 bg-white" id="approach">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Our Cloud Approach
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            Strategic planning, seamless migration, and continuous optimization for long-term cloud success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-blue-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                1
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Strategy & Assessment</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">Define your cloud vision</p>
                            <p className="text-neutral-gray leading-relaxed">
                                We analyze your current infrastructure, assess workloads, and develop a tailored cloud strategy aligned with your business objectives.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-blue-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                2
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Migration & Implementation</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">Seamless transition to cloud</p>
                            <p className="text-neutral-gray leading-relaxed">
                                Execute migration with minimal disruption using proven methodologies, ensuring security and performance throughout the process.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-blue-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                3
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Optimization & Support</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">Continuous improvement</p>
                            <div className="space-y-2">
                                <p className="text-neutral-gray text-sm">• Cost optimization & resource management</p>
                                <p className="text-neutral-gray text-sm">• Performance monitoring & tuning</p>
                                <p className="text-neutral-gray text-sm">• Security audits & compliance</p>
                                <p className="text-neutral-gray text-sm">• 24/7 support & incident response</p>
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
                                Why Choose Gotik for Cloud Services?
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Comprehensive cloud expertise across all major platforms. We deliver secure, scalable solutions that drive business value and innovation.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Multi-cloud expertise (AWS, Azure, GCP)</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Enterprise-grade security and compliance</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Cost optimization and resource efficiency</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Swiss data center options for high security</span>
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideRight} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <div className="grid grid-cols-2 gap-6 text-center">
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-blue-400 mb-2">150+</div>
                                    <p className="text-sm text-gray-300">Cloud Migrations</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-blue-400 mb-2">99.99%</div>
                                    <p className="text-sm text-gray-300">Uptime SLA</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-blue-400 mb-2">40%</div>
                                    <p className="text-sm text-gray-300">Avg. Cost Savings</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-blue-400 mb-2">24/7</div>
                                    <p className="text-sm text-gray-300">Support Available</p>
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
                            <h3 className="font-display text-xl text-navy-blue mb-4">What are the benefits of cloud migration?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Cloud migration offers numerous benefits including reduced infrastructure costs through pay-as-you-go pricing, improved scalability to handle traffic spikes, enhanced disaster recovery capabilities, automatic updates and maintenance, global reach with multiple data centers, and increased innovation through access to cutting-edge services. Companies typically see 30-40% cost savings in the long term while gaining significant agility and flexibility.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">How do you ensure cloud security?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                We implement comprehensive security measures including identity and access management (IAM), data encryption at rest and in transit, network security with VPCs and firewalls, regular security audits and compliance checks, automated backup and disaster recovery, security monitoring and incident response, and compliance with standards like ISO 27001, SOC 2, and GDPR. For Swiss clients, we can utilize data centers in Switzerland to meet stringent local requirements.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Should I use single cloud or multi-cloud?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                The choice depends on your requirements. Single cloud offers simplicity, easier management, and deeper integration with platform services. Multi-cloud provides vendor independence, reduced lock-in risk, the ability to use best-of-breed services from each provider, and improved disaster recovery across cloud providers. We help you evaluate factors like existing infrastructure, specific service requirements, compliance needs, and team expertise to determine the best approach. Multi-cloud strategies require careful planning with open standards and proper architecture.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">How long does cloud migration take?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Migration timelines vary based on complexity and scope. A simple application migration might take 4-8 weeks, while enterprise-wide migrations typically require 3-12 months. We follow a phased approach: assessment and planning (2-4 weeks), pilot migration (4-6 weeks), incremental migration of remaining workloads, and optimization. This approach minimizes disruption and allows you to realize benefits early while managing risk effectively. We work closely with your team to develop a realistic timeline based on your specific requirements.
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
