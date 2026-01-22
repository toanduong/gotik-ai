"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const t = useTranslations('navigation');
    const tServices = useTranslations('services');
    const locale = useLocale();

    // Move solutionsMenu inside component to use translations
    const solutionsMenu = [
        { name: tServices('softwareEngineering'), href: "/software-engineer" },
        { name: tServices('softwareModernization'), href: "/software-modernization" },
        { name: tServices('aiConsulting'), href: "/ai-consulting" },
        { name: tServices('rustTransition'), href: "/rust-transition" },
        { name: tServices('dataManagement'), href: "/data-management" },
        { name: tServices('dataArchitecture'), href: "/data-architecture" },
        { name: tServices('dataAnalytics'), href: "/data-and-analytics" },
        { name: tServices('softwareArchitecture'), href: "/software-architecture" },
        { name: tServices('iot'), href: "/internet-of-things" },
        { name: tServices('mobileWebApps'), href: "/mobile-web-apps" },
        { name: tServices('cloudServices'), href: "/cloud-services" },
        { name: tServices('salesforce'), href: "/salesforce" },
        { name: tServices('odoo'), href: "/odoo" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 py-6 px-6 md:px-12 flex items-center justify-between ${isScrolled
                    ? "bg-navy-blue/90 backdrop-blur-xl text-white shadow-lg"
                    : "text-black"
                    }`}
            >
                <div className="flex items-center gap-12">
                    <button
                        onClick={toggleMenu}
                        className="flex flex-col gap-1.5 group w-8 md:hidden outline-none"
                    >
                        <div className={`w-full h-px bg-white group-hover:w-3/4 transition-all duration-500 ease-out`}></div>
                        <div className={`w-2/3 h-px bg-white group-hover:w-full transition-all duration-500 ease-out delay-75`}></div>
                    </button>

                    <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase opacity-90 isolate">
                        {/* Solutions Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsSolutionsOpen(true)}
                            onMouseLeave={() => setIsSolutionsOpen(false)}
                        >
                            <button className="hover:text-sky-blue transition-colors flex items-center gap-1">
                                {t('services')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`}>
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <div className={`absolute top-full left-0 pt-2 transition-all duration-300 ${isSolutionsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                <div className="w-56 bg-white backdrop-blur-md rounded-xl shadow-2xl border border-gray overflow-hidden">
                                    <div className="py-2">
                                        {solutionsMenu.map((item, index) => (
                                            <Link
                                                key={index}
                                                href={item.href}
                                                className="block px-6 py-3 text-navy-blue hover:bg-sky-blue/20 hover:text-sky-blue transition-colors text-sm font-medium"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Blog Link */}
                        <Link href="/blog" className="hover:text-sky-blue transition-colors">
                            {t('blog')}
                        </Link>

                        <Link href="/#academy" className="hover:text-sky-blue transition-colors">{t('academy')}</Link>
                        <Link href="/#about" className="hover:text-sky-blue transition-colors">{t('ourStory')}</Link>
                    </div>
                </div>

                <div className="absolute left-1/2 top-6 -translate-x-1/2 text-center pointer-events-auto">
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/logo_footer.png" alt="Gotik Consulting" className="h-4 w-auto" />
                        <span className="font-display text-xl tracking-tight font-medium">Gotik Consulting</span>
                    </Link>
                </div>

                <div className="isolate flex items-center gap-4">
                    <LanguageSwitcher />
                    <Link
                        href="/#contact"
                        className={`px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-sky-blue hover:text-white transition-all hover:scale-105 rounded-full ${isScrolled ? "bg-sky-blue text-navy-blue" : "bg-black text-white"} flex items-center justify-center`}
                    >
                        <span className="hidden md:inline">{t('getStarted')}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:hidden">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-navy-blue z-[60] flex flex-col justify-center items-center transition-transform duration-500 md:hidden ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <button
                    onClick={toggleMenu}
                    className="absolute top-6 right-6 text-white text-3xl outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="w-8 h-8"
                    >
                        <path
                            fill="currentColor"
                            d="m12 10.586l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.414 1.414l-4.95-4.95l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95L7.05 5.636z"
                        />
                    </svg>
                </button>
                <nav className="flex flex-col gap-6 text-center max-h-[80vh] overflow-y-auto">
                    {/* Mobile Solutions Section */}
                    <div className="flex flex-col gap-4">
                        <div className="text-2xl font-display text-white/50 uppercase tracking-wider">{t('solutions')}</div>
                        {solutionsMenu.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={toggleMenu}
                                className="text-xl font-display text-sky-blue hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>


                    {/* Mobile Blog Link */}
                    <Link
                        href="/blog"
                        onClick={toggleMenu}
                        className="text-3xl font-display text-sky-blue hover:text-white transition-colors"
                    >
                        {t('blog')}
                    </Link>

                    <Link
                        href="/#academy"
                        onClick={toggleMenu}
                        className="text-3xl font-display text-sky-blue hover:text-white transition-colors"
                    >
                        {t('academy')}
                    </Link>
                    <Link
                        href="/#about"
                        onClick={toggleMenu}
                        className="text-3xl font-display text-sky-blue hover:text-white transition-colors"
                    >
                        {t('ourStory')}
                    </Link>
                    <Link
                        href="/#contact"
                        onClick={toggleMenu}
                        className="text-3xl font-display text-sky-blue hover:text-white transition-colors"
                    >
                        {t('contact')}
                    </Link>
                </nav>
            </div>
        </>
    );
}
