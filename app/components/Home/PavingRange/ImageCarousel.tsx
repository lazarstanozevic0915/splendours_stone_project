import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import CustomWallCarouselCard from "./WallCarouselCard";

interface CarouselProps {
  images: { src: string; alt: string; subname: string }[];  // added subname
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Image Wrapper */}
      <div className="relative h-64 overflow-hidden sm:h-80 md:h-96">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full"
            >
              <CustomWallCarouselCard
                product_image_src={image.src}
                product_subname={image.subname}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <IconButton
          onClick={handlePrev}
          aria-label="Previous Image"
          className="bg-white shadow-md"
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          onClick={handleNext}
          aria-label="Next Image"
          className="bg-white shadow-md"
        >
          <ArrowForward />
        </IconButton>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
