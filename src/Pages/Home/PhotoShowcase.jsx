import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const PhotoShowcase = () => {

  const images = [
  {
    url: "https://weddingphotographybysf.com/wp-content/uploads/2025/03/PRE_3110-Enhanced-NR.jpg",
    link: "https://www.instagram.com/reel/DDRxa8eiL1L/",
    title: "PRE_3110",
  },
  {
    url: "https://weddingphotographybysf.com/wp-content/uploads/2025/02/MYK00664-scaled.jpg",
    link: "https://www.instagram.com/reel/DCLuFtZx5UF/",
    title: "MYK00664",
  },
  {
    url: "https://weddingphotographybysf.com/wp-content/uploads/2025/03/dhuria-83.jpg",
    link: "https://www.instagram.com/p/DDROE3ET0PL/",
    title: "Warmala",
  },
  {
    url: "https://weddingphotographybysf.com/wp-content/uploads/2025/03/PRE_5449-Enhanced-NR.jpg",
    link: "https://www.instagram.com/p/DCLtpiCRU8A/",
    title: "PRE_5449",
  },
];

 const [active, setActive] = useState(2);
  return (
    
  <>
    <section className="relative w-full flex flex-col items-center text-center py-20 px-4 overflow-hidden">

      {/* ---- BACKGROUND OUTLINE TEXT ---- */}
      <h1
        className="absolute top-6 left-1/2 -translate-x-1/2 font-bold tracking-tight text-transparent whitespace-nowrap
        select-none pointer-events-none"
        style={{
          fontSize: "90px",              // ↓ size small by 1–2 levels
          WebkitTextStroke: "1px #e5e5e5",
          opacity: 1.1,
        }}
      >
        WEDDING STORIES
      </h1>

      {/* ---- MAIN HEADING ---- */}
      <h2 className="relative text-3xl md:text-4xl font-bold mt-7">
        Where Your{" "}
        <span className="text-[#6A5CFF] italic font-semibold hover:text-red-600">
          Love Story
        </span>{" "}
        Takes Flight
      </h2>

      {/* ---- BLUE DECORATIVE LINE + DOTS ---- */}
      <div className="flex items-center gap-2 mt-4">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        <span className="w-36 h-[4px] bg-blue-500 rounded-full"></span>
      </div>

      {/* ---- SUBTEXT ---- */}
      <p className="text-gray-600 text-lg mt-5">
        Creating timeless art from your precious moments
      </p>
    </section>
    <section>    <div className="max-w-5xl mx-auto  h-[80vh] flex overflow-hidden rounded-xl">
      {images.map((img, index) => (
        <div
          key={index}
          onMouseEnter={() => setActive(index)}
          className={`relative transition-all duration-500 ease-in-out cursor-pointer 
            ${active === index ? "flex-[4]" : "flex-[1.2]"}`}
          style={{
            backgroundImage: `url(${img.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Icons */}
          {active === index && (
            <div className="absolute bottom-6 left-6 flex gap-4 z-20">
              {/* Lightbox icon */}
              <a
                href={img.url}
                target="_blank"
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white text-xl bg-white/20 backdrop-blur-md hover:bg-white hover:text-black transition"
              >
                +
              </a>

              {/* Link icon */}
              <a
                href={img.link}
                target="_blank"
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white text-xl bg-white/20 backdrop-blur-md hover:bg-white hover:text-black transition"
              >
                 <FaWhatsapp/>
              </a>
            </div>
          )}
        </div>
      ))}
    </div></section></>
  );
};

export default PhotoShowcase;
