interface IExperienceCard {
  title: string
  subtitle: string
  description: string
}

export function ExperienceCard({ title, subtitle, description }: IExperienceCard) {
  return (
    <div className="flex flex-col gap-2 bg-background-secondary rounded-lg p-4 pr-8 border border-border">
      <h2 className="text-xl">{title}</h2>
      <h3 className="text-lg text-muted">{subtitle}</h3>
      <hr className="border-border"></hr>
      <p className="text-muted">{description}</p>
    </div>
  )
}