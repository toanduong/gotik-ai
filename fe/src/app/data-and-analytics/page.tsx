"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motionConfig, withDelay } from "@/lib/motion";
import { useEffect } from "react";

export default function DataAndAnalytics() {
    useEffect(() => {
            if (typeof window !== 'undefined' && (window as any).Motion) {
                const { inView } = (window as any).Motion;
    
                inView('.da-hero-1', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
                });

                inView('.da-hero-2', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
                });
    
                inView('.da-hero-3', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
                });

                inView('.da-benefit-slideLeft', ({ target }: any) => {
                    const { animate } = (window as any).Motion;
                    animate(target, { opacity: [0, 1], y: [-40, 0] }, { duration: 0.6 });
                });
    
                inView('.da-benefit-slideRight', ({ target }: any) => {
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
                <div className="da-hero-1 absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl"></div>
                <div className="da-hero-2 absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl"></div>

                <div className="da-hero-3 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12" {...motionConfig.fadeIn}>
                        <div className="inline-block px-4 py-1.5 mb-4 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                            Data & Analytics
                        </div>
                        <h1 className="font-display text-4xl lg:text-6xl text-navy-blue mb-6">
                            We Turn Your Data into <span className="text-sky-blue italic">Valuable Knowledge</span>
                        </h1>
                        <p className="text-lg text-neutral-gray">
                            Gotik specialists accompany you along the entire data value chain: from developing and implementing your data strategy to building tools for data collection and selecting optimal analysis methods.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div {...withDelay(motionConfig.slideUp, 0.3)} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-sky-blue/10 p-8">
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

            {/* Benefits Section */}
            <section className="py-24 bg-white" id="benefits">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Your Benefits through Data and Analytics
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div {...motionConfig.slideLeft} className="da-benefit-slideLeft bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-sky-blue mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Competitive Advantages through Data</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Use your data to better understand your company and customers and gain a decisive market advantage.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Strategic Decision Making</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Our analyses help you better assess future developments and make strategically smart decisions.
                            </p>
                        </div>

                        <div {...motionConfig.slideRight} className="da-benefit-slideRight bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Optimize Business Processes</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Recognize potential for efficiency gains in areas like procurement, production, and sales through data analysis.
                            </p>
                        </div>

                        <div {...motionConfig.slideLeft} className="da-benefit-slideLeft bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Drive Innovation</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Use data-based insights to develop more successful innovations and business models.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Make Complex Data Usable</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                We offer tools with which you can effectively use large and complex amounts of data.
                            </p>
                        </div>

                        <div {...motionConfig.slideRight} className="da-benefit-slideRight bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-sky-blue/10">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Make Insights Visible</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Our solutions make hidden patterns and relationships in your data visible to optimize customer relationships.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-slate-50" id="services">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16" {...motionConfig.fadeIn}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue mb-6">
                            Our Data and Analytics Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-sky-blue mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Development of Data Strategies</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Our specialists support you in planning and implementing a customized data strategy that aligns with your company goals.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Building Data Collection Tools</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                We offer solutions for efficient collection and structuring of your data to create a solid foundation for analysis.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/><path d="m1 12h6m6 0h6"/><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Selection of Analysis Tools</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                We advise you on selecting the optimal analysis tools and methods for your specific requirements.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Expertise in AI and Machine Learning</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Our software engineers are up-to-date in areas such as Artificial Intelligence, Smart Bots, Machine Learning, and Data Mining.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Specific Tool Development</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                We develop the tools you need to effectively use and understand your data in the shortest possible time.
                            </p>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-white rounded-3xl p-8 shadow-lg border border-sky-blue/10 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <h3 className="font-display text-xl text-navy-blue mb-4">Technical and Business Expertise</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                Our experts master not only the technical aspects but also understand business challenges to deliver analyses with measurable value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshop Section */}
            <section className="py-24 bg-navy-blue text-white" id="workshop">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div {...motionConfig.slideLeft}>
                            <span className="text-sky-blue font-bold tracking-widest uppercase text-xs mb-3 block">Innovation Workshop</span>
                            <h2 className="font-display text-4xl lg:text-5xl mb-6">
                                Data Science Innovation Workshop
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                The Data Science Innovation Workshop offers you an ideal format to assess potentials and risks in the area of Data & Analytics faster and better. We support you individually with our process, methods, technology, and business expertise.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-navy-blue bg-white rounded-lg hover:bg-gray-100 transition-all duration-300"
                            >
                                Request Workshop Information
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                            </a>
                        </div>

                        <div {...motionConfig.slideRight} className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/content/data-science-innovation.jpg"
                                alt="Data Science Innovation"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-white font-display text-xl font-semibold">Assess Potentials & Risks</p>
                                <p className="text-white/80 text-sm mt-2">Faster and better with our expertise</p>
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
                            <h3 className="font-display text-xl text-navy-blue mb-4">What is the difference between Data Science and Data Analytics?</h3>
                            <p className="text-neutral-gray leading-relaxed mb-4">
                                While Data Analytics mainly focuses on interpreting existing data, Data Science goes a step further and develops algorithms to detect patterns in complex data.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                <div className="bg-white rounded-xl p-6 border border-sky-blue/10">
                                    <h4 className="font-bold text-navy-blue mb-3">Data Science</h4>
                                    <ul className="space-y-2 text-sm text-neutral-gray">
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                                            <span>Interdisciplinary: Combines statistics, computer science, and business analysis</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                                            <span>Predictive and prescriptive focus</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                                            <span>Often works with Big Data</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-xl p-6 border border-sky-blue/10">
                                    <h4 className="font-bold text-navy-blue mb-3">Data Analytics</h4>
                                    <ul className="space-y-2 text-sm text-neutral-gray">
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                                            <span>Focused on evaluating existing data</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                                            <span>Descriptive: Explains past and present</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                                            <span>Usually deals with structured data</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div {...motionConfig.slideUp} className="bg-slate-50 rounded-2xl p-8 border border-sky-blue/10">
                            <h3 className="font-display text-xl text-navy-blue mb-4">Why is a data strategy important?</h3>
                            <p className="text-neutral-gray leading-relaxed">
                                A data strategy is crucial because it defines how your organization collects, processes, analyzes, and uses data. Without a clear strategy, companies risk data silos, inconsistent data quality, and missed opportunities for optimization and innovation. A well-thought-out data strategy enables informed decision-making, improves operational efficiency, and creates a competitive advantage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-sky-500" id="cta">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="font-display text-4xl lg:text-5xl text-white mb-6">
                        Do You Want to Turn Your Data into Knowledge?
                    </h2>
                    <p className="text-lg text-white/90 mb-8">
                        Schedule a free consultation now!
                    </p>
                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-sky-600 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300">
                        Schedule Free Consultation
                    </a>
                </div>
            </section>

            {/* Contact Section */}
            <Contact />
            <Footer />
        </main>
    );
}
