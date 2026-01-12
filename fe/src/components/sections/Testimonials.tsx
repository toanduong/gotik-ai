"use client";

import { useEffect, useRef } from "react";

const testimonials = [
    {
        quote: "Gotik supported us in modernizing our software to a highly flexible system. We benefited enormously from the know-how of the various Gotik experts.",
        author: "Rolf Traber",
        role: "CTO",
        initials: "RT",
    },
    {
        quote: "We brought in Gotik so that we can implement future innovations faster in our software. The collaboration with Gotik was first-class – technically and personally.",
        author: "Christian Königsdorfer",
        role: "CEO",
        initials: "CK",
    },
    {
        quote: "The microservices architecture that Gotik designed for us has transformed our ability to scale. We can now deploy updates independently and respond to market changes faster than ever before.",
        author: "Michael S.",
        role: "CTO, Technology Company",
        initials: "MS",
    },
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

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

        // Animate testimonials with Motion.dev
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.testimonials-header', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6 });
            });

            inView('.testimonial-card', ({ target }: any) => {
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
        <section id="testimonials" className="py-32 px-6 md:px-12 relative z-10 bg-white">
            <div className="testimonials-header mb-16 text-center opacity-0">
                <span className="text-[10px] font-bold text-neutral-gray uppercase tracking-widest mb-3 block">Client Success Stories</span>
                <h3 className="text-4xl md:text-5xl font-display text-navy-blue tracking-tight">What Our Clients Say</h3>
            </div>

            <div ref={containerRef} className="spotlight-group grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, index) => (
                    <div key={index} className="testimonial-card spotlight-card p-8 bg-white border border-sky-blue/10 rounded-2xl flex flex-col justify-between h-full min-h-[300px] opacity-0 hover:border-sky-blue/30 transition-all">
                        <div className="relative z-10">
                            <div className="mb-6 text-sky-blue/30 text-3xl font-serif">"</div>
                            <p className="text-lg text-dark-navy font-display leading-relaxed mb-8">
                                {t.quote}
                            </p>
                        </div>
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-sky-blue/10 border border-sky-blue/20 overflow-hidden flex items-center justify-center">
                                <span className="text-navy-blue font-semibold">{t.initials}</span>
                            </div>
                            <div>
                                <div className="text-sm text-navy-blue font-semibold font-display">{t.author}</div>
                                <div className="text-[10px] text-neutral-gray uppercase tracking-wider">{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
