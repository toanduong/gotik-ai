"use client";

import { useEffect, useState } from "react";

const learningPaths = [
    {
        category: "Engineering Excellence",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
            </svg>
        ),
        description: "Master modern software development from fundamentals to advanced patterns",
        topics: ["Clean Architecture", "Test-Driven Development", "Design Patterns", "Code Review Best Practices"]
    },
    {
        category: "Cloud & DevOps",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
            </svg>
        ),
        description: "Build, deploy, and scale applications in modern cloud environments",
        topics: ["Kubernetes & Docker", "CI/CD Pipelines", "Infrastructure as Code", "Cloud Security"]
    },
    {
        category: "Data & AI",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
        ),
        description: "Transform data into insights and build intelligent applications",
        topics: ["Machine Learning Fundamentals", "LLM Integration", "Data Engineering", "AI Strategy"]
    },
    {
        category: "Leadership & Strategy",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
        ),
        description: "Lead technical teams and drive strategic technology decisions",
        topics: ["Technical Leadership", "Agile at Scale", "Tech Debt Management", "Team Building"]
    }
];

const stats = [
    { value: "5,000+", label: "Engineers Trained" },
    { value: "200+", label: "Organizations" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "95%", label: "Completion Rate" }
];

export default function Academy() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.academy-header', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6 });
            });

            inView('.academy-path', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target,
                    { opacity: [0, 1], y: [40, 0] },
                    { duration: 0.7, delay: 0.1 }
                );
            }, { amount: 0.3 });

            inView('.academy-stat', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target,
                    { opacity: [0, 1], scale: [0.8, 1] },
                    { duration: 0.5 }
                );
            }, { amount: 0.5 });
        }
    }, []);

    return (
        <section id="academy" className="py-32 bg-navy-blue text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>
            <div className="absolute top-20 right-0 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="academy-header text-center mb-20 opacity-0">
                    <span className="text-[10px] font-bold text-sky-blue uppercase tracking-widest mb-4 block">Gotik Academy</span>
                    <h2 className="text-4xl md:text-5xl font-display text-white mb-6 tracking-tight">
                        Invest in Your Team's Growth
                    </h2>
                    <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                        We don't just deliver solutions—we empower your team to excel. Our tailored training programs combine real-world experience with practical knowledge, designed to elevate your organization's technical capabilities.
                    </p>
                </div>

                {/* Learning Paths */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {learningPaths.map((path, index) => (
                        <div
                            key={index}
                            className="academy-path group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-sky-blue/30 transition-all duration-300 cursor-pointer opacity-0"
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-16 h-16 rounded-xl bg-sky-blue/20 flex items-center justify-center text-sky-blue group-hover:bg-sky-blue group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                    {path.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-display text-white mb-3 group-hover:text-sky-blue transition-colors">
                                        {path.category}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed">
                                        {path.description}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="text-xs text-sky-blue/80 uppercase tracking-widest font-bold mb-4">Key Topics</div>
                                <div className="grid grid-cols-2 gap-3">
                                    {path.topics.map((topic, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue flex-shrink-0">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                            <span className="leading-tight">{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-white/60">Custom programs available</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue group-hover:translate-x-1 transition-transform">
                                        <path d="M5 12h14"/>
                                        <path d="m12 5 7 7-7 7"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-sky-blue/20 to-purple-500/20 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm">
                    <h3 className="text-3xl md:text-4xl font-display text-white mb-4">
                        Ready to Transform Your Team?
                    </h3>
                    <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                        Whether you need on-site workshops, virtual training, or custom curriculum development, we'll work with you to design a program that fits your team's needs and schedule.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy-blue font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-sky-blue hover:text-white hover:scale-105 transition-all duration-300"
                        >
                            Schedule a Consultation
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                            </svg>
                        </a>
                        <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold text-sm uppercase tracking-widest rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300">
                            Download Curriculum
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
