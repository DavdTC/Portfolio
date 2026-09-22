import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { Projects } from "./components/Projects/Projects"

function App() {

  return (
    <div className="flex min-h-svh flex-col">

      <Header />

      <main className="w-auto h-full flex flex-col">
        <Hero />
        {/* Experiencia. Comentar que solo la experiencia ha sido de prácticas universitarias, de octubre a diciembre en Acid Tango */}
        <Projects />
        {/* Estudios */}
        {/* Contactar enviando un correo */}
        {/* Intentar hacer algún easter egg o algo? */}
      </main>

      <footer>

      </footer>

    </div>
  )

}

export default App