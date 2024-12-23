import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import styles from "./Carousel.module.css";

interface TouchCarouselProps {
  images: { src: string; alt: string }[];
  options?: EmblaOptionsType;
}

const TouchCarousel: React.FC<TouchCarouselProps> = ({ images, options }) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className={styles.embla}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {images.map((image, index) => (
            <div className={styles.emblaSlide} key={index}>
              {/* <img
                src={image.src}
                alt={image.alt}
                className={styles.emblaImage}
              /> */}
              <Image
                src={image.src}
                width={1136}
                height={461}
                alt={image.alt}
                className={styles.emblaImage}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <button
        className={`${styles.emblaButton} ${styles.emblaButtonPrev}`}
        onClick={() => scrollTo((selectedIndex - 1 + images.length) % images.length)}
      >
        &#8249;
      </button>
      <button
        className={`${styles.emblaButton} ${styles.emblaButtonNext}`}
        onClick={() => scrollTo((selectedIndex + 1) % images.length)}
      >
        &#8250;
      </button> */}
    </div>
  );
};

export default TouchCarousel;
