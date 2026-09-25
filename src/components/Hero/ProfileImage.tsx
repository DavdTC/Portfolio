import { useTranslation } from "react-i18next"
import profile from "../../assets/photo.jpg"

export function ProfileImage() {

  const { t } = useTranslation("translation", {
    keyPrefix: "hero.profileImage"
  })

  return (
    <div className="flex flex-col w-auto justify-center gap-2">

      <div className="relative w-100">
        <div className="absolute bg-linear-to-b from-primary via-primary/40 to-background opacity-50 -z-1 scale-103 w-full h-full rounded-4xl"></div>
        <img src={profile} alt={t("alt")} className="rounded-4xl" />

        <div className="absolute backdrop-blur-sm bg-linear-to-b from-background/30 to-background bottom-0 h-auto w-full p-3 text-left">
          <p className="text-primary font-bold">{t("occupation")}</p>
          <p className="text-xl font-semibold">{t("name")}</p>
        </div>
      </div>
    </div>
  )
}