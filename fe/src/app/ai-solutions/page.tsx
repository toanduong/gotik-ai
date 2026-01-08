"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

const benefits = [
    {
        title: "60% Cost Reduction",
        description: "Automate repetitive tasks and optimize resource allocation with intelligent AI workflows.",
        icon: "zap",
    },
    {
        title: "5x Faster Processing",
        description: "Accelerate document processing, data analysis, and decision-making with GenAI.",
        icon: "trending-up",
    },
    {
        title: "Enterprise-Grade Security",
        description: "Built on Azure with compliance-ready AI solutions for regulated industries.",
        icon: "shield-check",
    },
];

const useCases = [
    {
        badge: "Document Automation",
        title: "Intelligent Document Processing with Azure AI",
        description: "Transform manual document workflows with Azure Form Recognizer and custom AI models. Extract, classify, and process thousands of documents automatically with 99.5% accuracy.",
        features: [
            { label: "Invoice Processing:", value: "Reduce processing time from 3 days to 15 minutes" },
            { label: "Contract Analysis:", value: "Extract key clauses and identify risks automatically" },
            { label: "Multi-language Support:", value: "Process documents in 100+ languages seamlessly" },
        ],
        metrics: [
            { label: "Cost Savings", value: "75%" },
            { label: "Faster Processing", value: "10x" },
            { label: "Accuracy Rate", value: "99.5%" },
        ],
        architecture: [
            { title: "Input Layer", content: "Azure Blob Storage + Event Grid", icon: "file-text" },
            { title: "AI Processing", content: "Azure Form Recognizer + Custom Vision", icon: "brain" },
            { title: "Data Layer", content: "Cosmos DB + Azure Cognitive Search", icon: "database" },
            { title: "Automation", content: "Azure Logic Apps + Power Automate", icon: "workflow" },
        ]
    },
    {
        badge: "Knowledge Management",
        title: "RAG-Powered Enterprise Knowledge Assistant",
        description: "Deploy intelligent chatbots that provide accurate answers from your entire knowledge base using Retrieval-Augmented Generation (RAG) with Azure OpenAI and Cognitive Search.",
        features: [
            { label: "Instant Answers:", value: "Query millions of documents in seconds with semantic search" },
            { label: "Always Accurate:", value: "Grounded responses with source citations and confidence scores" },
            { label: "Multi-Modal:", value: "Process text, PDFs, images, and structured data simultaneously" },
        ],
        metrics: [
            { label: "Query Resolution", value: "85%" },
            { label: "Faster Search", value: "12x" },
            { label: "Support Reduction", value: "50%" },
        ],
        architecture: [
            { title: "User Query", content: "Natural language input processing", icon: "message-square" },
            { title: "Retrieval", content: "Azure Cognitive Search + Vector DB", icon: "search" },
            { title: "Generation", content: "Azure OpenAI GPT-4 + Context", icon: "sparkles" },
            { title: "Response", content: "Accurate, contextual answers with citations", icon: "check-check" },
        ],
        reverse: true
    }
];

export default function AISolutions() {
    return (
        <main className="relative bg-white min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-48 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block py-2 px-4 bg-sky-blue/10 text-sky-blue text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                        AI & Digital Transformation
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-light text-navy-blue mb-6 leading-tight">
                        Transform Your Business with <span className="text-sky-blue">AI Solutions</span>
                    </h1>
                    <p className="text-xl text-neutral-gray leading-relaxed max-w-3xl mx-auto">
                        Leverage Azure AI, RAG, GenAI workflows, and intelligent automation to streamline operations, optimize processes, and drive unprecedented efficiency across your organization.
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="px-6 md:px-12 max-w-6xl mx-auto mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits.map((b, i) => (
                        <div key={i} className="bg-gradient-to-br from-sky-blue/10 to-transparent border border-sky-blue/20 rounded-2xl p-8 hover:border-sky-blue/40 transition-all">
                            <div className="w-16 h-16 bg-sky-blue rounded-xl flex items-center justify-center mb-6">
                                <Icon name={b.icon} className="text-white w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-display font-semibold text-navy-blue mb-3">{b.title}</h3>
                            <p className="text-neutral-gray">{b.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 px-6 md:px-12 bg-slate-50">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-neutral-gray uppercase tracking-widest mb-3 block">Real-World Applications</span>
                        <h2 className="text-4xl md:text-5xl font-display text-navy-blue mb-4">AI Transformation Use Cases</h2>
                        <p className="text-neutral-gray max-w-2xl mx-auto">Proven solutions powered by Azure AI, RAG architecture, and GenAI workflows</p>
                    </div>

                    <div className="space-y-12">
                        {useCases.map((uc, i) => (
                            <div key={i} className="bg-white rounded-3xl p-8 md:p-12 border border-sky-blue/10 hover:border-sky-blue/30 transition-all">
                                <div className={`grid md:grid-cols-2 gap-12 items-center ${uc.reverse ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={uc.reverse ? 'md:order-2' : ''}>
                                        <span className="inline-block px-3 py-1 bg-sky-blue/10 text-sky-blue text-xs font-bold uppercase rounded-full mb-4">
                                            {uc.badge}
                                        </span>
                                        <h3 className="text-3xl font-display font-semibold text-navy-blue mb-4">{uc.title}</h3>
                                        <p className="text-neutral-gray mb-6 leading-relaxed">{uc.description}</p>

                                        <div className="space-y-3 mb-6">
                                            {uc.features.map((f, fi) => (
                                                <div key={fi} className="flex items-start gap-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mt-1 flex-shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                                    <div>
                                                        <strong className="text-navy-blue">{f.label}</strong>
                                                        <span className="text-neutral-gray ml-1">{f.value}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bg-slate-50 rounded-xl p-4 border border-sky-blue/10">
                                            <div className="text-xs font-bold text-neutral-gray uppercase tracking-wider mb-2">Impact Metrics</div>
                                            <div className="grid grid-cols-3 gap-4">
                                                {uc.metrics.map((m, mi) => (
                                                    <div key={mi}>
                                                        <div className="text-2xl font-display font-bold text-sky-blue">{m.value}</div>
                                                        <div className="text-xs text-neutral-gray">{m.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`bg-navy-blue rounded-2xl p-8 text-white ${uc.reverse ? 'md:order-1' : ''}`}>
                                        <div className="text-xs font-bold uppercase tracking-wider mb-4 text-sky-blue">Architecture</div>
                                        <div className="space-y-4">
                                            {uc.architecture.map((a, ai) => (
                                                <div key={ai}>
                                                    <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <Icon name={a.icon} className="text-sky-blue w-6 h-6" />
                                                            <strong className="font-display">{a.title}</strong>
                                                        </div>
                                                        <p className="text-sm text-white/70">{a.content}</p>
                                                    </div>
                                                    {ai < uc.architecture.length - 1 && (
                                                        <div className="flex items-center justify-center text-sky-blue py-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14m-7-7 7 7 7-7" /></svg>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-navy-blue to-sky-blue text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">Ready to Transform Your Business with AI?</h2>
                    <p className="text-xl text-white/80 mb-8 leading-relaxed">
                        Let's discuss how Azure AI, RAG, and GenAI workflows can drive efficiency and innovation in your organization.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/#contact" className="bg-white text-navy-blue px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-sky-blue hover:text-white transition-all">
                            Request Consultation
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function Icon({ name, className }: { name: string; className?: string }) {
    if (name === "zap") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" /></svg>;
    if (name === "trending-up") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>;
    if (name === "shield-check") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>;
    if (name === "file-text") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>;
    if (name === "brain") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" /></svg>;
    if (name === "database") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></svg>;
    if (name === "workflow") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" /></svg>;
    if (name === "message-square") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
    if (name === "search") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>;
    if (name === "sparkles") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>;
    if (name === "check-check") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 7 17l-5-5" /><path d="m22 10-7.5 7.5L13 16" /></svg>;
    return null;
}
