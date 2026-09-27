import { projectsData, sectionId } from "../../data/data";
import { ContainerSection } from "../ContainerSection/ContainerSection";
import { Section } from "../Section/Section";
import { TitleSection } from "../TitleSection/TitleSection";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";

export function ProjectsSection() {
  const { t } = useTranslation()
  return (
    <Section id={sectionId.PROJECTS}>

      <ContainerSection>
        <div className="flex flex-col gap-2">
          <TitleSection title={t("projects.title")} subtitle={t("projects.subtitle")}/>

        </div>
        <div className="flex lg:flex-col mt-5 gap-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              title={t(project.title, project.title)}
              description={t(project.description, project.description)}
              img={project.img}
              badges={project.badges}
              href={project.href} />
          ))}
        </div>
      </ContainerSection>
    </Section>

  )
}