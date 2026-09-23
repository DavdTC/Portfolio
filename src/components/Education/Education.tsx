import { capitalize, dateFormatter } from "../../utils/utils"

interface IEducation {
  startDate: Date
  endDate: Date | null
  title: string
}

export function Education({ startDate, endDate, title }: IEducation) {
  return (
    <div className="flex flex-col gap-4 mt-5">
      <p className="text-primary font-bold text-lg">
        {capitalize(dateFormatter.format(startDate))} -{" "}
        {endDate ? capitalize(dateFormatter.format(endDate)) : "Actualidad"}
      </p>

      <p className="text-lg">{title}</p>
    </div>
  )
}