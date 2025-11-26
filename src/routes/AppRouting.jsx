
import { Footer } from '@/Layout/Footer'
import Navbar from '@/Layout/Navbar'
import Contact from '@/Pages/Contact/Contact'
import Gallery from '@/Pages/Gallery/Gallery'
import Home from '@/Pages/Home/Home'

import Services from '@/Pages/Services/Services'
import BridalShoot from '@/Pages/Weddings/BridalShoot'
import Candid from '@/Pages/Weddings/Candid'
import Haldi from '@/Pages/Weddings/Haldi'
import Mehndi from '@/Pages/Weddings/Mehndi'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRouting = () => {
  return (


    <div>
      <Navbar/>
      <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/haldi' element={<Haldi/>}/>
    <Route path='/mehndi' element={<Mehndi/>}/>
    <Route path='/bridalshoot' element={<BridalShoot/>}/>
    <Route path='/candid' element={<Candid/>}/>

    



      </Routes>
      <Footer/>
    </div>
  )
}

export default AppRouting