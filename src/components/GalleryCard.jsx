import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

function GalleryCard({ pictureObj }) {

  const [showHeart, setShowHeart] = useState(false);

  const handleDoubleClick = () => {
    setShowHeart(true);
    setTimeout(() => {
      setShowHeart(false);
    }, 1500);
  };

  return (
    <div
      className="gallery-item"
      
      onDoubleClick={handleDoubleClick}
      style={{ position: "relative" }} // Add relative positioning to the container
    >
      <img src={pictureObj.img} alt={pictureObj.name} />
      {showHeart && <FaHeart className="heart-icon" />}
    </div>
  );
}

export default GalleryCard;
