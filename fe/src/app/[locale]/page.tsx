import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import Academy from "@/components/sections/Academy";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Software Consulting & Digital Transformation Services",
  description: "IMS Saigon delivers expert software consulting, cloud migration, AI solutions, and digital transformation services. Transform your business with scalable, modern technology solutions.",
  keywords: ["software consulting", "digital transformation", "cloud migration", "AI consulting", "custom software development", "enterprise solutions", "cloud services", "data solutions"],
  openGraph: {
    title: "IMS Saigon • Software Consulting & Digital Transformation",
    description: "Transform your business with expert software consulting, cloud migration, AI solutions, and custom development services.",
    url: "https://ims-saigon.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMS Saigon • Software Consulting & Digital Transformation",
    description: "Transform your business with expert software consulting, cloud migration, AI solutions, and custom development services.",
  },
  alternates: {
    canonical: "https://ims-saigon.com",
  },
};

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen font-sans">
      <Navbar />

      <Hero />

      {/* Marquee Section */}
      <div className="w-full overflow-hidden border-y border-sky-blue/10 bg-slate-50 py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-12 text-neutral-gray text-xs font-display tracking-wider px-6">
            <span>Cloud Services</span>
            <span className="w-1 h-1 rounded-full bg-sky-blue"></span>
            <span>AI Consulting</span>
            <span className="w-1 h-1 rounded-full bg-sky-blue"></span>
            <span>Data Management</span>
            <span className="w-1 h-1 rounded-full bg-sky-blue"></span>
            <span>Technical Training</span>
            <span className="w-1 h-1 rounded-full bg-sky-blue"></span>
            <span>Software Engineering</span>
            <span className="w-1 h-1 rounded-full bg-sky-blue"></span>
            <span>Data & Analytics</span>
            <span className="w-1 h-1 rounded-full bg-sky-blue"></span>
            <span>Internet of Things</span>
            <span className="w-1 h-1 rounded-full bg-sky-blue"></span>
            <span>Mobile & Web Apps</span>
            <span className="w-1 h-1 rounded-full bg-sky-blue"></span>
            <span>Software Modernization</span>
            <span className="w-1 h-1 rounded-full bg-sky-blue"></span>
            <span>Odoo Integration</span>
            <span className="w-1 h-1 rounded-full bg-sky-blue"></span>
            <span>Salesforce Integration</span>
          </div>
        </div>
      </div>

      <Solutions />
      <Academy />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
