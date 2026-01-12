"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function DataManagement() {
    useEffect(() => {
            if (typeof window !== 'undefined' && (window as any).Motion) {
                const { inView } = (window as any).Motion;
    
                inView('.dm-hero-1', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
                });

                inView('.dm-hero-2', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
                });
    
                inView('.dm-hero-3', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
                });

                inView('.dm-benefit-slideLeft', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
                });
    
                inView('.dm-benefit-slideRight', ({ target }: any) => {
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
                <div className="dm-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
                <div className="dm-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="dm-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-teal-500/30 rounded-full bg-teal-500/5 text-teal-600 text-xs font-bold tracking-wider uppercase">
                            Data Management
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            Your Path to <span className="text-teal-500 italic">Data Excellence</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            Data is the fuel of your digital transformation. But only with the right strategy, technology, and implementation do real competitive advantages emerge.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div {...withDelay(motionConfig.slideUp, 0.3)} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-teal-500/10 p-8">
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

            {/* Entry Points Grid */}
            <section className="py-24 bg-white" id="entry-points">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Choose Your Entry Point
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            Start your data journey at the point that matters most to your business.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-sky-blue mb-4 group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">I need a clear data strategy</h3>
                            <p className="text-sm text-neutral-gray mb-4">Develop a target picture with us, clarify roles & governance, and create the foundation for data-driven decisions.</p>
                            <a href="/data-strategy" className="text-sky-blue font-semibold text-sm hover:text-navy-blue transition-colors">
                                The Path to Data Strategy →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">I want to turn data into knowledge</h3>
                            <p className="text-sm text-neutral-gray mb-4">Our solutions make hidden patterns and connections in your data visible to optimize your business.</p>
                            <a href="/data-and-analytics" className="text-purple-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                To Data & Analytics →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">I want simple facility management</h3>
                            <p className="text-sm text-neutral-gray mb-4">BIM2FM is designed so specialists without deep IT knowledge can prepare and use BIM data.</p>
                            <a href="/bim2fm" className="text-green-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                To BIM2FM →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">I want to find my data</h3>
                            <p className="text-sm text-neutral-gray mb-4">Thoughtful data architecture leads to successful data management – defining capture, storage, and use.</p>
                            <a href="/data-architecture" className="text-indigo-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                To Data Architecture →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/><path d="m1 12h6m6 0h6"/><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/></svg>
                            </div>
                            <h3 className="font-display text-lg text-navy-blue mb-3">I want to use AI securely</h3>
                            <p className="text-sm text-neutral-gray mb-4">Our AI team implements AI in your organization in a controlled, privacy-compliant manner.</p>
                            <a href="/ai-consulting" className="text-orange-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                To AI Consulting →
                            </a>
                        </div>

                        <div {...motionConfig.slideUp} className="group bg-slate-50 rounded-3xl p-6 border border-sky-blue/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-2">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                </div>
                                <div>
                                    <h3 className="font-display text-lg text-navy-blue mb-3">I want to master data and delight customers</h3>
                                    <p className="text-sm text-neutral-gray mb-4">Transform complex data landscapes into seamless, AI-powered customer experiences. We combine Pimcore's data management power with the Gotik AI Hub.</p>
                                    <a href="/pimcore" className="text-rose-600 font-semibold text-sm hover:text-navy-blue transition-colors">
                                        To Agentic Pimcore →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-slate-50" id="testimonials">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            What Our Clients Say
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div {...motionConfig.slideLeft} className="dm-benefit-slideLeft bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500/30 mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                            <p className="text-neutral-gray text-lg leading-relaxed mb-6">
                                "Thanks to our collaboration with Gotik, we now make data-driven decisions, work more efficiently, and focus on what matters: our customers and innovations. This gives us security – and a good feeling."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-600 font-bold">
                                    PK
                                </div>
                                <div>
                                    <p className="font-bold text-navy-blue">Peter K.</p>
                                    <p className="text-sm text-neutral-gray">Managing Director, Industrial Company</p>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideRight} className="dm-benefit-slideRight bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500/30 mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                            <p className="text-neutral-gray text-lg leading-relaxed mb-6">
                                "Our data was distributed across many systems – that cost us time, money, and nerves. With Gotik, we developed a clear data strategy and intelligently linked our systems. Finally, we can really use our data."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-600 font-bold">
                                    DF
                                </div>
                                <div>
                                    <p className="font-bold text-navy-blue">Dieter F.</p>
                                    <p className="text-sm text-neutral-gray">CDO, Service Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-24 bg-white" id="methodology">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Our Approach
                        </h2>
                        <p className="text-lg text-neutral-gray">
                            With a clearly defined, methodical approach, we support you in strategically using your data. From the first impulse to a scalable pilot project, we guide you purposefully.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-teal-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                1
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Impulse Workshop</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">0.5 days – compact & practical</p>
                            <p className="text-neutral-gray leading-relaxed">
                                We jointly analyze your data challenges and show first concrete potentials.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-teal-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                2
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Maturity Assessment</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">Assessment of your data strategy & organization</p>
                            <p className="text-neutral-gray leading-relaxed">
                                Guided – with benchmark, recommendations & strengths-weaknesses profile.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-teal-500 text-white font-display font-bold text-xl flex items-center justify-center shadow-lg">
                                3
                            </div>
                            <h3 className="font-display text-2xl text-navy-blue mb-4 mt-4">Pilot Project</h3>
                            <p className="text-sky-blue font-semibold text-sm mb-4">Show impact, prepare scaling</p>
                            <div className="space-y-2">
                                <p className="text-neutral-gray text-sm">• Concretize strategy & prioritize use cases</p>
                                <p className="text-neutral-gray text-sm">• Implement first applications (Quick Wins)</p>
                                <p className="text-neutral-gray text-sm">• Establish platforms & architecture</p>
                                <p className="text-neutral-gray text-sm">• Enable & Change Management</p>
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
                                Why Gotik for Data Management?
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                We combine strategic consulting with technical implementation from a single source. Our sustainable architectures ensure long-term success.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Strategic consulting & technical implementation from a single source</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Platforms for structured and unstructured data</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Experience in healthcare, construction, industry & administration</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400 mr-3"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span className="text-gray-200">Sustainable architectures instead of project island solutions</span>
                                </li>
                            </ul>
                        </div>

                        <div {...motionConfig.slideRight} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <div className="grid grid-cols-2 gap-6 text-center">
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-teal-400 mb-2">25+</div>
                                    <p className="text-sm text-gray-300">Years Experience</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-teal-400 mb-2">500+</div>
                                    <p className="text-sm text-gray-300">Projects Delivered</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-teal-400 mb-2">8</div>
                                    <p className="text-sm text-gray-300">Office Locations</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="text-4xl font-display font-bold text-teal-400 mb-2">200+</div>
                                    <p className="text-sm text-gray-300">Data Experts</p>
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
                            <h3 className="font-display text-xl text-navy-blue mb-4">What is professional data management?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Professional data management encompasses all processes, methods, and technologies for structured capture, maintenance, integration, analysis, and use of data in the company. The goal is to ensure high data quality, consistent data flows, and maximum data availability – as a basis for informed decisions and efficient business processes.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Why is data management so important today?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Companies that actively manage data are more competitive: They make decisions faster and more informed, reduce operational risks, and create the basis for AI applications, automation, and data-driven innovation. In short: Good data management determines the digital maturity of your company.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">How does a typical data management project with Gotik work?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                A project usually starts with data analysis and potential assessment. This is followed by concept development and architecture design, implementation including data integration and governance, quality management and training, and operations, monitoring, and continuous optimization. We work iteratively and involve all relevant stakeholders from the start.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">How long does a data management project take?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                The duration depends heavily on the initial situation and goals. While an impulse workshop can be completed in half a day, comprehensive data management transformations can take several months. We always work in phases, so you can see initial results quickly and decide step by step how to proceed.
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
