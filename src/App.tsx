import { ContactSection } from "./components/ContactSection/ContactSection"
import { EducationSection } from "./components/Education/EducationSection"
import { ExperienceSection } from "./components/Experience/ExperienceSection"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { ProjectsSection } from "./components/Projects/ProjectSection"

function App() {

  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      
      <main className="w-auto h-full flex flex-col">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />

    </div>
  )

}

export default App