import { CplusplusIcon } from "../../icons/CPlusPlusIcon";
import { DockerIcon } from "../../icons/DockerIcon";
import { JavascriptIcon } from "../../icons/JavascriptIcon";
import { MongoDbIcon } from "../../icons/MongoDbIcon";
import { NextJsIcon } from "../../icons/NextJsIcon";
import { NodeJsIcon } from "../../icons/NodeJsIcon";
import { PostgreSqlIcon } from "../../icons/PostgreSqlIcon";
import { PythonIcon } from "../../icons/PythonIcon";
import { ReactIcon } from "../../icons/ReactIcon";
import { TypescriptIcon } from "../../icons/TypescriptIcon";
import { Badge } from "../Badge/Badge";

export function ProfileDescription() {

  const badges = [
    {text: "Javascript", icon: JavascriptIcon},
    {text: "Typescript", icon: TypescriptIcon},
    {text: "React", icon: ReactIcon},
    {text: "Nextjs", icon: NextJsIcon},
    {text: "Python", icon: PythonIcon},
    {text: "MongoDB", icon: MongoDbIcon},
    {text: "PostgreSQL", icon: PostgreSqlIcon},
    {text: "Docker", icon: DockerIcon},
    {text: "NodeJS", icon: NodeJsIcon},
    {text: "C++", icon: CplusplusIcon},

  ]

  return (
    <div className="flex flex-col text-left w-1/2 gap-4 ">
      <p className="text-primary text-4xl font-bold">Sobre mi</p>
      <p>Desarrollador Frontend y Backend</p>
      <p className="text-muted"> Ingeniero informático centralizado en desarrollo de aplicaciones web centradas en el usuario, combinando código limpio con interfaces bien pensadas. Me interesa construir productos que resuelvan problemas reales de forma elegante. bla bla bla</p>

      <div>
        <ul className="w-auto h-auto flex flex-wrap gap-4">
          {badges.map((badge) => (
            <li key={badge.text}> <Badge text={badge.text} icon={badge.icon} /></li>
          ))}
        </ul>
      </div>

    </div>
  )
}