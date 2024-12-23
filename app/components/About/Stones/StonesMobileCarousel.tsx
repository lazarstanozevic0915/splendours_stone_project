// components/Footer.tsx
"use client"; // This line makes this file a client component in Next.js

import { Box } from "@mui/material";
import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";
import './embla.css'

import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: false }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const StonesMobileCarousel = () => {
    return (
        <Box>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </Box>
    );
};

export default StonesMobileCarousel;
