import { projectsData } from "../../data/data";
import { Section } from "../Section/Section";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-primary text-4xl font-bold">Proyectos</h2>
        <div className="flex flex-col mt-5 gap-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              img={project.img}
              badges={project.badges}
              href={project.href} />
          ))}
        </div>
      </div>
    </Section>

  )
}