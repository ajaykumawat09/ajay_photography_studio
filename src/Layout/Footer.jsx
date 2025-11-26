import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaPhoneAlt,
  FaMailchimp,
  FaLocationArrow,
  FaSearchLocation,
  FaClosedCaptioning,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Footer = () => {
  // fachimp
  return (
    <footer className="bg-black text-white py-12 px-6 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-12  md:text-left">
        <div className="flex flex-col items-center text-center px-4">
          <a href="/">
            {" "}
            <img
              src="/logo2.png"
              alt="logo"
              className="w-40 mb-6 hover:scale-125 transition-transform duration-700 "
            />
          </a>

          <p className="hover:text-gray-300 leading-relaxed text-lg">
            With over a decade of expertise under our belt, we stand as the
            unrivaled leaders in the realm of pre-wedding photography in Jaipur.
          </p>
        </div>
        {/* LEFT - Links */}
        <div> 
          <h2 className="text-3xl font-semibold mb-6 tracking-wide">Links</h2>

          <ul className="space-y-4 text-lg">
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="/">HOME</a>
            </li>

            <li className="hover:text-gray-300 cursor-pointer">
              <a href="/gallery">GALLERY</a>
            </li>

            <li className="hover:text-gray-300 cursor-pointer">
              <a href="/services">OUR SERVICES</a>
            </li>

            <li className="hover:text-gray-300 cursor-pointer">
              <a href="/contact">CONTACT US</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-6 tracking-wide">
            Weddings
          </h2>

          <ul className="space-y-4 text-lg uppercase">
            <li className="hover:text-gray-300 cursor-pointer">
              <a href="/haldi">Haldi </a>
            </li>

            <li className="hover:text-gray-300 cursor-pointer">
              <a href="/mehndi">Mehndi</a>
            </li>

            <li className="hover:text-gray-300 cursor-pointer">
              <a href="/candid">Candid</a>
            </li>

            <li className="hover:text-gray-300 cursor-pointer">
              <a href="/bridalshoot">Bridal shoot</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6 tracking-wide">Contact</h2>

          <div className="  space-y-4 text-lg  ">
            <span className="flex items-center gap-3">
              {" "}
              <IoMdMail />{" "}
              <a href="">
                {" "}
                <p>kumawatajay137@gmail.com</p>
              </a>
            </span>
            <span className="flex items-center gap-3">
              {" "}
              <FaPhoneAlt />
              <p> +(91) 7619748778</p>
            </span>
            <span className="flex gap-3 items-center">
            
           <FaMapMarkerAlt />
              <p> A- 26 Sen Coloney BaniPark Jaipur </p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center  gap-6 mt-8 ">
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-500 hover:scale-125 transition">
          <a href="https://facebook.com" target="_blank">
            {" "}
            <FaFacebookF size={15} />
          </a>
        </span>
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-pink-500 hover:scale-125   transition">
          <a href="https://instagram.com" target="_blank">
            <FaInstagram size={15} />
          </a>
        </span>
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-red-600 hover:scale-125 transition">
          <a href="https://youtube.com" target="_blank">
            {" "}
            <FaYoutube size={15} />
          </a>
        </span>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-300 text-center mt-10 pt-6">
        <p className="text-gray-400 text-lg">
          ©copyright 2025{" "}
          <span className="text-yellow-500">Jaipur Wedding Shoot</span>
        </p>
      </div>
    </footer>
  );
};
