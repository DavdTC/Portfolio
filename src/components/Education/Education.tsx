import { capitalize, dateFormatter } from "../../utils/utils"
import { useTranslation } from "react-i18next"

interface IEducation {
  startDate: Date
  endDate: Date | null
  title: string
}

export function Education({ startDate, endDate, title }: IEducation) {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-4 mt-5">
      <p className="text-primary font-bold text-lg">
        {capitalize(dateFormatter.format(startDate))} -{" "}
        {endDate ? capitalize(dateFormatter.format(endDate)) : t("education.current")}
      </p>

      <p className="text-lg">{title}</p>
    </div>
  )
}