'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

type CarouselProps = {
  items: { imageUrl: string; alt: string }[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<CarouselProps> = ({ items, options }) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="embla_journey">
      <div className="embla__viewport_journey" ref={emblaRef}>
        <div className="embla__container_journey">
          {items.map((item, index) => (
            <div className="embla__slide_journey" key={index}>
              <img
                className="embla__slide__img_journey"
                src={item.imageUrl}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
