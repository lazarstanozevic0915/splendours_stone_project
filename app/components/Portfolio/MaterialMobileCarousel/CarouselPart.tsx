'use client';

import React, { useCallback} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import styles from './Carousel.module.css';
import { Typography } from '@mui/material';

type CarouselProps = {
  items: { imageUrl: string; alt: string, name: string }[];
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
        className={`${styles.emblaButton} ${styles.emblaButtonPrev}`}
        style={{color:'#283C28'}}
        onClick={scrollPrev}
        aria-label="Previous"
      >
        ❮ P R E V
      </button>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {items.map((item, index) => (
            <div className={styles.emblaSlide} key={index}>
              <Typography
                variant="h3"
                color="#283C28"
                className={styles.imageName}
                sx={{
                  fontWeight: 400,
                  textAlign: 'start',
                  fontFamily: 'Chronicle Display',
                  fontSize: '40px'
                }}
              >
                {item.name}
              </Typography>
              <img
                className={styles.emblaSlideImg}
                src={item.imageUrl}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${styles.emblaButton} ${styles.emblaButtonNext}`}
        style={{color:'#283C28'}}
        onClick={scrollNext}
        aria-label="Next"
      >
        N E X T ❯
      </button>
    </div>
  );
};

export default Carousel;
