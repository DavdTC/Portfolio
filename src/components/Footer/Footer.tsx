import { useTranslation } from "react-i18next";
import { PigIcon } from "../../icons/PigIcon";
import { ContainerSection } from "../ContainerSection/ContainerSection";
import { Section } from "../Section/Section";

export function Footer() {

  const { i18n } = useTranslation()

  return (
    <Section id="" animated={false}>
      <ContainerSection>
        <footer className="w-full flex flex-col gap-2">
          <hr className="border-border" />
          <div className="flex gap-4 text-muted mt-5">
            <PigIcon className="shrink-0" />
            <span>{new Date().getFullYear()}</span>
            <span className="w-full">David Ezequiel Tolosa Cabalero</span>
            <div className="flex gap-2 fixed bottom-10 right-10 z-1 bg-background-secondary p-2 rounded-lg border border-border text-sm">
              <button
                type="button"
                onClick={() => i18n.changeLanguage("es")}
                className={i18n.language === "es" ? "text-white" : "cursor-pointer hover:font-bold"}
              >
                ES
              </button>

              <button
                type="button"
                onClick={() => i18n.changeLanguage("en")}
                className={i18n.language === "en" ? "text-white" : "cursor-pointer hover:font-bold"}
              >
                EN
              </button>
            </div>
          </div>
        </footer>
      </ContainerSection>

    </Section>
  )
}