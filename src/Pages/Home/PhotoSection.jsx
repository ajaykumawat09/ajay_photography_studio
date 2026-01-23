import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PhotoSection = () => {

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
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-5">

      {/* COLUMN 1 – SAME AS CENTER */}
      <div className="flex flex-col gap-2">
        <img
          src="1.jpg"
          className="w-full rounded-lg object-cover"
           data-aos="zoom-in-right"
          data-aos-delay="0"
        />
        <img
          src="2.jpg"
          className="w-full rounded-lg object-cover"
          data-aos="zoom-in-right"
          data-aos-delay="150"
        />
        <img
          src="3.JPG"
          className="w-full rounded-lg object-cover h-[538px]"
           data-aos="zoom-in-right"
          data-aos-delay="200"
        />
      </div>

      {/* COLUMN 2 – PERFECT (NO CHANGE) */}
      <div className="flex flex-col gap-2">
        <img
          src="4.jpg"
          className="w-full rounded-lg object-cover"
          data-aos="zoom-in-up"
          data-aos-delay="0"
        />
        <img
          src="5.JPG"
          className="w-full rounded-lg object-cover"
          data-aos="zoom-in-up"
          data-aos-delay="150"
        />
        <img
          src="6.JPG"
          className="w-full rounded-lg object-cover"
         data-aos="zoom-in-up"
          data-aos-delay="200"
        />
        <img
          src="7.JPG"
          className="w-full rounded-lg object-cover"
         data-aos="zoom-in-up"
          data-aos-delay="200"
        />
      </div>

      {/* COLUMN 3 – NO ANIMATION (AS IS) */}
      <div className="flex flex-col gap-2">
        <img src="8.JPG" className="w-full rounded-lg object-cover"  data-aos="zoom-in-left"
          data-aos-delay="0" />
        <img src="9.JPG" className="w-full rounded-lg object-cover"  data-aos="zoom-in-left"
          data-aos-delay="150" />
        <img src="10.JPG" className="w-full rounded-lg object-cover"  data-aos="zoom-in-left"
          data-aos-delay="200" />
        <img src="11.JPG" className="w-full rounded-lg object-cover"  data-aos="zoom-in-left"
          data-aos-delay="200" />
      </div>

    </div>
  );
};

export default PhotoSection;
