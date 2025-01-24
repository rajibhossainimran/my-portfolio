import { BrowserRouter } from "react-router"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Tech from "./components/Tech"
import Contact from "./components/Contact"


function App() {


  return (
    <>

      <BrowserRouter>
      <div className="relative z-0 bg-primary"> 
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center pt-12">
          <Navbar></Navbar>
          <Hero></Hero>  
        </div>
        <About></About>
        <Experience></Experience>
        <Tech></Tech>
        <div className="relative z-0">
        <Contact></Contact>
        
        </div>

      </div>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
