import React, { useState, useCallback } from 'react'
import { Box, Typography } from '@mui/material'

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`

type PropType = {
    imgSrc: string
    inView: boolean
    index: number
}

export const LazyLoadImage: React.FC<PropType> = (props) => {
    const { imgSrc, inView } = props
    const [hasLoaded, setHasLoaded] = useState(false)

    const setLoaded = useCallback(() => {
        if (inView) setHasLoaded(true)
    }, [inView, setHasLoaded])

    return (
        <div className="embla__slide">
            <div
                className={'embla__lazy-load'.concat(
                    hasLoaded ? ' embla__lazy-load--has-loaded' : ''
                )}
            >
                {!hasLoaded && <span className="embla__lazy-load__spinner" />}
                <Box
                    className="flex w-full px-5"
                    data-src={imgSrc}
                    onLoad={setLoaded}
                    sx={{
                        width: '100%',
                        aspectRatio: '3 / 1', // Aspect ratio of 3:1 (width to height)
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${inView ? imgSrc : PLACEHOLDER_SRC})`,
                        backgroundSize: 'cover', // Ensure the image covers the entire box
                        backgroundPosition: 'center', // Center the image
                        borderRadius: '25px',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box className="flex flex-col w-full h-full justify-end px-5 py-8">
                        <Box className="flex w-full flex-col">
                            <Box className="flex w-full justify-between">
                                <Box className="w-1/3">
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: '10px', // Font size for extra small screens
                                                sm: '20px', // Font size for small screens
                                                md: '25px', // Font size for medium screens
                                                lg: '30px', // Font size for large screens
                                            },
                                            fontWeight: 600,
                                            lineHeight: '1'
                                        }}
                                    >
                                        THE STONE YOU DESIRE:
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: '10px', // Font size for extra small screens
                                                sm: '20px', // Font size for small screens
                                                md: '25px', // Font size for medium screens
                                                lg: '30px', // Font size for large screens
                                            },
                                            fontWeight: 600,
                                            lineHeight: '1'
                                        }}
                                    >
                                        SUPPLY OF PREMIUM NATURAL STONE
                                    </Typography>
                                </Box>
                                <Box className="w-1/2">
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'Raleway',
                                            fontSize: {
                                                xs: '10px', // Font size for extra small screens
                                                sm: '12px', // Font size for small screens
                                                md: '15px', // Font size for medium screens
                                                lg: '20px', // Font size for large screens
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        Our journey begins with the foundation – the stone itself. We source a captivating selection of natural stone cladding, walling, and paving, meticulously chosen for their aesthetics, durability, and versatility. Whether you seek granite's classic elegance or limestone's contemporary charm, our extensive range caters to every design preference.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    )
}
