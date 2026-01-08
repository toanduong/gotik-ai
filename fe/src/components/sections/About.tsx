"use client";

import { useEffect } from "react";

const stats = [
    { label: "Founded", value: "2011" },
    { label: "Projects Delivered", value: "200+" },
    { label: "Expert Team", value: "50+" },
    { label: "Client Rating", value: "4.9★" },
];

export default function About() {
    useEffect(() => {
        // Animate About section with Motion.dev
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.about-header', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6 });
            });

            inView('.about-image', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target,
                    { opacity: [0, 1], scale: [0.95, 1] },
                    { duration: 0.7, delay: 0.1 }
                );
            }, { amount: 0.3 });

            inView('.about-stat', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target,
                    { opacity: [0, 1], y: [20, 0] },
                    { duration: 0.5, delay: 0.1 }
                );
            }, { amount: 0.5 });

            inView('.about-mission', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [40, 0] }, { duration: 0.8 });
            });
        }
    }, []);

    return (
        <section id="about" className="py-32 px-6 md:px-12 relative z-10 bg-white">
            <div className="about-header text-center mb-16 opacity-0">
                <span className="text-[10px] font-bold text-neutral-gray uppercase tracking-widest mb-3 block">About Gotik Consulting</span>
                <h3 className="text-3xl md:text-4xl font-display text-navy-blue tracking-tight">15+ Years of Software Excellence</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96 md:h-[500px] mb-16">
                <div className="about-image col-span-2 row-span-2 relative overflow-hidden rounded-xl group opacity-0">
                    <img src="https://img.rocket.new/generatedImages/rocket_gen_img_1f6ce9baa-1765547096475.png"
                        alt="Team collaboration"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="about-image col-span-1 row-span-1 relative overflow-hidden rounded-xl group opacity-0">
                    <img src="https://img.rocket.new/generatedImages/rocket_gen_img_18ad8d69a-1767676923521.png"
                        alt="Strategy session"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="about-image col-span-1 row-span-2 relative overflow-hidden rounded-xl group opacity-0">
                    <img src="https://img.rocket.new/generatedImages/rocket_gen_img_1dfbc27cd-1766500363073.png"
                        alt="Modern office"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="about-image col-span-1 row-span-1 relative overflow-hidden rounded-xl group opacity-0">
                    <img src="https://img.rocket.new/generatedImages/rocket_gen_img_153960f20-1767390016873.png"
                        alt="Sprint planning"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-sky-blue/10">
                {stats.map((stat, index) => (
                    <div key={index} className="about-stat text-center opacity-0">
                        <div className="text-4xl text-navy-blue font-display font-semibold mb-2">{stat.value}</div>
                        <div className="text-xs text-neutral-gray uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Mission Statement */}
            <div className="about-mission mt-32 max-w-3xl mx-auto text-center opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue/20 mb-8 mx-auto"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /></svg>
                <h2 className="text-3xl md:text-4xl font-display text-navy-blue tracking-tight leading-snug">
                    We believe every business deserves access to world-class software engineering. Our mission is to
                    democratize technical excellence through consulting and education.
                </h2>
                <div className="h-16 w-px bg-gradient-to-b from-sky-blue to-transparent mx-auto mt-8"></div>
            </div>
        </section>
    );
}
