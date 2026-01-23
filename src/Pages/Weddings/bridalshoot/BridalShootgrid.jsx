import React from "react";

const bridalImages = [
  "bridal1.png",
  "bridal2.png",
  "bridal3.png",
  "bridal4.png",
  "bridal1.png",
  "bridal2.png",
  "bridal3.png",
  "bridal4.png",
  "bridal1.png",
  "bridal2.png",
  "bridal3.png",
  "bridal4.png",
  "bridal1.png",
  "bridal2.png",
  "bridal3.png",
  "bridal4.png",
  "bridal1.png",
  "bridal2.png",
  "bridal3.png",
  "bridal4.png",
];

const BridalShootgrid = () => {
  return (
    <section className="w-full py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          OUR BRIDAL SHOOT PHOTOGRAPHS
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {bridalImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden group"
            >
              <img
                src={img}
                alt={`Bridal Shoot ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BridalShootgrid;
