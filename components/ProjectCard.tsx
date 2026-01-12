type Project = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  stack,
  github,
  demo,
}: Project) {
  return (
    <article className="card">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-400 mb-4">{description}</p>
      <ul className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech) => (
          <li key={tech} className="text-sm px-3 py-1 rounded-full bg-white/10">
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        {github && (
          <a href="" className="link">
            GitHub
          </a>
        )}
        {demo && (
          <a href="" className="link">
            Démo
          </a>
        )}
      </div>
    </article>
  );
}
