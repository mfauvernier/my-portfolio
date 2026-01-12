import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(56,189,248,0.20),transparent_60%),radial-gradient(700px_circle_at_80%_20%,rgba(99,102,241,0.18),transparent_55%)]" />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}
