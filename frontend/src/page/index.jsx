import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Feature from '../components/Feature'
import HowItWork from '../components/HowItWork'
import MentorCategories from '../components/MentorCategories'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=' bg-white h-full w-full'>
    {/* navbar */}
    <Nav/>
    {/* Hero section */}
    <Hero/>

    {/* About section */}
    <About/>

    {/* Features section */}
    <Feature/>

    {/* How It Works Section  */}
    <HowItWork/>

    {/* Mentor Categories Sections */}
    <MentorCategories/>

    {/* Pricing section */}
    <Pricing/>

     {/* FAQ's */}

        {/* Call to Action */}
        <Faq/>

        {/* Footer */}
        <Footer/>
    </div>
    
  )
}

export default Home