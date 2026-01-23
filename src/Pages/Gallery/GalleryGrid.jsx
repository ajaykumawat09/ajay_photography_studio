const GalleryGrid = ({ activeCategory }) => {
  const images = [
    { id: 5, category: "ENGAGEMENT", src: "/10.JPG" },
    { id: 1, category: "ENGAGEMENT", src: "1.jpg" },
    { id: 2, category: "WEDDING", src: "2.jpg" },
     { id: 6, category: "PRE WEDDING", src: "candid1.png" },
    { id: 3, category: "PRE WEDDING", src: "03.JPG" },
    { id: 4, category: "WEDDING", src: "/3.JPG" },
    
   
  ];

  const filteredImages =
    activeCategory === "ALL"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 pb-20">
      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="overflow-hidden rounded-lg break-inside-avoid group"
          >
            <img
              src={img.src}
              alt="gallery"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
