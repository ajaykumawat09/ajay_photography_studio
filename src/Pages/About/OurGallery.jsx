"use client";
import React, { useEffect, useState } from "react";

const sliderImages = [
  "1.jpg",
  "2.jpg",
  "3.JPG",
];

const DISPLAY_TIME = 3000; // 3 sec image stay
const FADE_TIME = 600;    // smooth fade time

const Choose = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {

      // 🔴 Fade Out
      setVisible(false);

      // 🔁 Change Image After Fade Out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % sliderImages.length);

        // 🟢 Fade In New Image
        setVisible(true);
      }, FADE_TIME);

    }, DISPLAY_TIME + FADE_TIME);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGES */}
        <div className="relative flex justify-center">

          {/* MAP IMAGE */}
          <div className="relative w-[320px] md:w-[400px]">
            <img
              src="1.jpg"
              alt="Jaipur Map"
              className="w-full rounded-md opacity-90"
            />
          </div>

          {/* SINGLE CHANGING IMAGE */}
          <div className="absolute -bottom-24 right-0 w-[220px] h-[280px] overflow-hidden rounded-md border-4 border-white">
            <img
              src={sliderImages[current]}
              className={`w-full h-full object-cover transition-opacity duration-[600ms] ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="text-sm tracking-widest uppercase text-gray-400">
            Why Choose Me
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-serif leading-tight">
            Your Love Deserves the Best – <br />
            Choose Us for Unforgettable <br />
            Pre Wedding!
          </h2>

          <p className="mt-8 text-gray-300 leading-relaxed max-w-xl">
            Jaipur ke iconic locations ke saath cinematic aur natural moments
            capture kiye jaate hain — bina awkward poses ke.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Choose;
