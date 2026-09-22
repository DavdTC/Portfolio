import type { ReactNode } from "react"

export function Section({children} : {children: ReactNode}) {
  return (
    <section className="w-full h-full px-6 md:px-16 lg:px-28 pb-16 pt-24">
      {children}
    </section>
  )
}