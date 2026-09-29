import { capitalize, dateFormatter } from "../../utils/utils"
import { useTranslation } from "react-i18next"

interface IEducation {
  startDate: Date
  endDate: Date | null
  title: string
}

export function Education({ startDate, endDate, title }: IEducation) {
  const { t, i18n } = useTranslation()
  return (
    <div className="flex flex-col gap-4 mt-5">
      <p className="text-primary font-bold text-md lg:text-lg">
        {capitalize(dateFormatter(startDate, i18n.language))} -{" "}
        {endDate ? capitalize(dateFormatter(endDate, i18n.language)) : t("education.current")}
      </p>

      <p className="text-sm lg:text-lg">{title}</p>
    </div>
  )
}