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
    <div className="embla_deal">
      <div className="embla__viewport_deal" ref={emblaRef}>
        <div className="embla__container_deal">
          {items.map((item, index) => (
            <div className="embla__slide_deal" key={index}>
              <img
                className="embla__slide__img"
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
