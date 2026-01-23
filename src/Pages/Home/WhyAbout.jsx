import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyAbout = ({ data, direction = "left" }) => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="w-full bg-white text-[#2E2E2E]">
      {data.map((section, index) => (
        <div
          key={index}
          className="max-w-7xl mx-auto py-14 px-4 border-b last:border-0"
        >
          {/* Title */}
          <h2
            className="text-center text-4xl font-serif font-bold mb-8"
            data-aos="fade-up"
          >
            {section.title}
          </h2>

          {/* Description LEFT / RIGHT */}
          {section.paragraphs.map((text, pIndex) => (
            <p
              key={pIndex}
              data-aos={direction === "left" ? "fade-right" : "fade-left"}
              data-aos-delay={pIndex * 100}
              className={`text-2xl text-[#333] mb-6 leading-8 ${
                pIndex === section.paragraphs.length - 1 ? "mb-0" : ""
              }`}
            >
              {text}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WhyAbout;
