import { academic, sectionId } from "../../data/data";
import { ContainerSection } from "../ContainerSection/ContainerSection";
import { Section } from "../Section/Section";
import { TitleSection } from "../TitleSection/TitleSection";
import { Education } from "./Education";
import { useTranslation } from "react-i18next";

export function EducationSection() {
  const { t } = useTranslation()
  return (
    <Section id={sectionId.EDUCATION}>
      <ContainerSection>
        <TitleSection title={t("education.title")} subtitle={t("education.subtitle")} />

        {academic.map((acad) => (
          <div key={acad.title}>
            <Education title={t(acad.title, acad.title)} startDate={acad.startDate} endDate={acad.endDate} />
            <hr className="border-border mt-5" />
          </div>
        ))}

      </ContainerSection>
    </Section>
  )
}