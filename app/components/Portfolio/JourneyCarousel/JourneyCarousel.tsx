import React from 'react';
import Carousel from './CarouselPart';
import { Box } from '@mui/system';
import './style.css'

const items = [
  { imageUrl: 'images/Portfolio/Journey/product1.png', alt: 'Image 1' },
  { imageUrl: 'images/Portfolio/Journey/product2.png', alt: 'Image 2' },
  { imageUrl: 'images/Portfolio/Journey/product3.png', alt: 'Image 3' },
  { imageUrl: 'images/Portfolio/Journey/product4.png', alt: 'Image 4' },
];

const JourneyCarousel = () => {
  return (
    <Box>
      <Carousel items={items} options={{ align: 'start' }} />
    </Box>
  );
};

export default JourneyCarousel;
