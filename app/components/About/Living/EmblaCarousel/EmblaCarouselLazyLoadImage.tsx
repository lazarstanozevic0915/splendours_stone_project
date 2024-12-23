import React, { useState, useCallback } from 'react'
import { Box, Typography } from '@mui/material'

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`

type PropType = {
    imgSrc: string
    inView: boolean
    index: number
    name: string
    subname: string  // New prop for the name
}

export const LazyLoadImage: React.FC<PropType> = (props) => {
    const { imgSrc, inView, name, subname } = props
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
                    className="flex w-full px-3"
                    data-src={imgSrc}
                    onLoad={setLoaded}
                    sx={{
                        width: '100%',
                        aspectRatio: '1 / 1.27', // Aspect ratio of 1:1.27
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${inView ? imgSrc : PLACEHOLDER_SRC})`,
                        backgroundSize: 'cover', // Ensure the image covers the entire box
                        backgroundPosition: 'center', // Center the image
                        borderRadius: '25px',
                    }}
                >
                    <Box className="flex flex-col w-full justify-between px-3 py-6">
                        <Typography
                            variant="h4"
                            color="#DBC6BC"
                            sx={{
                                fontFamily: 'Chronicle Display',
                                fontSize: '40px',
                                width:'80%',
                                fontStyle: 'italic',
                                lineHeight: '1',
                                fontWeight: 300,
                            }}
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                fontWeight: 300,
                                textAlign: 'start',
                            }}
                        >
                            {subname}
                        </Typography>
                    </Box>
                </Box>

            </div>
        </div>
    )
}
