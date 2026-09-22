import { DockerIcon } from "../../icons/DockerIcon";
import { NextJsIcon } from "../../icons/NextJsIcon";
import { PostgreSqlIcon } from "../../icons/PostgreSqlIcon";
import { PythonIcon } from "../../icons/PythonIcon";
import { ReactIcon } from "../../icons/ReactIcon";
import { TypescriptIcon } from "../../icons/TypescriptIcon";
import { Section } from "../Section/Section";
import { ProjectCard } from "./ProjectCard";

export function Projects() {

  // const projects = [{
  //   title: "Web para simulación de estación de servicio",
  //   description: "Tal tal tal talt alltla dskljakljdklaj kljkl jfkaljfkldjkladj fkl jdklfj asd",
  //   href: "asdasd",
  //   badges: [
  //     { text: "Typescript", icon: TypescriptIcon },
  //     { text: "React", icon: ReactIcon },
  //     { text: "Nextjs", icon: NextJsIcon },
  //     { text: "Python", icon: PythonIcon },

  //     { text: "PostgreSQL", icon: PostgreSqlIcon },
  //     { text: "Docker", icon: DockerIcon },
  //   ]
  // }

  // ]

  const badges = [
    { text: "Typescript", icon: TypescriptIcon },
    { text: "React", icon: ReactIcon },
    { text: "Nextjs", icon: NextJsIcon },
    { text: "Python", icon: PythonIcon },

    { text: "PostgreSQL", icon: PostgreSqlIcon },
    { text: "Docker", icon: DockerIcon },
  ]

  return (
    <Section>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-primary text-4xl font-bold">Proyectos</h2>
        <div className="grid grid-cols-2 mt-5 gap-10">
          <ProjectCard title="Web para simulación de estación de servicio" description="Tal tal tal tal" badges={badges} />
          {/* <ProjectCard title="Web para simulación de estación de servicio" description="Tal tal tal tal" /> */}
          {/* <ProjectCard /> */}
        </div>
      </div>
    </Section>

  )
}