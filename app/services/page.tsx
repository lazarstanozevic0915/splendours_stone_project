
"use client"
// app/about/page.tsx

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Typography, Rating } from '@mui/material';
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel'
import FullCustomYellowDivider from '../components/Divider/FullCustomYellowDivider';
import CustomPartDivider from '../components/CustomPartDivider';
import FullCustomBlackDivider from '../components/Divider/FullCustomBlackDivider';
import ServocesEmblaCarousel from '../components/Services/EmblaCarousel/EmblaCarousel';
import ServiceMobileCarousel from '../components/Services/ServiceMobileCarousel/ServiceMobileCarousel';
import WhiteCustomButton from '../components/WhiteButton';
// import GreenCustomButton from '../components/Buttons/GreenCustomButton';
import GreenCustomButton from '../components/GreenCustomButton';
import './embla.css';
import FullCustomGreenDivider from '../components/Divider/FullCustomGreenDivider';
import FooterMobile from '../components/FooterMobile';


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const ServicesPage = () => {
    // Mobile view (max-width 768px)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [value] = React.useState<number | null>(5);

    return (
        <Box >

            <Box className="flex items-center w-full px-3" sx={{ height: '15vh' }}>
                <Header />
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: isMobile ? '1rem' : '4rem', // 6 times the default spacing unit (gap-y-6 in Tailwind)
            }}>

                {isMobile ? <Box className="flex w-full flex-col px-3 justify-center items-center gap-y-3">
                    <Box className="flex w-full">
                        <Image
                            src="/images/Service/House/Mobile/main.jpg"
                            alt="main"
                            width={356}
                            height={189}
                            className='w-full rounded-[20px]'
                        />
                    </Box>
                    <Box className="flex w-full justify-between gap-x-3">
                        <Box className="w-1/2">
                            <Image
                                src="/images/Service/House/Mobile/image1.jpg"
                                alt="main"
                                width={356}
                                height={189}
                                className='rounded-[20px]'
                            />
                        </Box>
                        <Box className="w-1/2">
                            <Image
                                src="/images/Service/House/Mobile/image2.jpg"
                                alt="main"
                                width={356}
                                height={189}
                                className='rounded-[20px]'
                            />
                        </Box>
                    </Box>
                    <Box className="w-full flex flex-col">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 500,
                                textAlign: 'center',
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.9',
                                fontSize: '40px'
                            }}
                        >
                            AT SPLENDOUR
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 500,
                                textAlign: 'center',
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.9',
                                fontSize: '40px'
                            }}
                        >
                            IN STONE,
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 500,
                                textAlign: 'center',
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.9',
                                fontSize: '40px'
                            }}
                        >
                            WE&apos;RE
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 500,
                                textAlign: 'center',
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.9',
                                fontSize: '40px'
                            }}
                        >
                            PASSIONATE
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 500,
                                textAlign: 'center',
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.9',
                                fontSize: '40px'
                            }}
                        >
                            ABOUT
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 500,
                                textAlign: 'center',
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.9',
                                fontSize: '40px'
                            }}
                        >
                            ELEVATING
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 500,
                                textAlign: 'center',
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.9',
                                fontSize: '40px'
                            }}
                        >
                            AUSTRALIAN
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 500,
                                textAlign: 'center',
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.9',
                                fontSize: '40px'
                            }}
                        >
                            HOMES
                        </Typography>
                    </Box>

                    <FullCustomYellowDivider />

                    <Box className="w-4/5">
                        <Typography
                            className="text-center"
                            variant="h3"
                            color="#ffffff"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                lineHeight: '1.2'
                            }}
                        >
                            with natural stone&apos;s timeless beauty and enduring qualities. We offer a comprehensive suite of services to transform your vision into reality, from selecting the perfect stone to flawless installation.
                        </Typography>
                    </Box>
                </Box> : <Box className="flex flex-col w-full px-12 gap-y-6">
                    <Box className="flex w-full justify-between gap-2">
                        <Box className="flex flex-col w-7/12">
                            <Box className="flex h-1/3">
                            </Box>
                            <Box className="flex flex-col h-2/3">
                                <Typography
                                    variant="h3"
                                    color="#DCC5BD"
                                    sx={{
                                        fontWeight: 400,
                                        alignContent: 'flex-start',
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '0.9',
                                        fontSize: {
                                            xs: "15px",
                                            sm: "30px",  // Small screens
                                            md: "40px",  // Medium screens
                                            lg: "65px"
                                        }
                                    }}
                                >
                                    AT SPLENDOUR IN STONE,
                                </Typography>
                                <Typography
                                    variant="h3"
                                    color="#DCC5BD"
                                    sx={{
                                        fontWeight: 600,
                                        alignContent: 'flex-start',
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '0.9',
                                        fontSize: {
                                            xs: "15px",
                                            sm: "30px",  // Small screens
                                            md: "40px",  // Medium screens
                                            lg: "65px"
                                        }
                                    }}
                                >
                                    WE&apos;RE PASSIONATE
                                </Typography>
                                <Typography
                                    variant="h3"
                                    color="#DCC5BD"
                                    sx={{
                                        fontWeight: 600,
                                        alignContent: 'flex-start',
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '0.9',
                                        fontSize: {
                                            xs: "15px",
                                            sm: "30px",  // Small screens
                                            md: "40px",  // Medium screens
                                            lg: "65px"
                                        }
                                    }}
                                >
                                    ABOUT ELEVATING
                                </Typography>
                                <Typography
                                    variant="h3"
                                    color="#DCC5BD"
                                    sx={{
                                        fontWeight: 600,
                                        alignContent: 'flex-start',
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '0.9',
                                        fontSize: {
                                            xs: "15px",
                                            sm: "30px",  // Small screens
                                            md: "40px",  // Medium screens
                                            lg: "65px"
                                        }
                                    }}
                                >
                                    AUSTRALIAN HOMES
                                </Typography>
                            </Box>
                            <Box className="w-11/12">
                                <FullCustomYellowDivider />
                            </Box>

                        </Box>
                        <Box className="flex flex-col w-5/12">
                            <Box className="w-full">
                                <Image
                                    src="/images/Service/advertisement/main.png"
                                    alt="main"
                                    width={720}
                                    height={550}
                                    className='rounded-xl'
                                />
                            </Box>
                        </Box>
                    </Box>

                    <Box className="flex w-full justify-between">
                        <Box className="flex w-1/3">
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
                                with natural stone&apos;s timeless beauty and enduring qualities. We offer a comprehensive suite of services to transform your vision into reality, from selecting the perfect stone to flawless installation.
                            </Typography>
                        </Box>
                        <Box className="flex w-5/12 gap-3">
                            <Box className="flex w-1/2">
                                <Image
                                    src="/images/Service/advertisement/image1.png"
                                    alt="main"
                                    width={344}
                                    height={148}
                                    className='rounded-xl'
                                />
                            </Box>
                            <Box className="flex w-1/2">
                                <Image
                                    src="/images/Service/advertisement/image2.png"
                                    alt="main"
                                    width={344}
                                    height={148}
                                    className='rounded-xl'
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>}

                {isMobile ? <Box className="py-12">
                    <CustomPartDivider />
                </Box> : <></>}


                {isMobile ? <Box
                    className="relative flex flex-col w-full px-3 py-12 gap-x-12 gap-y-6 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/Service/products/background-mobile.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >
                    <Box className="flex w-full justify-center">
                        <Box className="flex w-2/3 justify-center">
                            <Typography variant="h2" className="mb-4 font-light text-center" color='#283C28' sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.9',
                                fontSize: '50px',
                                fontWeight: 300,
                            }}>
                                OUR SERVICES
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="flex w-full justify-center">
                        <ServiceMobileCarousel />
                    </Box>

                </Box> : <Box
                    className="relative flex-col w-full px-14 py-24 gap-x-12 rounded-[20px] space-y-12"
                    sx={{
                        backgroundImage: 'url(images/Service/products/background.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                ><Box className="flex w-full justify-between items-end">
                        <Box className="flex w-1/3">
                            <Typography
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 600,
                                    alignContent: 'flex-start',
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '0.8',
                                    fontSize: {
                                        xs: "25px",
                                        sm: "35px",  // Small screens
                                        md: "70px",  // Medium screens
                                        lg: "100px"
                                    }
                                }}
                            >
                                OUR SERVICES
                            </Typography>
                        </Box>
                        <Box className="flex w-1/12">
                            <Image
                                src="/images/Service/products/Vector-bottom-right.svg"
                                alt="main"
                                width={110}
                                height={110}
                            />
                        </Box>
                    </Box>

                    <ServocesEmblaCarousel slides={SLIDES} options={OPTIONS} /></Box>}

                {isMobile ? <Box className="py-12">
                    <CustomPartDivider />
                </Box> : <></>}


                {isMobile ? <Box className="flex w-full flex-col items-center px-3 gap-y-3">
                    <Box className="flex w-2/3 justify-center items-center">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className="text-center"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                lineHeight: '0.8'
                            }}
                        >
                            YOUR STONE DESIGN JOURNEY AT SPLENDOUR IN STONE
                        </Typography>
                    </Box>
                    <Box className="flex w-full justify-center" style={{ paddingLeft: '10px', paddingRight: "10px" }}>
                        <Typography
                            variant="h3"
                            color="#ffffff"
                            className="text-center"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                lineHeight: '1.2',
                                fontSize: '13px',
                                letterSpacing: '0.15em',
                            }}
                        >
                            At Splendour in Stone, the journey towards your dream stone design should be seamless and enjoyable.
                            We understand that embarking on a stone design project can involve questions. Our team is here to guide you through every step, ensuring a smooth and stress-free experience.
                            Here&apos;s a glimpse into the collaborative process, from your initial inquiry to the final installation:
                        </Typography>
                    </Box>
                </Box> : <Box className="flex w-full justify-between px-12">
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
                                    lg: "60px"
                                }
                            }}
                        >
                            YOUR STONE DESIGN JOURNEY AT SPLENDOUR IN STONE
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
                            At Splendour in Stone, the journey towards your dream stone design should be seamless and enjoyable.
                            We understand that embarking on a stone design project can involve questions. Our team is here to guide you through every step, ensuring a smooth and stress-free experience.
                            Here&apos;s a glimpse into the collaborative process, from your initial inquiry to the final installation:
                        </Typography>
                    </Box>
                </Box>}

                {isMobile ? <Box className="px-3"><FullCustomYellowDivider /></Box> : <Box className="px-12"><FullCustomYellowDivider /></Box>}

                {isMobile ? <Box className="px-3"><Box className="flex flex-col w-full items-center gap-2" >
                    <Box className="flex w-full justify-center">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className="text-center"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px'
                            }}
                        >01</Typography>
                    </Box>
                    <Box className="flex w-full flex-col justify-center items-center gap-5">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className="text-center"
                            sx={{
                                fontWeight: 400,
                                fontFamily: 'Chronicle Display',
                                letterSpacing: '0.1em',
                                fontSize: '30px'
                            }}
                        >
                            CONSULTATION CALL
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#FFFFFF"
                            className="text-center"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                lineHeight: 1.2,
                                letterSpacing: '0.16em',
                            }}
                        >
                            Our conversation begins with a friendly call. We&apos;ll discuss your vision, understand your project scope, and answer any questions you may have about natural stone.
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Image
                            src="/images/Service/journey/Mobile/consultation.png"
                            alt="main"
                            width={358}
                            height={215}
                            className='rounded-lg w-full h-full'
                        />
                    </Box>
                </Box></Box> : <Box className="flex w-full justify-between gap-6 px-12">
                    <Box className="flex w-1/5 items-start">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "10px",
                                    sm: "12px",  // Small screens
                                    md: "15px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >01</Typography>
                    </Box>
                    <Box className="flex w-2/5 flex-col justify-center gap-5">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 600,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "15px",
                                    sm: "20px",  // Small screens
                                    md: "25px",  // Medium screens
                                    lg: "30px"
                                }
                            }}
                        >
                            CONSULTATION CALL
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#FFFFFF"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "10px",
                                    sm: "12px",  // Small screens
                                    md: "15px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >
                            Our conversation begins with a friendly call. We&apos;ll discuss your vision, understand your project scope, and answer any questions you may have about natural stone.
                        </Typography>
                    </Box>
                    <Box className="flex w-2/5 justify-end">
                        <Image
                            src="/images/Service/journey/consultation.png"
                            alt="main"
                            width={471}
                            height={221}
                            className='rounded-lg'
                        />
                    </Box>
                </Box>}

                {isMobile ? <Box className="px-3"><FullCustomYellowDivider /></Box> : <Box className="px-12"><FullCustomYellowDivider /></Box>}

                {isMobile ? <Box className="px-3"><Box className="flex flex-col w-full items-center gap-2" >
                    <Box className="flex w-full justify-center">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className="text-center"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px'
                            }}
                        >02</Typography>
                    </Box>
                    <Box className="flex w-full flex-col justify-center items-center gap-5">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className="text-center"
                            sx={{
                                fontWeight: 400,
                                fontFamily: 'Chronicle Display',
                                letterSpacing: '0.1em',
                                fontSize: '30px'
                            }}
                        >
                            PROJECT DISCUSSTIONS
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#FFFFFF"
                            className="text-center"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                lineHeight: 1.2,
                                // width:'95%',
                                letterSpacing: '0.16em',
                            }}
                        >
                            Following the call, we&apos;ll delve deeper. We&apos;ll explore design options, recommend suitable stone types based on your preferences and space, and provide initial estimates to ensure transparency. Additionally, this is the perfect opportunity to visit our showroom for a more realistic feel of what to expect.
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Image
                            src="/images/Service/journey/Mobile/discussion.png"
                            alt="main"
                            width={358}
                            height={215}
                            className='rounded-lg w-full h-full'
                        />
                    </Box>
                </Box></Box> : <Box className="flex w-full justify-between gap-6 px-12">
                    <Box className="flex w-1/5 items-start">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "10px",
                                    sm: "12px",  // Small screens
                                    md: "15px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >02</Typography>
                    </Box>
                    <Box className="flex w-2/5 flex-col justify-center gap-5">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 600,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "15px",
                                    sm: "20px",  // Small screens
                                    md: "25px",  // Medium screens
                                    lg: "30px"
                                }
                            }}
                        >
                            PROJECT DISCUSSITONS
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#FFFFFF"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "10px",
                                    sm: "12px",  // Small screens
                                    md: "15px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >
                            Following the call, we&apos;ll delve deeper. We&apos;ll explore design options, recommend suitable stone types based on your preferences and space, and provide initial estimates to ensure transparency. Additionally, this is the perfect opportunity to visit our showroom for a more realistic feel of what to expect.
                        </Typography>
                    </Box>
                    <Box className="flex w-2/5 justify-end">
                        <Image
                            src="/images/Service/journey/discussion.png"
                            alt="main"
                            width={471}
                            height={221}
                            className='rounded-lg'
                        />
                    </Box>
                </Box>}

                {isMobile ? <Box className="px-3"><FullCustomYellowDivider /></Box> : <Box className="px-12"><FullCustomYellowDivider /></Box>}

                {isMobile ? <Box className="px-3"><Box className="flex flex-col w-full items-center gap-2" >
                    <Box className="flex w-full justify-center">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className="text-center"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px'
                            }}
                        >03</Typography>
                    </Box>
                    <Box className="flex w-full flex-col justify-center items-center gap-5">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className="text-center"
                            sx={{
                                fontWeight: 600,
                                fontFamily: 'Chronicle Display',
                                letterSpacing: '0.1em',
                                fontSize: '30px'
                            }}
                        >
                            ON-SITE MEASUREMENTS
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#FFFFFF"
                            className="text-center"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                lineHeight: 1.2,
                                letterSpacing: '0.16em',
                            }}
                        >
                            Once we&apos;ve established a plan, our team members will visit your site to take precise measurements. This ensures a flawless fit and avoids any unwanted surprises during installation.
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Image
                            src="/images/Service/journey/Mobile/measurement.png"
                            alt="main"
                            width={358}
                            height={215}
                            className='rounded-lg w-full h-full'
                        />
                    </Box>
                </Box></Box> : <Box className="flex w-full justify-between gap-6 px-12">
                    <Box className="flex w-1/5 items-start">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className="text-center"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px'
                            }}
                        >03</Typography>
                    </Box>
                    <Box className="flex w-2/5 flex-col justify-center gap-5">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "15px",
                                    sm: "20px",  // Small screens
                                    md: "25px",  // Medium screens
                                    lg: "30px"
                                }
                            }}
                        >
                            ON-SITE MEASUREMENTS
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#FFFFFF"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "10px",
                                    sm: "12px",  // Small screens
                                    md: "15px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >
                            Once we&apos;ve established a plan, our team members will visit your site to take precise measurements. This ensures a flawless fit and avoids any unwanted surprises during installation.
                        </Typography>
                    </Box>
                    <Box className="flex w-2/5 justify-end">
                        <Image
                            src="/images/Service/journey/measurement.png"
                            alt="main"
                            width={471}
                            height={221}
                            className='rounded-lg'
                        />
                    </Box>
                </Box>}

                {isMobile ? <Box className="px-3"><FullCustomYellowDivider /></Box> : <Box className="px-12"><FullCustomYellowDivider /></Box>}

                {isMobile ? <Box className="px-3"><Box className="flex flex-col w-full items-center gap-2" >
                    <Box className="flex w-full justify-center">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className="text-center"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                lineHeight: '0.8'
                            }}
                        >04</Typography>
                    </Box>
                    <Box className="flex w-full flex-col justify-center items-center gap-5">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className="text-center"
                            sx={{
                                fontWeight: 400,
                                fontFamily: 'Chronicle Display',
                                letterSpacing: '0.1em',
                                fontSize: '30px'
                            }}
                        >
                            ARRANGING FOR STOCK AND STONE MASON
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#FFFFFF"
                            className="text-center"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                lineHeight: 1.2,
                                letterSpacing: '0.16em',
                            }}
                        >
                            With your project details finalised, we&apos;ll secure the perfect stone selection and collaborate with a trusted and highly skilled stone mason for installation.
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Image
                            src="/images/Service/journey/Mobile/arranging.png"
                            alt="main"
                            width={358}
                            height={215}
                            className='rounded-lg w-full h-full'
                        />
                    </Box>
                </Box></Box> : <Box className="flex w-full justify-between gap-6 px-12">
                    <Box className="flex w-1/5 items-start">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "10px",
                                    sm: "12px",  // Small screens
                                    md: "15px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >04</Typography>
                    </Box>
                    <Box className="flex w-2/5 flex-col justify-center gap-5">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 600,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "15px",
                                    sm: "20px",  // Small screens
                                    md: "25px",  // Medium screens
                                    lg: "30px"
                                }
                            }}
                        >
                            ARRANGING FOR STOCK AND STONE MASON
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#FFFFFF"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "10px",
                                    sm: "12px",  // Small screens
                                    md: "15px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >
                            With your project details finalised, we&apos;ll secure the perfect stone selection and collaborate with a trusted and highly skilled stone mason for installation.
                        </Typography>
                    </Box>
                    <Box className="flex w-2/5 justify-end">
                        <Image
                            src="/images/Service/journey/arranging.png"
                            alt="main"
                            width={471}
                            height={221}
                            className='rounded-lg'
                        />
                    </Box>
                </Box>}

                {isMobile ? <Box className="px-3"><FullCustomYellowDivider /></Box> : <Box className="px-12"><FullCustomYellowDivider /></Box>}

                {isMobile ? <Box className="px-3"><Box className="flex flex-col w-full items-center gap-2" >
                    <Box className="flex w-full justify-center">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className="text-center"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px'
                            }}
                        >05</Typography>
                    </Box>
                    <Box className="flex w-full flex-col justify-center items-center gap-5">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className="text-center"
                            sx={{
                                fontWeight: 400,
                                fontFamily: 'Chronicle Display',
                                letterSpacing: '0.1em',
                                fontSize: '30px'
                            }}
                        >
                            INSTALLATION DAY
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#FFFFFF"
                            className="text-center"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                lineHeight: 1.2,
                                letterSpacing: '0.16em',
                            }}
                        >
                            The big day arrives! Our recommended stone mason will meticulously install your chosen stone, transforming your space with the enduring beauty of natural stone.
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Image
                            src="/images/Service/journey/Mobile/installation.png"
                            alt="main"
                            width={358}
                            height={215}
                            className='rounded-lg w-full h-full'
                        />
                    </Box>
                </Box></Box> : <Box className="flex w-full justify-between gap-6 px-12">
                    <Box className="flex w-1/5 items-start">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "10px",
                                    sm: "12px",  // Small screens
                                    md: "15px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >05</Typography>
                    </Box>
                    <Box className="flex w-2/5 flex-col justify-center gap-5">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 600,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "15px",
                                    sm: "20px",  // Small screens
                                    md: "25px",  // Medium screens
                                    lg: "30px"
                                }
                            }}
                        >
                            INSTALLATION DAY
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#FFFFFF"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "10px",
                                    sm: "12px",  // Small screens
                                    md: "15px",  // Medium screens
                                    lg: "20px"
                                }
                            }}
                        >
                            The big day arrives! Our recommended stone mason will meticulously install your chosen stone, transforming your space with the enduring beauty of natural stone.
                        </Typography>
                    </Box>
                    <Box className="flex w-2/5 justify-end">
                        <Image
                            src="/images/Service/journey/installation.png"
                            alt="main"
                            width={471}
                            height={221}
                            className='rounded-lg'
                        />
                    </Box>
                </Box>}

                {isMobile ? <Box className="px-3"><FullCustomYellowDivider /></Box> : <Box className="px-12"><FullCustomYellowDivider /></Box>}

                {isMobile ? <Box><Box
                    className="flex w-full p-3"
                    sx={{
                        position: 'relative',
                        // width: '80%',
                        aspectRatio: '1 / 2.16', // Aspect ratio of 3:1 (width to height)
                        backgroundImage: 'url("/images/Service/transparency-mobile.jpg")',
                        backgroundSize: 'cover', // Ensure the image covers the entire box
                        backgroundPosition: 'center', // Center the image
                        display: 'flex',
                        alignItems: 'center', // Center align text vertically
                        justifyContent: 'space-around', // Center align text horizontally
                        borderTopRightRadius: "25px",
                        // Adding the overlay pseudo-element
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',

                            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the opacity here
                            zIndex: 1, // Ensure it&apos;s on top of the background image but behind the content
                        },
                    }}
                >
                    <Box className="flex w-full flex-col h-full items-center justify-between" sx={{ zIndex: 2 }}>
                        <Box className="flex w-full flex-col gap-y-5 mt-7">
                            <Box>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        fontSize: '40px',
                                        fontStyle: 'italic',
                                        lineHeight: '1',
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    TRANSPARENCY YOU CAN TRUST:
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        fontSize: '40px',
                                        lineHeight: '1',
                                        fontStyle: 'italic',
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    EXPLORING OUR PRICING
                                </Typography>
                            </Box>
                            <Box className="flex w-4/5">
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        fontWeight: 300,
                                        lineHeight: '1.4',
                                        textAlign: 'start',
                                    }}
                                >
                                    At Splendour in Stone, we believe in open communication. We invite you to visit our <span style={{ fontWeight: 500 }}>Pricing Page</span> to explore a breakdown of our services and associated costs. This ensures you can make informed decisions while embarking on your stone design journey.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="flex w-full justify-end">
                            <Image
                                src="/images/Service/Vector-top-right.svg"
                                alt="check"
                                width={80}
                                height={80}
                            />
                        </Box>
                    </Box>


                </Box><Box
                    className="relative flex-col w-full px-6 py-4 gap-x-12 space-y-5"
                    sx={{
                        backgroundImage: 'url(images/Service/Satisfiction//Mobile/background-mobile.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                        borderBottomLeftRadius: "25px",
                        borderBottomRightRadius: "25px"
                    }}>
                        <Box className="flex flex-col w-full items-center py-12">
                            <Typography
                                className="text-center"
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 300,
                                    fontStyle: 'italic',
                                    lineHeight: '0.8',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: '40px'
                                }}
                            >
                                HEAR FROM OUR SATISFIED CLIENTS:
                            </Typography>
                            <Typography
                                className="text-center"
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 300,
                                    fontStyle: 'italic',
                                    lineHeight: '0.8',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: '40px'
                                }}
                            >
                                UNVEILING THE SPLENDOUR
                            </Typography>
                        </Box>
                        <FullCustomBlackDivider />
                        <Box className="flex w-full justify-center items-center">
                            <Typography
                                variant="h3"
                                color="#000000"
                                className='text-center'
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.4',
                                    fontSize: '13px'
                                }}
                            >
                                Are you curious to hear how we&apos;ve transformed spaces with natural stone? Dive into our Testimonials Page to hear from our delighted clients and discover how natural stone has added a touch of magic to their homes and businesses. You can also view our portfolio to get a clear picture of the transformations we have achieved with our clients.
                            </Typography>
                        </Box>
                        <Box className="flex flex-col w-full justify-center items-center space-y-3">
                            <Box className="flex w-1/3">
                                <Image alt='Remy Sharp' src="/images/Service/avatar.svg" width={200} height={200} />
                            </Box>
                            <Box className="flex items-center">
                                <Box>
                                    <Typography
                                        variant="h3"
                                        color="#000000"
                                        sx={{
                                            fontWeight: 600,
                                            alignContent: 'flex-start',
                                            fontFamily: 'Chronicle Display',
                                            fontSize: {
                                                xs: "15px",
                                                sm: "30px",  // Small screens
                                                md: "40px",  // Medium screens
                                                lg: "50px"
                                            }
                                        }}
                                    >
                                        Sarah M.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Image
                                        src="/images/Service/check.svg"
                                        alt="check"
                                        width={25}
                                        height={25}
                                    />
                                </Box>
                            </Box>
                            <Box>
                                <Rating name="read-only" value={value} readOnly sx={{ color: "#283C28" }} />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h3"
                                    color="#000000"
                                    className="text-center"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '15px',
                                        lineHeight: 1.4,
                                    }}
                                >
                                    "I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.”
                                </Typography>
                            </Box>

                            <Box className="py-8">
                                <GreenCustomButton label={'Read more'} iconSrc={'/images/vector.svg'} />
                            </Box>

                        </Box>
                    </Box>
                </Box> : <Box><Box
                    className="flex w-full p-3"
                    sx={{
                        position: 'relative',
                        // width: '80%',
                        aspectRatio: '1.77 / 1', // Aspect ratio of 3:1 (width to height)
                        backgroundImage: 'url("/images/Service/transparency.jpg")',
                        backgroundSize: 'cover', // Ensure the image covers the entire box
                        backgroundPosition: 'center', // Center the image
                        display: 'flex',
                        alignItems: 'center', // Center align text vertically
                        justifyContent: 'space-around', // Center align text horizontally
                        borderRadius: '25px',
                        // Adding the overlay pseudo-element
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity here
                            zIndex: 1, // Ensure it&apos;s on top of the background image but behind the content
                        },
                    }}
                >
                    <Box className="flex w-1/2 h-full items-center" sx={{ zIndex: 2 }}>
                        <Box className="flex w-full flex-col h-1/2 justify-center gap-6">
                            <Box>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        fontSize: {
                                            xs: '20px', // Font size for extra small screens
                                            sm: '25px', // Font size for small screens
                                            md: '35px', // Font size for medium screens
                                            lg: '50px', // Font size for large screens
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    TRANSPARENCY YOU CAN TRUST:
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        fontSize: {
                                            xs: '20px', // Font size for extra small screens
                                            sm: '25px', // Font size for small screens
                                            md: '35px', // Font size for medium screens
                                            lg: '50px', // Font size for large screens
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    EXPLORING OUR PRICING
                                </Typography>
                            </Box>
                            {/* <WhiteCustomButton label={'Enquire Now!'} iconSrc={'/images/vector.svg'} /> */}
                            <GreenCustomButton label={'Enquire Now!'} iconSrc={'/images/vector.svg'} />
                        </Box>
                    </Box>

                    <Box className="flex w-2/5 items-center" sx={{ zIndex: 2 }}>
                        <Box className="flex w-full">
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: '10px', // Font size for extra small screens
                                        sm: '12px', // Font size for small screens
                                        md: '15px', // Font size for medium screens
                                        lg: '20px', // Font size for large screens
                                    },
                                    fontWeight: 300,
                                    textAlign: 'start',
                                }}
                            >
                                At Splendour in Stone, we believe in open communication. We invite you to visit our Pricing Page to explore a breakdown of our services and associated costs. This ensures you can make informed decisions while embarking on your stone design journey.
                            </Typography>
                        </Box>
                    </Box>
                </Box><Box
                    className="relative flex-col w-full px-12 py-24 gap-x-12 gap-y-12 space-y-12"
                    sx={{
                        backgroundImage: 'url(images/Service/Satisfiction/background.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                        borderBottomLeftRadius: "25x",
                        borderBottomRightRadius: "25x",
                    }}>
                        <Box className="flex w-full">
                            <Box className="flex flex-col w-4/5 items-start">
                                <Typography
                                    className='w-2/3'
                                    variant="h3"
                                    color="#283C28"
                                    sx={{
                                        fontWeight: 300,
                                        alignContent: 'flex-start',
                                        fontStyle: 'italic',
                                        fontFamily: 'Chronicle Display',
                                        fontSize: {
                                            xs: "20px",
                                            sm: "30px",  // Small screens
                                            md: "45px",  // Medium screens
                                            lg: "60px"
                                        }
                                    }}
                                >
                                    HEAR FROM OUR SATISFIED CLIENTS:
                                </Typography>
                                <Typography
                                    variant="h3"
                                    color="#283C28"
                                    sx={{
                                        fontWeight: 300,
                                        alignContent: 'flex-start',
                                        fontStyle: 'italic',
                                        fontFamily: 'Chronicle Display',
                                        fontSize: {
                                            xs: "20px",
                                            sm: "30px",  // Small screens
                                            md: "45px",  // Medium screens
                                            lg: "60px"
                                        }
                                    }}
                                >
                                    UNVEILING THE SPLENDOUR
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
                                    Are you curious to hear how we&apos;ve transformed spaces with natural stone? Dive into our Testimonials Page to hear from our delighted clients and discover how natural stone has added a touch of magic to their homes and businesses. You can also view our portfolio to get a clear picture of the transformations we have achieved with our clients.
                                </Typography>
                            </Box>
                        </Box>

                        <FullCustomGreenDivider />

                        <Box className="flex w-full justify-between gap-x-16">
                            <Box className="flex flex-col w-1/3 justify-center items-center space-y-3">
                                <Box className="flex w-1/3">
                                    <Image alt='Remy Sharp' src="/images/Service/avatar.png" width={200} height={200} />
                                </Box>
                                <Box className="flex items-center">
                                    <Box>
                                        <Typography
                                            variant="h3"
                                            color="#000000"
                                            sx={{
                                                fontWeight: 600,
                                                alignContent: 'flex-start',
                                                fontFamily: 'Chronicle Display',
                                                fontSize: {
                                                    xs: "15px",
                                                    sm: "30px",  // Small screens
                                                    md: "40px",  // Medium screens
                                                    lg: "50px"
                                                }
                                            }}
                                        >
                                            Sarah M.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Image
                                            src="/images/Service/check.svg"
                                            alt="check"
                                            width={25}
                                            height={25}
                                        />
                                    </Box>
                                </Box>
                                <Box>
                                    <Rating name="read-only" value={value} readOnly sx={{ color: "#283C28" }} />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h3"
                                        color="#000000"
                                        className="text-center"
                                        sx={{
                                            fontWeight: 400,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: "10px",
                                                sm: "12px",  // Small screens
                                                md: "15px",  // Medium screens
                                                lg: "20px"
                                            }
                                        }}
                                    >
                                        "I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.”
                                    </Typography>
                                </Box>

                                <Box>
                                    <GreenCustomButton label={'Read more'} iconSrc={'/images/vector.svg'} />
                                </Box>

                            </Box>
                            <Box className="flex flex-col w-1/3 justify-center items-center space-y-3">
                                <Box className="flex w-1/3">
                                    <Image alt='Remy Sharp' src="/images/Service/avatar.png" width={200} height={200} />
                                </Box>
                                <Box className="flex items-center">
                                    <Box>
                                        <Typography
                                            variant="h3"
                                            color="#000000"
                                            sx={{
                                                fontWeight: 600,
                                                alignContent: 'flex-start',
                                                fontFamily: 'Chronicle Display',
                                                fontSize: {
                                                    xs: "15px",
                                                    sm: "30px",  // Small screens
                                                    md: "40px",  // Medium screens
                                                    lg: "50px"
                                                }
                                            }}
                                        >
                                            Sarah M.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Image
                                            src="/images/Service/check.svg"
                                            alt="check"
                                            width={25}
                                            height={25}
                                        />
                                    </Box>
                                </Box>
                                <Box>
                                    <Rating name="read-only" value={value} readOnly sx={{ color: "#283C28" }} />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h3"
                                        color="#000000"
                                        className="text-center"
                                        sx={{
                                            fontWeight: 400,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: "10px",
                                                sm: "12px",  // Small screens
                                                md: "15px",  // Medium screens
                                                lg: "20px"
                                            }
                                        }}
                                    >
                                        "I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.”
                                    </Typography>
                                </Box>

                                <Box>
                                    <GreenCustomButton label={'Read more'} iconSrc={'/images/vector.svg'} />
                                </Box>

                            </Box>
                            <Box className="flex flex-col w-1/3 justify-center items-center space-y-3">
                                <Box className="flex w-1/3">
                                    <Image alt='Remy Sharp' src="/images/Service/avatar.png" width={200} height={200} />
                                </Box>
                                <Box className="flex items-center">
                                    <Box>
                                        <Typography
                                            variant="h3"
                                            color="#000000"
                                            sx={{
                                                fontWeight: 600,
                                                alignContent: 'flex-start',
                                                fontFamily: 'Chronicle Display',
                                                fontSize: {
                                                    xs: "15px",
                                                    sm: "30px",  // Small screens
                                                    md: "40px",  // Medium screens
                                                    lg: "50px"
                                                }
                                            }}
                                        >
                                            Sarah M.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Image
                                            src="/images/Service/check.svg"
                                            alt="check"
                                            width={25}
                                            height={25}
                                        />
                                    </Box>
                                </Box>
                                <Box>
                                    <Rating name="read-only" value={value} readOnly sx={{ color: "#283C28" }} />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h3"
                                        color="#000000"
                                        className="text-center"
                                        sx={{
                                            fontWeight: 400,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: "10px",
                                                sm: "12px",  // Small screens
                                                md: "15px",  // Medium screens
                                                lg: "20px"
                                            }
                                        }}
                                    >
                                        "I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.”
                                    </Typography>
                                </Box>

                                <Box>
                                    <GreenCustomButton label={'Read more'} iconSrc={'/images/vector.svg'} />
                                </Box>

                            </Box>
                        </Box>

                    </Box></Box>}

                {isMobile ? <></> : <></>}



                {isMobile ? <Box className="px-3 py-7"><CustomPartDivider /></Box> : <></>}


                {isMobile ? <Box className="flex w-full flex-col relative items-center justify-center text-white gap-y-6 mb-12">
                    <Box className="flex justify-center items-center w-full">
                        <Image
                            src="/images/Service/partner.png" // Ensure this image is in the public/images folder
                            alt="Background"
                            // layout="fill"
                            objectFit="cover"
                            className="w-[75%]"
                            width={600}
                            height={600}
                        />
                    </Box>
                    <Box className="absolute z-10 text-center w-full flex flex-col items-center justify-center gap-y-8 mt-[-100px]">
                        <Box className="w-full">
                            <Typography variant="h2" className="font-bold" color='#DCC5BD' sx={{
                                fontFamily: 'Chronicle Display',
                                fontSize: '40px',
                                lineHeight: 0.9,
                                fontWeight: 400,
                            }}>
                                READY TO CRAFT
                            </Typography>
                            <Typography variant="h2" className="font-bold" color='#DCC5BD' sx={{
                                fontFamily: 'Chronicle Display',
                                fontSize: '40px',
                                lineHeight: 0.9,
                                fontWeight: 400,
                            }}>
                                YOUR STONE
                            </Typography>
                            <Typography variant="h2" className="font-bold" color='#DCC5BD' sx={{
                                fontFamily: 'Chronicle Display',
                                fontSize: '40px',
                                lineHeight: 0.9,
                                fontWeight: 400,
                            }}>
                                MASTERPIECE?
                            </Typography>
                        </Box>
                        <Box className="px-3">
                            <Typography variant="h5" className="text-center" sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '15px',
                                fontWeight: 300,
                            }}>
                                Contact our friendly and knowledgeable team today. We're here to answer your questions, discuss your project, and guide you towards the perfect stone solution. Let Splendour in Stone be your partner in creating a space that reflects your unique style and endures for generations to come.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="flex w-full justify-center py-4">
                        <Link href="/contact">
                            <WhiteCustomButton label={'Contact Us'} iconSrc={'/images/vector.svg'} />
                        </Link>
                    </Box>
                </Box> : <Box className="flex w-full flex-col relative items-center justify-center gap-y-12 text-white py-12">
                    <Box className="flex justify-center items-center w-full">
                        <Image
                            src="/images/Service/partner.svg" // Ensure this image is in the public/images folder
                            alt="Background"
                            // layout="fill"
                            objectFit="cover"
                            className="opacity-100"
                            width={800}
                            height={800}
                        />
                    </Box>
                    <Box className="absolute z-10 text-center p-8 w-5/6 flex flex-col">
                        <Typography variant="h2" className="mb-4 font-normal" color="#DBC6BC" sx={{
                            fontFamily: 'Chronicle Display',
                            lineHeight: '0.8',
                            fontSize: {
                                xs: '40px', // Font size for extra small screens
                                sm: '60px', // Font size for small screens
                                md: '70px', // Font size for medium screens
                                lg: '80px', // Font size for large screens
                            },
                            fontWeight: 300,
                        }}>
                            READY TO CRAFT YOUR STONE MASTERPIECE?
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
                            Contact our friendly and knowledgeable team today. We're here to answer your questions, discuss your project, and guide you towards the perfect stone solution. Let Splendour in Stone be your partner in creating a space that reflects your unique style and endures for generations to come.

                        </Typography>
                    </Box>
                    <Link href={'/contact'}  className="flex w-full justify-center py-4">
                        <WhiteCustomButton label={'Contact Us'} iconSrc={'/images/vector.svg'} />
                    </Link>
                </Box>
                }

            </Box>
            {isMobile ? <FooterMobile /> : <Footer />}
        </Box>
    );
};

export default ServicesPage;
