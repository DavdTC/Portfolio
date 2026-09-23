import { experiencesJob } from "../../data/data";
import { ContainerSection } from "../ContainerSection/ContainerSection";
import { Section } from "../Section/Section";
import { TitleSection } from "../TitleSection/TitleSection";
import { ExperienceJob } from "./ExperienceJob";

export function ExperienceSection() {
  return (
    <Section>
      <ContainerSection>
        <div className="w-full flex flex-col gap-2">
          <TitleSection title="Experiencia" subtitle="Experiencia profesional" />

          {experiencesJob.map((job) => (
            <ExperienceJob
              key={job.title}
              title={job.title}
              subtitle={job.subtitle}
              description={job.description}
              startDate={job.startDate}
              endDate={job.endDate}
            />
          ))}

        </div>
      </ContainerSection>

    </Section>
  )
}
