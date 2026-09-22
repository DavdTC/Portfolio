import login from "../../assets/tfg/login.png"
import { TypescriptIcon } from "../../icons/TypescriptIcon"
import { Badge, type IBadge } from "../Badge/Badge"

interface IProjectCard {
  title: string
  description: string
  // imagen
  // hacer algún tipo propio que contenga un array de tecnologías con su texto e imagen technologies: 
  badges: IBadge[]
  href: string
}

export function ProjectCard({ title, description, href = "", badges}: IProjectCard) {
  return (
    <div className="relative w-full h-90  border border-border rounded-lg overflow-hidden cursor-pointer hover:scale-101 transition-all">
      <img src={login} alt="" />
      <div className="absolute w-full bg-background-secondary bottom-0 h-45 p-4">
        <div className="absolute -top-10 inset-x-0 h-10 bg-linear-to-t from-background-secondary/80 via-background-secondary/30 to-transparent" />
        <div className="flex flex-col gap-2">
          <h3 className="text-lg">{title}</h3>
          <p className="text-sm">{description}</p>
          <div className="flex flex-wrap gap-2">

            {badges.map((badge) => (
              <Badge key={badge.text} text={badge.text} icon={badge.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}