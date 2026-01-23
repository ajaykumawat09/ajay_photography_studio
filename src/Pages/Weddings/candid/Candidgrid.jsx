import React from "react";

const candidImages = [
  "candid1.png",
  "candid2.png",
  "candid3.png",
  "candid4.png",
  "candid1.png",
  "candid2.png",
  "candid3.png",
  "candid4.png",
  "candid1.png",
  "candid2.png",
  "candid3.png",
  "candid4.png",
  "candid1.png",
  "candid2.png",
  "candid3.png",
  "candid4.png",
];

export const Candidgrid = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          OUR CANDID PHOTOGRAPHS
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {candidImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden group aspect-square"
            >
              <img
                src={img}
                alt={`Candid ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
