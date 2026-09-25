import { experiencesJob, sectionId } from "../../data/data";
import { ContainerSection } from "../ContainerSection/ContainerSection";
import { Section } from "../Section/Section";
import { TitleSection } from "../TitleSection/TitleSection";
import { ExperienceJob } from "./ExperienceJob";
import { useTranslation } from "react-i18next";

export function ExperienceSection() {
  const { t } = useTranslation()
  return (
    <Section id={sectionId.EXPERIENCE}>
      <ContainerSection>
        <div className="w-full flex flex-col gap-2">
          <TitleSection title={t("experience.title")} subtitle={t("experience.subtitle")} />

          {experiencesJob.map((job) => (
            <ExperienceJob
              key={job.title}
              title={t(job.title, job.title)}
              subtitle={t(job.subtitle, job.subtitle)}
              description={t(job.description, job.description)}
              startDate={job.startDate}
              endDate={job.endDate}
            />
          ))}

        </div>
      </ContainerSection>

    </Section>
  )
}
