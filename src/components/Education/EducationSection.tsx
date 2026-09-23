import { academic } from "../../data/data";
import { ContainerSection } from "../ContainerSection/ContainerSection";
import { Section } from "../Section/Section";
import { TitleSection } from "../TitleSection/TitleSection";
import { Education } from "./Education";

export function EducationSection() {
  return (
    <Section>
      <ContainerSection>
        <TitleSection title="Educación" subtitle="Formación Académica" />

        {academic.map((acad) => (
          <>
            <Education key={acad.title} title={acad.title} startDate={acad.startDate} endDate={acad.endDate} />
            <hr className="border-border mt-5" />
          </>
        ))}

      </ContainerSection>
    </Section>
  )
}