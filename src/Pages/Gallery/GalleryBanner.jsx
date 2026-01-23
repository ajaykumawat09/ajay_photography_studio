import React from "react";

const GalleryBanner = () => {
  return (
    <section className="w-full">
      
      {/* ===== HERO IMAGE SECTION ===== */}
      <div
        className="relative w-full h-[75vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/gallery.png')" // image path yaha change karo
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Center Text */}
        <h1 className="relative z-10  text-white text-4xl md:text-5xl font-semibold px-8 py-3">
          Gallery
        </h1>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="w-full bg-black text-white py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm tracking-widest mb-4">
            PORTFOLIO CASES
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Experience the Magic of Our Work!
          </h2>

          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Immerse yourself in a world where creativity meets perfection,
            transforming visions into reality with unparalleled skill and
            passion. Discover how our dedication to craftsmanship creates
            nothing short of enchanting results — experience the magic of our
            work!
          </p>

        </div>
      </div>

    </section>
  );
};

export default GalleryBanner;
