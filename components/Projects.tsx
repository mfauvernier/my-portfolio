import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Container from "./Container";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Container>
        <h2 className="section-title">Projets</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
