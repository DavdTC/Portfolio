import { Badge } from "../Badge/Badge";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { badgesProfile, contactsLink } from "../../data/data";

export function ProfileDescription() {

  return (
    <div className="flex flex-col text-left w-auto max-w-xl gap-4 ">
      <div className="flex flex-col gap-2 mb-5">
        <h2 className="text-primary text-4xl font-bold">Sobre mi</h2>
        <h3 className="text-xl">Desarrollador Frontend y Backend</h3>
        <p className="text-muted"> Ingeniero informático centralizado en desarrollo de aplicaciones web centradas en el usuario, combinando código limpio con interfaces bien pensadas. Me interesa construir productos que resuelvan problemas reales de forma elegante. bla bla bla</p>
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
          <ButtonLink key={contact.text} text={contact.text} icon={contact.icon} href={contact.href} />
        ))}
        <p>Aqui faltaría poner un link para descargar el CV</p>
      </div>

    </div>
  )
}