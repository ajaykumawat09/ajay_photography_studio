import React from "react";

const mehndiImages = [
  "mehndi1.png",
  "mehndi2.png",
  "mehndi3.png",
  "mehndi4.png",
  "mehndi1.png",
  "mehndi2.png",
  "mehndi3.png",
  "mehndi4.png",
  "mehndi1.png",
  "mehndi2.png",
  "mehndi3.png",
  "mehndi4.png",
  "mehndi1.png",
  "mehndi2.png",
  "mehndi3.png",
  "mehndi4.png",
];

const Mehndigrid = () => {
  return (
    <section className="w-full py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 text-green-800 ">
          OUR MEHNDI PHOTOGRAPHY
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {mehndiImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden group"
            >
              <img
                src={img}
                alt={`Mehndi ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Mehndigrid;
