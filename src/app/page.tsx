import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e1a]">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Journey />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
