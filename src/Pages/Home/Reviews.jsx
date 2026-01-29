import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    name: "Priya & Rahul",
    date: "Wedding – December 2024",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "CK Photography captured our wedding day so beautifully. Every moment, every emotion was preserved perfectly. We couldn't be happier with the results!",
  },
  {
    name: "Anjali & Mohit",
    date: "Wedding – November 2024",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Absolutely loved the experience! The team was professional, creative, and very friendly.",
  },
  {
    name: "Neha & Arjun",
    date: "Wedding – October 2024",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Photos came out magical. Every detail was captured with so much love.",
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(index === 0 ? reviews.length - 1 : index - 1);
  const next = () =>
    setIndex(index === reviews.length - 1 ? 0 : index + 1);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 px-4">
      <div className="max-w-4xl w-full text-center">
        {/* Heading */}
        <span className="text-xs tracking-widest text-pink-500 font-semibold uppercase">
          Testimonials
        </span>
        <h2 className="text-xl md:text-4xl font-serif mt-2 mb-10">
          What Our <span className="text-pink-500">Couples</span> Say
        </h2>

        {/* Card */}
        <div className="relative bg-white rounded-3xl shadow-xl px-10 py-12 max-w-2xl mx-auto">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          {/* Text */}
          <p className="text-gray-600 italic mb-8">
            “{reviews[index].text}”
          </p>

          {/* User */}
          <div className="flex flex-col items-center">
            <img
              src={reviews[index].image}
              alt=""
              className="w-16 h-16 rounded-full border-4 border-pink-300 object-cover"
            />
            <h4 className="mt-3 font-semibold">
              {reviews[index].name}
            </h4>
            <span className="text-sm text-gray-400">
              {reviews[index].date}
            </span>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-pink-100"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-pink-400 text-pink-500 hover:bg-pink-100"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-pink-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
