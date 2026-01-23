"use client";
import React, { useEffect, useState } from "react";

const sliderImages = [
  "1.jpg",
  "2.jpg",
  "3.JPG",
];

const Choose = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % sliderImages.length);
        setFade(false);
      }, 800);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT IMAGES ================= */}
        <div className="relative flex justify-center">

          {/* MAP IMAGE */}
          <div className="relative w-[320px] md:w-[400px]">
            <img
              src="1.jpg"
              alt="Jaipur Map Location"
              className="w-full rounded-md opacity-90"
            />
          </div>


          {/* CHANGING IMAGE */}
          <div className="absolute -bottom-24 right-0 w-[220px] h-[280px] overflow-hidden rounded-md border-4 border-white">
            <img
              src={sliderImages[current]}
              alt="Couple Slider"
              className={`w-full h-full object-cover transition-opacity duration-800 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
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
            Jaipur ke iconic locations aur local expertise ke saath hum aapke
            pre-wedding moments ko ek cinematic love story bana dete hain.
            Har shoot customized hota hai, taaki aapki chemistry naturally
            capture ho.
          </p>

          {/* FEATURES */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center mb-4">
                📷
              </div>
              <h4 className="font-semibold mb-2">
                High Quality Equipment
              </h4>
              <p className="text-gray-400 text-sm">
                Latest cameras aur lighting ka use karke har frame ko premium
                aur sharp banaya jata hai.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center mb-4">
                💍
              </div>
              <h4 className="font-semibold mb-2">
                Creativity & Artistry
              </h4>
              <p className="text-gray-400 text-sm">
                Har couple ke liye unique poses aur storytelling approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
