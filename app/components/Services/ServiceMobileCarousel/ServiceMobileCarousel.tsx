import React from 'react';
import Carousel from './CarouselPart';
import { Box } from '@mui/system';


const items = [
    { imageUrl: 'images/Service/products/Mobile/image1.jpg', name1: 'THE STONE YOU DESIRE:',name2:'SUPPLY OF PREMIUM NATURAL STONE', alt: 'Image 1', content: 'Our journey begins with the foundation – the stone itself. We source a captivating selection of natural stone cladding, walling, and paving, meticulously chosen for their aesthetics, durability, and versatility. Whether you seek granite&apos;s classic elegance or limestone&apos;s contemporary charm, our extensive range caters to every design preference.' },
    { imageUrl: 'images/Service/products/Mobile/image2.jpg', name1: 'THE STONE YOU DESIRE:',name2:'SUPPLY OF PREMIUM NATURAL STONE', alt: 'Image 1', content: 'Our journey begins with the foundation – the stone itself. We source a captivating selection of natural stone cladding, walling, and paving, meticulously chosen for their aesthetics, durability, and versatility. Whether you seek granite&apos;s classic elegance or limestone&apos;s contemporary charm, our extensive range caters to every design preference.' },
    { imageUrl: 'images/Service/products/Mobile/image3.jpg', name1: 'THE STONE YOU DESIRE:',name2:'SUPPLY OF PREMIUM NATURAL STONE', alt: 'Image 1', content: 'Our journey begins with the foundation – the stone itself. We source a captivating selection of natural stone cladding, walling, and paving, meticulously chosen for their aesthetics, durability, and versatility. Whether you seek granite&apos;s classic elegance or limestone&apos;s contemporary charm, our extensive range caters to every design preference.' },
];

const ServiceMobileCarousel = () => {
    return (
        <Box>
            <Carousel items={items} options={{ align: 'start' }} />
        </Box>
    );
};

export default ServiceMobileCarousel;
