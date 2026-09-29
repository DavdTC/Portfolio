import { CplusplusIcon } from "../icons/CPlusPlusIcon"
import { DockerIcon } from "../icons/DockerIcon"
import { GithubIcon } from "../icons/GithubIcon"
import { JavascriptIcon } from "../icons/JavascriptIcon"
import { LinkedinIcon } from "../icons/LinkedinIcon"
import { MailIcon } from "../icons/MailIcon"
import { MongoDbIcon } from "../icons/MongoDbIcon"
import { NextJsIcon } from "../icons/NextJsIcon"
import { NodeJsIcon } from "../icons/NodeJsIcon"
import { PhoneIcon } from "../icons/PhoneIcon"
import { PostgreSqlIcon } from "../icons/PostgreSqlIcon"
import { PythonIcon } from "../icons/PythonIcon"
import { ReactIcon } from "../icons/ReactIcon"
import { TypescriptIcon } from "../icons/TypescriptIcon"
import tfgLoginImage from "../assets/tfg/login.png"
import carshubHome from "../assets/carshub/carshub.png"
import { FileIcon } from "../icons/FileIcon"
import { RedisIcon } from "../icons/RedisIcon"
import { CeleryIcon } from "../icons/CeleryIcon"
import { FastApiIcon } from "../icons/FastApi"
import { VueIcon } from "../icons/VueIcon"
import { ExpressIcon } from "../icons/ExpressIcon"

export const sectionId = {
  ABOUT_ME: "aboutMe",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  EDUCATION: "education",
  CONTACT: "contact"
}

export const navItems = [
  { id: sectionId.ABOUT_ME, label: "navigation.aboutMe" },
  { id: sectionId.EXPERIENCE, label: "navigation.experience" },
  { id: sectionId.PROJECTS, label: "navigation.projects" },
  { id: sectionId.EDUCATION, label: "navigation.education" },
  { id: sectionId.CONTACT, label: "navigation.contact" }
]

export const badgesProfile = [
  { text: "Javascript", icon: JavascriptIcon },
  { text: "Typescript", icon: TypescriptIcon },
  { text: "React", icon: ReactIcon },
  { text: "Nextjs", icon: NextJsIcon },
  { text: "Python", icon: PythonIcon },
  { text: "MongoDB", icon: MongoDbIcon },
  { text: "PostgreSQL", icon: PostgreSqlIcon },
  { text: "Docker", icon: DockerIcon },
  { text: "NodeJS", icon: NodeJsIcon },
  { text: "ExpressJS", icon: ExpressIcon },
  { text: "C++", icon: CplusplusIcon },

]

export const contactsLink = [
  { text: "https://github.com/DavdTC", icon: GithubIcon, href: "https://github.com/DavdTC" },
  { text: "davidtito.det@gmail.com", icon: MailIcon, href: "mailto:davidtito.det@gmail.com" },
  { text: "www.linkedin.com/in/david-ezequiel-tolosa-cabalero", icon: LinkedinIcon, href: "https://www.linkedin.com/in/david-ezequiel-tolosa-cabalero" },
  { text: "+34 697341747", icon: PhoneIcon, href: "tel:+34697341747" },
  { text: "links.cv", icon: FileIcon, href: "/public/cv.pdf" }
]

export const projectsData = [{
  title: "projects.industrialSimulation.title",
  description: "projects.industrialSimulation.description",
  href: "https://github.com/ElChancho/TFG-Simulacion",
  img: tfgLoginImage,
  badges: [
    { text: "Typescript", icon: TypescriptIcon },
    { text: "Nextjs", icon: NextJsIcon },
    { text: "Python", icon: PythonIcon },
    { text: "FastApi", icon: FastApiIcon },
    { text: "PostgreSQL", icon: PostgreSqlIcon },
    { text: "Docker", icon: DockerIcon },
    { text: "Redis", icon: RedisIcon },
    { text: "Celery", icon: CeleryIcon }
  ]
}, {
  title: "projects.carshub.title",
  description: "projects.carshub.description",
  href: "",
  img: carshubHome,
  badges: [
    { text: "Javascript", icon: JavascriptIcon },
    { text: "Vue", icon: VueIcon },
    { text: "NodeJS", icon: NodeJsIcon },
    { text: "ExpressJS", icon: ExpressIcon },
    { text: "MongoDB", icon: MongoDbIcon },
    { text: "Docker", icon: DockerIcon }
  ]
}
]

export const experiencesJob = [{
  title: "experience.jobs.acidTango.title",
  subtitle: "experience.jobs.acidTango.subtitle",
  description: "experience.jobs.acidTango.description",
  startDate: new Date(2025, 9, 1),
  endDate: new Date(2025, 11, 1)
}]

export const academic = [
  {
    startDate: new Date(2026, 8, 1),
    endDate: null,
    title: "education.items.diginnova"
  },
  {
    startDate: new Date(2021, 8, 1),
    endDate: new Date(2026, 5, 1),
    title: "education.items.computerEngineering"
  }, {
    startDate: new Date(2019, 8, 1),
    endDate: new Date(2021, 5, 1),
    title: "education.items.highSchool"
  }
]