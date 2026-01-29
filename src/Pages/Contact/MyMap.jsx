import React from "react";
import { FaHeart, FaCommentDots } from "react-icons/fa";

const MyMap = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden
      bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100">

      {/* Heart Icon */}
      <div className="absolute left-10 bottom-20 w-12 h-12 flex items-center justify-center
        rounded-full bg-pink-200 text-pink-600 animate-bounce">
        <FaHeart />
      </div>

      {/* Message Icon – SAME animation */}
      <div className="absolute right-16 top-24 w-12 h-12 flex items-center justify-center
        rounded-full bg-pink-200 text-pink-600 animate-bounce delay-200">
        <FaCommentDots />
      </div>

      {/* Content */}
      <div className="text-center max-w-2xl px-6">
        <span className="inline-block mb-6 px-4 py-2 text-xs tracking-widest
          rounded-full bg-pink-200 text-pink-600 uppercase">
          ✦ Get in Touch
        </span>

        <h1 className="text-5xl md:text-6xl font-serif text-gray-800 mb-6">
          Let’s <span className="text-pink-500">Connect</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Ready to capture your special moments? Let’s discuss your wedding
          photography needs.
        </p>
      </div>
    </section>
  );
};

export default MyMap;
