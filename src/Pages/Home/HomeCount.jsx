import React from "react";
import { FaCamera, FaHeart, FaStar, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Haldi Ceremony",
    desc: "Vibrant colors and joyful moments captured with artistic flair.",
    icon: <FaCamera />,
    bg: "from-orange-400 to-orange-500",
    link: "/haldi",
  },
  {
    title: "Mehendi Celebration",
    desc: "Intricate designs and beautiful pre-wedding moments preserved.",
    icon: <FaHeart />,
    bg: "from-pink-400 to-rose-500",
    link: "/mehndi",
  },
  {
    title: "Candid Photography",
    desc: "Natural, unposed moments that tell your authentic story.",
    icon: <FaStar />,
    bg: "from-purple-400 to-pink-500",
    link: "/candid",
  },
  {
    title: "Bridal Portraits",
    desc: "Stunning bridal shots showcasing elegance and beauty.",
    icon: <FaUsers />,
    bg: "from-orange-400 to-pink-500",
    link: "/bridalshoot",
  },
];

const HomeCount = () => {
  return (
    <section className="py-24 bg-[#fffaf7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-pink-100 text-pink-500 text-sm font-semibold">
            ✦ OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-serif">
            What We <span className="text-pink-500">Offer</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block"
            >
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">

                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.bg} text-white text-2xl group-hover:scale-110 transition`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-serif mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeCount;
