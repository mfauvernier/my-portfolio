import Container from "./Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <Container>
        <nav className="max-w-6xl mx-auto px-6 py-6 gap-8 flex items-center justify-between ">
          <a href="#" className="font-semibold tracking-tight">
            Médéric Fauvernier
          </a>
          <div className="flex gap-6 text-slate-300">
            <a href="#projects" className="hover:text-sky-400">
              Projets
            </a>
            <a href="#skills" className="hover:text-sky-400">
              Compétences
            </a>
            <a href="#about" className="hover:text-sky-400">
              A propos
            </a>
            <a href="#contact" className="hover:text-sky-400">
              Contact
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
