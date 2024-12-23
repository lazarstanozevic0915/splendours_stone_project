import { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

// Define the structure of each resource
interface Resource {
    title: string;
    imageUrl?: string;
}

interface ProductCarouselProps {
    onProductSelect: (title: string) => void; // Prop to send selected product title to parent
}

// Import data (assuming it's a TypeScript module)
import data from "./ProductData.json";

// Carousel Component
const ProductCarousel = ({ onProductSelect }: ProductCarouselProps) => {
    const isMobile = useMediaQuery("(max-width: 768px)"); // Media query for mobile
    const maxScrollWidth = useRef<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const carousel = useRef<HTMLDivElement | null>(null);

    // States to track clicked product
    const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);
    // const [selectedProductTitle, setSelectedProductTitle] = useState<string | null>(null);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction: "prev" | "next"): boolean => {
        if (direction === "prev") {
            return currentIndex <= 0;
        }

        if (direction === "next" && carousel.current) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel.current) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        if (carousel.current) {
            maxScrollWidth.current =
                carousel.current.scrollWidth - carousel.current.offsetWidth;
        }
    }, []);

    // Handle product click
    const handleProductClick = (title: string, index: number) => {
        setSelectedProductIndex(index); // Update the clicked product index
        // setSelectedProductTitle(title);
        onProductSelect(title); // Call parent callback to update title
    };

    return (
        <div className="carousel space-y-2">
            <Box className="flex w-full justify-between">
                <Typography
                    className="flex"
                    variant="h3"
                    color="#283C28"
                    sx={{
                        fontWeight: 500,
                        fontFamily: "var(--font-montserrat)",
                        fontSize: isMobile ? "15px" : "20px",
                    }}
                >
                    PRODUCT
                </Typography>
                {isMobile ? <div className="flex justify-between">
                    <button
                        onClick={movePrev}
                        className="text-[#283C28] w-5 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className="text-[#283C28] w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div> : <div className="flex justify-between">
                    <button
                        onClick={movePrev}
                        className="text-[#283C28] w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className="text-[#283C28] w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>}
            </Box>

            <div className="relative overflow-hidden">
                <div
                    ref={carousel}
                    className="carousel-container relative flex gap-8 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                    {data.resources.map((resource: Resource, index: number) => (
                        <div
                            key={index}
                            style={{ minWidth: isMobile ? "45%" : "30%" }}
                            className={`carousel-item text-center relative snap-start aspect-[3.83/1] rounded-lg transition-all duration-300 ${selectedProductIndex === index
                                    ? "opacity-80 bg-opacity-60"
                                    : "opacity-100"
                                }`}
                            onClick={() => handleProductClick(resource.title, index)}
                        >
                            {/* Image as background */}
                            <a
                                className="h-full w-full block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-[12px] sm:rounded-[18px] md:rounded-[22px] lg:rounded-[25px]"
                                style={{
                                    backgroundImage: `url(${resource.imageUrl || ""})`,
                                }}
                            >
                                <img
                                    src={resource.imageUrl || ""}
                                    alt={resource.title}
                                    className="w-full hidden rounded-[40px]"
                                />
                            </a>

                            {/* Overlay and text */}
                            {selectedProductIndex === index && (
                                <div
                                    className="h-full w-full absolute top-0 left-0 bg-black bg-opacity-60 rounded-2xl flex items-center justify-center z-10"
                                >
                                    <Typography
                                        className="font-bold"
                                        variant="h3"
                                        color="#DBC6BC"
                                        sx={{
                                            textAlign: "center",
                                            fontWeight: 400,
                                            fontFamily: "Chronicle Display",
                                            fontSize: isMobile ? "3.5vw" : "3vw",
                                            letterSpacing: "0.01em",
                                        }}
                                    >
                                        {resource.title}
                                    </Typography>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;
