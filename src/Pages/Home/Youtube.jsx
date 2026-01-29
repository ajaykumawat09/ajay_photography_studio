import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Priya & Arjun – Traditional Celebration",
    duration: "2:15",
    thumbnail:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1600",
  },
{
    id: 2,
    title: "Priya & Arjun – Traditional Celebration",
    duration: "2:15",
    thumbnail:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1600",
  },
  {
    id: 3,
    title: "Destination Wedding",
    duration: "2:05",
    thumbnail:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600",
  },
];

const Youtube = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 bg-gradient-to-br from-pink-50 via-white to-orange-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-white shadow text-pink-500 tracking-wide">
          ✨ CINEMATIC STORIES ✨
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif mb-3">
          Cinematic{" "}
          <span className="text-pink-500">Wedding Films</span>
        </h2>
        <p className="text-gray-500 mb-12">
          Experience the magic through our beautifully crafted wedding videos
        </p>

        {/* Main Video Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={videos[active].thumbnail}
            alt=""
            className="w-full h-[260px] md:h-[420px] object-cover"
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white text-xl shadow-xl hover:scale-110 transition">
              <FaPlay className="ml-1" />
            </button>
          </div>

          {/* Text Overlay */}
          <div className="absolute bottom-6 left-6 text-left text-white">
            <p className="text-sm opacity-80">Highlights</p>
            <h3 className="text-xl md:text-2xl font-semibold">
              {videos[active].title}
            </h3>
            <span className="text-xs opacity-70">
              ▶ {videos[active].duration}
            </span>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 mt-8">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => setActive(index)}
              className={`relative rounded-xl overflow-hidden w-24 h-16 md:w-32 md:h-20 border-2 transition
              ${
                active === index
                  ? "border-pink-500 scale-105"
                  : "border-transparent opacity-70"
              }`}
            >
              <img
                src={video.thumbnail}
                alt=""
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1 right-1 text-[10px] bg-black/60 text-white px-1 rounded">
                {video.duration}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Youtube;
