import profile from "./assets/photo.jpg"
import { Badge } from "./components/Badge/Badge"
import { Header } from "./components/Header/Header"
import { CplusplusIcon } from "./icons/CPlusPlusIcon"
import { DockerIcon } from "./icons/DockerIcon"
import { JavascriptIcon } from "./icons/JavascriptIcon"
import { MondoDbIcon } from "./icons/MongoDbIcon"
import { NextJsIcon } from "./icons/NextJsIcon"
import { NodeJsIcon } from "./icons/NodeJsIcon"
import { PostgreSqlIcon } from "./icons/PostgreSqlIcon"
import { PythonIcon } from "./icons/PythonIcon"
import { ReactIcon } from "./icons/ReactIcon"
import { TypescriptIcon } from "./icons/TypescriptIcon"

function App() {

  return (
    <div className="flex min-h-svh flex-col p-10">

      <Header />

      <main className="flex w-full flex-1">
        <section className="flex w-full h-full justify-around">
          <div className="flex w-1/2 justify-center">
            
            <div className="relative w-90">
            <div className="absolute bg-linear-to-b from-primary via-primary/40 to-background opacity-50 -z-1 scale-103 w-full h-full rounded-4xl"></div>
              <img src={profile} alt="personal photo" className="rounded-4xl" />
            </div>
          </div>
          <div className="flex flex-col text-left text-balance w-1/2 gap-4 mt-20">
            <p className="text-primary text-4xl font-bold">Desarrollador Software</p>
            <p className="text-xl">David Ezequiel Tolosa Cabalero</p>
            <p className="text-muted text-balance">Desarrollo aplicaciones web centradas en el usuario, combinando código limpio con interfaces bien pensadas. Me interesa construir productos que resuelvan problemas reales de forma elegante. bla bla bla</p>
            
            <div>
              <ul className="w-auto h-auto flex flex-wrap gap-4">
                {/* Hacer un bucle con el map */}
                <li><Badge text="Javascript" icon={JavascriptIcon}/></li>
                <li><Badge text="Typescript" icon={TypescriptIcon}></Badge></li>
                <li><Badge text="React" icon={ReactIcon}></Badge></li>
                <li><Badge text="Nextjs" icon={NextJsIcon}></Badge></li>
                <li><Badge text="Python" icon={PythonIcon}></Badge></li>
                <li><Badge text="MongoDB" icon={MondoDbIcon}></Badge></li>
                <li><Badge text="PostgreSQL" icon={PostgreSqlIcon}></Badge></li>
                <li><Badge text="Docker" icon={DockerIcon}></Badge></li>
                <li><Badge text="NodeJS" icon={NodeJsIcon}></Badge></li>
                <li><Badge text="C++" icon={CplusplusIcon}></Badge></li>
              </ul>
            </div>
          
          </div>
        </section>
      </main>

      <footer>

      </footer>

    </div>
  )
}

export default App