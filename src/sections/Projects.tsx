import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="03. PROJECTS"
        title="Featured Projects"
        description="Some of the real-world projects I've built while learning and developing my skills."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
