import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import Certifications from "./components/Certifications"
import BeyondWork from "./components/BeyondWork"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  return (
    <>
      <ThemeToggle />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <BeyondWork />
      <Footer />
    </>
  )
}

export default App


