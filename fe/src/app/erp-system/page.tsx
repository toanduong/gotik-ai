"use client";

import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { motion, Variants, Transition } from "framer-motion";

const containerVariants: Variants = {
    initial: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" } as Transition
    }
};

const popInVariants: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 } as Transition
    }
};

const features = [
    {
        icon: "payments",
        title: "Finance & Accounting",
        description: "Automate financial operations, manage cash flow, and generate real-time compliance reports."
    },
    {
        icon: "local_shipping",
        title: "Supply Chain",
        description: "Optimize logistics, track inventory in real-time, and forecast demand with AI-driven insights."
    },
    {
        icon: "groups",
        title: "Human Resources",
        description: "Manage talent acquisition, payroll, benefits, and employee performance in one unified portal."
    },
    {
        icon: "contacts",
        title: "CRM Integration",
        description: "Seamless customer tracking and engagement history directly linked to your sales pipeline."
    }
];

const processSteps = [
    {
        icon: "search",
        title: "Audit & Discovery",
        description: "We analyze your current technology stack and business processes to identify bottlenecks and opportunities."
    },
    {
        icon: "tune",
        title: "Customization",
        description: "Our engineers tailor the ERP modules to fit your specific workflows, ensuring the system adapts to you, not the other way around."
    },
    {
        icon: "cloud_upload",
        title: "Migration",
        description: "Secure, encrypted data transfer from legacy systems with zero data loss guarantee and integrity verification."
    },
    {
        icon: "school",
        title: "Training & Support",
        description: "We empower your team with comprehensive training sessions and provide 24/7 dedicated support post-launch."
    }
];

export default function ERPSystem() {
    return (
        <main className="relative bg-white min-h-screen font-sans overflow-x-hidden">
            {/* Material Symbols Font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />

            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white dark:bg-[#101922] border-b border-[#e7edf4] dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        className="flex flex-col gap-6 lg:w-1/2"
                        initial="initial"
                        animate="animate"
                        variants={{
                            animate: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        <motion.div
                            className="flex flex-col gap-4 text-left"
                            variants={{
                                initial: { opacity: 0, x: -30 },
                                animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                        >
                            <span className="text-sky-blue font-bold tracking-wider uppercase text-sm">ERP Solutions</span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black leading-tight tracking-tight text-navy-blue dark:text-white">
                                Unified Business Management for the <span className="text-sky-blue">Modern Age</span>
                            </h1>
                            <p className="text-neutral-gray dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                                Scalable ERP solutions designed to seamlessly integrate your finance, HR, and supply chain into one intuitive dashboard.
                            </p>
                        </motion.div>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
                            }}
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="flex items-center justify-center rounded-full h-12 px-8 bg-sky-blue hover:bg-bright-blue text-white text-base font-bold transition-all shadow-lg shadow-sky-blue/20"
                            >
                                Request Consultation
                            </motion.a>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center rounded-full h-12 px-8 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-navy-blue dark:text-white text-base font-bold transition-all"
                            >
                                View Demo
                            </motion.button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="w-full lg:w-1/2 aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 relative group"
                        initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMTs_j4LFrvfbyiuXP1xwS4MQJePqqYAEvduye_W8H7DmoArJLzLJ0gRsGlSPDw1lGdxoECQ5L_U1A9OIqftajHo-YoLY2cM2MOEBPtZl7sYrEKrcQ6Vd1imU1UKu6I5rWIAt0it2PzJjZlGzGAnryDJNpU5nQRjCS_Qm7VrLqr7n6C34qxGcxSK9E3P2SmklWEOK9Hu_qDR7NhPAWxvAhOHAS4OZE9rwkcds7yk_45yqkRPLKlOfmplGINzVO3CRGPsHGpsSdy78')" }}
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        ></motion.div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-sky-blue/40 to-transparent mix-blend-multiply opacity-60"></div>
                    </motion.div>
                </div>
            </section>

            {/* Sticky Navigation */}
            <nav className="sticky top-[72px] z-40 w-full bg-white/80 dark:bg-slate-900/80 border-b border-[#cedbe8] dark:border-slate-700 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 overflow-x-auto no-scrollbar">
                    <div className="flex gap-8 min-w-max">
                        {["Features", "Process", "Benefits", "Contact"].map((tab) => (
                            <a
                                key={tab}
                                href={`#${tab.toLowerCase()}`}
                                className="flex items-center justify-center border-b-[3px] border-b-transparent text-neutral-gray dark:text-slate-400 py-4 px-2 hover:text-sky-blue transition-colors text-sm font-bold tracking-wider uppercase group"
                            >
                                <span className="relative">
                                    {tab}
                                    <span className="absolute -bottom-[1px] left-0 w-0 h-[3px] bg-sky-blue transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Features Section */}
            <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 overflow-hidden" id="features">
                <motion.div
                    className="flex flex-col gap-12"
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div
                        className="flex flex-col gap-4 max-w-3xl"
                        variants={itemVariants}
                    >
                        <h2 className="text-navy-blue dark:text-white text-3xl md:text-5xl font-display font-bold leading-tight">
                            Core ERP <span className="text-sky-blue">Modules</span>
                        </h2>
                        <p className="text-neutral-gray dark:text-slate-400 text-lg leading-relaxed">
                            Comprehensive tools to manage every aspect of your business operations efficiently, built on a secure cloud infrastructure.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="group flex flex-col gap-4 rounded-[2rem] border border-[#cedbe8] dark:border-slate-700 bg-white dark:bg-slate-800 p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] hover:border-sky-blue/50 transition-all duration-500 cursor-default"
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                            >
                                <motion.div
                                    className="size-16 rounded-2xl bg-sky-blue/10 flex items-center justify-center text-sky-blue group-hover:bg-sky-blue group-hover:text-white transition-colors duration-500 shadow-sm"
                                    variants={popInVariants}
                                >
                                    <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                                </motion.div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-navy-blue dark:text-white text-xl font-display font-bold group-hover:text-sky-blue transition-colors">{feature.title}</h3>
                                    <p className="text-neutral-gray dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Process Section */}
            <section className="bg-slate-50 dark:bg-[#0d141c] py-24 border-y border-[#cedbe8] dark:border-slate-800" id="process">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div className="flex flex-col gap-8 lg:sticky lg:top-40">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-navy-blue dark:text-white text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
                                    Implementation <span className="text-sky-blue">Lifecycle</span>
                                </h2>
                                <p className="text-neutral-gray dark:text-slate-400 text-lg leading-relaxed">
                                    We don't just sell software; we partner with you to transform your business. Our proven methodology ensures a smooth transition with minimal downtime.
                                </p>
                            </motion.div>
                            <motion.div
                                className="rounded-[2.5rem] overflow-hidden shadow-2xl mt-4 aspect-video relative group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEOYRyqkPM0MUhQcOAcs65EIz7Vmx2jNQT-6QJO8bO0OgaXYNAWYh7LEOyGzEPcbDce07BM2v-bMAgoLWJ4XzBNPPK3wUWaqe__sh97ISnjHxdfsTPLQOg9uXFIenR2x9eGnDVVWpSRrBPdQXS7_6UzUNGOsjA0N21foyQ1GpNQMIRaWC04j4sfpEOwOcH8f1a0W7NB_fJvr6rCZEPLNKeOtdlOx45aSVbRAlbF07i5QTweZ9xktaX18E9wTqKxQSvXJYPc7DgV7U')" }}
                                ></motion.div>
                                <div className="absolute inset-0 bg-navy-blue/40 group-hover:bg-navy-blue/20 transition-colors"></div>
                            </motion.div>
                        </div>

                        <motion.div
                            className="flex flex-col gap-0 px-4"
                            initial="initial"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                initial: {},
                                visible: { transition: { staggerChildren: 0.2 } }
                            } as Variants}
                        >
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="flex gap-8 group relative"
                                    variants={{
                                        initial: { opacity: 0, x: 40 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } as Transition }
                                    } as Variants}
                                >
                                    <div className="flex flex-col items-center">
                                        <motion.div
                                            className="size-14 rounded-full bg-white dark:bg-slate-800 text-sky-blue flex items-center justify-center border-2 border-sky-blue/20 group-hover:border-sky-blue group-hover:bg-sky-blue group-hover:text-white shadow-lg transition-all duration-500 z-10"
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                        >
                                            <span className="material-symbols-outlined text-2xl font-bold">{step.icon}</span>
                                        </motion.div>
                                        {index !== processSteps.length - 1 && (
                                            <motion.div
                                                className="w-[3px] bg-gradient-to-b from-sky-blue/40 to-sky-blue/5 grow my-2 rounded-full"
                                                initial={{ height: 0 }}
                                                whileInView={{ height: "100%" }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                                            ></motion.div>
                                        )}
                                    </div>
                                    <div className="pb-16 pt-3">
                                        <h3 className="text-navy-blue dark:text-white text-2xl font-display font-bold mb-3 group-hover:text-sky-blue transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-neutral-gray dark:text-slate-400 text-base leading-relaxed max-w-md">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden bg-white dark:bg-[#101922]">
                <motion.div
                    className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-blue/10 rounded-full blur-[100px] -ml-[250px] -mt-[250px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                ></motion.div>

                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-10 relative z-10">
                    <motion.div
                        className="size-24 rounded-[2rem] bg-sky-blue text-white flex items-center justify-center shadow-2xl shadow-sky-blue/40"
                        initial={{ rotate: -20, scale: 0 }}
                        whileInView={{ rotate: 0, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <span className="material-symbols-outlined text-6xl">rocket_launch</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-navy-blue dark:text-white text-4xl md:text-7xl font-display font-black leading-tight tracking-tight mb-6">
                            Ready to <span className="text-sky-blue underline decoration-sky-blue/30 underline-offset-8">modernize</span> your operations?
                        </h2>
                        <p className="text-neutral-gray dark:text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
                            Schedule a free 30-minute discovery call with our ERP specialists and see how Gotik can transform your business.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 w-full justify-center pt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(13, 127, 242, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center justify-center rounded-full h-18 px-12 bg-sky-blue text-white text-xl font-bold transition-all"
                        >
                            Start Your Transformation
                            <motion.span className="ml-2" animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center rounded-full h-18 px-12 border-2 border-slate-200 dark:border-slate-700 bg-transparent text-navy-blue dark:text-white text-xl font-bold transition-all"
                        >
                            Contact Sales
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
