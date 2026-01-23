const categories = [
  "ALL",
  "ENGAGEMENT",
  "PRE WEDDING",
  "WEDDING",
  "FASHION",
];

const GalleryTabs = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex justify-center gap-8 py-10 text-white bg-black">
      {categories.map((cat) => (
       <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`uppercase tracking-wide 
            text-lg md:text-xl font-semibold transition
            ${activeCategory === cat ? "text-yellow-500" : "text-white"}
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default GalleryTabs;
