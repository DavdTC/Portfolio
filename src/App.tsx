import { Experience } from "./components/Experience/Experience"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { Projects } from "./components/Projects/Projects"

function App() {

  return (
    <div className="flex min-h-svh flex-col">

      <Header />

      <main className="w-auto h-full flex flex-col">
        <Hero />
        <Experience />
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