import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiArrowUpRight } from "react-icons/fi";

const WhyAbout = () => {
  const [count, setCount] = useState(0);
  const badgeRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let start = 0;
          const end = 10;
          const duration = 1200; // animation speed
          const stepTime = Math.floor(duration / end);

          const counter = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(counter);
          }, stepTime);
        }
      },
      { threshold: 0.4 }
    );

    if (badgeRef.current) observer.observe(badgeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-pink-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE STACK */}
          <div className="relative h-[560px] md:h-[680px]">
            {/* Image 1 */}
            <div className="absolute top-0 left-0 w-[75%] h-[80%] rounded-[32px] overflow-hidden shadow-xl">
              <img
                src="1.jpg"
                alt="Wedding photography"
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Image 2 */}
            <div className="absolute -bottom-6 right-0 w-[70%] h-[45%] rounded-[32px] overflow-hidden border-[10px] border-white shadow-2xl">
              <img
                src="03.JPG"
                alt="Bridal portrait"
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* EXPERIENCE BADGE */}
            <div
              ref={badgeRef}
              className="absolute bottom-10 left-10 bg-white/70 backdrop-blur-xl rounded-2xl px-7 py-5 shadow-lg"
            >
              <p className="text-4xl font-bold text-pink-500">
                {count}+
              </p>
              <p className="text-sm text-gray-600">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium">
              <FiHeart /> About Us
            </div>

            <h2 className="text-4xl lg:text-5xl font-serif leading-tight text-gray-900">
              We Capture Emotions,
              <br />
              <span className="text-pink-500">Not Just Photos</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                At CK Photography, we believe every wedding tells a unique story.
                Our passion lies in capturing those fleeting moments of joy, love,
                and celebration.
              </p>
              <p>
                With over a decade of experience, we’ve documented hundreds of
                beautiful love stories.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-pink-600 font-semibold text-lg group"
            >
              <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-pink-400 after:scale-x-0 after:origin-left after:transition group-hover:after:scale-x-100">
                Learn More About Us
              </span>
              <FiArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyAbout;
