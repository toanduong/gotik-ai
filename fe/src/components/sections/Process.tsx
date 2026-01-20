"use client";

import { useEffect } from "react";
import { useTranslations } from 'next-intl';

export default function Process() {
    const t = useTranslations('process');

    const steps = [
        {
            number: 1,
            title: t('steps.discovery.title'),
            description: t('steps.discovery.description'),
            features: t.raw('steps.discovery.features'),
        },
        {
            number: 2,
            title: t('steps.planning.title'),
            description: t('steps.planning.description'),
            features: t.raw('steps.planning.features'),
        },
        {
            number: 3,
            title: t('steps.execution.title'),
            description: t('steps.execution.description'),
            features: t.raw('steps.execution.features'),
        },
        {
            number: 4,
            title: t('steps.delivery.title'),
            description: t('steps.delivery.description'),
            features: t.raw('steps.delivery.features'),
        },
    ];

    useEffect(() => {
        // Animate Process section with Motion.dev
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.process-header', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6 });
            });

            inView('.process-step', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target,
                    { opacity: [0, 1], x: [-40, 0] },
                    { duration: 0.7, delay: 0.1 }
                );
            }, { amount: 0.3 });
        }
    }, []);

    return (
        <section id="approach" className="py-32 px-6 md:px-12 bg-slate-50 relative z-10">
            <div className="process-header mb-16 text-center opacity-0">
                <span className="text-[10px] font-bold text-neutral-gray uppercase tracking-widest mb-3 block">{t('badge')}</span>
                <h2 className="text-4xl md:text-5xl font-display text-navy-blue tracking-tight leading-[1.1]">
                    {t('title')} <br /><span className="text-sky-blue">{t('titleHighlight')}</span>
                </h2>
            </div>

            <div className="max-w-4xl mx-auto">
                {steps.map((step, index) => (
                    <div key={index} className="process-step flex gap-8 mb-16 opacity-0">
                        <div className="flex-shrink-0 w-16 h-16 bg-sky-blue rounded-full flex items-center justify-center text-white font-display font-bold text-xl hover:scale-110 transition-transform">
                            {step.number}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-display font-semibold text-navy-blue mb-3">{step.title}</h3>
                            <p className="text-neutral-gray mb-4">{step.description}</p>
                            <ul className="space-y-2 text-sm text-neutral-gray">
                                {step.features.map((feature: string, fIndex: number) => (
                                    <li key={fIndex} className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue"><path d="M20 6 9 17l-5-5" /></svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
