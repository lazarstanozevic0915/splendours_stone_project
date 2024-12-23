"use client"
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Box, Typography } from '@mui/material';
// Data
// import data from './data.json';
import DateCarouselButton from './DateCarouselButton';
import { useMediaQuery } from '@mui/material';


// Define TypeScript interface for the resource
interface Resource {
    date: string;
    day: string;

}

interface DateCarouselProps {
    initialResources: Resource[]; // Receive initial resources as a prop
    onSelectDate: (date: string, day: string) => void; // Callback function to pass selected date and day
}



// Carousel component

const DateCarousel: React.FC<DateCarouselProps> = ({ initialResources,onSelectDate }) => {
    const isMobile = useMediaQuery('(max-width: 768px)'); // Define mobile breakpoint

    const [resources, setResources] = useState<Resource[]>(initialResources);
    const [maxScrollWidth, setMaxScrollWidth] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [initialized, setInitialized] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    // const [selectedDate, setSelectedDate] = useState<string | null>(null); // State to store selected date
    // const [selectedDay, setSelectedDay] = useState<string | null>(null); // state to store selected day
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // State to store the index of the selected button


    const carouselRef = useRef<HTMLDivElement | null>(null);
    const startPosition = useRef<number>(0);
    const scrollPosition = useRef<number>(0);

    const touchStartX = useRef<number | null>(null);

    useEffect(() => {
        setResources(initialResources);
    }, [initialResources]);

    // Calculate max scroll width after the DOM is fully rendered
    useLayoutEffect(() => {
        if (carouselRef.current) {
            setMaxScrollWidth(
                carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
            );
            setInitialized(true);
        }
    }, [resources]);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const moveNext = () => {
        if (carouselRef.current && currentIndex < maxScrollWidth / carouselRef.current.offsetWidth) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const isDisabled = (direction: "prev" | "next"): boolean => {
        if (!initialized) return true;
        if (direction === "prev") {
            return currentIndex <= 0;
        }
        if (direction === "next") {
            return carouselRef.current
                ? currentIndex >= maxScrollWidth / carouselRef.current.offsetWidth
                : true;
        }
        return false;
    };

    // Scroll to the current index
    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = carouselRef.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    // Handle touch start
    const handleTouchStart = (event: React.TouchEvent) => {
        touchStartX.current = event.touches[0].clientX;
    };

    // Handle touch move
    const handleTouchMove = (event: React.TouchEvent) => {
        if (touchStartX.current === null) return;

        const touchEndX = event.touches[0].clientX;
        const deltaX = touchStartX.current - touchEndX;

        if (Math.abs(deltaX) > 50) { // Minimum swipe distance
            if (deltaX > 0) {
                moveNext(); // Swipe left
            } else {
                movePrev(); // Swipe right
            }
            touchStartX.current = null; // Reset
        }
    };

    // Handle mouse down
    const handleMouseDown = (event: React.MouseEvent) => {
        setIsDragging(true);
        startPosition.current = event.clientX;
        scrollPosition.current = carouselRef.current ? carouselRef.current.scrollLeft : 0;
    };

    // Handle mouse move
    const handleMouseMove = (event: React.MouseEvent) => {
        if (!isDragging || !carouselRef.current) return;

        const deltaX = event.clientX - startPosition.current;
        carouselRef.current.scrollLeft = scrollPosition.current - deltaX;
    };

    // Handle mouse up
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleButtonClick = (date: string, day: string, index: number) => {
        // setSelectedDate(date);
        // setSelectedDay(day);
        setSelectedIndex(index); // Set the selected index when a button is clicked
        onSelectDate(date, day); // Pass the selected date and day to the parent component
    };
    return (
        <Box className="carousel space-y-2">
            <Box className="flex w-full justify-between">
                <Typography
                    className="flex"
                    variant="h3"
                    color="#283C28"
                    sx={{
                        fontWeight: 500,
                        fontFamily: 'var(--font-montserrat)',
                        fontSize: isMobile ? '15px' : '20px'
                    }}
                >
                    DATE
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
            <Box className="relative overflow-hidden">
                <Box
                    ref={carouselRef}
                    className="carousel-container relative flex overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    sx={{ gap: isMobile ? 4 : 4 }}
                >
                    {resources.map((resource, index) => (
                        <DateCarouselButton
                            key={index}
                            date={resource.date}
                            day={resource.day}
                            onClick={() => handleButtonClick(resource.date, resource.day, index)}
                            isSelected={index === selectedIndex} // Pass the selected index to the button
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default DateCarousel;
