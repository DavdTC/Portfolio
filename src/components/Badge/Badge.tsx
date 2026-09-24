import type { ComponentType, JSX } from "react";

export interface IBadge {
  text: string
  icon: ComponentType<{ className?: string }>
}

export function Badge({ text, icon: Icon }: IBadge): JSX.Element {
  return (
    <div className="h-auto w-auto px-4 py-2 flex items-center justify-center gap-2 text-center rounded-full text-sm border border-border bg-background-secondary">
      <Icon className="w-4 h-4 text-primary shrink-0"></Icon>
      <span>{text}</span>
    </div>
  )
}