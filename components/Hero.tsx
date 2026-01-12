import Container from "./Container";

export default function Hero() {
  return (
    <section className="section">
      <Container>
        <h1 className="text-5xl font-bold mb-6">Médéric Fauvernier</h1>
        <h2 className="text-2xl text-slate-300 mb-6">
          Developpeur Full-Stack React
        </h2>
        <p className="text-slate-400 max-w-xl">
          Je conçois des interfaces modernes, performantes et orientées
          utilisateurs
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-sky-400 px-5 py-3 font-semibold text-slate-900 hover:bg-sky-300"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-sky-400 px-5 py-3 font-semibold text-slate-900 hover:bg-sky-300"
          >
            Me contacter
          </a>
        </div>
      </Container>
    </section>
  );
}
