import { Section } from "../Section/Section";
import { ProfileDescription } from "./ProfileDescription";
import { ProfileImage } from "./ProfileImage";

export function Hero() {
  return (
    <Section>
      <div className="grid grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <ProfileImage />
        <ProfileDescription />
      </div>
    </Section>
  )
}