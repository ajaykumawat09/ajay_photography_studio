import React, { useState, useEffect } from "react";
import { FaCamera, FaPhoneAlt } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Drawer from "./Drawer";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 px-4 md:px-10 py-4 flex items-center justify-between transition-all duration-300
      ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-lg border-b border-white/30"
          : "bg-[#f6f1ef]"
      }`}
    >
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-3">
        <div className="bg-pink-500 text-white p-3 rounded-full">
          <FaCamera />
        </div>
        <h1 className="text-xl font-semibold text-pink-500">
          CK Photography
        </h1>
      </Link>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium relative">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-pink-200 text-pink-600 px-5 py-2 rounded-full"
              : "px-5 py-2"
          }
        >
          Home
        </NavLink>

        <NavLink to="/gallery" className="hover:text-pink-500">
          Gallery
        </NavLink>

        {/* WEDDING DROPDOWN */}
        <li className="relative group">
          <div className="flex items-center gap-1 px-5 py-2 rounded-full border hover:border-pink-600 cursor-pointer">
            Wedding <IoChevronDown className="text-sm" />
          </div>

          <div
            className="
              absolute top-full left-0 mt-2
              bg-white rounded-2xl shadow-xl
              w-60 p-4 space-y-2
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200
            "
          >
            {[
              { name: "Haldi", img: "/Haldi.png", link: "/haldi" },
              { name: "Mehendi", img: "/Mehndi.png", link: "/mehndi" },
              { name: "Candid Photography", img: "/photography.png", link: "/candid" },
              { name: "Bridal", img: "/Bridle.png", link: "/bridalshoot" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-pink-50"
              >
                <img src={item.img} className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
          </div>
        </li>

        <NavLink to="/about" className="hover:text-pink-500">
          About Us
        </NavLink>

        <NavLink to="/contact" className="hover:text-pink-500">
          Contact Us
        </NavLink>
      </ul>

      {/* DESKTOP BOOK NOW */}
      <Link
        to="/contact"
        className="hidden md:flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
      >
        <FaPhoneAlt />
        Book Now
      </Link>

      {/* MOBILE DRAWER */}
      <div className="md:hidden">
        <Drawer />
      </div>
    </nav>
  );
};

export default Navbar;
