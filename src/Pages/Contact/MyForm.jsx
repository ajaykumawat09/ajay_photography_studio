"use client";
import React, { useEffect, useState } from "react";

const images = [
  "candid1.png",
  "candid2.png",
  "candid3.png",
];

const DISPLAY_TIME = 3000; // image hold
const FADE_TIME = 1000;    // fade duration

const MyForm = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(false);
      }, FADE_TIME);

    }, DISPLAY_TIME + FADE_TIME);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full bg-black p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow bg-black">
          <img
            src={images[current]}
            className={`absolute inset-0 w-full h-full object-cover
              transition-opacity ease-in-out
              ${fade ? "opacity-0" : "opacity-100"}
            `}
            style={{
              transitionDuration: `${FADE_TIME}ms`,
              willChange: "opacity",
            }}
            alt=""
          />
        </div>

        {/* RIGHT FORM */}
        <form className="bg-black text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

          {/* NAME */}
          <label className="block font-semibold mb-1">Name *</label>
          <input
            placeholder="Enter your name"
            className="w-full bg-black text-white border border-gray-600 
            placeholder-gray-400 p-3 rounded mb-4 
            focus:border-yellow-500 focus:outline-none"
          />

          {/* PHONE (ONLY 10 DIGITS) */}
          <label className="block font-semibold mb-1">Phone *</label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => {
              const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
              setPhone(onlyNumbers.slice(0, 10));
            }}
            className="w-full bg-black text-white border border-gray-600 
            placeholder-gray-400 p-3 rounded mb-4 
            focus:border-yellow-500 focus:outline-none"
          />

          {/* EMAIL */}
          <label className="block font-semibold mb-1">Email *</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-black text-white border border-gray-600 
            placeholder-gray-400 p-3 rounded mb-6 
            focus:border-yellow-500 focus:outline-none"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            className="bg-yellow-600 text-black py-3 rounded w-full 
            font-semibold hover:bg-yellow-700 transition"
          >
            Submit Form
          </button>
        </form>

      </div>
    </div>
  );
};

export default MyForm;
