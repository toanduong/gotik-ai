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

            inView('.about-mission', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [40, 0] }, { duration: 0.8 });
            });
        }
    }, []);

    return (
        <section id="about" className="py-32 px-6 md:px-12 relative z-10 bg-white">
            <div className="about-header text-center mb-16 opacity-0">
                <span className="text-[10px] font-bold text-neutral-gray uppercase tracking-widest mb-3 block">Our Story</span>
                <h3 className="text-3xl md:text-4xl font-display text-navy-blue tracking-tight">15+ Years of Partnership & Excellence</h3>
            </div>

            {/* Our Story */}
            <div className="about-mission mt-32 max-w-4xl mx-auto opacity-0">
                <div className="text-center mb-12">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue/20 mb-6 mx-auto"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /></svg>
                </div>

                <div className="space-y-6 text-lg text-neutral-gray leading-relaxed text-left">
                    <p>
                        For over 15 years, we've been dedicated to building meaningful solutions that truly serve our customers. From day one, we believed that great work starts with a <span className="text-navy-blue font-medium">shared vision</span>—understanding our clients' goals as if they were our own.
                    </p>

                    <p>
                        We don't see ourselves as just a service provider, but as a <span className="text-navy-blue font-medium">co-operator and long-term partner</span>. We work side by side with our customers, listening carefully, adapting quickly, and collaborating openly to achieve real, measurable results.
                    </p>

                    <p>
                        To us, <span className="text-sky-blue font-medium">our customers' success is our success</span>. Every project we take on is driven by that belief, pushing us to deliver work that creates lasting value—not just short-term wins.
                    </p>

                    <p>
                        As the world evolves, so do we. We are <span className="text-navy-blue font-medium">constantly improving ourselves</span>, refining our skills, and raising our standards to become better than we were yesterday. This commitment to growth allows us to stay relevant, innovative, and reliable for the people who trust us.
                    </p>

                    <div className="text-center pt-8">
                        <p className="text-2xl font-display text-navy-blue font-semibold">
                            Together, we grow. Together, we succeed.
                        </p>
                    </div>
                </div>

                <div className="h-16 w-px bg-gradient-to-b from-sky-blue to-transparent mx-auto mt-12"></div>
            </div>
        </section>
    );
}
