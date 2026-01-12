import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-navy-blue text-white py-20 px-6 md:px-12 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 max-w-7xl mx-auto">
                <div className="md:col-span-4 flex flex-col justify-between h-full">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <img src="/logo.png" alt="Gotik Consulting" className="h-5 w-auto" />
                            <span className="font-display text-2xl tracking-tight font-medium">Gotik Consulting</span>
                        </Link>
                        <p className="mb-4 leading-relaxed text-white/60 max-w-xs text-sm font-light">
                            Transforming ideas into scalable software solutions since 2011. Your trusted partner in digital transformation.
                        </p>
                    </div>
                    <div className="flex gap-4 text-white/40 mt-8">
                        <a href="#" className="hover:text-sky-blue transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                        <a href="#" className="hover:text-sky-blue transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                        </a>
                        <a href="#" className="hover:text-sky-blue transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                        </a>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-sky-blue">Services</h5>
                    <ul className="space-y-3 text-sm text-white/60 font-light">
                        <li><Link href="/software-engineering" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">Software Engineering</Link></li>
                        <li><Link href="/software-modernization" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">Software Modernization</Link></li>
                        <li><Link href="/ai-consulting" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">AI Consulting</Link></li>
                        <li><Link href="/rust-transition" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">Rust Transition</Link></li>
                        <li><Link href="/data-management" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">Data Management</Link></li>
                        <li><Link href="/data-architecture" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">Data Architecture</Link></li>
                        <li><Link href="/data-and-analytics" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">Data & Analytics</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-sky-blue">More Services</h5>
                    <ul className="space-y-3 text-sm text-white/60 font-light">
                        <li><Link href="/bim2fm" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">BIM2FM</Link></li>
                        <li><Link href="/software-architecture" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">Software Architecture</Link></li>
                        <li><Link href="/internet-of-things" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">Internet of Things</Link></li>
                        <li><Link href="/mobile-web-apps" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">Mobile & Web Apps</Link></li>
                        <li><Link href="/cloud-services" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">Cloud Services</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-sky-blue">Company</h5>
                    <ul className="space-y-3 text-sm text-white/60 font-light">
                        <li><Link href="#about" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">About Us</Link></li>
                        <li><Link href="#approach" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">Our Process</Link></li>
                        <li><Link href="/#solutions" className="hover:text-sky-blue transition-colors block border-b border-transparent hover:border-sky-blue/30 w-fit">Our Solutions</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-4">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-sky-blue">Newsletter</h5>
                    <p className="text-sm text-white/60 mb-6 font-light">Stay updated with our latest insights and news.</p>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full outline-none focus:border-sky-blue/50" />
                        <button className="bg-white text-navy-blue px-4 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-sky-blue hover:text-white transition-all">Join</button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                <p>© 2026 Gotik Consulting. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
