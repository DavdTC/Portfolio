import type { ReactNode } from "react"

interface ISection {
  id: string
  children: ReactNode
}

export function Section({id, children} : ISection) {
  return (
    <section id={id} className="w-full h-full px-6 md:px-16 lg:px-28 pb-16 pt-24">
      {children}
    </section>
  )
}