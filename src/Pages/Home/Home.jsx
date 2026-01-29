import React from 'react'
import HomeSlider from './HomeSlider'
import WhyAbout from './WhyAbout'
import PhotoSection from './PhotoSection'

import HomeCount from './HomeCount'
import Youtube from './Youtube'
import Reviews from './Reviews'
import PhotoShowcase from './PhotoShowcase'
import ContactForm from './ContactForm'
const Home = () => {
  return (
    <div>
      <div className="pt-20">
      <HomeSlider/>
      </div>
      <PhotoShowcase/>
      <WhyAbout/>
      <PhotoSection/>
      

       <HomeCount/>
      <Youtube/>
      
      <Reviews/>
      <ContactForm/>
    </div>
  )
}

export default Home