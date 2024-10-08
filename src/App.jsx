import React from 'react'
import { About, Contact,  Hero, Navbar, Tech, Work, Footer, Experience, Sound } from './sections'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <main className="relative z-0 bg-primary">
      <Navbar />
      <Hero />

      <Sound />

      <About />
      <Tech />
      <Work />
      <Experience />
      <Contact />
      <Footer />

      <Toaster />
    </main>
  )
}

export default App

// Canvas is offered by RTF
// Pro tip: max-w-7xl is used quite often to get equal spacing from both ends left and right. So, put content within
// react-responsive will make our scene responsive across various screen sizes.