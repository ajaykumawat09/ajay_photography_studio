import React, { useEffect, useState } from "react";

const CounterBox = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    let speed = end / 80; // speed control (smooth animation)

    const timer = setInterval(() => {
      start += speed;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col text-center my-6">
      <h1 className="text-5xl font-semibold text-gray-700">
        {count.toLocaleString()}+
      </h1>
      <p className="text-xl text-gray-500 mt-2 tracking-wide">{label}</p>
    </div>
  );
};

const HomeCount = () => {
  return (
    <>
    <div className="relative w-full overflow-hidden">
          <h3 className="h-full  text-center text-4xl font-extrabold text-pink-300 md:translate-y-4 md:text-8xl xl:text-[9rem]">
            Why Choose Us
          </h3>
          <div className="absolute bottom-0 left-0 h-12 w-full from-white to-transparent md:h-17
           md:bg-gradient-to-t"></div>
        </div>
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

        {/* LEFT SIDE TEXT + COUNTERS */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-wide mb-10">
            Nurtured To Perfection
          </h2>

          <div className="grid grid-cols-2 gap-8 mt-6">
            <CounterBox end={13} label="CITIES TRAVELLED" />
            <CounterBox end={2000} label="PHOTOS DELIVERED" />
            <CounterBox end={200} label="HAPPY COUPLES" />
            <CounterBox end={3800} label="VIDEOS PRODUCED" />
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div>
          <img
            src="01.jpg"
            alt="wedding couple"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

      </div>
    </div></>
  );
};

export default HomeCount;
