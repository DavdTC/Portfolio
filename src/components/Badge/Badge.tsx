import type { ComponentType, JSX } from "react";

interface IBadge {
  text: string
  icon: ComponentType<{ className?: string }>
}

export function Badge({ text, icon: Icon }: IBadge): JSX.Element {
  return (
    <div className="h-auto w-auto px-4 py-2 flex items-center gap-2 text-center rounded-full text-md border border-muted bg-background-badge">
      <Icon className="w-4 h-4"></Icon>
      {text}
    </div>
  )
}