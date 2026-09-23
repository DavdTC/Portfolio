import { dateFormatter } from "../../utils/utils"
import { ExperienceCard } from "./ExperienceCard"

interface IExperienceJob {
  title: string
  subtitle: string
  startDate: Date
  endDate: Date
  description: string
}

export function ExperienceJob({ title, subtitle, startDate, endDate, description }: IExperienceJob) {
  return (
    <div className="grid grid-cols-[1fr_40px_1fr] mt-5">
      <ExperienceCard
        title={title}
        subtitle={subtitle}
        description={description}
      />

      <div className="flex flex-col items-center pl-8">
        <p className="w-4 h-4 bg-primary rounded-full"></p>
        <p className="w-0.5 h-20 bg-primary/20"></p>
      </div>

      <div className="pl-8">
        <p className="text-primary text-xl">{dateFormatter.format(startDate)} - {dateFormatter.format(endDate)}</p>
      </div>

    </div>
  )
}