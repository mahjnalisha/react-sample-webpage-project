import React from 'react'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero/Hero'
import { Program } from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer' />
        <Program />
        <About />
        <Title subTitle='Gallery' title='Our Photos' />

      </div>
      <Gallery></Gallery>
      <div className="container">
        <Title subTitle='Testimonials' title='Explore what our client says' />
        <Testimonials />
      </div>
      <div className="container">
        <Title subTitle='Contact Us' title='Stay connected with Us' />
        <Contact></Contact>
      </div>


    </>
  )
}

export default App