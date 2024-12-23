
"use client"
// app/about/page.tsx

import React from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './embla.css'

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import FullCustomGreenDivider from '../components/Divider/FullCustomGreenDivider';
import CustomPartDivider from '../components/CustomPartDivider';
import FullCustomBrownDivider from '../components/Divider/FullCustomBrownDivider';
import ProjectCarousel from '../components/Portfolio/ProjectCarousel';
import MaterialCarousel from '../components/Portfolio/MaterialCarousel';
import FooterMobile from '../components/FooterMobile';

import ProductsCarousel from '../components/Portfolio/ProductsCarousel/ProductsCarousel';
import ProjectTypeCarousel from '../components/Portfolio/ProjectTypeCarousel/ProjectTypeCarousel';
import MaterialMobileCarousel from '../components/Portfolio/MaterialMobileCarousel/MaterialMobileCarousel';
import PracticalityCarousel from '../components/Portfolio/PracticalityCarousel/PracticalityCarousel';
import PracticalityMobileCarousel from '../components/Portfolio/PracticalityMobileCarousel/PracticalityCarousel';
import JourneyCarousel from '../components/Portfolio/JourneyCarousel/JourneyCarousel';

import GreenCustomButton from '../components/GreenCustomButton';




const PortfolioPage = () => {

    // Mobile view (max-width 768px)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <Box>

            <Box className="flex items-center w-full px-3" sx={{ height: '15vh' }}>
                <Header />
            </Box>

            <Box className="flex flex-col w-full gap-y-12">

                {isMobile ? <Box className="px-3"><ProductsCarousel /></Box> :
                    <Box className="flex w-full px-20">
                        <Box className="flex w-1/3">
                        </Box>
                        <Box className="flex w-2/3 justify-between">
                            <Box className="flex justify-end w-1/4">
                                <Image
                                    src="/images/Portfolio/products/product1.png"
                                    alt="Stone1"
                                    width={200}
                                    height={200}
                                />
                            </Box>

                            <Box className="flex justify-end w-1/4">
                                <Image
                                    src="/images/Portfolio/products/product2.png"
                                    alt="Stone1"
                                    width={200}
                                    height={200}
                                />
                            </Box>

                            <Box className="flex justify-end w-1/4">

                                <Image
                                    src="/images/Portfolio/products/product3.png"
                                    alt="Stone1"
                                    width={200}
                                    height={200}
                                />
                            </Box>

                            <Box className="flex justify-end w-1/4">
                                <Image
                                    src="/images/Portfolio/products/product4.png"
                                    alt="Stone1"
                                    width={200}
                                    height={200}
                                />
                            </Box>


                        </Box>
                    </Box>}

                {isMobile ? <Box className="px-3">
                    <Box className="flex flex-col w-full gap-y-5">
                        <Box className="w-full">
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 400,
                                    textAlign: 'center',
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '1',
                                    fontSize: '40px'
                                }}
                            >
                                AT SPLENDOUR
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 400,
                                    textAlign: 'center',
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '1',
                                    fontSize: '40px'
                                }}
                            >
                                IN STONE,
                            </Typography>

                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '1',
                                    fontSize: '40px'
                                }}
                            >
                                WE DON'T JUST
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '1',
                                    fontSize: '40px'
                                }}
                            >
                                DEAL IN STONE
                            </Typography>
                        </Box>

                        <FullCustomBrownDivider />

                        <Box className="flex w-full gap-3">
                            <Box className="w-1/2">
                                <Box>
                                    <Typography
                                        className="text-center"
                                        variant="h3"
                                        color="#FFFFFF"
                                        sx={{
                                            fontWeight: 300,
                                            fontFamily: 'var(--font-montserrat)',
                                            lineHeight: 1.4,
                                            fontSize: '15px'
                                        }}
                                    >
                                        we create experiences. Our portfolio showcases a captivating collection of projects where natural stone has breathed life into Melbourne homes and businesses.
                                    </Typography>
                                </Box>

                                <Box className="flex w-full justify-center items-end h-1/2">
                                    <Image
                                        src="/images/Portfolio/Vectors/Vector-bottom-left.svg"
                                        alt="Vector"
                                        width={130}
                                        height={130}
                                    />
                                </Box>

                            </Box>
                            <Box className="flex w-1/2">
                                <Typography
                                    variant="h3"
                                    className="text-center"
                                    color="#FFFFFF"
                                    sx={{
                                        fontWeight: 300,
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: 1.4,
                                        fontSize: '15px'
                                    }}
                                >
                                    Explore a curated selection of projects, each a testament to natural stone's enduring beauty and versatility. From modern kitchen renovations featuring captivating stone splashbacks to stunning outdoor living spaces paved with timeless elegance, discover how we've collaborated with clients to translate their visions into reality.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box> : <Box className="flex flex-col gap-y-6 px-20">
                    <Box className="flex w-full justify-between">
                        <Box className="w-2/3">
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 400,
                                    alignContent: 'flex-start',
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '1',
                                    fontSize: {
                                        xs: "15px",
                                        sm: "30px",  // Small screens
                                        md: "40px",  // Medium screens
                                        lg: "60px"
                                    }
                                }}
                            >
                                AT SPLENDOUR IN STONE,
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 600,
                                    alignContent: 'flex-start',
                                    lineHeight: '1',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: "15px",
                                        sm: "30px",  // Small screens
                                        md: "40px",  // Medium screens
                                        lg: "60px"
                                    }
                                }}
                            >
                                WE DON'T JUST DEAL IN STONE
                            </Typography>
                        </Box>

                        <Image
                            src="/images/Portfolio/Vector.svg"
                            alt="Vector"
                            width={130}
                            height={130}
                        />
                    </Box>

                    <FullCustomBrownDivider />

                    <Box className="flex w-full justify-between">
                        <Box className="w-1/4">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "12px",  // Small screens
                                        md: "15px",  // Medium screens
                                        lg: "20px"
                                    }
                                }}
                            >
                                we create experiences. Our portfolio showcases a captivating collection of projects where natural stone has breathed life into Melbourne homes and businesses.
                            </Typography>

                        </Box>
                        <Box className="flex w-2/5">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "12px",  // Small screens
                                        md: "15px",  // Medium screens
                                        lg: "20px"
                                    }
                                }}
                            >
                                Explore a curated selection of projects, each a testament to natural stone's enduring beauty and versatility. From modern kitchen renovations featuring captivating stone splashbacks to stunning outdoor living spaces paved with timeless elegance, discover how we've collaborated with clients to translate their visions into reality.
                            </Typography>
                        </Box>
                    </Box>

                </Box>}

                <CustomPartDivider />

                {isMobile ?
                    <Box
                        className="relative flex flex-col w-full px-3 py-12 gap-x-12 gap-y-6 rounded-[20px]"
                        sx={{
                            backgroundImage: 'url(images/Portfolio/Inspiration/Mobile/background-mobile.svg)', // Add your image path here
                            backgroundSize: 'cover', // Ensures the background image covers the entire area
                            backgroundPosition: 'center', // Centers the background image
                            backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                        }}
                    >
                        <Box className="flex w-full">
                            <Box className="flex flex-col w-full items-center justify-center">
                                <Typography variant="h2" className="mb-4 font-light text-center" color='#283C28' sx={{
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '0.7',
                                    fontStyle: 'italic',
                                    fontSize: '50px',
                                    fontWeight: 300,
                                }}>
                                    FIND
                                </Typography>
                                <Typography variant="h2" className="mb-4 font-light text-center" color='#283C28' sx={{
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '0.7',
                                    fontStyle: 'italic',
                                    fontSize: '50px',
                                    fontWeight: 300,
                                }}>
                                    INSPIRATION
                                </Typography>
                                <Typography variant="h2" className="mb-4 font-light text-center" color='#283C28' sx={{
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '0.7',
                                    fontStyle: 'italic',
                                    fontSize: '50px',
                                    fontWeight: 300,
                                }}>
                                    FOR YOUR
                                </Typography>
                                <Typography variant="h2" className="mb-4 font-light text-center" color='#283C28' sx={{
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '0.7',
                                    fontStyle: 'italic',
                                    fontSize: '50px',
                                    fontWeight: 300,
                                }}>
                                    PROJECT
                                </Typography>

                                <Typography variant="h5" className="text-center" color='#283C28' sx={{
                                    width: '80%',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '13px',
                                    fontWeight: 400,
                                }}>
                                    Whether you&apos;re seeking classic sophistication or a burst of contemporary flair, our portfolio offers a wealth of inspiration.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="flex w-full px-2 justify-center">
                            <Image
                                src="/images/Portfolio/Inspiration/Mobile/background-mobile-image.jpg" // Ensure this image is in the public/images folder
                                alt="Background"
                                // layout="fill"
                                objectFit="cover"
                                className="w-full opacity-100 rounded-2xl"
                                width={360}
                                height={518}
                            />

                        </Box>

                    </Box> : <Box
                        className="relative flex-col w-full px-20 py-24 gap-x-12 rounded-[20px]"
                        sx={{
                            backgroundImage: 'url(images/About/legacy-background.jpg)', // Add your image path here
                            backgroundSize: 'cover', // Ensures the background image covers the entire area
                            backgroundPosition: 'center', // Centers the background image
                            backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                        }}
                    >
                        <Box className="flex w-full justify-between mb-12">
                            <Box className="flex w-4/5 items-center">
                                <Typography
                                    variant="h3"
                                    color="#283C28"
                                    sx={{
                                        fontWeight: 300,
                                        alignContent: 'flex-start',
                                        fontFamily: 'Chronicle Display',
                                        fontStyle: 'italic',
                                        lineHeight: '0.8',
                                        fontSize: {
                                            xs: "30px",
                                            sm: "45px",  // Small screens
                                            md: "65px",  // Medium screens
                                            lg: "100px"
                                        }
                                    }}
                                >
                                    FIND INSPIRATION FOR YOUR PROJECT
                                </Typography>
                            </Box>
                            <Box className="flex w-1/3 items-center mb-12">
                                <Typography
                                    variant="h3"
                                    color="#000000"
                                    className='font-start'
                                    sx={{
                                        fontWeight: 300,
                                        alignContent: 'flex-start',
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: {
                                            xs: "8px",
                                            sm: "10px",  // Small screens
                                            md: "12px",  // Medium screens
                                            lg: "20px"
                                        }
                                    }}
                                >
                                    Whether you're seeking classic sophistication or a burst of contemporary flair, our portfolio offers a wealth of inspiration.
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            className="flex w-full"
                            sx={{
                                position: 'relative',
                                width: '100%',
                                // height: '100%', // Adjust to match the image height
                                aspectRatio: '3 / 1', // Aspect ratio of 3:1 (width to height)
                                backgroundImage: 'url("/images/Portfolio/mission.png")',
                                backgroundSize: 'cover', // Ensure the image covers the entire box
                                backgroundPosition: 'center', // Center the image
                                display: 'flex',
                                alignItems: 'center', // Center align text vertically
                                justifyContent: 'flex-start', // Center align text horizontally
                                borderRadius: '25px'
                            }}
                        >
                        </Box>
                    </Box>}

                <CustomPartDivider />

                {isMobile ? <Box className="flex flex-col w-full gap-y-6 px-3">
                    <Box className="flex flex-col items-center w-full gap-y-3">
                        <Box className="flex w-1/2 justify-center">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 300,
                                    textAlign: 'center',
                                    lineHeight: '0.8',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: 'center'
                                }}
                            >
                                PROJECT TYPE
                            </Typography>
                        </Box>
                        <Box className="flex w-[65%] items-center">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 300,
                                    textAlign: 'center',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '15px'
                                }}
                            >
                                Narrow your search by exploring projects categorised by application, such as kitchens, bathrooms, or outdoor spaces.
                            </Typography>
                        </Box>
                    </Box>
                    <ProjectTypeCarousel />
                </Box> : <Box className="px-20"><Box className="flex w-full justify-between">
                    <Box className="flex w-1/2 items-center">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                fontSize: {
                                    xs: "20px",
                                    sm: "30px",  // Small screens
                                    md: "45px",  // Medium screens
                                    lg: "100px"
                                }
                            }}
                        >
                            PROJECT TYPE
                        </Typography>
                    </Box>
                    <Box className="flex w-1/3 items-center">
                        <Typography
                            variant="h3"
                            color="#ffffff"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "8px",
                                    sm: "10px",  // Small screens
                                    md: "12px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >
                            Narrow your search by exploring projects categorised by application, such as kitchens, bathrooms, or outdoor spaces.
                        </Typography>
                    </Box>
                </Box>

                    <ProjectCarousel /></Box>}

                <CustomPartDivider />

                {isMobile ? <Box
                    className="relative flex flex-col w-full px-3 py-12 gap-x-12 gap-y-6 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/Portfolio/Inspiration/Mobile/background-mobile.svg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >
                    <Box className="flex w-full">
                        <Box className="flex flex-col w-full items-center justify-center">
                            <Typography variant="h2" className="mb-4 font-light text-center" color='#283C28' sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.9',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                fontWeight: 300,
                            }}>
                                EXPLORE THE MATERIALS
                            </Typography>

                            <Typography variant="h5" className="text-center" color='#283C28' sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '15px',
                                fontWeight: 300,
                            }}>
                                Delve deeper into the specific stones used in each project, allowing you to discover the unique textures and colours each natural stone offers.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="flex w-full justify-center">
                        <MaterialMobileCarousel />
                    </Box>

                </Box> : <Box
                    className="relative flex-col w-full px-20 py-24 gap-x-12 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/Portfolio/materials/background.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                ><Box className="flex w-full justify-between">
                        <Box className="flex w-1/3 items-start mt-5 justify-center">
                            <Typography
                                variant="h3"
                                color="#000000"
                                sx={{
                                    fontWeight: 400,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "10px",  // Small screens
                                        md: "12px",  // Medium screens
                                        lg: "20px"
                                    }
                                }}
                            >
                                Delve deeper into the specific stones used in each project, allowing you to discover the unique textures and colours each natural stone offers.
                            </Typography>
                        </Box>
                        <Box className="flex w-1/2 justify-center items-center">
                            <Typography
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '0.8',
                                    fontSize: {
                                        xs: "20px",
                                        sm: "30px",  // Small screens
                                        md: "45px",  // Medium screens
                                        lg: "100px"
                                    }
                                }}
                            >
                                EXPLORE THE MATERIALS
                            </Typography>
                        </Box>
                    </Box>

                    <MaterialCarousel />
                </Box>}

                <CustomPartDivider />

                {isMobile ? <Box className="px-3">
                    <Box className="flex flex-col items-center w-full gap-y-5">
                        <Box className="flex w-1/2 justify-center">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 300,
                                    textAlign: 'center',
                                    lineHeight: '0.8',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: 'center'
                                }}
                            >
                                GIVING YOU
                                PRACTICALITY
                            </Typography>
                        </Box>
                        <Box className="flex w-4/5 items-center">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 300,
                                    textAlign: 'center',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '13px'
                                }}
                            >
                                Beyond the visual appeal, each project description highlights the practical benefits of using natural stone. Discover how stone&apos;s durability enhances functionality, its timeless style adds lasting value, and its sustainable nature creates an eco-conscious space.
                            </Typography>
                        </Box>
                    </Box>
                </Box> : <Box className="flex w-full justify-between px-20">
                    <Box className="flex w-1/2 items-center">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                fontSize: {
                                    xs: "40px",
                                    sm: "60px",  // Small screens
                                    md: "75px",  // Medium screens
                                    lg: "100px"
                                },
                                lineHeight: '0.8'
                            }}
                        >
                            GIVING YOU PRACTICALITY
                        </Typography>
                    </Box>
                    <Box className="flex w-1/3 items-center">
                        <Typography
                            variant="h3"
                            color="#ffffff"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "8px",
                                    sm: "10px",  // Small screens
                                    md: "12px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >
                            Beyond the visual appeal, each project description highlights the practical benefits of using natural stone. Discover how stone's durability enhances functionality, its timeless style adds lasting value, and its sustainable nature creates an eco-conscious space.

                        </Typography>
                    </Box>
                </Box>}

                {isMobile ? <Box className="px-3"><FullCustomBrownDivider /></Box> : <Box className="px-20"><FullCustomBrownDivider /></Box>}

                {isMobile ? <PracticalityMobileCarousel /> : <PracticalityCarousel />}

                {/* <PortfolioEmblaCarousel options={OPTIONS} /> */}

                <CustomPartDivider />

                {isMobile ? <Box
                    className="relative flex flex-col w-full px-3 py-12 gap-x-12 gap-y-6 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/Portfolio/Inspiration/Mobile/background-mobile.svg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >
                    <JourneyCarousel />
                    <Box className="flex flex-col w-full gap-y-6">
                        <Box>
                            <Typography
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 300,
                                    textAlign: 'center',
                                    fontFamily: 'Chronicle Display',
                                    fontStyle: 'italic',
                                    lineHeight: 0.8,
                                    fontSize: '40px'
                                }}
                            >
                                READY TO START YOUR STONE JOURNEY?
                            </Typography></Box>
                        <Box className="flex w-full flex-col items-center justify-between gap-4">
                            <GreenCustomButton label={'Enquire now!'} iconSrc={'/images/Vector.svg'} />
                            <Link href="/contact">
                                <GreenCustomButton label={'Contact Us!'} iconSrc={'/images/Vector.svg'} />
                            </Link>
                        </Box>
                    </Box>
                </Box> : <Box
                    className="relative flex-col w-full px-20 py-24 gap-y-12 space-y-12 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/Portfolio/Journey/background.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >
                    <Box className="flex w-full gap-6">
                        <Box className="flex justify-center w-1/4">
                            <Image
                                src="/images/Portfolio/products/product1.png"
                                alt="Stone1"
                                width={250}
                                height={250}
                            />
                        </Box>

                        <Box className="flex justify-center w-1/4">
                            <Image
                                src="/images/Portfolio/products/product2.png"
                                alt="Stone1"
                                width={250}
                                height={250}
                            />
                        </Box>

                        <Box className="flex justify-center w-1/4">

                            <Image
                                src="/images/Portfolio/products/product3.png"
                                alt="Stone1"
                                width={250}
                                height={250}
                            />
                        </Box>

                        <Box className="flex justify-center w-1/4">
                            <Image
                                src="/images/Portfolio/products/product4.png"
                                alt="Stone1"
                                width={250}
                                height={250}
                            />
                        </Box>
                    </Box>

                    <FullCustomGreenDivider />

                    <Box className="flex w-full justify-between">
                        <Box className="flex w-2/3 items-center">
                            <Typography
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'Chronicle Display',
                                    fontStyle: 'italic',
                                    lineHeight: 0.8,
                                    fontSize: {
                                        xs: "30px",
                                        sm: "40px",  // Small screens
                                        md: "65px",  // Medium screens
                                        lg: "100px"
                                    }
                                }}
                            >
                                READY TO START YOUR STONE JOURNEY?
                            </Typography>
                        </Box>
                        <Box className="flex flex-col w-1/3 items-center gap-3">
                            <Typography
                                variant="h3"
                                color="#000000"
                                sx={{
                                    fontWeight: 400,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "10px",  // Small screens
                                        md: "12px",  // Medium screens
                                        lg: "20px"
                                    }
                                }}
                            >
                                Beyond the visual appeal, each project description highlights the practical benefits of using natural stone. Discover how stone's durability enhances functionality, its timeless style adds lasting value, and its sustainable nature creates an eco-conscious space.
                            </Typography>

                            <Box className="flex w-full justify-between gap-4">
                                <GreenCustomButton label={'Enquire now!'} iconSrc={'/images/vector.svg'} />
                                <Link href="/contact"><GreenCustomButton label={'Contact Us!'} iconSrc={'/images/vector.svg'} /></Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                }

                {isMobile ? <CustomPartDivider /> : <></>}

                {isMobile ? <Box className="flex w-full flex-col relative items-center justify-center text-white mb-9">
                    <Box className="flex justify-center items-center w-full">
                        <Image
                            src="/images/Portfolio/partner-mobile.png" // Ensure this image is in the public/images folder
                            alt="Background"
                            // layout="fill"
                            objectFit="cover"
                            className="w-1/2"
                            width={260}
                            height={260}
                        />
                    </Box>
                    <Box className="absolute z-10 text-center p-8 w-full">
                        <Typography variant="h2" className="font-bold" color='#DCC5BD' sx={{
                            fontFamily: 'Chronicle Display',
                            fontSize: '40px',
                            lineHeight: 0.9,
                            fontWeight: 300,
                        }}>
                            LET SPLENDOUR IN STONE BE YOUR PARTNER
                        </Typography>
                        <CustomPartDivider />
                        <Box>
                            <Typography variant="h5" className="text-center" sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                fontWeight: 300,
                            }}>
                                in crafting a masterpiece that
                            </Typography>
                            <Typography variant="h5" className="text-center" sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                fontWeight: 300,
                            }}>
                                endures for generations.
                            </Typography>
                        </Box>
                    </Box>
                </Box> : <Box className="flex w-full flex-col relative items-center justify-center text-white mb-16">
                    <Box className="flex justify-center items-center w-full">
                        <Image
                            src="/images/Portfolio/partner.png" // Ensure this image is in the public/images folder
                            alt="Background"
                            // layout="fill"
                            objectFit="cover"
                            className="w-1/4"
                            width={600}
                            height={600}
                        />
                    </Box>
                    <Box className="absolute z-10 text-center p-8 w-full flex flex-col justify-center items-center">
                        <Typography variant="h2" className="mb-4 font-semibold" color='#DCC5BD' sx={{
                            fontFamily: 'Chronicle Display',
                            fontSize: {
                                xs: '45px', // Font size for extra small screens
                                sm: '65px', // Font size for small screens
                                md: '85px', // Font size for medium screens
                                lg: '100px', // Font size for large screens
                            },
                            fontWeight: 300,
                            width: '70%',
                            lineHeight: '0.8'
                        }}>
                            LET SPLENDOUR IN STONE BE YOUR PARTNER
                        </Typography>

                        <Typography variant="h5" className="mb-8" sx={{
                            fontFamily: 'var(--font-montserrat)',
                            fontSize: {
                                xs: '12px', // Font size for extra small screens
                                sm: '14px', // Font size for small screens
                                md: '16px', // Font size for medium screens
                                lg: '20px', // Font size for large screens
                            },
                            fontWeight: 300,
                        }}>
                            in crafting a masterpiece that endures for generations.
                        </Typography>
                    </Box>
                </Box>}

            </Box>

            {/* <CustomPartDivider /> */}

            {isMobile ? <FooterMobile /> : <Footer />}

        </Box>
    );
};
export default PortfolioPage;
