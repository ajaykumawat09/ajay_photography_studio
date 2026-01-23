import React from 'react'
import HomeSlider from './HomeSlider'
import WhyAbout from './WhyAbout'
import PhotoSection from './PhotoSection'
import { homeAbout } from '@/about'
import HomeCount from './HomeCount'
import Youtube from './Youtube'
import MyForm from '../Contact/MyForm'
import Reviews from './Reviews'
import PhotoShowcase from './PhotoShowcase'
const Home = () => {
  return (
    <div>
      <HomeSlider/>
      <PhotoShowcase/>
      <WhyAbout data={homeAbout} direction="left"/>
      <PhotoSection/>
      {/* <WhyAbout data={homeAboutTwo} direction="right"/> */}

       <HomeCount/>
      <Youtube/>
      {/* <WhyAbout data={homeAboutThree} direction="left"/> */}
      <Reviews/>
      <MyForm/>
    </div>
  )
}

export default Home