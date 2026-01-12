import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import Academy from "@/components/sections/Academy";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

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
            <span>BIM2FM</span>
            <span className="w-1 h-1 rounded-full bg-sky-blue"></span>
            <span>Data & Analytics</span>
            <span className="w-1 h-1 rounded-full bg-sky-blue"></span>
            <span>Internet of Things</span>
            <span className="w-1 h-1 rounded-full bg-sky-blue"></span>
            <span>Mobile & Web Apps</span>
            <span className="w-1 h-1 rounded-full bg-sky-blue"></span>
            <span>Software Modernization</span>
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
