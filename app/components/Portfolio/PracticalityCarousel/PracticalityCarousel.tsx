// import ImageCarousel from "./CarouselPart";

// const PracticalityCarousel: React.FC = () => {
//     const images: string[] = [
//         "/images/Portfolio/practicality/image1.jpg",
//         "/images/Portfolio/practicality/image2.jpg",
//         "/images/Portfolio/practicality/image3.jpg",
//     ];

//     return (
//         <div>
//             <ImageCarousel images={images} />
//         </div>
//     );
// };

// export default PracticalityCarousel;


import TouchCarousel from "./CarouselPart";

const carouselOptions = {
    loop: true,
    skipSnaps: true,
  };

const PracticalityCarousel: React.FC = () => {
    const images = [
        { src: "/images/Portfolio/practicality/image1.jpg", alt: "Image 1" },
        { src: "/images/Portfolio/practicality/image2.jpg", alt: "Image 2" },
        { src: "/images/Portfolio/practicality/image3.jpg", alt: "Image 3" }
    ];

    return (
        <TouchCarousel images={images} options={carouselOptions} />
    );
};

export default PracticalityCarousel;
