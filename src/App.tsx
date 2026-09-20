import { Header } from "./components/Header/Header"
import { ProfileDescription } from "./components/ProfileDescription/ProfileDescription"
import { ProfileImage } from "./components/ProfileImage/ProfileImage"

function App() {

  return (
    <div className="flex min-h-svh flex-col p-10">

      <Header />

      <main className="flex w-full flex-1 justify-center items-center">
        <section className="flex w-full max-w-6xl h-full justify-around">
          <ProfileImage />
          <ProfileDescription />
        </section>



      </main>

      <footer>

      </footer>

    </div>
  )
}

export default App