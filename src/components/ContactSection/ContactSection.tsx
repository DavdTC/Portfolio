import { ContainerSection } from "../ContainerSection/ContainerSection";
import { Section } from "../Section/Section";
import { TitleSection } from "../TitleSection/TitleSection";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function ContactSection() {
  return (
    <Section>
      <ContainerSection >
        <div className="flex flex-col gap-2">
          <TitleSection title="Contacto" subtitle="Hablemos" />
          <div className="flex gap-2">
            <ContactInfo />
            <ContactForm />
          </div>
          
        </div>
      </ContainerSection>

    </Section>

  )
}