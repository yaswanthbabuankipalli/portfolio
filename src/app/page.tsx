import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsStrip from "@/components/MetricsStrip";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Stashlog from "@/components/Stashlog";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MetricsStrip />
        <Projects />
        <Skills />
        <Experience />
        <Stashlog />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
