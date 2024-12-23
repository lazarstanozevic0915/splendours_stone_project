import React from 'react';
import {
  EmblaOptionsType,
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import data from './EmblaData.json'; // Import the JSON file


type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options);




  return (
    <div className="embla_stone">
      <div className="embla__viewport_stone" ref={emblaRef}>
        <div className="embla__container_stone">
          {data.resources.map((item, index) => (
            <div className="embla__slide_stone" key={index}>
              <div className="embla__parallax_stone">
                <div className="embla__parallax__layer_stone">
                  <img
                    // className="w-min-[40vw]"
                    src={item.imageUrl} // Use the imageUrl from data.json
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
