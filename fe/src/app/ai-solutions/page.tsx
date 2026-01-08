"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { motionConfig, withDelay } from "@/lib/motion";

export default function AISolutions() {
    return (
        <main className="relative bg-white min-h-screen font-sans">
            <Navbar />

            {/* Hero - Interactive Solutions Map */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                            Interactive Solutions Map
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            Explore our <span className="text-sky-blue italic">AI Ecosystem</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            Navigate through our comprehensive suite of artificial intelligence capabilities. Click on any node to discover how we drive value.
                        </p>
                    </div>

                    {/* Solutions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 lg:gap-6 h-auto md:h-[600px]" {...withDelay(motionConfig.fadeIn, 0.2)}>
                        {/* Business Growth - Large */}
                        <a href="#business-growth" className="group relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 bg-white p-8 flex flex-col justify-between hover:scale-[1.01] hover:shadow-2xl transition-all duration-300">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-sky-blue mb-6 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                                </div>
                                <h3 className="text-3xl font-display font-medium text-navy-blue mb-2 group-hover:text-sky-blue transition-colors">Business Growth</h3>
                                <p className="text-neutral-gray max-w-sm">Use AI to optimize customer journeys, enhance retention, and drive revenue scale.</p>
                            </div>
                            <div className="flex items-center text-sky-blue font-semibold text-sm mt-4 group-hover:translate-x-2 transition-transform">
                                Explore Growth <span className="ml-2">→</span>
                            </div>
                        </a>

                        {/* Agentic AI */}
                        <a href="#agentic-architecture" className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden shadow-md border border-sky-blue/10 bg-slate-50 p-6 flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl transition-all duration-300 hover:bg-white">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/><path d="m1 12h6m6 0h6"/><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/></svg>
                                </div>
                                <span className="text-gray-300 group-hover:text-purple-500 transition-colors">↗</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-navy-blue mb-1">Agentic AI</h4>
                                <p className="text-xs text-neutral-gray">Autonomous multi-agent systems.</p>
                            </div>
                        </a>

                        {/* Knowledge RAG */}
                        <a href="#rag-architecture" className="group relative md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden shadow-lg border border-sky-blue/10 bg-sky-blue/5 p-6 flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl transition-all duration-300 hover:bg-sky-blue/10">
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-sky-blue/10 rounded-full blur-2xl group-hover:bg-sky-blue/20 transition-colors"></div>
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-sky-blue mb-6 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"/></svg>
                                </div>
                                <h3 className="text-xl font-display font-medium text-navy-blue mb-2">Knowledge RAG</h3>
                                <p className="text-sm text-neutral-gray leading-relaxed">
                                    Connect LLMs to your enterprise data for context-aware intelligence and accurate retrieval.
                                </p>
                            </div>
                            <div className="mt-4">
                                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-[10px] font-bold uppercase tracking-wide text-sky-blue shadow-sm">
                                    Data Core
                                </span>
                            </div>
                        </a>

                        {/* Automation */}
                        <a href="#workflow-automation" className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden shadow-md border border-sky-blue/10 bg-slate-50 p-6 flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl transition-all duration-300 hover:bg-white">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
                                </div>
                                <span className="text-gray-300 group-hover:text-teal-500 transition-colors">↗</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-navy-blue mb-1">Automation</h4>
                                <p className="text-xs text-neutral-gray">Streamline ERP & CRM workflows.</p>
                            </div>
                        </a>

                        {/* Cost Optimization */}
                        <a href="#cost-optimization" className="group relative md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden shadow-md border border-sky-blue/10 bg-navy-blue p-6 flex items-center gap-6 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="8"/><path d="M12 2v7.5"/><path d="m19 5-5.23 5.23"/><path d="M22 12h-7.5"/><path d="m19 19-5.23-5.23"/><path d="M12 14.5V22"/><path d="M10.23 13.77 5 19"/><path d="M9.5 12H2"/><path d="M10.23 10.23 5 5"/><circle cx="12" cy="12" r="2.5"/></svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-1">Cost Optimization</h3>
                                <p className="text-sm text-gray-300">Maximize ROI with intelligent operational analysis.</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-navy-blue transition-all">
                                <span>↓</span>
                            </div>
                        </a>

                        {/* Contact CTA */}
                        <a href="#contact" className="group relative md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden shadow-md border border-sky-blue/10 bg-white p-6 flex items-center justify-between hover:scale-[1.01] hover:shadow-xl transition-all duration-300 border-l-4 border-l-sky-blue">
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-navy-blue">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-navy-blue">Start Your Journey</h3>
                                    <p className="text-xs text-neutral-gray uppercase tracking-widest">Consultation & Strategy</p>
                                </div>
                            </div>
                            <span className="inline-flex items-center justify-center px-6 py-2 text-xs font-bold tracking-widest uppercase text-white bg-black rounded-full hover:bg-gray-800 transition-all duration-300">
                                Contact Us
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Business Growth Section */}
            <section className="py-24 bg-white" id="business-growth">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                                Grow Customer Business with <span className="text-sky-blue">AI</span>
                            </h2>
                            <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                                Optimize every touchpoint of your customer journey. Our AI solutions ingest data to provide actionable insights, turning passive interactions into active growth opportunities.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-3 mt-1 flex-shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                    <span className="text-neutral-gray">Personalized customer experiences at scale</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-3 mt-1 flex-shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                    <span className="text-neutral-gray">Predictive churn analysis and retention strategies</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-3 mt-1 flex-shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                    <span className="text-neutral-gray">Automated lead qualification and nurturing</span>
                                </li>
                            </ul>
                        </div>
                        <div {...motionConfig.slideRight} className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-50 border border-sky-blue/10 p-8">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-4 bg-white rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mx-auto mb-2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                                    <p className="text-xs font-bold text-neutral-gray">Insights</p>
                                </div>
                                <div className="text-center p-4 bg-white rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mx-auto mb-2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                                    <p className="text-xs font-bold text-neutral-gray">Actions</p>
                                </div>
                                <div className="text-center p-4 bg-white rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mx-auto mb-2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                    <p className="text-xs font-bold text-neutral-gray">Growth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Agentic Architecture Section */}
            <section className="py-24 bg-slate-50 border-y border-sky-blue/10" id="agentic-architecture">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <span className="text-sky-blue font-bold tracking-widest uppercase text-xs mb-3 block">Next-Gen Architecture</span>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">Agentic AI Architecture</h2>
                        <p className="text-neutral-gray">
                            Deploy autonomous multi-agent systems coordinated by a central intelligence to handle complex, multi-step enterprise tasks with precision.
                        </p>
                    </div>

                    <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-sky-blue/10 overflow-hidden" {...withDelay(motionConfig.slideUp, 0.2)}>
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-sky-blue border border-sky-blue/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/><path d="m1 12h6m6 0h6"/><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-blue mb-2">Central Orchestrator</h4>
                                    <p className="text-sm text-neutral-gray">Intelligent routing and task decomposition engine that manages agent workflows.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600 border border-purple-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-blue mb-2">Specialized Agents</h4>
                                    <p className="text-sm text-neutral-gray">Purpose-built autonomous agents for coding, analysis, content generation, and support.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 text-teal-600 border border-teal-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-blue mb-2">Collaborative Feedback Loop</h4>
                                    <p className="text-sm text-neutral-gray">Self-correcting mechanisms ensuring outputs meet quality standards before final delivery.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RAG Architecture Section */}
            <section className="py-24 bg-white" id="rag-architecture">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <div className="inline-block px-4 py-1.5 mb-6 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                                Knowledge Integration
                            </div>
                            <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">Agent RAG Architecture</h2>
                            <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                                Empower your AI with your enterprise data. Our Retrieval Augmented Generation (RAG) systems connect LLMs securely to your documents, vector databases, and APIs for accurate, context-aware responses.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-sky-blue/10 text-sky-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-blue">Document Ingestion</h4>
                                        <p className="text-sm text-neutral-gray">PDFs, Word docs, and wikis are parsed and chunked.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-sky-blue/10 text-sky-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-blue">Vector Database</h4>
                                        <p className="text-sm text-neutral-gray">Semantic indexing for lightning-fast relevance retrieval.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-sky-blue/10 text-sky-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-blue">API Connectors</h4>
                                        <p className="text-sm text-neutral-gray">Real-time data fetching from ERP and CRM systems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="relative bg-slate-50 rounded-3xl p-8 border border-sky-blue/10 shadow-2xl">
                            <div className="bg-white rounded-xl p-6 border border-sky-blue/10">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="font-bold text-xs text-navy-blue uppercase tracking-wider">Live System Status</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs text-neutral-gray">
                                            <span>Latency</span>
                                            <span className="text-navy-blue font-mono font-bold">45ms</span>
                                        </div>
                                        <div className="flex justify-between text-xs text-neutral-gray">
                                            <span>Tokens</span>
                                            <span className="text-navy-blue font-mono font-bold">12k/sec</span>
                                        </div>
                                        <div className="flex justify-between text-xs text-neutral-gray">
                                            <span>Accuracy</span>
                                            <span className="text-navy-blue font-mono font-bold">99.5%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Automation */}
            <section className="py-24 bg-slate-50" id="workflow-automation">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">Workflow Automation</h2>
                        <p className="max-w-2xl mx-auto text-neutral-gray">
                            Seamlessly integrate AI agents into your existing ERP and CRM pipelines to automate repetitive tasks and optimize process efficiency.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-motion-stagger="0.1">
                        <div {...motionConfig.slideUp} className="bg-white p-6 rounded-2xl shadow-lg border border-sky-blue/10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
                            </div>
                            <h3 className="font-bold text-lg text-navy-blue mb-2">Input Trigger</h3>
                            <p className="text-sm text-neutral-gray">New lead in CRM or Invoice received via Email.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-sky-blue/20 hover:-translate-y-2 transition-transform duration-300 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">AI Processing</div>
                            <div className="w-12 h-12 bg-sky-blue/10 rounded-xl flex items-center justify-center text-sky-blue mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"/></svg>
                            </div>
                            <h3 className="font-bold text-lg text-navy-blue mb-2">AI Analysis</h3>
                            <p className="text-sm text-neutral-gray">Data extraction, classification, and decision making.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white p-6 rounded-2xl shadow-lg border border-sky-blue/10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                            </div>
                            <h3 className="font-bold text-lg text-navy-blue mb-2">ERP Integration</h3>
                            <p className="text-sm text-neutral-gray">Update records, create orders, or schedule tasks.</p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white p-6 rounded-2xl shadow-lg border border-sky-blue/10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            </div>
                            <h3 className="font-bold text-lg text-navy-blue mb-2">Completion</h3>
                            <p className="text-sm text-neutral-gray">Process finalized, notifications sent, dashboard updated.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost Optimization */}
            <section className="py-24 bg-navy-blue text-white relative overflow-hidden" id="cost-optimization">
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <h2 className="font-display text-4xl lg:text-5xl mb-6">Cost Optimization with AI</h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Maximize your ROI by identifying inefficiencies. Our AI models analyze operational expenditure in real-time to suggest cost-saving measures without compromising quality.
                            </p>
                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <div className="text-4xl font-display font-bold mb-2 text-sky-blue">-35%</div>
                                    <p className="text-sm opacity-80 uppercase tracking-widest">Operational Costs</p>
                                </div>
                                <div>
                                    <div className="text-4xl font-display font-bold mb-2 text-sky-blue">3x</div>
                                    <p className="text-sm opacity-80 uppercase tracking-widest">Efficiency Gain</p>
                                </div>
                            </div>
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-navy-blue bg-white rounded-lg hover:bg-gray-100 transition-all duration-300">
                                Calculate Your Savings
                            </a>
                        </div>

                        <div {...motionConfig.slideRight} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <div className="flex items-end gap-4 h-64 w-full justify-between px-4 pb-4 border-b border-white/30">
                                <div className="w-12 bg-white/30 rounded-t-lg h-[80%]"></div>
                                <div className="w-12 bg-white/30 rounded-t-lg h-[65%]"></div>
                                <div className="w-12 bg-sky-blue rounded-t-lg h-[40%] shadow-[0_0_20px_rgba(74,144,226,0.5)] relative">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sky-blue font-bold text-sm bg-white px-2 py-1 rounded shadow-sm">-45%</div>
                                </div>
                                <div className="w-12 bg-sky-blue rounded-t-lg h-[30%]"></div>
                            </div>
                            <div className="mt-6 flex justify-between items-center text-sm">
                                <span className="opacity-70">Legacy Systems Cost</span>
                                <span className="font-bold text-sky-blue">Optimized Spend</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-slate-50" id="contact">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div {...motionConfig.slideLeft}>
                            <h2 className="font-display text-5xl text-navy-blue mb-6">Start Your AI Transformation</h2>
                            <p className="text-xl text-neutral-gray mb-10">
                                Expert guidance for your digital journey. From feasibility studies to full-scale deployment, we turn your vision into intelligent reality.
                            </p>
                            <div className="flex items-center gap-4">
                                <span className="text-neutral-gray font-medium">Join 500+ innovators</span>
                            </div>
                        </div>

                        <div {...withDelay(motionConfig.slideRight, 0.2)} className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-sky-blue/10">
                            <form className="space-y-6">
                                <h3 className="text-xl font-bold text-navy-blue mb-6">Start Your Project</h3>

                                <div>
                                    <label className="block text-xs font-bold text-neutral-gray uppercase tracking-wider mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-4 bg-slate-50 border border-transparent focus:border-sky-blue focus:ring-0 rounded-xl text-navy-blue placeholder-gray-400 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-neutral-gray uppercase tracking-wider mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full px-4 py-4 bg-slate-50 border border-transparent focus:border-sky-blue focus:ring-0 rounded-xl text-navy-blue placeholder-gray-400 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-neutral-gray uppercase tracking-wider mb-2">Interest</label>
                                    <select className="w-full px-4 py-4 bg-slate-50 border border-transparent focus:border-sky-blue focus:ring-0 rounded-xl text-navy-blue transition-colors">
                                        <option>Generative AI</option>
                                        <option>Predictive Analytics</option>
                                        <option>Automation</option>
                                        <option>Consulting</option>
                                    </select>
                                </div>

                                <button
                                    type="button"
                                    className="w-full py-4 px-6 bg-navy-blue hover:bg-navy-blue/90 text-white font-bold rounded-xl transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg"
                                >
                                    Request Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
