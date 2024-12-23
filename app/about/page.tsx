// app/about/page.tsx
'use client'

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import CustomDivider from '../components/Divider';
import FullCustomBrownDivider from '../components/Divider/FullCustomBrownDivider';
import WhiteCustomButton from '../components/WhiteButton';
import StoneProductCard from '../components/About/Living/StoneProductCard';
import { useMediaQuery } from 'react-responsive';
import AgriculturalMobileCarousel from '../components/About/Agricultural/AgriculturalMobileCarousel';
import StonesMobileCarousel from '../components/About/Stones/StonesMobileCarousel';
import LivingMobileCarousel from '../components/About/Living/LivingMobileCarousel';
import FooterMobile from '../components/FooterMobile';
import ShortCustomBrownDivider from '../components/Divider/ShortCustomBrownDivider';



const AboutPage = () => {

    // Mobile view (max-width 768px)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Box>

            <Box className="flex items-center w-full" sx={{ height: isMobile ? '15vh' : '20vh', paddingX: isMobile ? 2 : 0 }}>
                <Header />
            </Box>


            <Box
                sx={{
                    width: '100%',
                    rowGap: isMobile ? '1rem' : '3rem', // Smaller gap for mobile
                    '& > *:not(:last-child)': {
                        marginBottom: isMobile ? '4rem' : '9rem', // Adjust spacing for mobile
                    },
                    marginBottom: isMobile ? '3rem' : '6rem', // Adjust bottom margin for mobile
                }}
            >

                {isMobile ? <Box className="flex w-full flex-col px-3 justify-center items-center gap-y-5">
                    <Box className="flex w-full justify-center">
                        <Box className="flex flex-col w-1/3 gap-y-3 items-center">
                            <Box>
                                <Image
                                    src="/images/About/Products/Mobile/product1.jpg"
                                    alt="Logo"
                                    width={115}
                                    height={125}
                                    className='rounded-xl'
                                />
                            </Box>

                            <Box>
                                <Image
                                    src="/images/About/Products/Mobile/product2.jpg"
                                    alt="Logo"
                                    width={115}
                                    height={195}
                                    className='rounded-xl'
                                />
                            </Box>
                        </Box>
                        <Box className="flex flex-col w-1/3 items-center">
                            <Image
                                src="/images/About/Products/Mobile/product3.jpg"
                                alt="Logo"
                                width={114}
                                height={330}
                                className='rounded-xl'
                            />
                        </Box>
                        <Box className="flex flex-col w-1/3 gap-y-3 items-center">
                            <Box className="">
                                <Image
                                    src="/images/About/Products/Mobile/product4.jpg"
                                    alt="Logo"
                                    width={114}
                                    height={116}
                                    className='rounded-xl'
                                />
                            </Box>
                            <Box className="">
                                <Image
                                    src="/images/About/Products/Mobile/product5.jpg"
                                    alt="Logo"
                                    width={114}
                                    height={205}
                                    className='rounded-xl'
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box className="flex flex-col w-full gap-y-5 items-center" >
                        <Box>
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                className="text-center"
                                sx={{
                                    fontFamily: 'Raleway',
                                    fontSize: '40px',
                                    lineHeight: 1,
                                    fontWeight: 300,
                                }}
                            >
                                Unearth the
                            </Typography>
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                className="text-center"
                                sx={{
                                    fontFamily: 'Raleway',
                                    fontSize: '40px',
                                    lineHeight: 1,
                                    fontWeight: 300,
                                }}
                            >
                                Enduring Beauty of
                            </Typography>
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                className="text-center"
                                sx={{
                                    fontFamily: 'Raleway',
                                    fontSize: '40px',
                                    lineHeight: 1,
                                    fontWeight: 300,
                                }}
                            >
                                Stone with Splendour
                            </Typography>
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                className="text-center"
                                sx={{
                                    fontFamily: 'Raleway',
                                    fontSize: '40px',
                                    lineHeight: 1,
                                    fontWeight: 300,
                                }}
                            >
                                in Stone, <span style={{ fontWeight: 600 }}>Australia’s </span>
                            </Typography>
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                className="text-center"
                                sx={{
                                    fontFamily: 'Raleway',
                                    fontSize: '40px',
                                    lineHeight: 1,
                                    fontWeight: 300,
                                }}
                            >
                                <span style={{ fontWeight: 600 }}>No. 1 High-end</span>
                            </Typography>
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                className="text-center"
                                sx={{
                                    fontFamily: 'Raleway',
                                    fontSize: '40px',
                                    lineHeight: 1,
                                    fontWeight: 300,
                                }}
                            >
                                <span style={{ fontWeight: 600 }}>Stone Supplier</span>
                            </Typography>
                        </Box>

                        <Typography
                            variant="h4"
                            color="white"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                lineHeight: '1.2',
                                width: '90%',
                                fontWeight: 300,
                            }}
                        >
                            At Splendour in Stone, we believe natural stone is an unparalleled design element, capable of injecting timeless beauty and undeniable character into any space.
                        </Typography>
                    </Box>
                </Box>
                    : <Box className="flex w-full px-20 gap-x-6 py-2">
                        <Box className="flex flex-col w-1/2 justify-between">
                            <Box className="flex w-full">
                                <Box className="w-1/2"></Box>
                                <Box className="w-1/2">
                                    <Image
                                        src="/images/About/Products/product1.jpg"
                                        alt="Logo"
                                        width={510}
                                        height={355}
                                        className='rounded-[20px]'
                                    />
                                </Box>
                            </Box>
                            <Box className="w-4/5 h-1/2">
                                <Typography
                                    variant="h4"
                                    color="#DBC6BC"
                                    sx={{
                                        fontFamily: 'Raleway',
                                        lineHeight: '1',
                                        fontSize: {
                                            xs: '20px',  // Font size for extra small screens
                                            sm: '25px',  // Font size for small screens
                                            md: '25px',  // Font size for medium screens
                                            lg: '58px',  // Font size for large screens
                                        },
                                        fontWeight: 300,
                                    }}
                                >
                                    Unearth the Enduring Beauty of Stone with Splendour in Stone, <span style={{ fontWeight: 600, color: '#DBC6BC' }}>Australia’s No. 1 High-end Stone Supplier</span>
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="flex flex-col w-1/4 gap-y-6 h-full">
                            <Image
                                src="/images/About/Products/product2.jpg"
                                alt="Logo"
                                width={510}
                                height={457}
                                className='rounded-[20px]'
                            />
                            <Image
                                src="/images/About/Products/product4.jpg"
                                alt="Logo"
                                width={510}
                                height={327}
                                className='rounded-[20px]'
                            />
                        </Box>
                        <Box className="flex flex-col w-1/4 gap-y-6 h-full">
                            <Image
                                src="/images/About/Products/product3.jpg"
                                alt="Logo"
                                width={510}
                                height={276}
                                className='rounded-[20px]'
                            />
                            <Image
                                src="/images/About/Products/product5.jpg"
                                alt="Logo"
                                width={510}
                                height={276}
                                className='rounded-[20px]'
                            />
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1',
                                    fontSize: {
                                        xs: '7px',  // Font size for extra small screens
                                        sm: '12px',  // Font size for small screens
                                        md: '15px',  // Font size for medium screens
                                        lg: '18px',  // Font size for large screens
                                    },
                                    fontWeight: 300,
                                }}
                            >
                                At Splendour in Stone, we believe natural stone is an unparalleled design element, capable of injecting timeless beauty and undeniable character into any space.
                            </Typography>
                        </Box>
                    </Box>}

                {isMobile ? <Box
                    className="relative flex flex-col w-full px-3 py-12 gap-x-12 gap-y-6 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/About/Legacy/Mobile/legacy-background-mobile.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat',
                        paddingTop: "100px" // Prevents repeating the background image
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
                                A LEGACY BUILT ON QUALITY AND EXPERTISE
                            </Typography>
                            <Box className="flex justify-center">
                                <Typography variant="h5" className="text-center" color='#000000' sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '15px',
                                    width: '70%',
                                    fontWeight: 300,
                                }}>
                                    Splendour in Stone has carved its niche in Australia&apos;s stone industry thanks to the
                                    wanderlust of its founder, Jordan Hill.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="flex w-full justify-center">
                        <Image
                            src="/images/About/Legacy/Mobile/legacybuilt-mobile.jpg" // Ensure this image is in the public/images folder
                            alt="Background"
                            // layout="fill"
                            objectFit="cover"
                            className="opacity-100 rounded-2xl"
                            width={390}
                            height={844}
                        />

                    </Box>

                </Box> : <Box
                    className="relative flex w-full py-36 px-20 gap-x-12 rounded-[20px] justify-between"
                    sx={{
                        backgroundImage: 'url(images/About/legacy-background.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >
                    <Box className="flex w-1/2 justify-center items-center">
                        <Image
                            src="/images/About/legacybuilt.jpg" // Ensure this image is in the public/images folder
                            alt="Background"
                            // layout="fill"
                            objectFit="cover"
                            className="opacity-100 rounded-2xl"
                            width={836}
                            height={736}
                        />

                    </Box>
                    <Box className="flex w-1/2">

                        <Box className="flex flex-col w-full justify-center gap-y-3">
                            <Typography variant="h2" className="mb-4 font-light" color='#283C28' sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.8',
                                fontStyle: 'italic',
                                fontSize: {
                                    xs: '40px', // Font size for extra small screens
                                    sm: '60px', // Font size for small screens
                                    md: '80px', // Font size for medium screens
                                    lg: '90px', // Font size for large screens
                                },
                                fontWeight: 300,
                            }}>
                                A LEGACY BUILT ON QUALITY AND EXPERTISE
                            </Typography>
                            <Box className="w-4/5">
                                <Typography variant="h5" color='#000000' sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: '12px', // Font size for extra small screens
                                        sm: '14px', // Font size for small screens
                                        md: '16px', // Font size for medium screens
                                        lg: '20px', // Font size for large screens
                                    },
                                    fontWeight: 400,
                                }}>
                                    Splendour in Stone has carved its niche in Australia&apos;s stone industry thanks to the
                                    wanderlust of its founder, Jordan Hill.
                                </Typography>
                            </Box>


                        </Box>
                    </Box>
                </Box>
                }

                {isMobile ? <Box className="flex w-full flex-col relative items-center justify-center text-white">
                    <Box className="flex justify-center items-center w-full">
                        <Image
                            src="/images/About/suppliers.png" // Ensure this image is in the public/images folder
                            alt="Background"
                            // layout="fill"
                            objectFit="cover"
                            width={275}
                            height={275}
                        />
                    </Box>
                    <Box className="absolute z-10 text-center p-8 w-full flex flex-col gap-x-3 mb-24">
                        {isMobile ? <Box style={{ height: "5px", marginTop: "100px" }}></Box> : <></>}
                        <Typography variant="h2" className="font-normal" color="#DBC6BC" sx={{
                            fontFamily: 'Chronicle Display',
                            lineHeight: '1',
                            fontSize: '40px',
                            fontWeight: 300,
                        }}>
                            WE&apos;RE MORE THAN JUST SUPPLIERS
                        </Typography>
                        <ShortCustomBrownDivider />
                        <Box className="flex w-full justify-center">
                            <Typography variant="h5" sx={{
                                width: '70%',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                lineHeight: '1.4',
                                fontWeight: 300,
                            }}>
                                we&apos;re stone enthusiasts dedicated to crafting exceptional experiences for our clients.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                    : <Box className="flex w-full flex-col relative items-center justify-center text-white">
                        <Box className="flex justify-center items-center w-[33%]">
                            <Image
                                src="/images/About/suppliers.png" // Ensure this image is in the public/images folder
                                alt="Background"
                                // layout="fill"
                                objectFit="cover"
                                className="opacity-80"
                                width={600}
                                height={600}
                            />
                        </Box>
                        <Box className="absolute z-10 text-center p-8 w-3/4 flex flex-col gap-y-6">
                            <Typography variant="h2" className="font-semibold" color="#DBC6BC" sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.8',
                                fontSize: {
                                    xs: '40px', // Font size for extra small screens
                                    sm: '60px', // Font size for small screens
                                    md: '80px', // Font size for medium screens
                                    lg: '100px', // Font size for large screens
                                },
                                fontWeight: 300,
                            }}>
                                WE&apos;RE MORE THAN JUST SUPPLIERS
                            </Typography>
                            <ShortCustomBrownDivider />
                            <Typography variant="h5" color="white" sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: '12px', // Font size for extra small screens
                                    sm: '14px', // Font size for small screens
                                    md: '16px', // Font size for medium screens
                                    lg: '18px', // Font size for large screens
                                },
                                fontWeight: 300,
                            }}>
                                we&apos;re stone enthusiasts dedicated to crafting exceptional experiences for our clients.
                            </Typography>
                        </Box>
                    </Box>
                }

                {isMobile ? <Box
                    className="relative flex flex-col w-full px-3 py-8 gap-x-12 gap-y-20 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/About/Explorations/Mobile/background-mobile.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >

                    <Box className="flex w-full flex-col gap-y-6">

                        <Box className="flex w-full flex-col justify-center gap-y-3">
                            <Typography
                                variant="h4"
                                color='#283C28'
                                className='font-semibold text-center'
                                sx={{
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '1',
                                    fontSize: '40px',
                                    fontWeight: 300,
                                }}
                            >
                                THROUGH HIS EXPLORATIOINS ACROSS AFRICA&apos;S EAST COAST, ENDING IN EGYPT,
                            </Typography>
                            <Box className="flex justify-center">
                                <Typography
                                    variant="h4"
                                    color='#000000'
                                    sx={{
                                        width: '85%',
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        fontWeight: 300,
                                        lineHeight: '1.2',
                                        textAlign: 'center',
                                    }}
                                >
                                    he came across the immense beauty of limestone as displayed in the Pyramids of Giza. But this was just the beginning of his discovery of natural stone’s beauty.
                                </Typography>
                            </Box>


                        </Box>

                        <Box className="w-full relative">
                            <Box className="flex w-full justify-center">
                                <Image
                                    src="/images/About/Explorations/Mobile/man1.svg"
                                    alt="Logo"
                                    width={358}
                                    height={422}
                                    className='rounded-xl'
                                />
                            </Box>
                            <Box>
                                <Image

                                    src="/images/About/Explorations/Mobile/Vector-bottom-right.svg"
                                    alt="Logo"
                                    width={114}
                                    height={113}
                                    className='absolute top-[309px] left-[10px]'
                                />
                            </Box>
                        </Box>



                    </Box>

                    <Box className="flex w-full flex-col gap-y-6">

                        <Box className="flex w-full flex-col justify-center items-center gap-y-3">
                            <Box className="flex flex-col w-full justify-center items-center">
                                <Typography
                                    variant="h4"
                                    color='#283C28'
                                    className='font-semibold'
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontSize: '40px',
                                        fontWeight: 300,
                                        textAlign: 'center',
                                    }}
                                >
                                    HIS TRAVELS
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color='#283C28'
                                    className='font-semibold'
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontSize: '40px',
                                        fontWeight: 300,
                                        textAlign: 'center',
                                    }}
                                >
                                    TOOK HIM TO
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color='#283C28'
                                    className='font-semibold'
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontSize: '40px',
                                        fontWeight: 300,
                                        textAlign: 'center',
                                    }}
                                >
                                    SOUTH
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color='#283C28'
                                    className='font-semibold'
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontSize: '40px',
                                        fontWeight: 300,
                                        textAlign: 'center',
                                    }}
                                >
                                    AMERICA, TO
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color='#283C28'
                                    className='font-semibold'
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontSize: '40px',
                                        fontWeight: 300,
                                        textAlign: 'center',
                                    }}
                                >
                                    THE HIDDEN
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color='#283C28'
                                    className='font-semibold'
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontSize: '40px',
                                        fontWeight: 300,
                                        textAlign: 'center',
                                    }}
                                >
                                    CITY OF THE
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color='#283C28'
                                    className='font-semibold'
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontSize: '40px',
                                        fontWeight: 300,
                                        textAlign: 'center',
                                    }}
                                >
                                    INCAS IN MACHU
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color='#283C28'
                                    className='font-semibold'
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontSize: '40px',
                                        fontWeight: 300,
                                        textAlign: 'center',
                                    }}
                                >
                                    PICCHU.
                                </Typography>
                            </Box>

                            <Typography
                                variant="h4"
                                color='#000000'
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '15px',
                                    fontWeight: 300,
                                    textAlign: 'center',
                                }}
                            >
                                In all its glory, it was a great discovery of unimaginable granite features built with precision despite the area being unconducive for building.
                            </Typography>

                        </Box>

                        <Box className="w-full relative">
                            <Box className="flex w-full justify-center">
                                <Image
                                    src="/images/About/Explorations/Mobile/man2.svg"
                                    alt="Logo"
                                    width={358}
                                    height={422}
                                    className='rounded-xl'
                                />
                            </Box>
                            <Box className='absolute top-[309px] right-[10px]'>
                                <Image

                                    src="/images/About/Explorations/Mobile/Vector-bottom-right.svg"
                                    alt="Logo"
                                    width={114}
                                    height={113}
                                />
                            </Box>
                        </Box>



                    </Box>

                </Box> : <Box
                    className="relative flex flex-col w-full px-20 py-24 gap-x-12 gap-y-36 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/About/legacy-background.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >

                    <Box className="flex w-full justify-between gap-x-16">

                        <Box className="flex w-1/2">
                            <Image
                                src="/images/About/man1.jpg"
                                alt="Logo"
                                width={840}
                                height={830}
                                className='rounded-[20px]'
                            />
                        </Box>

                        <Box className="flex w-2/5 flex-col justify-center gap-y-7">
                            <Typography
                                variant="h4"
                                color='#283C28'
                                sx={{
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '0.8',
                                    fontSize: {
                                        xs: '15px', // Font size for extra small screens
                                        sm: '30px', // Font size for small screens
                                        md: '35px', // Font size for medium screens
                                        lg: '70px', // Font size for large screens
                                    },
                                    fontWeight: 400,
                                    textAlign: 'start',
                                }}
                            >
                                THROUGH HIS EXPLORATIOINS ACROSS AFRICA&apos;S EAST COAST, ENDING IN EGYPT,
                            </Typography>
                            <Box className="w-5/6">
                                <Typography
                                    variant="h4"
                                    color='#000000'
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: {
                                            xs: '10px', // Font size for extra small screens
                                            sm: '15px', // Font size for small screens
                                            md: '18px', // Font size for medium screens
                                            lg: '15px', // Font size for large screens
                                        },
                                        fontWeight: 400,
                                    }}
                                >
                                    he came across the immense beauty of limestone as displayed in the Pyramids of Giza. But this was just the beginning of his discovery of natural stone’s beauty.
                                </Typography>
                            </Box>

                            <Box>
                                <Image
                                    src="images/About/Vector/Vector-bottom-right.svg"
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    className='sm:w-[40px] md:w-[60px] lg:w-[80px]'
                                />
                            </Box>
                        </Box>

                    </Box>

                    {/* <CustomDivider /> */}

                    <Box className="flex w-full justify-between gap-10">

                        <Box className="flex w-1/2 flex-col justify-center gap-y-7">
                            <Typography
                                variant="h4"
                                className='font-normal'
                                color='#283C28'
                                sx={{
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '0.8',
                                    fontSize: {
                                        xs: '15px', // Font size for extra small screens
                                        sm: '30px', // Font size for small screens
                                        md: '35px', // Font size for medium screens
                                        lg: '70px', // Font size for large screens
                                    },
                                    fontWeight: 300,
                                    textAlign: 'start',
                                }}
                            >
                                HIS TRAVELS TOOK HIM TO SOUTH AMERICA, TO THE HIDDEN CITY OF THE INCAS IN MACHU PICCHU.
                            </Typography>
                            <Typography
                                variant="h4"
                                color='#000000'
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: '10px', // Font size for extra small screens
                                        sm: '15px', // Font size for small screens
                                        md: '18px', // Font size for medium screens
                                        lg: '20px', // Font size for large screens
                                    },
                                    fontWeight: 400,
                                    textAlign: 'start',
                                }}
                            >
                                In all its glory, it was a great discovery of unimaginable granite features built with precision despite the area being unconducive for building.
                            </Typography>
                            <Box>
                                <Image
                                    src="images/About/Vector/Vector-bottom-right.svg"
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    className='sm:w-[40px] md:w-[60px] lg:w-[80px]'
                                />
                            </Box>
                        </Box>

                        <Box className="flex w-1/2">
                            <Image
                                src="/images/About/man2.jpg"
                                alt="Logo"
                                width={840}
                                height={830}
                                className='rounded-[20px]'
                            />
                        </Box>

                    </Box>

                </Box>}

                {isMobile ? <Box className="flex w-full flex-col justify-center items-center px-3 gap-y-4">

                    <Box className="flex flex-col w- justify-center">
                        <Typography
                            variant="h4"
                            color='#DBC6BC'
                            sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                fontWeight: 400,
                                textAlign: 'center',
                            }}
                        >
                            THESE WERE BUT
                        </Typography>
                        <Typography
                            variant="h4"
                            color='#DBC6BC'
                            sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                fontWeight: 400,
                                textAlign: 'center',
                            }}
                        >
                            A FEW OF THE
                        </Typography>
                        <Typography
                            variant="h4"
                            color='#DBC6BC'
                            sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                fontWeight: 400,
                                textAlign: 'center',
                            }}
                        >
                            ARCHITECTURAL
                        </Typography>
                        <Typography
                            variant="h4"
                            color='#DBC6BC'
                            sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                fontWeight: 400,
                                textAlign: 'center',
                            }}
                        >
                            INSPIRATIONS
                        </Typography>

                    </Box>

                    <Box className="flex flex-col w-[75%]">
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                fontWeight: 300,
                                lineHeight: '1.2',
                                textAlign: 'center',
                            }}
                        >
                            that pushed Jordan to explore the craftsmanship and assembly of natural stone. Other notable features included:
                        </Typography>
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                fontWeight: 300,
                                lineHeight: '1.2',
                                textAlign: 'center',
                            }}
                        >
                            Rome&apos;s St. Peter&apos;s Basilica, St. Paul&apos;s Cathedral, and the Colosseum
                        </Typography>
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                fontWeight: 300,
                                lineHeight: '1.2',
                                textAlign: 'center',
                            }}
                        >
                            Cambodia’s Angkor Wat.
                        </Typography>
                    </Box>

                </Box> : <Box className="flex w-full justify-between items-start px-20">

                    <Box className="flex w-3/5 flex-col justify-center">
                        <Typography
                            variant="h4"
                            color='#DBC6BC'
                            sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.9',
                                fontStyle: 'italic',
                                fontSize: {
                                    xs: '15px', // Font size for extra small screens
                                    sm: '30px', // Font size for small screens
                                    md: '35px', // Font size for medium screens
                                    lg: '65px', // Font size for large screens
                                },
                                fontWeight: 300,
                                textAlign: 'start',
                            }}
                        >
                            THESE WERE BUT A FEW OF THE ARCHITECTURAL INSPIRATIONS
                        </Typography>

                    </Box>

                    <Box className="flex flex-col w-1/4">
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: '10px', // Font size for extra small screens
                                    sm: '15px', // Font size for small screens
                                    md: '18px', // Font size for medium screens
                                    lg: '18px', // Font size for large screens
                                },
                                lineHeight: '1.2',
                                fontWeight: 400,
                                textAlign: 'start',
                            }}
                        >
                            that pushed Jordan to explore the craftsmanship and assembly of natural stone. Other notable features included:
                        </Typography>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'white' }}>
                            <li>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: {
                                            xs: '10px',
                                            sm: '15px',
                                            md: '18px',
                                            lg: '18px',
                                        },
                                        lineHeight: '1.2',
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    Rome&apos;s St. Peter&apos;s Basilica, St. Paul&apos;s Cathedral, and the Colosseum
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: {
                                            xs: '10px',
                                            sm: '15px',
                                            md: '18px',
                                            lg: '18px',
                                        },
                                        fontWeight: 300,
                                        lineHeight: '1.2',
                                        textAlign: 'start',
                                    }}
                                >
                                    Cambodia’s Angkor Wat.
                                </Typography>
                            </li>
                        </ul>

                    </Box>

                </Box>}

                {isMobile ? <Box><FullCustomBrownDivider /></Box> : <Box className="px-20"><FullCustomBrownDivider /></Box>}

                {isMobile ? <Box className="px-3"><AgriculturalMobileCarousel /></Box> : <Box className="flex w-full px-20 gap-x-6 ">
                    <Box className="flex w-1/4">
                        <Image
                            src="/images/About/Agricultural/image1.jpg"
                            alt="Logo"
                            width={408}
                            height={413}
                            className='rounded-[20px]'
                        />
                    </Box>
                    <Box className="flex w-1/4">
                        <Image
                            src="/images/About/Agricultural/image2.jpg"
                            alt="Logo"
                            width={408}
                            height={413}
                            className='rounded-[20px]'
                        />
                    </Box>
                    <Box className="flex w-1/4">
                        <Image
                            src="/images/About/Agricultural/image3.jpg"
                            alt="Logo"
                            width={408}
                            height={413}
                            className='rounded-[20px]'
                        />
                    </Box>
                    <Box className="flex w-1/4">
                        <Image
                            src="/images/About/Agricultural/image4.jpg"
                            alt="Logo"
                            width={408}
                            height={413}
                            className='rounded-[20px]'
                        />
                    </Box>
                </Box>
                }

                {isMobile ? <Box
                    className="relative flex flex-col w-full px-3 py-12 gap-x-12 gap-y-6 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/About/Achievements/Mobile/backgrouond-mobile.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >
                    <Box className="flex w-full">
                        <Box className="flex flex-col w-full items-center justify-center">
                            <Typography variant="h2" className="mb-4 font-light text-center" color='#283C28' sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                fontWeight: 300,
                            }}>
                                NOTABLE
                                ACHIEVEMENTS
                            </Typography>

                            <Typography variant="h5" className="text-center" color='#000000' sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                fontWeight: 300,
                            }}>
                                before his founding of Splendour in Stone include his apprenticeship in landscape construction and his work on fireplaces and feature walls using stone.
                                However, his passion remained in supplying stone after much-needed research, travel, and testing, leading to the birth of Slendour in Stone Pty Ltd.
                                Our journey was also fueled by a desire to bridge the gap between premium stone and accessible design solutions. Over the years, we've fostered a team of passionate professionals with a wealth of knowledge about natural stone and its applications.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="flex w-full justify-center">
                        <Image
                            src="/images/About/Achievements/Mobile/man-mobile.jpg" // Ensure this image is in the public/images folder
                            alt="Background"
                            objectFit="cover"
                            className="opacity-100 rounded-2xl"
                            width={356}
                            height={454}
                        />

                    </Box>

                </Box> : <Box
                    className="relative flex w-full px-20 py-24 gap-x-16 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/About/Achievements/background.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >
                    <Box className="flex w-[65%] justify-center flex-col gap-y-5">
                        <Typography variant="h2" color="#283C28" className="mb-4 font-normal" sx={{
                            fontFamily: 'Chronicle Display',
                            fontStyle: 'italic',
                            lineHeight: '0.8',
                            fontSize: {
                                xs: '30px', // Font size for extra small screens
                                sm: '40px', // Font size for small screens
                                md: '60px', // Font size for medium screens
                                lg: '100px', // Font size for large screens
                            },
                            fontWeight: 300,
                        }}>
                            NOTABLE ACHIEVEMENTS
                        </Typography>
                        <Box className="w-5/6">
                            <Typography variant="h5" className="mb-8" sx={{
                                fontFamily: 'var(--font-montserrat)',
                                color: '#000000',
                                fontSize: {
                                    xs: '12px', // Font size for extra small screens
                                    sm: '14px', // Font size for small screens
                                    md: '16px', // Font size for medium screens
                                    lg: '18px', // Font size for large screens
                                },
                                lineHeight: '1.2',
                                fontWeight: 400,
                            }}>
                                before his founding of Splendour in Stone include his apprenticeship in landscape construction and his work on fireplaces and feature walls using stone.
                                However, his passion remained in supplying stone after much-needed research, travel, and testing, leading to the birth of Slendour in Stone Pty Ltd.
                                Our journey was also fueled by a desire to bridge the gap between premium stone and accessible design solutions. Over the years, we&apos;ve fostered a team of passionate professionals with a wealth of knowledge about natural stone and its applications.
                            </Typography>
                        </Box>


                    </Box>
                    <Box className="w-[35%]" >
                        <Image
                            src="/images/About/Achievements/man.jpg" // Ensure this image is in the public/images folder
                            alt="Background"
                            // layout="fill"
                            objectFit="cover"
                            className="opacity-100 rounded-2xl aspect-[1/1]"
                            width={672}
                            height={736}
                        />
                    </Box>

                </Box>}

                {isMobile ? <Box><CustomDivider /></Box> : <></>}

                {isMobile ? <Box className="px-6">
                    <Box className="flex w-full flex-col items-center">
                        <Typography
                            variant="h4"
                            color="#DBC6BC"
                            sx={{
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                lineHeight: '1',
                                fontWeight: 400,
                                textAlign: 'center',
                            }}
                        >
                            TODAY,
                        </Typography>
                        <Typography
                            variant="h4"
                            color="#DBC6BC"
                            sx={{
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                lineHeight: '1',
                                fontWeight: 400,
                                textAlign: 'center',
                            }}
                        >
                            SPLENDOURS IN
                        </Typography>
                        <Typography
                            variant="h4"
                            color="#DBC6BC"
                            sx={{
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                lineHeight: '1',
                                fontWeight: 400,
                                textAlign: 'center',
                            }}
                        >

                            STONE SUPPLIES
                        </Typography>
                        <Typography
                            variant="h4"
                            color="#DBC6BC"
                            sx={{
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                lineHeight: '1',
                                fontWeight: 400,
                                textAlign: 'center',
                            }}
                        >
                            A WIDE RANGE
                        </Typography>
                        <Typography
                            variant="h4"
                            color="#DBC6BC"
                            sx={{
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                lineHeight: '1',
                                fontWeight: 400,
                                textAlign: 'center',
                            }}
                        >
                            OF NATURAL
                        </Typography>
                        <Typography
                            variant="h4"
                            color="#DBC6BC"
                            sx={{
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                lineHeight: '1',
                                fontWeight: 400,
                                textAlign: 'center',
                            }}
                        >
                            STONES FROM
                        </Typography>
                        <Typography
                            variant="h4"
                            color="#DBC6BC"
                            sx={{
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                lineHeight: '1',
                                fontWeight: 400,
                                textAlign: 'center',
                            }}
                        >
                            ALL OVER THE
                        </Typography>
                        <Typography
                            variant="h4"
                            color="#DBC6BC"
                            sx={{
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                lineHeight: '1',
                                fontWeight: 400,
                                textAlign: 'center',
                            }}
                        >
                            WORLD,
                        </Typography>
                        <Typography
                            variant="h4"
                            color="#DBC6BC"
                            sx={{
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                lineHeight: '1',
                                fontWeight: 400,
                                textAlign: 'center',
                            }}
                        >
                            INCLUDING:
                        </Typography>
                    </Box>
                </Box>
                    : <Box className="px-20">
                        <Box className="flex w-full">
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                sx={{
                                    fontFamily: 'Chronicle Display',
                                    fontStyle: 'italic',
                                    lineHeight: '1',
                                    fontSize: {
                                        xs: '13px', // Font size for extra small screens
                                        sm: '30px', // Font size for small screens
                                        md: '35px', // Font size for medium screens
                                        lg: '70px', // Font size for large screens
                                    },
                                    fontWeight: 300,
                                    textAlign: 'start',
                                }}
                            >
                                TODAY, SPLENDOURS IN STONE SUPPLIES A WIDE RANGE OF NATURAL STONES FROM ALL OVER THE WORLD, INCLUDEING:
                            </Typography>
                        </Box>
                    </Box>}


                {isMobile ? <Box className="flex w-full flex-col gap-y-5">
                    <Box className="flex w-full flex-col mx-auto justify-center items-center">
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                lineHeight: '1.2',
                                fontSize: '13px',
                                fontWeight: 300,
                                textAlign: 'center',
                            }}
                        >
                            We also pride ourselves on an
                        </Typography>
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                lineHeight: '1.2',
                                fontSize: '13px',
                                fontWeight: 300,
                                textAlign: 'center',
                            }}
                        >
                            experienced team we have assembled
                        </Typography>
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                lineHeight: '1.2',
                                fontSize: '13px',
                                fontWeight: 300,
                                textAlign: 'center',
                            }}
                        >
                            over the years, creating a haven for all
                        </Typography>
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                lineHeight: '1.2',
                                fontSize: '13px',
                                fontWeight: 300,
                                textAlign: 'center',
                            }}
                        >
                            our customers and their inquiries.
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Box className="w-1/2 px-6 py-3" sx={{ borderTop: '1px solid #DCC5BD', borderBottom: '1px solid #DCC5BD', borderRight: '1px solid #DCC5BD' }}>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.4',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                    textAlign: 'center',
                                }}
                            >
                                Bluestone
                            </Typography>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.4',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                    textAlign: 'center',
                                }}
                            >
                                Granite
                            </Typography>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.4',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                    textAlign: 'center',
                                }}
                            >
                                Limestone
                            </Typography>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.4',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                    textAlign: 'center',
                                }}
                            >
                                Marble
                            </Typography>
                        </Box>
                        <Box className="w-1/2 px-6 py-3" sx={{ borderTop: '1px solid #DCC5BD', borderBottom: '1px solid #DCC5BD' }}>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.4',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                    textAlign: 'center',
                                }}
                            >
                                Porphyry
                            </Typography>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.4',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                    textAlign: 'center',
                                }}
                            >
                                Sandstone
                            </Typography>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.4',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                    textAlign: 'center',
                                }}
                            >
                                Slate
                            </Typography>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.4',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                    textAlign: 'center',
                                }}
                            >
                                Travertine, etc
                            </Typography>
                        </Box>
                    </Box>
                </Box> : <Box className="flex w-full justify-between px-20">
                    <Box className="w-1/5">
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'white' }}>
                            <li>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.2',
                                        fontSize: {
                                            xs: '10px',
                                            sm: '15px',
                                            md: '18px',
                                            lg: '18px',
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    Bluestone
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.2',
                                        fontSize: {
                                            xs: '10px',
                                            sm: '15px',
                                            md: '18px',
                                            lg: '18px',
                                        },

                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    Granite
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.2',
                                        fontSize: {
                                            xs: '10px',
                                            sm: '15px',
                                            md: '18px',
                                            lg: '18px',
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    Limestone
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.2',
                                        fontSize: {
                                            xs: '10px',
                                            sm: '15px',
                                            md: '18px',
                                            lg: '18px',
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    Marble
                                </Typography>
                            </li>
                        </ul>
                    </Box>
                    <Box className="w-1/5">
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'white' }}>
                            <li>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.2',
                                        fontSize: {
                                            xs: '10px',
                                            sm: '15px',
                                            md: '18px',
                                            lg: '18px',
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    Porphyry
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.2',
                                        fontSize: {
                                            xs: '10px',
                                            sm: '15px',
                                            md: '18px',
                                            lg: '18px',
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    Sandstone
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.2',
                                        fontSize: {
                                            xs: '10px',
                                            sm: '15px',
                                            md: '18px',
                                            lg: '18px',
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    Slate
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.2',
                                        fontSize: {
                                            xs: '10px',
                                            sm: '15px',
                                            md: '18px',
                                            lg: '18px',
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    Travertine, etc.
                                </Typography>
                            </li>
                        </ul>
                    </Box>
                    <Box className="w-1/4">
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                lineHeight: '1.2',
                                fontSize: {
                                    xs: '10px',
                                    sm: '15px',
                                    md: '18px',
                                    lg: '18px',
                                },
                                fontWeight: 300,
                                textAlign: 'start',
                            }}
                        >
                            We also pride ourselves on an experienced team we have assembled over the years, creating a haven for all our customers and their inquiries.
                        </Typography>
                    </Box>
                    <Box className="1/5">
                        <Image
                            src="images/About/Vector/Vector-bottom-left.svg"
                            alt="Logo"
                            width={40}
                            height={40}
                            className='sm:w-[40px] md:w-[60px] lg:w-[90px]'
                        />
                    </Box>
                </Box>}

                {isMobile ? <StonesMobileCarousel /> : <Box className="flex w-full px-20 gap-x-20 ">
                    <Box className="flex w-1/4">
                        <Image
                            src="/images/About/Stones/stone1.png"
                            alt="Logo"
                            width={380}
                            height={380}
                        />
                    </Box>
                    <Box className="flex w-1/4">
                        <Image
                            src="/images/About/Stones/stone2.png"
                            alt="Logo"
                            width={380}
                            height={380}
                        />
                    </Box>
                    <Box className="flex w-1/4">
                        <Image
                            src="/images/About/Stones/stone3.png"
                            alt="Logo"
                            width={380}
                            height={380}
                        />
                    </Box>
                    <Box className="flex w-1/4">
                        <Image
                            src="/images/About/Stones/stone4.png"
                            alt="Logo"
                            width={380}
                            height={380}
                        />
                    </Box>
                </Box>}

                {isMobile ? <Box
                    className="pl-5 pb-7"
                    sx={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '1 / 2.16', // Aspect ratio of 3:1 (width to height)
                        backgroundImage: 'url("/images/About/Requirements/house-mobile.jpg")',
                        backgroundSize: 'cover', // Ensure the image covers the entire box
                        backgroundPosition: 'center', // Center the image
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        borderRadius: '20px',
                        overflow: 'hidden', // Ensures content stays within the rounded corners
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Add a semi-transparent dark overlay
                            backdropFilter: 'blur(3px)', // Apply the blur effect
                            zIndex: 1, // Ensure it sits behind the content
                        },
                    }}
                >
                    <Box className="w-full" sx={{ position: 'relative', zIndex: 2 }}>
                        {/* Optional content */}
                    </Box>
                    <Box
                        className="flex flex-col w-full gap-y-5"
                        sx={{ position: 'relative', zIndex: 2 }}
                    >
                        <Box className="flex flex-col">
                            <Box className="flex flex-col w-full">
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        fontStyle: 'italic',
                                        lineHeight: '1.2',
                                        fontSize: '40px',
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    MORE THAN
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        fontStyle: 'italic',
                                        lineHeight: '1.2',
                                        fontSize: '40px',
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    JUST PRODUCTS:
                                </Typography>
                                <Typography
                                    component="span"
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        fontStyle: 'italic',
                                        lineHeight: '1.2',
                                        fontSize: '40px',
                                        fontWeight: 300,
                                        color: 'white', // Set text color
                                        textAlign: 'start',
                                    }}
                                >
                                    CRAFTED WITH
                                </Typography>
                                <Typography
                                    component="span"
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        fontStyle: 'italic',
                                        lineHeight: '1.2',
                                        fontSize: '40px',
                                        fontWeight: 300,
                                        color: 'white', // Set text color
                                        textAlign: 'start',
                                    }}
                                >
                                    YOU IN MIND
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography
                                variant='h3'
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.3',
                                    width: '95%',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                    color: 'white', // Set text color
                                    textAlign: 'start',
                                }}
                            >
                                At Splendour in Stone, we believe there&apos;s no one-size-fits-all
                                approach to stone design. Our extensive product range caters to a
                                diverse set of needs, from the timeless elegance of marble to the
                                contemporary appeal of granite. We understand that selecting the
                                perfect stone for your project can be daunting. That&apos;s why we go
                                beyond simply offering products. Our team delves into the specifics
                                of your project – whether it&apos;s combating wear and tear in
                                high-traffic areas, achieving a specific aesthetic, or enhancing
                                the natural light in your space. We offer a comprehensive range of
                                stone cladding, walling, and paving solutions, meticulously chosen
                                for their durability, aesthetics, and suitability for various
                                design challenges....
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                    : <Box
                        className="flex w-full px-12"
                        sx={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '1.56 / 1', // Aspect ratio of 3:1 (width to height)
                            backgroundImage: 'url("/images/About/Requirements/house.jpg")',
                            backgroundSize: 'cover', // Ensure the image covers the entire box
                            backgroundPosition: 'center', // Center the image
                            display: 'flex',
                            alignItems: 'center', // Center align text vertically
                            justifyContent: 'flex-start', // Center align text horizontally
                            borderRadius: '25px',
                        }}
                    >
                        <Box className="flex flex-col w-full h-full justify-center">
                            {/* Left half with background opacity */}
                            <Box
                                className="w-full lg:w-1/2 flex justify-center items-center"
                                sx={{
                                    position: 'absolute', // Ensure it covers only the left side
                                    height: '100%', // Full height
                                    left: 0, // Align to the left side
                                    top: 0, // Ensure it spans the full height
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Apply background opacity
                                }}
                            >
                                <Box className="flex flex-col w-5/6 pl-12 gap-y-6">
                                    <Box>
                                        <Typography
                                            variant="h4"
                                            color="white"
                                            sx={{
                                                fontFamily: 'Chronicle Display',
                                                fontStyle: 'italic',
                                                lineHeight: '0.8',
                                                fontSize: {
                                                    xs: '20px', // Font size for extra small screens
                                                    sm: '25px', // Font size for small screens
                                                    md: '45px', // Font size for medium screens
                                                    lg: '70px', // Font size for large screens
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                            }}
                                        >
                                            MORE THAN JUST PRODUCTS:
                                        </Typography>
                                        <Typography
                                            component="span"
                                            sx={{
                                                fontFamily: 'Chronicle Display',
                                                fontStyle: 'italic',
                                                lineHeight: '0.8',
                                                fontSize: {
                                                    xs: '20px', // Font size for extra small screens
                                                    sm: '25px', // Font size for small screens
                                                    md: '45px', // Font size for medium screens
                                                    lg: '70px', // Font size for large screens
                                                },
                                                fontWeight: 300,
                                                color: 'white', // Set text color
                                                textAlign: 'start'
                                            }}
                                        >
                                            CRAFTED WITH YOU IN MIND
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography
                                            component="span"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                lineHeight: '1',
                                                fontSize: {
                                                    xs: '7px', // Font size for extra small screens
                                                    sm: '10px', // Font size for small screens
                                                    md: '15px', // Font size for medium screens
                                                    lg: '18px', // Font size for large screens
                                                },
                                                fontWeight: 300,
                                                color: 'white', // Set text color
                                                textAlign: 'start'
                                            }}
                                        >
                                            At Splendour in Stone, we believe there&apos;s no one-size-fits-all approach to stone design. Our extensive product range caters to a diverse set of needs, from the timeless elegance of marble to the contemporary appeal of granite.
                                            We understand that selecting the perfect stone for your project can be daunting. That&apos;s why we go beyond simply offering products.
                                            Our team delves into the specifics of your project – whether it&apos;s combating wear and tear in high-traffic areas, achieving a specific aesthetic, or enhancing the natural light in your space.
                                            We offer a comprehensive range of stone cladding, walling, and paving solutions, meticulously chosen for their durability, aesthetics, and suitability for various design challenges.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="w-1/2">
                                {/* Empty right half */}
                            </Box>
                        </Box>
                    </Box>}

                {isMobile ? <CustomDivider /> : <></>}

                {isMobile ? <Box className="flex flex-col w-full px-3 gap-y-4">

                    <Box className="flex flex-col w-full px-7">
                        <Typography
                            variant="h4"
                            color='#DBC6BC'
                            sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                fontWeight: 300,
                                textAlign: 'center',
                            }}
                        >
                            BEYOND AESTHETICS:
                        </Typography>
                        <Typography
                            variant="h4"
                            color='#DBC6BC'
                            sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                fontWeight: 300,
                                textAlign: 'center',
                            }}
                        >
                            STONE FOR A
                        </Typography>
                        <Typography
                            variant="h4"
                            color='#DBC6BC'
                            sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontStyle: 'italic',
                                fontSize: '40px',
                                fontWeight: 300,
                                textAlign: 'center',
                            }}
                        >
                            BETTER
                            LIVING SPACE
                        </Typography>

                    </Box>

                    <Box className="flex flex-col items-center w-full">
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '13px',
                                fontWeight: 300,
                                lineHeight: '1.2',
                                width: '90%',
                                textAlign: 'center',
                            }}
                        >
                            We understand that your home is more than just bricks and mortar. It&apos;s a sanctuary, a reflection of your style, and a place where comfort and functionality reign supreme. That&apos;s why we don&apos;t just offer stone products; we offer solutions.
                        </Typography>

                    </Box>

                </Box> : <Box className="flex w-full justify-between items-start px-20">

                    <Box className="flex w-1/2 flex-col justify-center">
                        <Typography
                            variant="h4"
                            color='#DBC6BC'
                            sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.9',
                                fontStyle: 'italic',
                                fontSize: {
                                    xs: '15px', // Font size for extra small screens
                                    sm: '30px', // Font size for small screens
                                    md: '35px', // Font size for medium screens
                                    lg: '70px', // Font size for large screens
                                },
                                fontWeight: 400,
                                textAlign: 'start',
                            }}
                        >
                            BEYOND AESTHETICS:
                            STONE FOR A BETTER
                            LIVING SPACE
                        </Typography>

                    </Box>

                    <Box className="flex flex-col w-1/4">
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: '10px', // Font size for extra small screens
                                    sm: '15px', // Font size for small screens
                                    md: '18px', // Font size for medium screens
                                    lg: '18px', // Font size for large screens
                                },
                                fontWeight: 300,
                                lineHeight: 1.4,
                                textAlign: 'start',
                            }}
                        >
                            We understand that your home is more than just bricks and mortar. It&apos;s a sanctuary, a reflection of your style, and a place where comfort and functionality reign supreme. That&apos;s why we don&apos;t just offer stone products; we offer solutions.
                        </Typography>

                    </Box>

                </Box>}

                {isMobile ? <></> : <Box className="px-16"><FullCustomBrownDivider /></Box>}

                {isMobile ? <LivingMobileCarousel /> : <Box className="w-full flex justify-between gap-x-8 px-16">
                    <Box className="w-1/3">
                        <StoneProductCard product_image_src='images/About/Living/image1.jpg' product_name='DURABILITY AND LONGEVITY' product_subname='Are you tired of chipped floors or walls that show every mark? Stone offers unmatched resilience, built to endure daily wear and tear, saving you time and money on replacements.' />
                    </Box>
                    <Box className="w-1/3">
                        <StoneProductCard product_image_src='images/About/Living/image2.jpg' product_name='EFFORTLESS ELEGANCE' product_subname='Elevate your space with natural stone&apos;s timeless beauty. Our curated collection offers a variety of textures, colours, and finishes to complement any design style perfectly.' />
                    </Box>
                    <Box className="w-1/3">
                        <StoneProductCard product_image_src='images/About/Living/image3.jpg' product_name='SUSTAINABLE CHOICE' product_subname='Our commitment to responsible sourcing ensures you&apos;re making an environmentally conscious decision. Invest in the enduring beauty of natural stone with peace of mind.' />
                    </Box>
                </Box>}


                {isMobile ? <ShortCustomBrownDivider /> : <></>}

                {isMobile ? <Box
                    className="px-3 py-6"
                    sx={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '1 / 2.16', // Aspect ratio of 3:1 (width to height)
                        borderRadius: '15px',
                        overflow: 'hidden', // Ensures content stays within the rounded corners
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: 'url("/images/About/Gallery/Mobile/background-mobile.jpg")',
                            backgroundSize: 'cover', // Ensure the image covers the entire box
                            backgroundPosition: 'center', // Center the image
                            filter: 'blur(5px)', // Apply blur to the background
                            zIndex: 1, // Place it behind the content
                        },
                    }}
                >
                    {/* Main content */}
                    <Box
                        className="flex h-full flex-col w-full justify-between px-3"
                        sx={{ position: 'relative', zIndex: 2 }} // Ensure content stays above the blurred background
                    >
                        <Box className="flex flex-col w-full gap-y-5">
                            <Box className="flex flex-col">
                                <Box>
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            lineHeight: '1',
                                            fontSize: '40px',
                                            fontWeight: 300,
                                            color: 'white', // Set text color
                                            textAlign: 'start',
                                        }}
                                    >
                                        A GALLERY OF SUCCESS: YOUR INSPIRATION AWAITS
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography
                                    component="span"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1',
                                        fontSize: '16px',
                                        fontWeight: 300,
                                        color: 'white', // Set text color
                                        textAlign: 'start',
                                    }}
                                >
                                    We take immense pride in collaborating with our clients to turn
                                    their design dreams into reality. Explore our extensive gallery
                                    showcasing a variety of projects, from modern kitchen renovations
                                    to captivating outdoor living spaces. Let these success stories
                                    inspire your stone design journey. To make your exploration more
                                    realistic, visit our showroom and view captivating displays of
                                    different natural stones.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="flex justify-end">
                            <Image
                                src="/images/About/Vector/Vector-top-right.svg" // Ensure this image is in the public/images folder
                                alt="Vector"
                                objectFit="cover"
                                className="opacity-100"
                                width={80}
                                height={80}
                            />
                        </Box>
                    </Box>
                </Box>
                    : <Box
                        className="flex w-full px-20 gap-x-12"
                        sx={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '1.77 / 1', // Aspect ratio of 3:1 (width to height)
                            backgroundImage: 'url("/images/About/Gallery/background.jpg")',
                            backgroundSize: 'cover', // Ensure the image covers the entire box
                            backgroundPosition: 'center', // Center the image
                            display: 'flex',
                            alignItems: 'center', // Center align text vertically
                            justifyContent: 'space-between', // Center align text horizontally
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
                                zIndex: 1, // Ensure it's on top of the background image but behind the content
                            },
                        }}
                    >
                        <Box className="flex flex-col w-1/2 h-full" sx={{ zIndex: 2 }}>
                            <Box className="flex w-full h-1/2"></Box>
                            <Box className="flex w-full flex-col h-1/2 justify-center gap-3">
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        fontStyle: 'italic',
                                        lineHeight: '0.8',
                                        fontSize: {
                                            xs: '20px', // Font size for extra small screens
                                            sm: '25px', // Font size for small screens
                                            md: '35px', // Font size for medium screens
                                            lg: '70px', // Font size for large screens
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    A GALLERY OF SUCCESS: YOUR INSPIRATION AWAITS
                                </Typography>
                                <Box className="mt-5">
                                    <WhiteCustomButton label={'Enquire Now!'} iconSrc={'/images/vector.svg'} />
                                </Box>

                            </Box>
                        </Box>

                        <Box className="flex flex-col w-1/2 h-full items-start" sx={{ zIndex: 2 }}>
                            <Box className="flex w-full h-1/2"></Box>
                            <Box className="flex w-full flex-col h-1/2 justify-center items-center">
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.2',
                                        fontSize: {
                                            xs: '10px', // Font size for extra small screens
                                            sm: '12px', // Font size for small screens
                                            md: '15px', // Font size for medium screens
                                            lg: '18px', // Font size for large screens
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    We take immense pride in collaborating with our clients to turn their design dreams into reality. Explore our extensive gallery showcasing a variety of projects, from modern kitchen renovations to captivating outdoor living spaces. Let these success stories inspire your stone design journey.
                                    To make your exploration more realistic, visit our showroom and view captivating displays of different natural stones.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>}




                {/* <Box className="flex w-full flex-col relative items-center justify-center text-white">
                    <Box className="flex justify-center items-center w-full">
                        <Image
                            src="/images/About/beauty.png" // Ensure this image is in the public/images folder
                            alt="Background"
                            // layout="fill"
                            objectFit="cover"
                            className="opacity-30"
                            width={600}
                            height={600}
                        />
                    </Box>
                    <Box className="absolute z-10 text-center p-8 w-full">
                        <Typography variant="h2" className="mb-4 font-bold" sx={{
                            fontFamily: 'Raleway',
                            fontSize: {
                                xs: '30px', // Font size for extra small screens
                                sm: '40px', // Font size for small screens
                                md: '60px', // Font size for medium screens
                                lg: '80px', // Font size for large screens
                            },
                            fontWeight: 300,
                        }}>
                            IF YOU FALL VICTIM TO THEIR BREATHTAKING BEAUTY
                        </Typography>
                        <Typography variant="h5" className="mb-8" sx={{
                            fontFamily: 'Raleway',
                            fontSize: {
                                xs: '12px', // Font size for extra small screens
                                sm: '14px', // Font size for small screens
                                md: '16px', // Font size for medium screens
                                lg: '20px', // Font size for large screens
                            },
                            fontWeight: 300,
                        }}>
                            as we do, we will be there to hold your hand as you make life-changing decisions about your living space.
                        </Typography>
                    </Box>
                </Box> */}

                {isMobile ? <Box className="flex w-full flex-col relative items-center justify-center text-white">
                    <Box className="flex justify-center items-center w-full">
                        <Image
                            src="/images/About/Beauty/Mobile/background-mobile.svg" // Ensure this image is in the public/images folder
                            alt="Background"
                            // layout="fill"
                            objectFit="cover"
                            className="opacity-80"
                            width={275}
                            height={275}
                        />
                    </Box>
                    <Box className="absolute z-10 text-center p-8 w-full flex flex-col">
                        <Typography variant="h2" className="font-normal" color="#DBC6BC" sx={{
                            fontFamily: 'Chronicle Display',
                            lineHeight: '1',
                            fontSize: '40px',
                            fontWeight: 300,
                        }}>
                            IF YOU FALL
                        </Typography>
                        <Typography variant="h2" className="font-normal" color="#DBC6BC" sx={{
                            fontFamily: 'Chronicle Display',
                            lineHeight: '1',
                            fontSize: '40px',
                            fontWeight: 300,
                        }}>
                            VICTIM TO THEIR
                        </Typography>
                        <Typography variant="h2" className="font-normal" color="#DBC6BC" sx={{
                            fontFamily: 'Chronicle Display',
                            lineHeight: '1',
                            fontSize: '40px',
                            fontWeight: 300,
                        }}>
                            BREATHTAKING
                        </Typography>
                        <Typography variant="h2" className="font-normal" color="#DBC6BC" sx={{
                            fontFamily: 'Chronicle Display',
                            lineHeight: '1',
                            fontSize: '40px',
                            fontWeight: 300,
                        }}>
                            BEAUTY
                        </Typography>
                        <CustomDivider />
                        <Typography variant="h5" className="mb-8" sx={{
                            fontFamily: 'var(--font-montserrat)',
                            fontSize: '15px',
                            fontWeight: 300,
                        }}>
                            as we do, we will be there to hold your hand as you make life-changing decisions about your living space.                        </Typography>
                    </Box>
                </Box> : <Box className="flex w-full flex-col relative items-center justify-center text-white">
                    <Box className="flex justify-center items-center w-[33%]">
                        <Image
                            src="/images/About/Beauty/background.svg" // Ensure this image is in the public/images folder
                            alt="Background"
                            // layout="fill"
                            objectFit="cover"
                            className="opacity-100"
                            width={600}
                            height={600}
                        />
                    </Box>
                    <Box className="absolute z-10 text-center p-8 w-4/5 flex flex-col">
                        <Typography variant="h2" className="font-semibold" color="#DBC6BC" sx={{
                            fontFamily: 'Chronicle Display',
                            lineHeight: '1',
                            fontSize: {
                                xs: '40px', // Font size for extra small screens
                                sm: '60px', // Font size for small screens
                                md: '80px', // Font size for medium screens
                                lg: '100px', // Font size for large screens
                            },
                            fontWeight: 400,
                        }}>
                            IF YOU FALL VICTIM TO
                            THEIR BREATHTAKING
                            BEAUTY
                        </Typography>
                        <CustomDivider />
                        <Typography variant="h5" className="mb-8" sx={{
                            fontFamily: 'var(--font-montserrat)',
                            fontSize: {
                                xs: '12px', // Font size for extra small screens
                                sm: '14px', // Font size for small screens
                                md: '16px', // Font size for medium screens
                                lg: '18px', // Font size for large screens
                            },
                            fontWeight: 300,
                        }}>
                            as we do, we will be there to hold your hand as you make life-changing decisions about your living space.
                        </Typography>
                    </Box>
                </Box>
                }


                {isMobile ? <></> : <CustomDivider />}


                {isMobile ? <Box className="flex w-full flex-col lg:flex-row justify-between">
                    <CustomDivider />
                    <Box className="flex flex-col w-full">
                        <Typography variant="h1" className="mb-4 font-normal text-center" sx={{
                            color: '#DBC6BC',
                            fontFamily: 'Chronicle Display',
                            lineHeight: '1',
                            fontSize: '40px',
                            fontWeight: 300,
                        }}>
                            READY TO CRAFT YOUR <span style={{ fontWeight: 600 }}>STONE MASTERPIECE?</span>
                        </Typography>
                        <Box className="flex w-full justify-center px-3">
                            <Typography variant="h3" className="mb-8 text-center" sx={{
                                fontFamily: 'var(--font-montserrat)',
                                color: 'white',
                                // width:'90%',
                                textJustify: 'justify',
                                lineHeight: '1.2',
                                fontSize: '13px',
                                fontWeight: 300,
                            }}>
                                Our commitment to providing outstanding services, expert advice, and a range of natural stone for your needs is our top priority. Feel free to engage with our experts today and let us mould your ideas into reality.

                            </Typography>

                        </Box>
                    </Box>

                    <Box className="flex w-full justify-around">
                        <WhiteCustomButton label={'Enquire Now!'} iconSrc={'/images/vector.svg'} />
                        <Link href="/contact"><WhiteCustomButton label={'Contact Us'} iconSrc={'/images/vector.svg'} /></Link>
                    </Box>

                    <CustomDivider />
                </Box> : <Box className="flex w-full flex-col lg:flex-row justify-between px-20">
                    <Box className="flex flex-col lg:w-2/3 gap-y-8">
                        <Typography variant="h1" className="mb-4 font-normal" sx={{
                            color: '#DBC6BC',
                            fontFamily: 'Raleway',
                            lineHeight: '0.8',
                            fontSize: {
                                xs: '30px', // Font size for extra small screens
                                sm: '40px', // Font size for small screens
                                md: '60px', // Font size for medium screens
                                lg: '100px', // Font size for large screens
                            },
                            fontWeight: 300,
                        }}>
                            READY TO CRAFT YOUR STONE MASTERPIECE?
                        </Typography>
                        <Box className="flex w-full justify-start gap-6">
                            <WhiteCustomButton label={'Enquire Now!'} iconSrc={'/images/vector.svg'} />
                            <Link href="/contact"><WhiteCustomButton label={'Contact Us'} iconSrc={'/images/vector.svg'} /></Link>
                        </Box>
                    </Box>

                    <Box className="flex lg:w-1/4">
                        <Typography variant="h1" className="mb-8" sx={{
                            fontFamily: 'var(--font-montserrat)',
                            color: 'white',
                            fontSize: {
                                xs: '12px', // Font size for extra small screens
                                sm: '14px', // Font size for small screens
                                md: '16px', // Font size for medium screens
                                lg: '18px', // Font size for large screens
                            },
                            fontWeight: 300,
                        }}>
                            Our commitment to providing outstanding services, expert advice, and a range of natural stone for your needs is our top priority. Feel free to engage with our experts today and let us mould your ideas into reality.

                        </Typography>
                    </Box>
                </Box>}



            </Box>

            {isMobile ? <FooterMobile /> : <Footer />}
        </Box>
    );
};

// Static values or pass dynamic props for the About Page
export default AboutPage;
