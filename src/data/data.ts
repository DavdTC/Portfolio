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
  description: "Mi trabajo de Fin de Grado consistió en una plataforma Full-Stack para la simulación de una estación de servicio y detección de fugas mediante Machine Learning.\
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

export const experiencesJob = [{
  title: "Desarrollador Web y Mobile - Prácticas Universitarias",
  subtitle: "Acid Tango S.L.",
  description: "Realicé mis prácticas universitarias en Acid Tango, una empresa española especializada en el diseño y desarrollo de productos \
  digitales y soluciones de software. \
  Durante este periodo, participé en tres proyectos de la empresa, desempeñando el rol de Desarrollador Frontend en los dos primeros y \
  de Desarrollador Mobile utilizando Android Studio en el último.",
  startDate: new Date(2025, 9, 1),
  endDate: new Date(2025, 11, 1)
}]

export const academic = [
  {
    startDate: new Date(2026, 8, 1),
    endDate: null,
    title: "Programa Diginnova - FGULL (Fundación General de la Universidad de La Laguna)"
  },
  {
    startDate: new Date(2021, 8, 1),
    endDate: new Date(2026, 5, 1),
    title: "Grado de Ingeniería Informática, Tecnologías de la Información - Universidad de La Laguna"
  }, {
    startDate: new Date(2019, 8, 1),
    endDate: new Date(2021, 5, 1),
    title: "Bachillerato de Ciencias Tecnológicas - IES Teobaldo Power"
  }
]