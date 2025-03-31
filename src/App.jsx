import React from 'react'
import Navabar from './components/Navabar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <div className=''>
      <Navabar/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
    
    </>
  )
}

export default App