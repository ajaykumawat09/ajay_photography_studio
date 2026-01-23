"use client";
import React, { useState } from "react";

const videos = [
  {
    id: 1,
    thumbnail: "/videos/v1.jpg",
  },
  {
    id: 2,
    thumbnail: "/videos/v2.jpg",
  },
  {
    id: 3,
    thumbnail: "/videos/v3.jpg",
  },
];

const VideoGallery = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-black py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <span className="uppercase tracking-widest text-sm text-gray-400">
          Video Gallery
        </span>
        <h2 className="mt-4 text-4xl md:text-6xl font-serif">
          Explore Wedding Videos
        </h2>

        {/* Videos */}
        <div className="relative flex justify-center items-center gap-10 mt-20">

          {videos.map((video, index) => {
            const isCenter = index === active;

            return (
              <div
                key={video.id}
                className={`
                  relative transition-all duration-700
                  ${isCenter ? "scale-100 z-20" : "scale-90 opacity-70"}
                  ${index === 0 ? "-rotate-6" : ""}
                  ${index === 2 ? "rotate-6" : ""}
                `}
              >
                <img
                  src={video.thumbnail}
                  alt=""
                  className={`
                    rounded-xl object-cover
                    ${isCenter ? "w-[600px] h-[360px]" : "w-[420px] h-[260px]"}
                  `}
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                    ▶
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition
                ${active === i ? "bg-yellow-500" : "bg-gray-500"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
