import { PigIcon } from "../../icons/PigIcon";
import { ContainerSection } from "../ContainerSection/ContainerSection";
import { Section } from "../Section/Section";

export function Footer() {
  return (
    <Section id="" animated={false}>
      <ContainerSection>
        <footer className="w-full flex flex-col gap-2">
          <hr className="border-border" />
          <div className="flex gap-4 text-muted mt-5">
            <PigIcon />
            <span>{new Date().getFullYear()}</span>
            <span>David Ezequiel Tolosa Cabalero</span>
          </div>
        </footer>
      </ContainerSection>

    </Section>
  )
}