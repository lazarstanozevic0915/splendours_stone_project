import { useState, useRef, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// Define the structure of each resource
interface Resource {
    product_name: string;
    product_subname: string;
    product_content: string;
    imageUrl?: string;
    subImageUrl?: string;
}

// Import data (assuming it's a TypeScript module)
import data from "./SplenderoursProductsData.json";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Carousel Component
const SplenderoursProductsCarousel: React.FC = () => {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
        <div className="mx-auto my-12 carousel" style={{ marginTop: "0px" }}>
            <div className="relative overflow-hidden">
                <div className="absolute top-0 left-0 flex justify-between w-full h-full items-center ">
                    <button
                        onClick={movePrev}
                        className="z-10 w-10 h-full p-0 m-0 text-center text-white transition-all duration-300 ease-in-out opacity-75  hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed mt-[20px]"
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
                        className="z-10 w-10 h-full p-0 m-0 text-center text-white transition-all duration-300 ease-in-out opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed mt-[-8px]"
                        disabled={isDisabled("next")}
                    >
                        <Box>
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
                    </button>
                </div>
                <div
                    ref={carousel}
                    className="relative z-0 flex overflow-hidden carousel-container gap-x-6 scroll-smooth snap-x snap-mandatory touch-pan-x"
                >
                    {data.resources.map((resource: Resource, index: number) => (
                        <Box
                            key={index}
                            className="carousel-item text-center relative snap-start aspect-[0.543/1] rounded-2xl"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            sx={{
                                width: '100%', // Default width for xs
                                minWidth: '100%', // Default min-width for xs
                                '@media (min-width: 600px)': { // sm (small screens)
                                    width: '50%', // 50% width for sm screens
                                    minWidth: '48%' // 48% min-width for sm screens
                                },
                                '@media (min-width: 900px)': { // md (medium screens)
                                    width: '33.33%', // 33.33% width for md screens
                                    minWidth: '32%' // 32% min-width for md screens
                                },
                                '@media (min-width: 1200px)': { // lg (large screens)
                                    width: '25%', // 25% width for lg screens
                                    minWidth: '24%' // 24% min-width for lg screens
                                }
                            }}
                        >
                            <a
                                className="z-0 block w-full h-full bg-left-top bg-no-repeat bg-cover aspect-square bg-origin-padding rounded-2xl"
                                style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}
                            >
                                <img
                                    src={resource.imageUrl || ""}
                                    alt={resource.product_name}
                                    className="hidden w-full aspect-square rounded-2xl"
                                />
                            </a>
                            <Box
                                sx={{
                                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
                                    borderRadius: 'inherit',
                                }}
                                className="absolute top-0 left-0 z-10 flex flex-col flex-wrap justify-between w-full h-full transition-opacity duration-300 aspect-square"
                            >
                                <Box>
                                    <Typography
                                        variant="h3"
                                        color="white"
                                        className="text-start"
                                        sx={{
                                            fontWeight: 375,
                                            fontFamily: 'Chronicle Display',
                                            lineHeight: '0.9',
                                            padding: "20px",
                                            fontSize: '30px'
                                        }}
                                    >
                                        {resource.product_name}
                                    </Typography>
                                </Box>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <IconButton
                                        aria-label="search"
                                        sx={{
                                            width: '70px',
                                            height: '70px',
                                            position: 'absolute',
                                            zIndex: 40,
                                            backgroundColor: '#DBC6BC',
                                            display: 'none', // Hidden by default
                                            justifyContent: 'center',
                                            '&.show': {
                                                display: 'flex', // Show button on hover
                                            }
                                        }}
                                        className={`icon-button ${hoveredIndex === index ? 'show' : ''}`}
                                    >
                                        <SearchIcon sx={{ fontSize: '50px', color: 'white' }} />
                                    </IconButton>
                                </div>

                                <Box className="flex flex-col justify-start w-full gap-y-2" style={{ padding: "20px" }}>
                                    <Box className="w-1/3">
                                        <img
                                            src={resource.subImageUrl || ""}
                                            alt={resource.product_subname}>
                                        </img>
                                    </Box>
                                    {/* <Image
                                        src={resource.subImageUrl || ""}
                                        alt="Plus"
                                        width={30}
                                        height={30}
                                    /> */}
                                    <Typography
                                        variant="h3"
                                        color="white"
                                        className="text-start"
                                        sx={{
                                            fontWeight: 375,
                                            fontFamily: 'Chronicle Display',
                                            fontSize: {
                                                xs: "20px",
                                                sm: "24px",
                                                md: "27px",
                                                lg: "30px"
                                            }
                                        }}
                                    >
                                        {resource.product_subname}
                                    </Typography>
                                    <Box className="w-[80%]">
                                        <Typography
                                            variant="h3"
                                            color="white"
                                            className="font-normal text-start"
                                            sx={{
                                                fontWeight: 400,
                                                lineHeight: '1.2',
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: "13px",
                                                    sm: "13px",
                                                    md: "14px",
                                                    lg: "15px"
                                                }
                                            }}
                                        >
                                            {resource.product_content}
                                        </Typography>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SplenderoursProductsCarousel;
