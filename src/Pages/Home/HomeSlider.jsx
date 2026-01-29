import React, { useEffect, useRef, useState } from "react";
import { FaCamera, FaHeart, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

/* ================= COUNTER COMPONENT ================= */
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}+</span>;
};
/* ===================================================== */

const HomeSlider = () => {
  return (
    <section className="relative min-h-screen w-full bg-[url('/banner.png')] bg-cover bg-center text-white overflow-hidden">

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .float { animation: float 4s ease-in-out infinite; }
        `}
      </style>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* welcome badge */}
      <div className="relative z-10 flex justify-center pt-10">
        <div className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm">
          ✨ Welcome to CK Photography ✨
        </div>
      </div>

      {/* floating camera */}
      <div className="absolute top-10 right-10 z-10 bg-white/30 backdrop-blur-md p-4 rounded-full float">
        <FaCamera className="text-xl text-white" />
      </div>

      {/* main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-20 px-4">
        <h1 className="text-4xl md:text-6xl font-serif leading-tight">
          Capturing Your <br />
          <span className="text-pink-400">Love Story</span>
        </h1>

        <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
          We specialize in creating timeless wedding memories through our lens.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link to="/gallery">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-105 transition">
              View Our Work →
            </button>
          </Link>

          <Link to="/contact">
            <button className="px-8 py-4 rounded-full border border-white flex items-center gap-2 hover:bg-white hover:text-black transition">
              <FaPlay /> Book Your Date
            </button>
          </Link>
        </div>
      </div>

      {/* floating heart */}
      <div className="absolute left-6 bottom-48 z-10 bg-white/30 backdrop-blur-md p-4 rounded-full float">
        <FaHeart className="text-red-400 text-xl" />
      </div>

      {/* ================= STATS CARDS ================= */}
      <div className="relative z-10 mt-24 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {[
          { image: "/Weddings Captured.png", value: 500, label: "Weddings Captured" },
          { image: "/Years Experience.png", value: 10, label: "Years Experience" },
          { image: "/Happy Couples.png", value: 1000, label: "Happy Couples" },
          { image: "/Awards Won.png", value: 10, label: "Cities Travelled" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/95 text-black rounded-3xl p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_40px_rgba(0,0,0,0.25)]"
          >
            <div className="flex justify-center">
              <img src={item.image} alt={item.label} className="w-10 h-10 object-contain" />
            </div>

            <h2 className="text-4xl font-serif mt-4">
              <Counter end={item.value} />
            </h2>

            <p className="text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}

      </div>
      

    </section>
  );
};

export default HomeSlider;
