import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Certifications from './Components/Certifications'
import "./App.css"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Education/>
      <Certifications/>
    </div>
  )
}

export default App
