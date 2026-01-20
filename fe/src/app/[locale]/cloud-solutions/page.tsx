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

const roadmapPhases = [
    {
        phase: "Phase 01",
        title: "Azure Cloud Foundation",
        description: "Unlock the potential of Microsoft Azure with a secure, scalable landing zone. We design environments that ensure high availability and robust security from day one.",
        items: ["Enterprise Kubernetes (AKS)", "Serverless Computing", "Hybrid Integration"],
        icon: "cloud_circle",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtsZQsS88MzH_m7ro2wSHTo3rbibfBM7Hb4cKYCSCgd1B_Vd_k_jwn5eX3P4qRSOSReKdcoVLXDgHmML_gpY4J1fTYpPLnhurdMvk2AyKxKSJFWoluRSTwD-NHv5CLfNrJBGfTlRtgc9C_eL5aoJjzeUQMEThY93M5x0SdjR-BkpTrB8OTmCvLjXBkKHIYpu9lPb7rJ8GvyiPzSftKUnJVgj-D6Ld-KO2Xoy41xXcaN3D0YzZOu2f12G0OfMb4NVQXq9idbHhJj6Y",
        imageLabel: "Infrastructure Ready",
        color: "secondary"
    },
    {
        phase: "Phase 02",
        title: "Seamless Migration",
        description: "Move legacy systems to the cloud with zero disruption. Our \"Lift & Shift\" or Refactoring strategies minimize risk while maximizing cloud-native agility.",
        items: [
            { title: "Assessment", desc: "Dependency mapping & planning.", icon: "inventory" },
            { title: "Transfer", desc: "Secure data migration protocols.", icon: "swap_horiz" }
        ],
        icon: "flight_takeoff",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR5WRBBZaqD5nsyhxnU-znS-RCAKG4ZbSAEhz9QDuGRNBQYQdZn74KZSurl-U2VZnkTCLKr5vWG9TQjrIlx1ahM6TcT-8i0jETknIlYhi9l3Rmbh-7fFr6O9A0oVYC89ZensBwj287IGfc1pn9c0OiJ2Jg_DgK2sO7NXb6eeVmU6Uq14wHQ97wI9pSI8QhfQFIvTuEYaEfRZOK4YZXHE8OouKWF9z_NKu1d4k5FuiQU5Iixnze7g_qgsvrRkvkCJF3EWCHfVhGy_4",
        color: "indigo-500",
        reverse: true
    },
    {
        phase: "Phase 03",
        title: "IoT & Intelligent Edge",
        description: "Bridge the physical and digital worlds. We deploy Azure IoT Hub and Digital Twins to drive operational efficiency and create new business value from sensor data.",
        items: ["Device Connectivity", "Edge Computing", "Predictive Analytics"],
        icon: "hub",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7gYH0o6y79fLmj-G3W-sAS56puMintQEKmZ8C-UfnJ8JyfU5BFF7mC2q8wkL2ygaTmC_cliEVI_hc7ushZL1c3i7At7mtqgBvzU0Wd72eyEG4O8czIvhDLNZ8k__hIZAks24-gwCD0FqKvJep2KIQvI-gvY3O7hsztxPJAddaTs7YsiJhAK2uaym9xHQ2kAmDMVQJ3lwfj3R99e_927bT_u-QxK-Yv53Dlmz3J19kOmBRxM_cS1vjCKIgnULcJzm6s-x5zS-PB-w",
        imageLabel: "IoT Hub Status: Online",
        color: "cyan-500"
    }
];

const whyAzure = [
    { icon: "public", title: "Global Scale", desc: "60+ regions worldwide for local data residency and reach.", color: "indigo" },
    { icon: "shield", title: "Security First", desc: "Advanced threat protection and 90+ compliance certifications.", color: "secondary", featured: true },
    { icon: "lan", title: "Hybrid Ready", desc: "Seamlessly extend your on-premises infrastructure to the cloud.", color: "teal" },
    { icon: "autorenew", title: "Innovation", desc: "Continuous updates and cutting-edge AI services built-in.", color: "green" }
];

export default function CloudSolutionsPage() {
    return (
        <main className="relative bg-white min-h-screen font-sans overflow-x-hidden">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />

            <Navbar />

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#F3F6F9] to-white dark:from-[#162033] dark:to-[#0B1120]">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl dark:bg-sky-blue/10"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-blue/5 rounded-full blur-3xl dark:bg-navy-blue/10"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            className="max-w-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-block px-4 py-1.5 mb-8 border border-sky-blue/30 rounded-full bg-sky-blue/5 text-sky-blue text-xs font-bold tracking-wider uppercase">
                                Enterprise Cloud Strategy
                            </div>
                            <h1 className="font-display text-5xl lg:text-7xl leading-[1.1] text-navy-blue dark:text-white mb-8">
                                Architect Your Future with <span className="text-sky-blue italic">Azure Cloud</span>
                            </h1>
                            <div className="pl-6 border-l-2 border-sky-blue mb-10">
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Navigate the complexities of cloud transformation. We visualize, architect, and deploy
                                    robust Azure ecosystems—from seamless migrations to intelligent IoT networks.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-navy-blue rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-navy-blue/20"
                                    href="#azure-services">
                                    Discover Solutions
                                    <span className="material-symbols-outlined ml-2 text-base">arrow_downward</span>
                                </a>
                            </div>
                        </motion.div>

                        {/* Interactive Mind Map Visual */}
                        <div className="relative lg:h-[600px] flex items-center justify-center">
                            <motion.div
                                className="relative w-full max-w-lg aspect-square"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                {/* Connector Lines (Static SVG or styled divs) */}
                                <div className="absolute inset-0 bg-sky-blue/5 rounded-full blur-3xl transform scale-75"></div>

                                {/* Central Hub */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                                    <motion.div
                                        className="w-36 h-36 bg-white dark:bg-surface-dark rounded-full shadow-[0_0_50px_rgba(74,144,226,0.25)] border-4 border-sky-blue flex flex-col items-center justify-center group cursor-default"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <div className="absolute inset-0 border border-sky-blue/20 rounded-full animate-ping opacity-20"></div>
                                        <span className="material-symbols-outlined text-4xl text-sky-blue mb-2 group-hover:rotate-12 transition-transform duration-500">cloud_circle</span>
                                        <span className="text-xs font-bold tracking-widest uppercase text-navy-blue dark:text-white">Azure Core</span>
                                    </motion.div>
                                </div>

                                {/* Floating Nodes */}
                                {[
                                    { icon: "flight_takeoff", title: "Migration", pos: "top-15 left-15", color: "purple" },
                                    { icon: "hub", title: "IoT Hub", pos: "top-15 right-15", color: "blue" },
                                    { icon: "security", title: "Security", pos: "bottom-15 left-15", color: "emerald" },
                                    { icon: "insights", title: "Analytics", pos: "bottom-15 right-15", color: "rose" }
                                ].map((node, i) => (
                                    <motion.div
                                        key={i}
                                        className={`absolute ${node.pos} z-20`}
                                        animate={{ y: [0, i % 2 === 0 ? -12 : 12, 0] }}
                                        transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                                    >
                                        <div className={`w-28 h-28 bg-white dark:bg-surface-dark rounded-2xl shadow-xl border-l-4 border-${node.color}-500 flex flex-col items-center justify-center p-3 text-center cursor-pointer hover:scale-105 transition-transform`}>
                                            <div className={`w-8 h-8 rounded-lg bg-${node.color}-100 dark:bg-${node.color}-900/30 flex items-center justify-center text-${node.color}-600 mb-2`}>
                                                <span className="material-symbols-outlined text-lg">{node.icon}</span>
                                            </div>
                                            <h3 className="text-xs font-bold text-navy-blue dark:text-white">{node.title}</h3>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Roadmap Section */}
            <section className="py-24 bg-[#F3F6F9] dark:bg-[#162033] relative overflow-hidden" id="azure-services">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-20"
                        variants={itemVariants}
                        initial="initial"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <span className="text-sky-blue font-bold tracking-widest uppercase text-xs mb-3 block">Cloud Focus</span>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue dark:text-white mb-6">Your Cloud Adoption Journey</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            We guide you through every stage of digital transformation, from establishing a robust Azure
                            foundation to unlocking advanced IoT capabilities.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-blue/20 via-sky-blue/50 to-sky-blue/20 lg:-translate-x-1/2"></div>

                        {roadmapPhases.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                className={`relative flex flex-col ${phase.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between mb-24`}
                                variants={containerVariants}
                                initial="initial"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-8 lg:left-1/2 w-12 h-12 bg-white dark:bg-surface-dark border-4 border-${phase.color === 'secondary' ? 'sky-blue' : phase.color} rounded-full -translate-x-1/2 z-10 flex items-center justify-center shadow-lg`}>
                                    <span className={`material-symbols-outlined text-${phase.color === 'secondary' ? 'sky-blue' : phase.color} text-xl`}>{phase.icon}</span>
                                </div>

                                {/* Content */}
                                <motion.div className={`lg:w-5/12 pl-24 lg:pl-0 ${phase.reverse ? 'lg:pl-16 text-left' : 'lg:pr-16 lg:text-right'}`} variants={itemVariants} whileInView="visible">
                                    <div className={`inline-block px-3 py-1 mb-4 border border-blue-100 dark:border-blue-900 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-[10px] font-bold tracking-wider uppercase`}>
                                        {phase.phase}
                                    </div>
                                    <h3 className="font-display text-3xl text-navy-blue dark:text-white mb-4">{phase.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">{phase.description}</p>

                                    {typeof phase.items[0] === 'string' ? (
                                        <ul className="space-y-3 inline-block text-left">
                                            {(phase.items as string[]).map((item, i) => (
                                                <li key={i} className={`flex items-center ${phase.reverse ? '' : 'lg:justify-end'} gap-3 text-gray-700 dark:text-gray-300`}>
                                                    <span className={phase.reverse ? '' : 'lg:order-2'}>{item}</span>
                                                    <span className={`material-symbols-outlined text-sky-blue text-lg ${phase.reverse ? '' : 'lg:order-1'}`}>check_circle</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="grid grid-cols-1 gap-4">
                                            {(phase.items as any[]).map((item, i) => (
                                                <div key={i} className="flex gap-3 items-start p-3 rounded-lg bg-white dark:bg-surface-dark/50 border border-border-light dark:border-slate-800 shadow-sm">
                                                    <span className="material-symbols-outlined text-indigo-500 mt-1">{item.icon}</span>
                                                    <div>
                                                        <h4 className="font-bold text-navy-blue dark:text-white text-sm">{item.title}</h4>
                                                        <p className="text-xs text-gray-500">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>

                                {/* Image/Visual */}
                                <motion.div className={`lg:w-5/12 pl-24 lg:pl-16 lg:pr-0 mt-8 lg:mt-0 w-full ${phase.reverse ? 'lg:pr-16 lg:pl-0' : ''}`} variants={popInVariants} whileInView="visible">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border-light dark:border-slate-800 group bg-white dark:bg-surface-dark">
                                        <img alt={phase.title} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 object-cover aspect-[4/3]" src={phase.image} />
                                        {phase.imageLabel && (
                                            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-2 rounded-lg border border-white/20">
                                                <div className="flex items-center gap-2 text-xs font-mono">
                                                    <span className={`w-2 h-2 rounded-full ${phase.color === 'secondary' ? 'bg-green-500' : 'bg-cyan-400'} animate-pulse`}></span>
                                                    <span className="text-sky-blue">{phase.imageLabel}</span>
                                                </div>
                                            </div>
                                        )}
                                        {phase.reverse && <div className="absolute inset-0 bg-gradient-to-tr from-navy-blue/20 to-transparent"></div>}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Azure Grid */}
            <section className="py-24 bg-white dark:bg-[#0B1120] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4A90E2 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div className="text-center mb-16" variants={itemVariants} initial="initial" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="font-display text-4xl lg:text-5xl text-navy-blue dark:text-white mb-6">Why Choose Azure?</h2>
                        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                            Azure provides a trusted, global cloud platform that integrates seamlessly with your existing tools,
                            offering unmatched reliability for critical workloads.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyAzure.map((feature, i) => (
                            <motion.div
                                key={i}
                                className={`bg-white dark:bg-[#162033] p-6 rounded-2xl shadow-lg border ${feature.featured ? 'border-2 border-sky-blue/20' : 'border-border-light dark:border-slate-800'} group hover:-translate-y-2 transition-all duration-300`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={`w-12 h-12 bg-${feature.color === 'secondary' ? 'sky-blue' : feature.color}-100 dark:bg-${feature.color === 'secondary' ? 'sky-blue' : feature.color}-900/30 rounded-xl flex items-center justify-center text-${feature.color === 'secondary' ? 'sky-blue' : feature.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                                    <span className="material-symbols-outlined">{feature.icon}</span>
                                </div>
                                <h3 className="font-bold text-lg text-navy-blue dark:text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cost Optimization Section */}
            <section className="py-24 bg-[#2ba7b3] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div variants={itemVariants} initial="initial" whileInView="visible" viewport={{ once: true }}>
                            <h2 className="font-display text-4xl lg:text-5xl mb-6">Cost Optimization</h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Maximize your ROI by identifying cloud waste. Our experts utilize Azure Cost Management and best
                                practices to right-size your resources without compromising performance.
                            </p>
                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <div className="text-4xl font-display font-bold mb-2 text-navy-blue">-35%</div>
                                    <p className="text-sm opacity-80 uppercase tracking-widest">Monthly Spend</p>
                                </div>
                                <div>
                                    <div className="text-4xl font-display font-bold mb-2 text-navy-blue">3x</div>
                                    <p className="text-sm opacity-80 uppercase tracking-widest">Resource Efficiency</p>
                                </div>
                            </div>
                            <a className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-navy-blue bg-white rounded-lg hover:bg-gray-100 transition-all duration-300"
                                href="#contact">
                                Get a Free Audit
                            </a>
                        </motion.div>

                        <motion.div
                            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-end gap-4 h-64 w-full justify-between px-4 pb-4 border-b border-white/30 relative">
                                {[
                                    { h: "80%", label: "Q1" },
                                    { h: "65%", label: "Q2" },
                                    { h: "40%", label: "Q3", highlighted: true, val: "-45%" },
                                    { h: "30%", label: "Q4" }
                                ].map((bar, i) => (
                                    <div key={i} className={`w-12 ${bar.highlighted ? 'bg-navy-blue shadow-[0_0_20px_rgba(74,144,226,0.5)]' : 'bg-white/30'} rounded-t-lg relative group`} style={{ height: bar.h }}>
                                        <div className={`absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold ${bar.highlighted ? 'opacity-100' : ''}`}>
                                            {bar.val ? <span className="text-navy-blue font-bold text-sm bg-white px-2 py-1 rounded shadow-sm">{bar.val}</span> : bar.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 flex justify-between items-center text-sm">
                                <span className="opacity-70">On-Premises Cost</span>
                                <span className="font-bold text-navy-blue flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">trending_down</span>
                                    Optimized Cloud Spend
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
