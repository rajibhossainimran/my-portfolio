import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Works from "./components/Works";
import { StarsCanvas } from "./components/canvas";
import Spinner from "./components/Spinner"; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? ( 
        <Spinner /> 
      ) : (
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center pt-12">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Works />
          <Tech />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
