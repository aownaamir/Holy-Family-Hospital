import image1 from "@/public/one.jpg";
import image2 from "@/public/two.jpg";
import React, { useState, useRef } from "react";
import Image from "next/image";

const ImageComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleSlider = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const position = (offsetX / container.offsetWidth) * 100;
    setSliderPosition(position);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl h-96 overflow-hidden"
      onMouseMove={handleSlider}
      onTouchMove={handleSlider}
    >
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={image1}
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </div>
      <Image
        src={image2}
        alt="Image 2"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize z-10 flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="border border-black p-1 rounded-full bg-white flex justify-center items-center">
          🔵
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;
