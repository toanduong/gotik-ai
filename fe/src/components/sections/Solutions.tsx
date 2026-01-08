"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const solutions = [
    {
        title: "Cloud Solutions",
        description: "Scale your infrastructure with expert Azure and AWS management. We architect resilient, cloud-native environments for modern enterprises.",
        subItems: ["Azure Management", "Cloud Native Architecture", "Migration & Strategy"],
        icon: "cloud",
        href: "/cloud-solutions",
        className: "lg:col-span-2",
    },
    {
        title: "Data Solutions",
        description: "Transform raw data into actionable intelligence with Gen AI and predictive analytics.",
        subItems: ["Unified Data Fabric", "Generative Intelligence", "Governance & Security"],
        icon: "database",
        href: "/data-solutions",
        className: "col-span-1",
    },
    {
        title: "ERP Solutions",
        description: "Streamline operations with customized Odoo and SAP implementations tailored to your workflow.",
        subItems: ["Odoo Implementation", "SAP Integration", "Workflow Optimization"],
        icon: "settings",
        href: "/erp-system",
        className: "col-span-1",
    },
    {
        title: "AI Solutions",
        description: "Embed intelligence into your products. From custom LLMs to automated decision engines, we build the future of autonomous systems.",
        subItems: ["Custom LLMs", "Autonomous Systems", "Decision Engines"],
        icon: "brain",
        href: "/ai-solutions",
        className: "lg:col-span-2",
    },
];

export default function Solutions() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Enhanced spotlight effect
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

        // Animate cards on scroll
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
                    Comprehensive Technology <br /><span className="text-sky-blue">Consulting Services</span>
                </h2>
                <p className="text-neutral-gray max-w-2xl">From cloud architecture to generative AI, we provide end-to-end solutions that drive enterprise growth.</p>
            </div>

            <div ref={containerRef} className="spotlight-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((solution, index) => (
                    <div
                        key={index}
                        className={`spotlight-card relative bg-white border border-sky-blue/10 rounded-2xl p-8 hover:border-sky-blue/30 transition-all group opacity-0 ${solution.className}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-12 h-12 bg-sky-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-blue group-hover:scale-110 transition-all duration-300">
                                <Icon name={solution.icon} />
                            </div>
                            <h3 className="text-2xl font-display font-semibold text-navy-blue mb-3">{solution.title}</h3>
                            <p className="text-neutral-gray text-sm leading-relaxed mb-6">{solution.description}</p>

                            <ul className="mb-8 space-y-2">
                                {solution.subItems.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs text-neutral-gray/80">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><path d="M20 6 9 17l-5-5" /></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <Link
                                    href={solution.href}
                                    className="inline-flex items-center gap-2 text-xs text-sky-blue font-semibold uppercase tracking-wider group-hover:gap-3 transition-all"
                                >
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Icon({ name }: { name: string }) {
    const className = "text-sky-blue group-hover:text-white transition-colors";

    if (name === "cloud") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-3-2.5-4.5-4.5-4.5-1-3-4-5-7-5-4 0-7 3-7 7 0 .5 0 1 .1 1.5C1.5 14.5 0 16 0 18c0 2.5 2 4.5 4.5 4.5h13z" />
        </svg>
    );
    if (name === "database") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
    );
    if (name === "settings") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.72V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.72V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
    if (name === "brain") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
        </svg>
    );
    return null;
}
