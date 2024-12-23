// "use client"
// import { useState, useRef, useEffect } from 'react';

// // Data
// import data from './data.json';

// // Define TypeScript interface for the resource
// interface Resource {
//     title: string;
//     link: string;
//     imageUrl: string;
// }

// // Optional: If your data.json structure is constrained, define it
// interface Data {
//     resources: Resource[];
// }

// // Carousel component
// const DateCarousel: React.FC = () => {
//     const maxScrollWidth = useRef<number>(0);
//     const [currentIndex, setCurrentIndex] = useState<number>(0);
//     const carouselRef = useRef<HTMLDivElement | null>(null);

//     const movePrev = () => {
//         if (currentIndex > 0) {
//             setCurrentIndex(prevState => prevState - 1);
//         }
//     };

//     const moveNext = () => {
//         if (
//             carouselRef.current &&
//             carouselRef.current.offsetWidth * currentIndex < maxScrollWidth.current
//         ) {
//             setCurrentIndex(prevState => prevState + 1);
//         }
//     };

//     const isDisabled = (direction: 'prev' | 'next'): boolean => {
//         if (direction === 'prev') {
//             return currentIndex <= 0;
//         }
//         if (direction === 'next' && carouselRef.current) {
//             return (
//                 carouselRef.current.offsetWidth * currentIndex >= maxScrollWidth.current
//             );
//         }
//         return false;
//     };

//     useEffect(() => {
//         if (carouselRef.current) {
//             carouselRef.current.scrollLeft = carouselRef.current.offsetWidth * currentIndex;
//         }
//     }, [currentIndex]);

//     useEffect(() => {
//         maxScrollWidth.current = carouselRef.current
//             ? carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
//             : 0;
//     }, []);

//     return (
//         <div className="carousel my-12 mx-auto">
//             <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
//                 Our epic carousel
//             </h2>
//             <div className="relative overflow-hidden">
//                 <div className="flex justify-between absolute top-0 left-0 w-full h-full">
//                     <button
//                         onClick={movePrev}
//                         className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//                         disabled={isDisabled('prev')}
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-12 w-20 -ml-5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth={2}
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M15 19l-7-7 7-7"
//                             />
//                         </svg>
//                         <span className="sr-only">Prev</span>
//                     </button>
//                     <button
//                         onClick={moveNext}
//                         className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//                         disabled={isDisabled('next')}
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-12 w-20 -ml-5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth={2}
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M9 5l7 7-7 7"
//                             />
//                         </svg>
//                         <span className="sr-only">Next</span>
//                     </button>
//                 </div>
//                 <div
//                     ref={carouselRef}
//                     className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
//                 >
//                     {data.resources.map((resource, index) => (
//                         <div
//                             key={index}
//                             className="carousel-item text-center relative w-64 h-64 snap-start"
//                         >
//                             <a
//                                 href={resource.link}
//                                 className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
//                                 style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
//                             >
//                                 <img
//                                     src={resource.imageUrl || ''}
//                                     alt={resource.title}
//                                     className="w-full aspect-square hidden"
//                                 />
//                             </a>
//                             <a
//                                 href={resource.link}
//                                 className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
//                             >
//                                 <h3 className="text-white py-6 px-3 mx-auto text-xl">
//                                     {resource.title}
//                                 </h3>
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DateCarousel;
