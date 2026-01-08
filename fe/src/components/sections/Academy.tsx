"use client";

import { useRef, useEffect } from "react";

const courses = [
    {
        title: "React Masterclass",
        duration: "40 Hours",
        price: "$1,299",
        features: "Hooks, Context, Redux • 12 Projects",
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_153ae58e0-1766470511581.png",
    },
    {
        title: "DevOps Engineering",
        duration: "32 Hours",
        price: "$1,499",
        features: "Docker, K8s, CI/CD • Hands-on Labs",
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_13e859590-1764922663553.png",
    },
    {
        title: "Cloud Architecture",
        duration: "48 Hours",
        price: "$1,799",
        features: "AWS, Azure, GCP • Real-world Projects",
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a89a36d2-1767776130510.png",
    },
];

export default function Academy() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    useEffect(() => {
        // Animate Academy section with Motion.dev
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.academy-header', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6 });
            });

            inView('.academy-card', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target,
                    { opacity: [0, 1], x: [50, 0] },
                    { duration: 0.7, delay: 0.1 }
                );
            }, { amount: 0.3 });
        }
    }, []);

    return (
        <section id="academy" className="py-20 bg-navy-blue text-white overflow-hidden relative rounded-t-[3rem]">
            {/* Grainy noise overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="academy-header px-6 md:px-12 mb-12 flex items-end justify-between max-w-screen-2xl mx-auto relative z-10 opacity-0">
                <div>
                    <span className="text-[10px] font-bold text-sky-blue uppercase tracking-widest mb-3 block">Gotik Academy</span>
                    <h3 className="text-3xl md:text-4xl font-display text-white tracking-tight">Upskill Your Team</h3>
                    <p className="text-neutral-gray text-sm mt-2 max-w-xl">Comprehensive training programs designed by industry experts. From fundamentals to advanced topics.</p>
                </div>
                <div className="hidden md:flex gap-4">
                    <button
                        onClick={() => scroll("left")}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-navy-blue hover:scale-110 transition-all group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-navy-blue hover:scale-110 transition-all group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                </div>
            </div>

            <div ref={scrollRef} className="flex gap-8 overflow-x-auto no-scrollbar px-6 md:px-12 pb-12 snap-x">
                {courses.map((course, index) => (
                    <div key={index} className="academy-card min-w-[85vw] md:min-w-[450px] snap-center group relative opacity-0">
                        <div className="relative h-[400px] overflow-hidden rounded-lg mb-6 border border-white/10">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="inline-block px-3 py-1 bg-sky-blue text-white text-[10px] uppercase tracking-widest rounded-full mb-3">
                                    {course.duration}
                                </span>
                                <h4 className="text-2xl font-display text-white mb-2">{course.title}</h4>
                                <p className="text-white/80 text-sm font-light">{course.features}</p>
                                <p className="text-white text-lg mt-4 font-light">
                                    {course.price} <span className="text-sm text-white/60">per seat</span>
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-4 -right-2 w-full h-full border border-white/20 rounded-lg -z-10 group-hover:top-2 group-hover:-right-1 transition-all"></div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8 relative z-10">
                <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-white hover:scale-105 transition-all">
                    View All Courses
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                </button>
            </div>
        </section>
    );
}
