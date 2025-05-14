import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Portfolio from "./Components/Portfolio"
import Services from "./Components/Services"


const App = () => {
  return (
      <>
    {  /* hy */}
      <main className="overflow-x-hidden antialiased text-neutral-800"></main>
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      </>
        
  )
}

export default App
