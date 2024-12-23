import { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


// Define the structure of each resource
interface Resource {
    product_name: string;
    imageUrl?: string;
}

// Import data (assuming it's a TypeScript module)
import data from "./MaterialData.json";

// Carousel Component
const MaterialCarousel: React.FC = () => {
    const maxScrollWidth = useRef<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const carousel = useRef<HTMLDivElement | null>(null);

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

    return (
        <div className="carousel my-12 mx-auto">
            <div className="relative overflow-hidden">
            <div className="flex justify-between absolute top-0 left-0 w-full h-full pl-5 pr-2">
                    <button
                        onClick={movePrev}
                        className=" text-white w-10 h-full text-center  disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled("prev")}
                    >
                        <Box>
                            <NavigateBeforeIcon fontSize="large" />
                            <Typography
                                variant="h3"
                                color="white"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '0.9',
                                    fontSize: '15px',
                                    width: 'max-content',
                                    position: 'relative',
                                    letterSpacing: '0.3em',
                                    left: '40px',
                                    top: '-23px'
                                }}
                            >
                                PREV
                            </Typography>

                        </Box>
                    </button>
                    <button
                        onClick={moveNext}
                        className=" text-white w-30 h-full text-center z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled("next")}
                    > <Box>
                            <Typography
                                variant="h3"
                                color="white"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '0.9',
                                    fontSize: '15px',
                                    width: 'max-content',
                                    letterSpacing: '0.3em',
                                    position: 'relative',
                                    left: '-50px',
                                    top: '25px'
                                }}
                            >
                                NEXT
                            </Typography>
                            <NavigateNextIcon fontSize="large" />
                        </Box>

                        {/* <span className="sr-only">Next</span> */}
                    </button>
                </div>
                <div
                    ref={carousel}
                    className="carousel-container relative flex overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 gap-4"
                >
                    {data.resources.map((resource: Resource, index: number) => (
                        <div
                            key={index}
                            className="carousel-item text-center relative snap-start aspect-[0.72/1] rounded-2xl" style={{ width: '25%', minWidth: '24%' }}
                        >
                            <a
                                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-2xl"
                                style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}
                            >
                                <img
                                    src={resource.imageUrl || ""}
                                    alt={resource.product_name}
                                    className="w-full aspect-square hidden rounded-2xl"
                                />
                            </a>
                            <a
                                className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 z-10"
                            >
                                <Box className="w-1/2">
                                    <h3 className="text-[#283C28] py-6 px-6 mx-auto font-semibold text-start" style={{ fontFamily: 'Chronicle Display', fontSize: '30px', lineHeight: 0.8 }}>
                                        {resource.product_name}
                                    </h3>
                                </Box>
                                <Box className="w-1/2">

                                </Box>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MaterialCarousel;
