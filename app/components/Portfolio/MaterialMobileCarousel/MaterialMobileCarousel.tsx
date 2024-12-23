import React from 'react';
import Carousel from './CarouselPart';
import { Box } from '@mui/system';


const items = [
    { imageUrl: 'images/Portfolio/project/product1.jpg', name: 'OUTDOOR', alt: 'Image 1' },
    { imageUrl: 'images/Portfolio/project/product2.jpg', name: 'FIREPLACE', alt: 'Image 2' },
    { imageUrl: 'images/Portfolio/project/product3.jpg', name: 'DINNING ROOM', alt: 'Image 3' },
    { imageUrl: 'images/Portfolio/project/product4.jpg', name: 'POOLSIDE', alt: 'Image 4' },
];

const MaterialMobileCarousel = () => {
    return (
        <Box>
            <Carousel items={items} options={{ align: 'start' }} />
        </Box>
    );
};

export default MaterialMobileCarousel;
