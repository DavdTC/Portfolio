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
    <div className="flex lg:grid lg:grid-cols-[1fr_40px_1fr] mt-5">

      {/* Display in smaller screens */}
      <div className="lg:hidden flex flex-col gap-4">

        <p className="text-primary lg:text-xl">{dateFormatter.format(startDate)} - {dateFormatter.format(endDate)}</p>

        <div className="lg:hidden flex gap-2">
          <div className="flex flex-col items-center">
            <p className="w-4 h-4 bg-primary rounded-full"></p>
            <p className="w-0.5 h-20 bg-primary/20"></p>
          </div>
          
          <ExperienceCard
            title={title}
            subtitle={subtitle}
            description={description}
          />
        </div>


      </div>

      {/* Display in bigger screens */}
      <div className="hidden lg:block">
        <ExperienceCard
          title={title}
          subtitle={subtitle}
          description={description}
        />
      </div>


      <div className="hidden lg:flex flex-col items-center pl-8">
        <p className="w-4 h-4 bg-primary rounded-full"></p>
        <p className="w-0.5 h-20 bg-primary/20"></p>
      </div>

      <div className="hidden lg:block pl-8">
        <p className="text-primary lg:text-xl">{dateFormatter.format(startDate)} - {dateFormatter.format(endDate)}</p>
      </div>

    </div>
  )
}