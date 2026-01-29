import React from "react";
import { FiPhone, FiArrowRight } from "react-icons/fi";

const ContactForm = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Small Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm mb-6">
          ✨ Let’s Create Magic Together
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-serif leading-tight">
          Ready to Create Beautiful{" "}
          <span className="text-pink-400">Memories?</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-200 text-lg">
          Let's discuss your dream wedding and how we can capture every
          precious moment. <br />
          Book your consultation today!
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
         
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium flex items-center gap-2 hover:scale-105 transition">
            Get In Touch <FiArrowRight />
          </button>

         
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
