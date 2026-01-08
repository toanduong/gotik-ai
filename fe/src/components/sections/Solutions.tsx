"use client";

import { useEffect, useRef } from "react";

const solutions = [
    {
        title: "Cloud Migration",
        description: "Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud. We handle everything from planning to execution.",
        icon: "cloud",
        features: ["6-week migration timeline", "Zero downtime guarantee", "Cost optimization included"],
        className: "lg:col-span-2",
    },
    {
        title: "Custom Development",
        description: "Build scalable applications with modern tech stacks. React, Node.js, Python, and more.",
        icon: "code-2",
        cta: "Learn More",
        className: "col-span-1",
    },
    {
        title: "DevOps Setup",
        description: "Implement CI/CD pipelines, containerization, and infrastructure as code.",
        icon: "git-branch",
        cta: "Learn More",
        className: "col-span-1",
    },
    {
        title: "AI Integration",
        description: "Leverage machine learning and AI to automate processes and gain insights. Custom models and API integrations.",
        icon: "brain",
        features: ["GPT-4 & Claude integration", "Custom ML model training"],
        className: "lg:col-span-2",
    },
];

export default function Solutions() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Enhanced spotlight effect with Motion.dev
        const handleMouseMove = (e: MouseEvent) => {
            const cards = container.getElementsByClassName("spotlight-card");
            for (const card of cards as HTMLCollectionOf<HTMLElement>) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };

        container.addEventListener("mousemove", handleMouseMove);

        // Animate cards on scroll with Motion.dev
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.solutions-header', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6 });
            });

            inView('.spotlight-card', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target,
                    { opacity: [0, 1], y: [40, 0], scale: [0.95, 1] },
                    { duration: 0.7, delay: 0.1 }
                );
            }, { amount: 0.3 });
        }

        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section ref={sectionRef} id="solutions" className="py-32 px-6 md:px-12 relative z-10 bg-white">
            <div className="solutions-header mb-16 opacity-0">
                <span className="text-[10px] font-bold text-neutral-gray uppercase tracking-widest mb-3 block">Our Solutions</span>
                <h2 className="text-4xl md:text-5xl font-display text-navy-blue tracking-tight leading-[1.1] mb-6">
                    Comprehensive Software <br /><span className="text-sky-blue">Consulting Services</span>
                </h2>
                <p className="text-neutral-gray max-w-2xl">From strategy to implementation, we provide end-to-end solutions tailored to your business needs.</p>
            </div>

            <div ref={containerRef} className="spotlight-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((solution, index) => (
                    <div
                        key={index}
                        className={`spotlight-card relative bg-white border border-sky-blue/10 rounded-2xl p-8 hover:border-sky-blue/30 transition-all group opacity-0 ${solution.className}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-sky-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-blue group-hover:scale-110 transition-all duration-300">
                                <Icon name={solution.icon} />
                            </div>
                            <h3 className="text-2xl font-display font-semibold text-navy-blue mb-3">{solution.title}</h3>
                            <p className="text-neutral-gray text-sm leading-relaxed mb-4">{solution.description}</p>

                            {solution.features && (
                                <ul className="space-y-2 text-sm text-neutral-gray mb-4">
                                    {solution.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue"><path d="M20 6 9 17l-5-5" /></svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {solution.cta && (
                                <div className="inline-flex items-center gap-2 text-xs text-sky-blue font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                                    {solution.cta}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Icon({ name }: { name: string }) {
    if (name === "cloud") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue group-hover:text-white transition-colors"><path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-3-2.5-4.5-4.5-4.5-1-3-4-5-7-5-4 0-7 3-7 7 0 .5 0 1 .1 1.5C1.5 14.5 0 16 0 18c0 2.5 2 4.5 4.5 4.5h13z" /></svg>;
    if (name === "code-2") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue group-hover:text-white transition-colors"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>;
    if (name === "git-branch") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue group-hover:text-white transition-colors"><line x1="6" x2="6" y1="3" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" /></svg>;
    if (name === "brain") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue group-hover:text-white transition-colors"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" /></svg>;
    return null;
}
