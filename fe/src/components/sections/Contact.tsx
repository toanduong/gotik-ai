"use client";

import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        // Animate Contact section with Motion.dev
        if (typeof window !== 'undefined' && (window as any).Motion) {
            const { inView } = (window as any).Motion;

            inView('.contact-info', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6 });
            });

            inView('.contact-form', ({ target }: any) => {
                const { animate } = (window as any).Motion;
                animate(target, { opacity: [0, 1], x: [40, 0] }, { duration: 0.6, delay: 0.2 });
            });
        }
    }, []);

    return (
        <section id="contact" className="py-32 px-6 md:px-12 bg-navy-blue text-white relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                {/* Left: Info */}
                <div className="contact-info opacity-0">
                    <span className="text-[10px] font-bold text-sky-blue uppercase tracking-widest mb-3 block">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-display text-white tracking-tight leading-[1.1] mb-6">
                        Let's Build Something <span className="text-sky-blue">Amazing</span>
                    </h2>
                    <p className="text-white/70 mb-8 leading-relaxed">
                        Ready to transform your ideas into reality? Fill out the form and our team will get back to you within 24 hours.
                    </p>

                    <div className="space-y-4 mb-12">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-sky-blue/20 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>
                            <div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Email</div>
                                <a href="mailto:hello@gotik.ai" className="text-white hover:text-sky-blue transition-colors">hello@gotik.ai</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-sky-blue/20 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-blue"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Phone</div>
                                <a href="tel:+1234567890" className="text-white hover:text-sky-blue transition-colors">+1 (234) 567-890</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-sky-blue hover:scale-110 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-sky-blue hover:scale-110 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-sky-blue hover:scale-110 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                        </a>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="contact-form opacity-0">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Full Name *</label>
                            <input type="text" placeholder="John Doe" required
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-sky-blue focus:outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Email *</label>
                            <input type="email" placeholder="john@company.com" required
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-sky-blue focus:outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Company</label>
                            <input type="text" placeholder="Your Company Inc."
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-sky-blue focus:outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Service Interest</label>
                            <select
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-sky-blue focus:outline-none transition-colors [&>option]:text-navy-blue">
                                <option>Select a service</option>
                                <option>Cloud Migration</option>
                                <option>Custom Development</option>
                                <option>DevOps Setup</option>
                                <option>AI Integration</option>
                                <option>Technical Training</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Project Details</label>
                            <textarea rows={4} placeholder="Tell us about your project..."
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-sky-blue focus:outline-none transition-colors resize-none"></textarea>
                        </div>
                        <button type="submit"
                            className="w-full bg-sky-blue text-white h-12 rounded-lg hover:bg-white hover:text-navy-blue hover:scale-105 transition-all flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest shadow-lg">
                            <span>Send Message</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
