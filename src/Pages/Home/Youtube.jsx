import React from "react";

const Youtube = () => {
  const videos = [
    "https://youtu.be/eV8XvqJGNZA?si=G_N8OHKMmtA-iV0c",
    "https://www.youtube.com/embed/n3KxU6pN1Ns",
    "https://www.youtube.com/embed/kR5EKeosW20",
    "https://www.youtube.com/embed/e2qG0GvTmYo",
    "https://www.youtube.com/embed/8xO-_xAapRM",
    "https://www.youtube.com/embed/MTbT-tRXKuE",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Wedding & Photography Films
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((link, i) => (
          <div key={i} className="w-full h-[250px] sm:h-[280px] lg:h-[300px]">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src={link}
              title={`YouTube video ${i}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
