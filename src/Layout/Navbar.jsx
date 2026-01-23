import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Navbar = () => {
  const [weddingOpen, setWeddingOpen] = useState(false);

  return (
    <nav className="w-full py-2 bg-pink-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-1 px-4 relative">

        {/* LEFT MENU (same) */}
        <ul className="hidden md:flex gap-10 text-sm font-medium items-center">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <NavLink to="/gallery" className="hover:text-blue-600">Gallery</NavLink>

          <div
            className="relative"
            onMouseEnter={() => setWeddingOpen(true)}
            onMouseLeave={() => setWeddingOpen(false)}
          >
            <span className="cursor-pointer hover:text-blue-600">
              Wedding
            </span>

            {weddingOpen && (
              <div className="absolute top-7 left-0 bg-white shadow-md rounded-md w-40 py-2">
                <NavLink to="/haldi" className="block px-4 py-2 hover:bg-gray-100">Haldi</NavLink>
                <NavLink to="/mehndi" className="block px-4 py-2 hover:bg-gray-100">Mehndi</NavLink>
                <NavLink to="/candid" className="block px-4 py-2 hover:bg-gray-100">Candid</NavLink>
                <NavLink to="/bridalshoot" className="block px-4 py-2 hover:bg-gray-100">Bridal Shoot</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/about" className="hover:text-blue-600">About Us</NavLink>
          <NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink>
        </ul>

        {/* CENTER LOGO (sirf ye change hai) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <NavLink to="/">
            <img src="logo2.png" alt="MyLogo" className="h-10" />
          </NavLink>
        </div>

<div className="hidden lg:flex items-center gap-4">
  
  {/* SOCIAL ICONS – same colors */}
  <div className="flex items-center gap-2">
    <span className="w-7 h-7 flex items-center justify-center rounded-full text-blue-600 hover:scale-125 transition">
      <a href="https://facebook.com" target="_blank">
        <FaFacebook size={20} />
      </a>
    </span>

    <span className="w-7 h-7 flex items-center justify-center text-pink-600 rounded-full hover:scale-125 transition">
      <a href="https://instagram.com" target="_blank">
        <IoLogoInstagram size={20} />
      </a>
    </span>

    <span className="w-7 h-7 flex items-center justify-center text-red-600 rounded-full hover:scale-125 transition">
      <a href="https://youtube.com" target="_blank">
        <FaYoutube size={20} />
      </a>
    </span>
  </div>

  {/* BOOKING BUTTON – same color */}
  <NavLink to="/booking">
    <button className="bg-pink-500 text-white px-5 py-1 rounded-lg hover:bg-blue-500">
      Booking
    </button>
  </NavLink>

</div>



        {/* MOBILE */}
        <div className="md:hidden">
          <Drawer />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
