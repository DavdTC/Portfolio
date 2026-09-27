interface ITitleSection {
  title: string
  subtitle: string
}

export function TitleSection({title, subtitle}: ITitleSection) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl lg:text-4xl text-primary font-bold">{title}</h2>
      <h3 className="text-xl lg:text-xl">{subtitle}</h3>
    </div>
  )
}