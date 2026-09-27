import type { ComponentType } from "react"
import { ChevronRight } from "../../icons/ChevronRight"

interface IButtonLink {
  text: string,
  icon: ComponentType<{ className?: string }>
  href: string
}

export function ButtonLink({ text, icon: Icon, href = "" }: IButtonLink) {
  return (
    <a className="text-sm flex items-center gap-2 bg-background-secondary border border-border p-2 rounded-lg w-30 md:w-40 xl:w-55 hover:border-primary/40 transition-all" href={href} target="_blank">
      <Icon className="w-4 h-4 text-primary shrink-0" />
      <span className="min-w-0 truncate">{text}</span>
      <ChevronRight className="w-4 h-4 shrink-0 ml-auto" />
    </a>
  )
}