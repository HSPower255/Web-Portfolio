import React from 'react'
import { Toaster } from 'react-hot-toast'

// Imported components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTopBtn from './components/BackToTopBtn'

const App = () => {
  return (
    <div>
      <Toaster/>
      <Header />
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  )
}

export default App
