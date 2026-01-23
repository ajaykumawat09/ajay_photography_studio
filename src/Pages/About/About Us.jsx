import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm tracking-widest text-gray-400 uppercase">
            About
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-serif leading-tight">
            Love in the air, forever we'll share – Join us for a pre-wedding affair!
          </h2>

          <p className="mt-8 text-gray-300 leading-relaxed max-w-xl">
            With over a decade of expertise under our belt, we stand as the
            unrivaled leaders in the realm of pre-wedding photography in Jaipur.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed max-w-xl">
            Trust in our seasoned experience to transform your pre-wedding
            moments into timeless masterpieces.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-yellow-500"></span>
            <button className="uppercase tracking-widest text-sm hover:text-yellow-500 transition">
              Learn more about me
            </button>
          </div>
        </div>

      
        {/* RIGHT IMAGES */}
<div className="relative flex justify-center lg:justify-end">

  {/* MAIN IMAGE (peeche rahegi) */}
  <div className="relative z-10 border-8 border-white">
    <img
      src="1.jpg"
      alt="Pre Wedding"
      className="w-[420px] h-[520px] object-cover"
    />
  </div>

  {/* SMALL IMAGE (upar aayegi) */}
  <div className="absolute -bottom-20 -left-16 z-20 border-8 border-white bg-white">
    <img
      src="2.jpg"
      alt="Couple"
      className="w-[300px] h-[220px] object-cover"
    />
  </div>

</div>

      </div>
    </section>
  );
};

export default AboutUs;
