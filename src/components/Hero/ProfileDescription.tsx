import { Badge } from "../Badge/Badge";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { badgesProfile, contactsLink } from "../../data/data";
import { TitleSection } from "../TitleSection/TitleSection";
import { useTranslation } from "react-i18next";

export function ProfileDescription() {

  const { t: tProfile } = useTranslation("translation", {
    keyPrefix: "hero.profileDescription"
  })
  const { t } = useTranslation()

  return (
    <div className="flex flex-col text-left w-auto max-w-xl gap-4 ">

      <div className="flex flex-col gap-2 mb-5">
        <TitleSection title={tProfile("title")} subtitle={tProfile("subtitle")} />
        <p className="text-muted">{tProfile("description")}</p>
      </div>

      <div className="mb-5">
        <ul className="w-auto h-auto flex flex-wrap gap-2">
          {badgesProfile.map((badge) => (
            <li key={badge.text}> <Badge text={badge.text} icon={badge.icon} /></li>
          ))}
        </ul>
      </div>

      <div className="flex gap-2 flex-wrap">
        {contactsLink.map((contact) => (
          <ButtonLink key={contact.text} text={t(contact.text, contact.text)} icon={contact.icon} href={contact.href} />
        ))}
      </div>

    </div>
  )
}