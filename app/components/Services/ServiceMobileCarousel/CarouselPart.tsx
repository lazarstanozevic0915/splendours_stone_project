'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import styles from './Carousel.module.css';
import { Box, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

type CarouselProps = {
  items: { imageUrl: string; alt: string, name1: string, name2: string, content: string }[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<CarouselProps> = ({ items, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <button
        className={`${styles.emblaButton} ${styles.emblaButtonPrev} flex w-full justify-center items-center`}
        style={{ color: '#FFFFFF' }}
        onClick={scrollPrev}
        aria-label="Previous"
      >
        <NavigateBeforeIcon fontSize="medium" />
        <Typography
          sx={{
            fontSize: '13px',
            fontWeight: 300,
            letterSpacing: '0.5em',
            color: 'white', // Set text color
          }}
        >
          PREV
        </Typography>
      </button>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {items.map((item, index) => (
            <div className={styles.emblaSlide} key={index}>
              <Box className={styles.imageName}>
                <Typography
                  variant="h3"
                  color="#FFFFFF"
                  sx={{
                    fontWeight: 400,
                    width: '80%',
                    textAlign: 'start',
                    lineHeight: '0.9',
                    fontFamily: 'Chronicle Display',
                    fontSize: '30px'
                  }}
                >
                  {item.name1}
                </Typography>
                <Typography
                  variant="h3"
                  color="#FFFFFF"
                  sx={{
                    fontWeight: 400,
                    width: '80%',
                    lineHeight: '0.9',
                    textAlign: 'start',
                    fontFamily: 'Chronicle Display',
                    fontSize: '30px'
                  }}
                >
                  {item.name2}
                </Typography>
              </Box>

              <Typography
                variant="h3"
                color="#FFFFFF"
                className={styles.imageContent}
                sx={{
                  fontWeight: 300,
                  textAlign: 'start',
                  fontFamily: 'var(--font-montserrat)',
                  lineHeight: 1.2,
                  fontSize: '13px'
                }}
              >
                {item.content}
              </Typography>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                {/* Image */}
                <img
                  className={styles.emblaSlideImg}
                  src={item.imageUrl}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '25px',
                    objectFit: 'cover', // Ensures the image covers the container
                  }}
                />

                {/* Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '25px',
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
                    pointerEvents: 'none', // Ensures the gradient doesn't block interactions
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${styles.emblaButton} ${styles.emblaButtonNext} flex w-full justify-center items-center`}
        style={{ color: '#FFFFFF' }}
        onClick={scrollNext}
        aria-label="Next"
      >
        <Typography
          sx={{
            fontSize: '13px',
            fontWeight: 300,
            letterSpacing: '0.5em',
            color: 'white', // Set text color
          }}
        >
          NEXT
        </Typography>
        <NavigateNextIcon fontSize="medium" />
      </button>
    </div>
  );
};

export default Carousel;
