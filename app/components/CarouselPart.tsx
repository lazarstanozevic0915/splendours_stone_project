// carousel.tsx
'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from '@mui/material';

const CarouselPart = ({
    data,
}: {
    data: {
        image: string
    }[]
}) => {
    // State and Ref initialization
    const [currentImg, setCurrentImg] = useState(0)
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
    const carouselRef = useRef(null)

    // useEffect to get the initial carousel size
    useEffect(() => {
        const elem = carouselRef.current as unknown as HTMLDivElement
        const { width, height } = elem.getBoundingClientRect()
        if (carouselRef.current) {
            setCarouselSize({
                width,
                height,
            })
        }
    }, [])

    return (
        <div>
            {/* Carousel container */}
            <div className="relative h-[100px] w-[100px] overflow-hidden rounded-md" style={{marginBottom:"0px"}}>
                {/* Image container */}
                <div
                    ref={carouselRef}
                    style={{
                        left: -currentImg * carouselSize.width,
                    }}
                    className="absolute flex h-full w-full transition-all duration-300"
                >
                    {/* Map through data to render images */}
                    {data.map((v, i) => (
                        <div key={i} className="relative h-full w-full shrink-0">
                            <Image
                                className="pointer-events-none rounded-lg"
                                alt={`carousel-image-${i}`}
                                fill
                                src={v.image || '/images/carousel_interactive_part/card1.png'}
                            
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Navigation buttons */}
            <div className="mt-6 flex justify-between" style={{ width: '250%' }}>
                <button
                    disabled={currentImg === 0}
                    onClick={() => setCurrentImg((prev) => prev - 1)}
                    className={` font-bold flex justify-center items-center ${currentImg === 0 && 'opacity-50'}`}
                >
                    <ArrowBackIosNewIcon /> <Typography
                        className="font-semibold"
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 400,
                            alignContent: 'flex-start',
                            fontFamily: 'var(--font-montserrat)',
                            fontSize: '15px'
                        }}
                    >
                        P R E V
                    </Typography>
                </button>
                <button
                    disabled={currentImg === data.length - 1}
                    onClick={() => setCurrentImg((prev) => prev + 1)}
                    className={` font-bold flex justify-center items-center ${currentImg === data.length - 1 && 'opacity-50'}`}
                >
                    <Typography
                        className="font-semibold"
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 400,
                            alignContent: 'flex-start',
                            fontFamily: 'var(--font-montserrat)',
                            fontSize: '15px'
                        }}
                    >
                        N E X T
                    </Typography>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    )
}

export default CarouselPart
