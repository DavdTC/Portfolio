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
import loginImage from "../assets/tfg/login.png"

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
  { text: "C++", icon: CplusplusIcon },

]

export const contactsLink = [
  { text: "https://github.com/DavdTC", icon: GithubIcon, href: "https://github.com/DavdTC" },
  { text: "davidtito.det@gmail.com", icon: MailIcon, href: "mailto:davidtito.det@gmail.com" },
  { text: "www.linkedin.com/in/david-ezequiel-tolosa-cabalero", icon: LinkedinIcon, href: "https://www.linkedin.com/in/david-ezequiel-tolosa-cabalero" },
  { text: "+34 697341747", icon: PhoneIcon, href: "tel:+34697341747" },
]

export const projectsData = [{
  title: "Plataforma Full-Stack para Simulación Industrial y Detección de fugas",
  description: "Plataforma Full-Stack para la simulación de una estación de servicio y detección de fugas mediante Machine Learning.\
   Incluye una interfaz web para configurar y visualizar simulaciones, una CLI\
    y soporte de comunicación mediante memoria, sockets y OPC-UA, permitiendo conectar \
    sistemas simulados con controladoras físicas o virtuales.",
  href: "https://github.com/ElChancho/TFG-Simulacion",
  img: loginImage,
  badges: [
    { text: "Typescript", icon: TypescriptIcon },
    { text: "React", icon: ReactIcon },
    { text: "Nextjs", icon: NextJsIcon },
    { text: "Python", icon: PythonIcon },
    { text: "PostgreSQL", icon: PostgreSqlIcon },
    { text: "Docker", icon: DockerIcon },
  ]
}
]