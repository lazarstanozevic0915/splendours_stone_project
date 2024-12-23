"use client"
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface ImageType {
    id: string; // Adjust the type according to your actual id type (string, number, etc.)
    src: string;
    alt: string;
}

/**
 * Carousel component for Next.js and Tailwind.
 * Using the external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
interface CarouselProps {
    images: ImageType[];
}

const DateCarousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    let newSlide;
    const handleNextSlide = () => {
        newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    const handlePrevSlide = () => {
        newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    return (
        <div className="relative">
            <NavigateBeforeIcon
                onClick={handlePrevSlide}
                className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />
            <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
                <Swipe
                    onSwipeLeft={handleNextSlide}
                    onSwipeRight={handlePrevSlide}
                    className="relative z-10 w-full h-full"
                >
                    {images.map((image, index) => {
                        if (index === currentSlide) {
                            return (
                                <Image
                                    key={image.id}
                                    src={image.src}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="contain"
                                    className="animate-fadeIn"
                                />
                            );
                        }
                        return null;
                    })}
                </Swipe>
            </div>
            <NavigateNextIcon
                onClick={handleNextSlide}
                className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />

            <div className="relative flex justify-center p-2">
                {images.map((_, index) => (
                    <div
                        className={
                            index === currentSlide
                                ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                                : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                        }
                        key={index}
                        onClick={() => {
                            setCurrentSlide(index);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default DateCarousel;