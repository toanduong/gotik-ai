"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Hero() {
    useEffect(() => {
        // Initialize Motion.dev animations
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { animate, stagger, inView } = (window as any).Motion;

            // Animate hero elements on mount
            animate('.hero-badge', { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, delay: 0.1 });
            animate('.hero-title', { opacity: [0, 1], y: [30, 0] }, { duration: 0.8, delay: 0.3 });
            animate('.hero-description', { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, delay: 0.5 });
            animate('.hero-cta', { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, delay: 0.7 });
            animate('.hero-stats', { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, delay: 0.8 });
            animate('.hero-visual', { opacity: [0, 1], scale: [0.95, 1] }, { duration: 0.8, delay: 0.5 });

            // Floating animation for background gradients
            animate('.floating-gradient-1',
                { y: [0, -30, 0], x: [0, 20, 0] },
                { duration: 8, repeat: Infinity, easing: 'ease-in-out' }
            );
            animate('.floating-gradient-2',
                { y: [0, 30, 0], x: [0, -20, 0] },
                { duration: 10, repeat: Infinity, easing: 'ease-in-out' }
            );

            // Scroll indicator animation
            animate('.scroll-indicator-line',
                { y: ['-100%', '100%'] },
                { duration: 1.5, repeat: Infinity, easing: 'ease-in-out' }
            );
        }
    }, []);

    return (
        <section className="relative min-h-[80vh] lg:min-h-[700px] pt-48 pb-12 overflow-hidden flex items-center bg-white">
            {/* Background Gradients */}
            <div className="floating-gradient-1 absolute top-0 right-0 w-[800px] h-[800px] bg-sky-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="floating-gradient-2 absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content Left */}
                    <div className="max-w-2xl">
                        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-blue/5 border border-navy-blue/10 mb-8 opacity-0">
                            <span className="w-2 h-2 rounded-full bg-bright-blue animate-pulse"></span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-navy-blue">Gotik Academy Launching Q1 2024</span>
                        </div>

                        <h1 className="hero-title text-5xl md:text-7xl font-display font-medium text-navy-blue leading-[1.1] tracking-tight mb-8 opacity-0">
                            Transforming <span className="italic block text-sky-blue">Ideas</span> Into Scalable Software
                        </h1>

                        <p className="hero-description text-lg md:text-xl text-neutral-gray mb-12 leading-relaxed opacity-0">
                            We help visionary companies build, launch, and scale modern digital products with speed, precision, and world-class engineering.
                        </p>

                        <div className="hero-cta flex flex-col sm:flex-row gap-4 opacity-0">
                            <Link
                                href="#contact"
                                className="group relative bg-navy-blue text-white px-8 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 hover:bg-bright-blue text-center hover:scale-105"
                            >
                                <span className="relative z-10">Start Your Project</span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10"></div>
                            </Link>
                            <Link
                                href="#solutions"
                                className="px-8 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-navy-blue/10 text-navy-blue hover:bg-navy-blue/5 transition-all duration-300 text-center hover:scale-105"
                            >
                                Our Solutions
                            </Link>
                        </div>

                        <div className="hero-stats mt-16 pt-8 border-t border-navy-blue/5 flex items-center gap-8 opacity-0">
                            <div>
                                <p className="text-2xl font-display font-bold text-navy-blue mb-1">25+</p>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-gray">Projects Launched</p>
                            </div>
                            <div className="w-px h-8 bg-navy-blue/10"></div>
                            <div>
                                <p className="text-2xl font-display font-bold text-navy-blue mb-1">98%</p>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-gray">Success Rate</p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Right */}
                    <div className="hero-visual relative lg:h-[600px] flex items-center justify-center opacity-0">
                        {/* Main Visual Image Wrapper */}
                        <div className="relative w-full aspect-square md:aspect-auto md:h-full max-w-lg lg:max-w-none group">
                            {/* Animated Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-blue to-sky-blue rounded-3xl rotate-1 group-hover:rotate-2 transition-transform duration-500 shadow-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                    alt="Team collaboration"
                                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                                />
                                <div className="absolute inset-0 opacity-20" id="parallax-bg"></div>
                            </div>

                            {/* Card Overlay 1 */}
                            <div className="absolute -top-12 -right-8 md:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-navy-blue/5 hidden md:block hover:scale-105 transition-transform duration-300">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-sky-blue/10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue"><path d="M12 2v20M2 12h20" /><path d="m4.93 4.93 14.14 14.14M4.93 19.07 19.07 4.93" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-gray">System Status</p>
                                        <p className="text-sm font-bold text-navy-blue">99.9% Uptime</p>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-navy-blue/5 rounded-full overflow-hidden">
                                    <div className="h-full w-full bg-sky-blue animate-pulse"></div>
                                </div>
                            </div>

                            {/* Card Overlay 2 */}
                            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-navy-blue p-6 rounded-2xl shadow-2xl border border-white/10 hidden md:block hover:scale-105 transition-transform duration-300">
                                <div className="flex flex-col gap-1 text-white">
                                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Revenue Performance</p>
                                    <p className="text-2xl font-bold">+124% Growth</p>
                                    <div className="mt-4 flex gap-1 items-end h-12">
                                        <div className="w-1.5 bg-sky-blue h-[40%] rounded-full"></div>
                                        <div className="w-1.5 bg-sky-blue h-[60%] rounded-full"></div>
                                        <div className="w-1.5 bg-sky-blue h-[45%] rounded-full"></div>
                                        <div className="w-1.5 bg-sky-blue h-[75%] rounded-full"></div>
                                        <div className="w-1.5 bg-sky-blue/30 h-[90%] rounded-full"></div>
                                        <div className="w-1.5 bg-white h-full rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Rotating Badge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 hidden lg:flex items-center justify-center">
                                <div className="w-full h-full animate-spin-slow">
                                    <svg viewBox="0 0 100 100" className="w-full h-full fill-white/10">
                                        <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                                        <text className="text-[8px] font-bold uppercase tracking-[0.3em]">
                                            <textPath href="#textPath">GOTIK AI SOLUTIONS • GEN AI EXPERTS • STRATEGY • </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                                        <div className="w-1.5 h-1.5 rounded-full bg-navy-blue"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-0 hero-cta">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-gray [writing-mode:vertical-lr]">Scroll</p>
                <div className="w-px h-16 bg-navy-blue/10 relative overflow-hidden">
                    <div className="scroll-indicator-line absolute top-0 left-0 w-full h-1/2 bg-sky-blue"></div>
                </div>
            </div>
        </section>
    );
}
