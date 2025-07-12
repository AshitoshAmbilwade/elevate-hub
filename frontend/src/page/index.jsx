import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <div className=' bg-white h-full w-full'>
    {/* navbar */}
    <Nav/>
    {/* Hero section */}
    <Hero/>

    {/* About section */}
    <About/>
    </div>
    
  )
}

export default Home