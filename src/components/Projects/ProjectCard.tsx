import { SquareArrowOutUpRight } from "../../icons/SquareArrowOutUpRight"
import { Badge, type IBadge } from "../Badge/Badge"

interface IProjectCard {
  title: string
  description: string
  img: string
  badges: IBadge[]
  href: string
}

export function ProjectCard({ title, description, img, href, badges }: IProjectCard) {
  return (
    <div className="w-full flex border bg-background-secondary border-border rounded-lg overflow-hidden">
      <div className="relative w-1/2 hover:scale-101 transition-all cursor-pointer" onClick={() => window.open(href, "__blank")}>
        <img src={img} alt={title} className="w-full h-full object-cover object-left" />
        <SquareArrowOutUpRight className="absolute top-4 right-4 w-6 h-6 rounded-lg" />
      </div>
      <div className="w-1/2 flex flex-col p-4 gap-4">
        <h3 className="text-lg">{title}</h3>
        <hr className="border-border" />
        <p className="text-muted">{description}</p>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge key={badge.text} text={badge.text} icon={badge.icon} />
          ))}
        </div>
      </div>

    </div>

  )
}