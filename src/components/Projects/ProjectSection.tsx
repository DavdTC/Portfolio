import { projectsData, sectionId } from "../../data/data";
import { ContainerSection } from "../ContainerSection/ContainerSection";
import { Section } from "../Section/Section";
import { TitleSection } from "../TitleSection/TitleSection";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <Section id={sectionId.PROJECTS}>

      <ContainerSection>
        <div className="flex flex-col gap-2">
          <TitleSection title="Proyectos" subtitle="Trabajos realizados"/>

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