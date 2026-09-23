import { projectsData } from "../../data/data";
import { ContainerSection } from "../ContainerSection/ContainerSection";
import { Section } from "../Section/Section";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section>

      <ContainerSection>
        <div className="flex flex-col gap-2">
        <h2 className="text-primary text-4xl font-bold">Proyectos</h2>
        <h3 className="text-xl">Trabajos realizados</h3>

        </div>
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
      </ContainerSection>
    </Section>

  )
}