"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function Solutions() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const t = useTranslations('solutions');

    const solutions = [
        {
            title: t('items.softwareEngineering.title'),
            description: t('items.softwareEngineering.description'),
            subItems: t.raw('items.softwareEngineering.subItems'),
            icon: "code",
            href: "/software-engineer",
            className: "col-span-1",
        },
        {
            title: t('items.softwareModernization.title'),
            description: t('items.softwareModernization.description'),
            subItems: t.raw('items.softwareModernization.subItems'),
            icon: "refresh",
            href: "/software-modernization",
            className: "col-span-1",
        },
        {
            title: t('items.aiConsulting.title'),
            description: t('items.aiConsulting.description'),
            subItems: t.raw('items.aiConsulting.subItems'),
            icon: "brain",
            href: "/ai-consulting",
            className: "col-span-1",
        },
        {
            title: t('items.dataManagement.title'),
            description: t('items.dataManagement.description'),
            subItems: t.raw('items.dataManagement.subItems'),
            icon: "database",
            href: "/data-management",
            className: "lg:col-span-2",
        },
        {
            title: t('items.dataArchitecture.title'),
            description: t('items.dataArchitecture.description'),
            subItems: t.raw('items.dataArchitecture.subItems'),
            icon: "layers",
            href: "/data-architecture",
            className: "col-span-1",
        },
        {
            title: t('items.dataAnalytics.title'),
            description: t('items.dataAnalytics.description'),
            subItems: t.raw('items.dataAnalytics.subItems'),
            icon: "chart",
            href: "/data-and-analytics",
            className: "col-span-1",
        },
        {
            title: t('items.bim2fm.title'),
            description: t('items.bim2fm.description'),
            subItems: t.raw('items.bim2fm.subItems'),
            icon: "building",
            href: "/bim2fm",
            className: "col-span-1",
        },
        {
            title: t('items.softwareArchitecture.title'),
            description: t('items.softwareArchitecture.description'),
            subItems: t.raw('items.softwareArchitecture.subItems'),
            icon: "architecture",
            href: "/software-architecture",
            className: "lg:col-span-2",
        },
        {
            title: t('items.iot.title'),
            description: t('items.iot.description'),
            subItems: t.raw('items.iot.subItems'),
            icon: "iot",
            href: "/internet-of-things",
            className: "col-span-1",
        },
        {
            title: t('items.mobileWeb.title'),
            description: t('items.mobileWeb.description'),
            subItems: t.raw('items.mobileWeb.subItems'),
            icon: "mobile",
            href: "/mobile-web-apps",
            className: "col-span-1",
        },
        {
            title: t('items.cloudServices.title'),
            description: t('items.cloudServices.description'),
            subItems: t.raw('items.cloudServices.subItems'),
            icon: "cloud",
            href: "/cloud-services",
            className: "col-span-1",
        },
    ];

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
                <span className="text-[10px] font-bold text-neutral-gray uppercase tracking-widest mb-3 block">{t('badge')}</span>
                <h2 className="text-4xl md:text-5xl font-display text-navy-blue tracking-tight leading-[1.1] mb-6">
                    {t('title')} <br /><span className="text-sky-blue">{t('titleHighlight')}</span>
                </h2>
                <p className="text-neutral-gray max-w-2xl">{t('description')}</p>
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
                                {solution.subItems.map((item: string, i: number) => (
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
                                    {t('learnMore')}
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

    if (name === "code") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
    );
    if (name === "refresh") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/>
        </svg>
    );
    if (name === "brain") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
        </svg>
    );
    if (name === "database") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
    );
    if (name === "layers") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
        </svg>
    );
    if (name === "chart") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
        </svg>
    );
    if (name === "building") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
    );
    if (name === "architecture") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/>
        </svg>
    );
    if (name === "iot") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/><path d="m1 12h6m6 0h6"/><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/>
        </svg>
    );
    if (name === "mobile") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect width="7" height="13" x="6" y="4" rx="1"/><path d="M10.5 17H13"/><path d="M9 7h6"/>
        </svg>
    );
    if (name === "cloud") return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>
    );
    return null;
}
