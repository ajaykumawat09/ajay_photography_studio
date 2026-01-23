import React, { useState } from "react";
import GalleryBanner from "./GalleryBanner";
import GalleryTabs from "./GalleryTabs";
import GalleryGrid from "./GalleryGrid";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <div>
      {/* Banner */}
      <GalleryBanner />

      {/* Tabs */}
      <GalleryTabs
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Images */}
      <GalleryGrid activeCategory={activeCategory} />
    </div>
  );
};

export default Gallery;
