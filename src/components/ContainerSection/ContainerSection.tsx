import type {ReactNode} from "react"

interface IContainerSection {
  children: ReactNode
  className?: string
}

export function ContainerSection({className = "", children}: IContainerSection) {
  return (
    <div className={`max-w-5xl mx-auto ${className}`}>
      {children}
    </div>
  )
}