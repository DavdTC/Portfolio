import { sectionId } from "../../data/data";
import { ContainerSection } from "../ContainerSection/ContainerSection";
import { Section } from "../Section/Section";
import { TitleSection } from "../TitleSection/TitleSection";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { useTranslation } from "react-i18next";

export function ContactSection() {
  const { t } = useTranslation()
  return (
    <Section id={sectionId.CONTACT}>
      <ContainerSection >
        <div className="flex flex-col gap-2">
          <TitleSection title={t("contact.title")} subtitle={t("contact.subtitle")} />
          <div className="flex gap-2">
            <ContactInfo />
            <ContactForm />
          </div>
          
        </div>
      </ContainerSection>

    </Section>

  )
}