import React, { useState } from 'react'
import Navbar from './Components/Navbar /Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Experiences from './Components/Experiences/Experiences'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video /Video'



function App() {


  const[playvideo,setPlayvideo]=useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title smalltitle='OUR PROGRAM' bigtitle='What we provide'/>  
        <Program/>
        <About setPlayvideo={setPlayvideo}/>
        <Title smalltitle='GALLERY' bigtitle='Virtual Tour'/> 
        <Campus/>
        <Title smalltitle='TESTIMONIALS' bigtitle='Student Review'/> 
        <Experiences/>
        <Title smalltitle='Have a Question?' bigtitle='We’re Here to Help'/> 
        <Contact/>
        <Footer/>
        <Video playvideo={playvideo} setPlayvideo={setPlayvideo}/>
      </div>
    </div>
  )
}

export default App


// In title we have to pass the parameters in form of Props 
