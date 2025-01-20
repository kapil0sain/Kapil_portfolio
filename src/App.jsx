import React from 'react'
import Navbar from './Component/navbar/Navbar'
import Hero from './Component/navbar/hero/Hero'
import About from './Component/About'
import './App.css'
import Service from './Component/service/Service'
import Mywork from './Component/Mywork/Mywork'
import Contact from './Component/Contact/Contact'
import Footer from './Component/footer/Footer'

const App = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Service/>
       <Mywork/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App