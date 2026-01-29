import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#2a0f14] via-[#3b151b] to-[#1a070a] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* LOGO + ABOUT */}
        <div className="space-y-6">
          <img
            src="/logo2.png"
            alt="logo"
            className="w-36"
          />
          <p className="text-gray-300 leading-relaxed">
            Capturing your most precious moments with elegance and artistry.
            Let us tell your love story through our lens.
          </p>

         {/* SOCIAL ICONS */}
<div className="flex gap-4 pt-2">
  
  {/* FACEBOOK */}
  <a
    href="#"
    className="group w-12 h-12 flex items-center justify-center rounded-full
      bg-white/10 backdrop-blur
      hover:bg-gradient-to-br hover:from-pink-400 hover:to-orange-400
      transition-all duration-300"
  >
    <FaFacebookF className="text-white text-lg group-hover:scale-110 transition-transform duration-300" />
  </a>

  {/* INSTAGRAM */}
  <a
    href="#"
    className="group w-12 h-12 flex items-center justify-center rounded-full
      bg-white/10 backdrop-blur
      hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500
      transition-all duration-300"
  >
    <FaInstagram className="text-white text-lg group-hover:scale-110 transition-transform duration-300" />
  </a>

  {/* YOUTUBE */}
  <a
    href="#"
    className="group w-12 h-12 flex items-center justify-center rounded-full
      bg-white/10 backdrop-blur
      hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-500
      transition-all duration-300"
  >
    <FaYoutube className="text-white text-lg group-hover:scale-110 transition-transform duration-300" />
  </a>

</div>

        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-pink-500"></span>
            Quick Links
          </h2>

          <ul className="space-y-4 text-gray-300">
            {[
              { name: "Home", link: "/" },
              { name: "Gallery", link: "/gallery" },
              { name: "About Us", link: "/about" },
              { name: "Contact Us", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="group flex items-center gap-3 w-fit"
                >
                  <span className="w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-6"></span>
                  <span className="group-hover:text-pink-400 transition-colors">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* WEDDING SERVICES */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-orange-400"></span>
            Wedding Services
          </h2>

          <ul className="space-y-4 text-gray-300">
            {[
              { name: "Haldi", link: "/haldi" },
              { name: "Mehendi", link: "/mehndi" },
              { name: "Candid Photography", link: "/candid" },
              { name: "Bridal", link: "/bridalshoot" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="group flex items-center gap-3 w-fit"
                >
                  <span className="w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-6"></span>
                  <span className="group-hover:text-orange-300 transition-colors">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

       
        {/* CONTACT */}
<div>
  <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
    <span className="w-6 h-[2px] bg-pink-400"></span>
    Get In Touch
  </h2>

  <div className="space-y-5 text-gray-300">
    
    {/* PHONE */}
    <div className="group flex items-center gap-4 cursor-pointer">
      <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center
        group-hover:bg-pink-500 transition">
        <FaPhoneAlt className="group-hover:text-white transition" />
      </span>
      <p className="group-hover:text-white transition">
        +91 7619748778
      </p>
    </div>

    {/* EMAIL */}
    <div className="group flex items-center gap-4 cursor-pointer">
      <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center
        group-hover:bg-pink-500 transition">
        <IoMdMail className="group-hover:text-white transition" />
      </span>
      <p className="group-hover:text-white transition">
        kumawatajay137@gmail.com
      </p>
    </div>

    {/* ADDRESS */}
    <div className="group flex items-start gap-4 cursor-pointer">
      <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center
        group-hover:bg-pink-500 transition">
        <FaMapMarkerAlt className="group-hover:text-white transition" />
      </span>
      <p className="group-hover:text-white transition">
        A-26 Sen Colony, Bani Park, Jaipur
      </p>
    </div>

  </div>
</div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-white">
       © 2026 CK Photography. All rights reserved.
      </div>
    </footer>
  );
};
