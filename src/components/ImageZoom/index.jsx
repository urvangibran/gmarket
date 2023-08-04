import React, { useState } from "react";
import "./ImageZoom.css"; // Import your CSS file for styling

function ImageZoom({ src, alt }) {
  const [zoomed, setZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imgSrc_1 = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"

  const handleMouseEnter = () => {
    setZoomed(true);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setZoomed(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="image-zoom-container mt-28 rounded-md cursor-pointer">
      <div className={`image-zoom-image ${src == imgSrc_1 ? 'h-60 !w-80 bg-cover scale-50 -translate-y-16' : ""} ${zoomed ? "zoomed" : ""}`}>
        <img
          src={src}
          alt={alt}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `scale(${zoomed ? 2 : 1})`,
            transformOrigin: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
            transition: "transform 0.3s",
          }}
        />
      </div>
    </div>
  );
}

export default ImageZoom;
