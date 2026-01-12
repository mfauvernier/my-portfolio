export default function Header() {
  return (
    <header className="border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex gap-8">
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
      </nav>
    </header>
  );
}
