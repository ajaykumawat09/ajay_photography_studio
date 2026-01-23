import React from 'react'
import AboutUs from './About Us'
import OurGallery from './OurGallery'
import VedioGallery from './VedioGallery'
import MyForm from '../Contact/MyForm'
import Choose from './Choose'

const About = () => {
  return (
    <div>
        <AboutUs/>
        <OurGallery/>
        <VedioGallery/>
        <Choose/>
        <MyForm/>
    </div>
  )
}

export default About