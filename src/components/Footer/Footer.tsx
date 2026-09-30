import { useTranslation } from "react-i18next";
import { PigIcon } from "../../icons/PigIcon";
import { ContainerSection } from "../ContainerSection/ContainerSection";
import { Section } from "../Section/Section";
import { useEffect, useRef, useState } from "react";

export function Footer() {

  const { i18n } = useTranslation()
  const [showMessage, setShowMessage] = useState(false)
  const [numberClickedPig, setNumberClickedPig] = useState(0)
  const [isDestroyed, setIsDestroyed] = useState(false)

  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const checkClickedPig = (counter: number) => {
    return counter >= 3
  }

  const handlePigClick = () => {
    if (showMessage || isDestroyed) return

    setShowMessage(true)

    setNumberClickedPig((prev) => {
      const newCount = prev + 1

      if (checkClickedPig(newCount)) {
        setIsDestroyed(true)
      }
      return newCount
    })

    setTimeout(() => {
      setShowMessage(false)
    }, 800)

    if (resetTimeout.current) {
      clearTimeout(resetTimeout.current)
    }

    resetTimeout.current = setTimeout(() => {
      setNumberClickedPig(0);
    }, 5000)
  }

  useEffect(() => {
    return () => {
      if (resetTimeout.current) {
        clearTimeout(resetTimeout.current)
      }
    }
  }, [])

  return (
    <Section id="" animated={false}>
      <ContainerSection>
        <footer className="w-full flex flex-col gap-2">
          <hr className="border-border" />
          <div className="flex gap-4 text-muted mt-5">

            <div className="relative">
              {showMessage && (
                <span className="absolute bottom-full left-1/2  mb-2 whitespace-nowrap text-sm animate-pig-message">{checkClickedPig(numberClickedPig) ? "Whaa" : "Oink!"}</span>
              )}

              {!isDestroyed && (
                <PigIcon className={`shrink-0 ${!showMessage && "cursor-pointer hover:text-pink-300"} ${isDestroyed ? "animate-pig-destroy" : ""} transition-all`} onClick={handlePigClick} />
              )}

              {isDestroyed && (
                <span className="animate-pig-destroy">💥</span>
              )}
            </div>


            <span>{new Date().getFullYear()}</span>
            <span className="w-full">David Ezequiel Tolosa Cabalero</span>
            <div className="flex gap-2 fixed bottom-10 right-10 z-1 bg-background-secondary p-2 rounded-lg border border-border text-sm">
              <button
                type="button"
                onClick={() => i18n.changeLanguage("es")}
                className={i18n.language === "es" ? "text-white" : "cursor-pointer hover:font-bold"}
              >
                ES
              </button>

              <button
                type="button"
                onClick={() => i18n.changeLanguage("en")}
                className={i18n.language === "en" ? "text-white" : "cursor-pointer hover:font-bold"}
              >
                EN
              </button>
            </div>
          </div>
        </footer>
      </ContainerSection>

    </Section>
  )
}