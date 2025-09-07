import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import View from '../Components/View'
import About from '../Components/About'
import Technologies from '../Components/Technologies'
import Projects from '../Components/Projects'
import Experience from '../Components/Experience'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import ScrollToTop from '../Components/ScrollToTop'

const Home = () => {
  return (
    <div className='text-justify'>
      <Header/>
      <Navbar/>
      <View/>
      <About/>
      <Technologies/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>

      <ScrollToTop/>
    </div>
  )
}

export default Home
