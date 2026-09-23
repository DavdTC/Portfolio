import { experiencesJob } from "../../data/data";
import { ContainerSection } from "../ContainerSection/ContainerSection";
import { Section } from "../Section/Section";
import { ExperienceJob } from "./ExperienceJob";

export function Experience() {
  return (
    <Section>
      <ContainerSection>
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-primary text-4xl font-bold">Experiencia</h2>
          <h3 className="text-xl">Experiencia profesional</h3>

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
