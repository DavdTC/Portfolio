import { contactsLink } from "../../data/data";
import { ButtonLink } from "../ButtonLink/ButtonLink";

export function ContactInfo() {
  return (
    <div className="w-full flex flex-col gap-2">
      <p>¿Quieres charlar? Rellena el formulario y te respondo en menos de 24 horas</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {contactsLink.map((contact) => (
          <ButtonLink key={contact.text} text={contact.text} icon={contact.icon} href={contact.href} />
        ))}
      </div>
    </div>
  )
}