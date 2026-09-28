import type { ReactNode } from "react"
import { AnimatedSection } from "../AnimatedSection/AnimatedSection"

interface ISection {
  id: string
  children: ReactNode
  animated?: boolean
}

export function Section({ id, children, animated = true }: ISection) {
  return (
    <section id={id} className="w-full h-full px-6 md:px-16 lg:px-28 pb-16 pt-24">

      {animated ? (
        <AnimatedSection>
          {children}
        </AnimatedSection>
      ) : (
        children
      )}
    </section>
  )
}