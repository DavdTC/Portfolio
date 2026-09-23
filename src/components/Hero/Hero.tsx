import { ContainerSection } from "../ContainerSection/ContainerSection";
import { Section } from "../Section/Section";
import { ProfileDescription } from "./ProfileDescription";
import { ProfileImage } from "./ProfileImage";

export function Hero() {
  return (
    <Section>
      <ContainerSection className="grid grid-cols-2 gap-10 items-center">
        <ProfileImage />
        <ProfileDescription />
      </ContainerSection>
    </Section>
  )
}