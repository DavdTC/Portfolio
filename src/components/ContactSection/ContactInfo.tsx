import { contactsLink } from "../../data/data";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { useTranslation } from "react-i18next";

export function ContactInfo() {
  const { t } = useTranslation()
  return (
    <div className="w-full flex flex-col gap-2">
      <p>{t("contact.description")}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {contactsLink.map((contact) => (
          <ButtonLink key={contact.text} text={t(contact.text, contact.text)} icon={contact.icon} href={contact.href} />
        ))}
      </div>
    </div>
  )
}