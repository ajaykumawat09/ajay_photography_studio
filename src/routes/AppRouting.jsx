import { Footer } from '@/Layout/Footer'
import Navbar from '@/Layout/Navbar'
import Contact from '@/Pages/Contact/Contact'
import Gallery from '@/Pages/Gallery/Gallery'
import Home from '@/Pages/Home/Home'
import Services from '@/Pages/About/About Us'
import BridalShoot from '@/Pages/Weddings/bridalshoot/BridalShoot'
import Candid from '@/Pages/Weddings/candid/Candid'
import Haldi from '@/Pages/Weddings/haldi/Haldi'
import Mehndi from '@/Pages/Weddings/mehndi/Mehndi'
import ScrollToTop from '@/ScrollToTop'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '@/Pages/About/About'

const AppRouting = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
       <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/haldi' element={<Haldi/>}/>
        <Route path='/mehndi' element={<Mehndi/>}/>
        <Route path='/bridalshoot' element={<BridalShoot/>}/>
        <Route path='/candid' element={<Candid/>}/>
      </Routes>

      {/* ✅ Floating WhatsApp Button */}
      <a
        href="https://wa.me/919999999999" // ← Apna number daalna
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5  bottom-5 z-50 bg-green-500 rounded-full p-3 shadow-xl hover:scale-110 transition-all duration-300"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-10 h-10"
        />
      </a>

      <Footer/>
    </div>
  )
}

export default AppRouting
