
"use client"
// app/about/page.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';


import CustomPartDivider from '../components/CustomPartDivider';
import FullCustomGreenDivider from '../components/Divider/FullCustomGreenDivider';
import './embla.css';
import { useMediaQuery } from 'react-responsive';
import FooterMobile from '../components/FooterMobile';
import FullCustomBrownDivider from '../components/Divider/FullCustomBrownDivider';



const ServicesPage = () => {

    // Mobile view (max-width 768px)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Box>
            <Box
                sx={{
                    width: '100%',
                    rowGap: isMobile ? '1rem' : '2rem', // Smaller gap for mobile
                    '& > *:not(:last-child)': {
                        marginBottom: isMobile ? '2rem' : '4rem', // Adjust spacing for mobile
                    },
                    marginBottom: isMobile ? '2rem' : '4rem', // Adjust bottom margin for mobile
                }}
            >
                <Box className="flex flex-col space-y-3 xs:gap-y-3 sm:gap-y-6 md:gap-y-9" sx={{ border: isMobile ? '1px solid #000000' : 'none', paddingBottom: isMobile ? '40px' : '0px', }}>

                    <Box className="flex items-center w-full px-3" sx={{ height: '15vh', borderTop: isMobile ? '1px solid #1E1E1E' : 'none' }}>
                        <Header />
                    </Box>

                    {isMobile ? <Box className="px-5 py-3"><Box
                        className="flex w-full px-3"
                        sx={{
                            position: 'relative',
                            width: '100%',
                            // height: '100%', // Adjust to match the image height
                            aspectRatio: '2.52 / 1', // Aspect ratio of 3:1 (width to height)
                            backgroundImage: 'url("/images/Contact/header-main-mobile.png")',
                            backgroundSize: 'cover', // Ensure the image covers the entire box
                            backgroundPosition: 'center', // Center the image
                            display: 'flex',
                            alignItems: 'center', // Center align text vertically
                            justifyContent: 'flex-start', // Center align text horizontally
                            borderRadius: '25px'
                        }}
                    >
                    </Box></Box> : <Box className="px-12 py-12" style={{ paddingBottom: "0px", marginBottom: '30px' }}><Box
                        className="flex w-full px-12"
                        sx={{
                            position: 'relative',
                            width: '100%',
                            // height: '100%', // Adjust to match the image height
                            aspectRatio: '6.14 / 1', // Aspect ratio of 3:1 (width to height)
                            backgroundImage: 'url("/images/Contact/header-main.png")',
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

                    {isMobile ? <Box className="flex w-full flex-col px-3">
                        <Typography
                            variant="h3"
                            className="text-center"
                            color="#DCC5BD"
                            sx={{
                                width: '100%',
                                fontWeight: 400,
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.8',
                                fontSize: '40px'
                            }}
                        >
                            AT SPLENDOUR IN
                        </Typography>
                        <Typography
                            variant="h3"
                            className="text-center"
                            color="#DCC5BD"
                            sx={{
                                width: '100%',
                                fontWeight: 400,
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.8',
                                fontSize: '40px'
                            }}
                        >
                            STONE, WE
                        </Typography>
                        <Typography
                            variant="h3"
                            className="text-center"
                            color="#DCC5BD"
                            sx={{
                                width: '100%',
                                fontWeight: 400,
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.8',
                                fontSize: '40px'
                            }}
                        >
                            BELIEVE YOUR
                        </Typography>
                        <Typography
                            variant="h3"
                            className="text-center"
                            color="#DCC5BD"
                            sx={{
                                width: '100%',
                                fontWeight: 400,
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.8',
                                fontSize: '40px'
                            }}
                        >
                            HOME DESERVES
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className='text-center font-semibold'
                            sx={{
                                fontWeight: 600,
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.8',
                                fontSize: '40px'
                            }}
                        > THE BRILLIANCE OF NATURAL STONE.
                        </Typography>
                    </Box>
                        : <Box className="flex w-full flex-col px-12 py-1">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 400,
                                    alignContent: 'flex-start',
                                    lineHeight: '1',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: "15px",
                                        sm: "30px",  // Small screens
                                        md: "40px",  // Medium screens
                                        lg: "65px"
                                    }
                                }}
                            >
                                AT SPLENDOUR IN STONE, WE BELIEVE YOUR
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    // width: '80%',
                                    fontWeight: 400,
                                    alignContent: 'flex-start',
                                    lineHeight: '1',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: "15px",
                                        sm: "30px",  // Small screens
                                        md: "40px",  // Medium screens
                                        lg: "65px"
                                    }
                                }}
                            > HOME DESERVES THE BRILLIANCE OF
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    width: '100%',
                                    fontWeight: 400,
                                    alignContent: 'flex-start',
                                    lineHeight: '1',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: "15px",
                                        sm: "30px",  // Small screens
                                        md: "40px",  // Medium screens
                                        lg: "65px"
                                    }
                                }}
                            >
                                NATURAL STONE.
                            </Typography>
                        </Box>
                    }
                    {isMobile ? <Box className="px-3"><FullCustomBrownDivider /></Box> : <Box className="px-12">
                        <FullCustomBrownDivider />
                    </Box>}

                    {isMobile ? <Box className="flex w-full flex-col px-3 gap-y-5" style={{ paddingLeft: "15px", paddingRight: "15px" }}>

                        <Box className="flex w-full justify-between">
                            <Box className="w-1/2">
                                <Typography
                                    variant="h3"
                                    color="white"
                                    sx={{
                                        width: '90%',
                                        fontWeight: 300,
                                        alignContent: 'flex-start',
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px'
                                    }}
                                >
                                    Whether you're embarking on a grand renovation or seeking a touch of elegance for a specific space, our exquisite stone collection and exceptional design expertise are here to help.
                                </Typography>
                            </Box>
                            <Box className="w-1/2">
                                <Typography
                                    variant="h3"
                                    color="white"
                                    sx={{
                                        width: '90%',
                                        fontWeight: 300,
                                        alignContent: 'flex-start',
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px'
                                    }}
                                >
                                    We invite you to connect with our friendly and knowledgeable team to discuss your project and transform your vision into reality.
                                </Typography>
                            </Box>
                        </Box>



                        <Box className="w-full">
                            <Typography
                                variant="h3"
                                color="white"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '13px'
                                }}
                            >
                                Our dedicated team is passionate about natural stone and its potential to elevate your space. They're eager to discuss your project's specific needs and guide you through our extensive selection of stone cladding, walling, and paving options.
                            </Typography>
                        </Box>

                    </Box> : <Box className="flex w-full justify-between px-12">
                        <Box className="w-1/4">
                            <Typography
                                variant="h3"
                                color="white"
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
                                Whether you're embarking on a grand renovation or seeking a touch of elegance for a specific space, our exquisite stone collection and exceptional design expertise are here to help.
                            </Typography>
                        </Box>
                        <Box className="w-1/4">
                            <Typography
                                variant="h3"
                                color="white"
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
                                Our dedicated team is passionate about natural stone and its potential to elevate your space. They're eager to discuss your project's specific needs and guide you through our extensive selection of stone cladding, walling, and paving options.
                            </Typography>
                        </Box>
                        <Box className="w-1/4">
                            <Typography
                                variant="h3"
                                color="white"
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
                                We invite you to connect with our friendly and knowledgeable team to discuss your project and transform your vision into reality.
                            </Typography>
                        </Box>
                        <Box className="flex w-1/12 justify-end items-start">
                            <Image
                                src="/images/Contact/Vector-bottom-left.svg"
                                alt="main"
                                width={120}
                                height={120}
                            />
                        </Box>
                    </Box>}

                </Box>


                {isMobile ? <Box className="py-8">
                    <CustomPartDivider />
                </Box> :
                    <Box className="p-12">
                        <CustomPartDivider />
                    </Box>
                }

                {isMobile ? <Box className="flex w-full flex-col px-4 gap-y-3" sx={{ border: isMobile ? '1px solid #000000' : 'none' }} >
                    <Box className="flex w-full gap-x-2">
                        <Box className="flex w-1/3">
                            <Image
                                src="/images/Contact/product/Mobile/image1.jpg"
                                alt="main"
                                width={114}
                                height={413}
                                className="rounded-[20px] w-full"
                            />
                        </Box>
                        <Box className="flex w-2/3">
                            <Image
                                src="/images/Contact/product/Mobile/image2.jpg"
                                alt="main"
                                width={234}
                                height={413}
                                className="rounded-[20px] w-full"
                            />
                        </Box>
                    </Box>
                    <Box className="flex w-full justify-between h-full">
                        <Box className="flex flex-col justify-between h-[413px]">
                            <Image
                                src="/images/Contact/product/Mobile/image3.jpg"
                                alt="main"
                                width={174}
                                height={264}
                                className="rounded-[20px] w-full h-[264px]"
                            />
                            <Image
                                src="/images/Contact/product/Mobile/image4.jpg"
                                alt="main"
                                width={174}
                                height={132}
                                className="rounded-[20px] w-full h-[132px]"
                            />
                        </Box>
                        <Box className="h-[413px] flex justify-center">
                            <Image
                                src="/images/Contact/product/Mobile/image5.jpg"
                                alt="main"
                                width={54}
                                height={413}
                                className="rounded-[20px] h-[413px]"
                            />
                        </Box>
                        <Box className="h-full flex justify-end">
                            <Image
                                src="/images/Contact/product/Mobile/image6.jpg"
                                alt="main"
                                width={114}
                                height={413}
                                className="rounded-[20px] h-[413px]"
                            />
                        </Box>
                    </Box>

                </Box> : <Box className="flex w-full flex-col gap-y-3 px-12">
                    <Box className="flex w-full gap-3">
                        <Box className="w-1/3">
                            <Image
                                src="/images/Contact/image1.png"
                                alt="main"
                                width={552}
                                height={395}
                                className="rounded-[25px] h-[95%]"
                            />
                        </Box>
                        <Box className="w-2/3">
                            <Image
                                src="/images/Contact/image2.png"
                                alt="main"
                                width={1136}
                                height={395}
                                className="rounded-[25px]"
                            />
                        </Box>
                    </Box>
                    <Box className="flex w-full gap-3">
                        <Box className="w-1/2 space-y-5 h-full">
                            <Box className="flex w-full">
                                <Image
                                    src="/images/Contact/image3.png"
                                    alt="main"
                                    width={844}
                                    height={252}
                                    className="rounded-[25px]"
                                />
                            </Box>
                            <Box className="flex w-full">
                                <Image
                                    src="/images/Contact/image4.png"
                                    alt="main"
                                    width={844}
                                    height={127}
                                    className="rounded-[25px]"
                                />
                            </Box>

                        </Box>
                        <Box className="w-1/6">
                            <Image
                                src="/images/Contact/image5.png"
                                alt="main"
                                width={262}
                                height={395}
                                className="rounded-[25px] h-[95%]"
                            />
                        </Box>
                        <Box className="w-1/3">
                            <Image
                                src="/images/Contact/image6.png"
                                alt="main"
                                width={552}
                                height={395}
                                className="rounded-[25px]"
                            />
                        </Box>
                    </Box>

                </Box>}

                {isMobile ? <Box className="py-3">
                    <CustomPartDivider />
                </Box> :
                    <Box className="p-12">
                        <CustomPartDivider />
                    </Box>
                }

                {isMobile ? <Box
                    className="relative flex-col w-full px-2 py-16 gap-x-12 rounded-[20px] space-y-8"
                    sx={{
                        backgroundImage: 'url(images/Contact/Additionally-background-mobile.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >
                    <Box className="flex w-full flex-col gap-y-6">
                        <Box>
                            <Typography
                                variant="h3"
                                color="#283C28"
                                className='text-center'
                                sx={{
                                    width: '100%',
                                    fontWeight: 600,
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '0.8',
                                    fontSize: '40px'
                                }}
                            >
                                GET IN
                            </Typography>
                            <Typography
                                variant="h3"
                                className="text-center"
                                color="#283C28"
                                sx={{
                                    width: '100%',
                                    fontWeight: 600,
                                    lineHeight: '0.8',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: '40px'
                                }}
                            >
                                TOUCH:
                            </Typography>
                        </Box>

                        <Box>
                            <Typography
                                variant="h3"
                                color="#283C28"
                                className="text-center"
                                sx={{
                                    width: '100%',
                                    fontWeight: 600,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '20px'
                                }}
                            >
                                Additionally:
                            </Typography>
                        </Box>

                        <Box className="flex flex-col justify-center items-center w-full">
                            <Typography
                                variant="h4"
                                color="black"
                                className="text-center"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                }}
                            >
                                Feel free to browse our website for further
                            </Typography>
                            <Typography
                                variant="h4"
                                color="black"
                                className="text-center"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                }}
                            >
                                information on our products and services.
                            </Typography>
                        </Box>

                        <Box className="flex flex-col justify-center items-center w-full">
                            <Typography
                                variant="h4"
                                color="black"
                                className="text-center"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                }}
                            >
                                For project inspiration, explore our gallery
                            </Typography>
                            <Typography
                                variant="h4"
                                color="black"
                                className="text-center"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                }}
                            >
                                showcasing a variety of stunning stone
                            </Typography>
                            <Typography
                                variant="h4"
                                color="black"
                                className="text-center"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                }}
                            >
                                applications.
                            </Typography>
                        </Box>
                    </Box>


                    <Box className="flex w-full flex-col gap-y-5">
                        <Box className="flex w-full flex-col justify-center items-center gap-y-4">
                            <Box className="w-1/7">
                                <Image
                                    src="/images/Contact/phone.svg"
                                    alt="phone"
                                    width={50}
                                    height={50}
                                />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h4"
                                    color="#283C28"
                                    className="text-center"
                                    sx={{
                                        // fontFamily: 'var(--font-montserrat)',
                                        fontSize: '30px',
                                        fontWeight: 600,
                                    }}
                                >
                                    PHONE:
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="#283C28"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '30px',
                                        fontWeight: 400,
                                    }}
                                >
                                    (03) 9873 4941
                                </Typography>
                            </Box>
                            <FullCustomGreenDivider />
                            <Box>
                                <Typography
                                    variant="h4"
                                    color="black"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    We're available Monday-Friday,
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="black"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    9:00 am - 4:00 pm, and Saturday,
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="black"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    9:30 am - 1:30 pm
                                </Typography>
                            </Box>

                        </Box>
                        <Box className="flex w-full flex-col justify-center items-center gap-y-4">
                            <Box className="w-1/7">
                                <Image
                                    src="/images/Contact/email.svg"
                                    alt="email"
                                    width={50}
                                    height={50}
                                />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h4"
                                    color="#283C28"
                                    className="text-center"
                                    sx={{
                                        // fontFamily: 'var(--font-montserrat)',
                                        fontSize: '30px',
                                        fontWeight: 600,
                                    }}
                                >
                                    EMAIL:
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="#283C28"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '30px',
                                        fontWeight: 400,
                                    }}
                                >
                                    INFO@SPLENDOUR
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="#283C28"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '30px',
                                        fontWeight: 400,
                                    }}
                                >
                                    INSTONE.COM
                                </Typography>
                            </Box>
                            <FullCustomGreenDivider />
                            <Box>
                                <Typography
                                    variant="h4"
                                    color="black"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        fontWeight: 300,
                                    }}
                                >
                                    Our team will respond to your
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="black"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        fontWeight: 300,
                                    }}
                                >
                                    email inquiry within one
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="black"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        fontWeight: 300,
                                    }}
                                >
                                    business day
                                </Typography>
                            </Box>

                        </Box>
                        <Box className="flex w-full flex-col justify-center items-center gap-y-4">
                            <Box className="w-1/7">
                                <Image
                                    src="/images/Contact/location.svg"
                                    alt="location"
                                    width={50}
                                    height={50}
                                />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h4"
                                    color="#283C28"
                                    className="text-center"
                                    sx={{
                                        // fontFamily: 'var(--font-montserrat)',
                                        fontSize: '30px',
                                        fontWeight: 600,
                                    }}
                                >
                                    VISIT OUR
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="#283C28"
                                    className="text-center"
                                    sx={{
                                        // fontFamily: 'var(--font-montserrat)',
                                        fontSize: '30px',
                                        fontWeight: 600,
                                    }}
                                >
                                    SHOWROOM:
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="#283C28"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '30px',
                                        fontWeight: 400,
                                        textAlign: 'start',
                                    }}
                                >
                                    10/21 COOK RD,
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="#283C28"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '30px',
                                        fontWeight: 400,
                                        textAlign: 'start',
                                    }}
                                >
                                    MITCHAM,
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="#283C28"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '30px',
                                        fontWeight: 400,
                                        textAlign: 'start',
                                    }}
                                >
                                    MELBOURNE, VIC
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="#283C28"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '30px',
                                        fontWeight: 400,
                                        textAlign: 'start',
                                    }}
                                >
                                    3132.
                                </Typography>
                            </Box>
                            <FullCustomGreenDivider />
                            <Box>
                                <Typography
                                    variant="h4"
                                    color="black"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        fontWeight: 300,
                                    }}
                                >
                                    Our showroom hours are the
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="black"
                                    className="text-center"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        fontWeight: 300,
                                    }}
                                >
                                    same as our phone hours
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box> : <Box
                    className="relative flex-col w-full px-14 py-24 gap-x-12 rounded-[20px] space-y-12"
                    sx={{
                        backgroundImage: 'url(images/Contact/Additionally-background.jpg)', // Add your image path here
                        backgroundSize: 'cover', // Ensures the background image covers the entire area
                        backgroundPosition: 'center', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                    }}
                >
                    <Box className="flex w-full justify-between">
                        <Box className="flex flex-col w-1/3">
                            <Typography
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    width: '100%',
                                    fontWeight: 600,
                                    alignContent: 'flex-start',
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '0.8',
                                    fontSize: {
                                        xs: "25px",
                                        sm: "35px",  // Small screens
                                        md: "50px",  // Medium screens
                                        lg: "100px"
                                    }
                                }}
                            >
                                GET IN
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    width: '100%',
                                    fontWeight: 600,
                                    alignContent: 'flex-start',
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '0.8',
                                    fontSize: {
                                        xs: "25px",
                                        sm: "35px",  // Small screens
                                        md: "50px",  // Medium screens
                                        lg: "100px"
                                    }
                                }}
                            >
                                TOUCH:
                            </Typography>
                        </Box>

                        <Box className="flex flex-col w-1/4 gap-y-2">
                            <Typography
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    width: '100%',
                                    fontWeight: 600,
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
                                Additionally:
                            </Typography>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'black' }}>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="black"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
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
                                        Feel free to browse our website for further information on our products and services.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="black"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
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
                                        For project inspiration, explore our gallery showcasing a variety of stunning stone applications.
                                    </Typography>
                                </li>
                            </ul>
                        </Box>

                    </Box>


                    <Box className="flex w-full justify-between">
                        <Box className="flex w-7/12 items-center gap-3">
                            <Box className="w-1/7">
                                <Image
                                    src="/images/Contact/phone.svg"
                                    alt="phone"
                                    width={40}
                                    height={40}
                                />
                            </Box>
                            <Typography
                                variant="h4"
                                color="#283C28"
                                sx={{
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: '15px',
                                        sm: '20px',
                                        md: '25px',
                                        lg: '28px',
                                    },
                                    fontWeight: 500,
                                    textAlign: 'start',
                                }}
                            >
                                PHONE: <span style={{ fontWeight: 400 }}>(03) 9873 4941</span>
                            </Typography>
                        </Box>
                        <Box className="flex w-3/12">
                            <Typography
                                variant="h4"
                                color="black"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
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
                                We're available Monday-Friday, 9:00 am - 4:00 pm, and Saturday, 9:30 am - 1:30 pm
                            </Typography>
                        </Box>
                    </Box>

                    <FullCustomGreenDivider />

                    <Box className="flex w-full justify-between">
                        <Box className="flex w-7/12 items-center gap-3">
                            <Box className="w-1/7">
                                <Image
                                    src="/images/Contact/email.svg"
                                    alt="phone"
                                    width={40}
                                    height={40}
                                />
                            </Box>
                            <Typography
                                variant="h4"
                                color="#283C28"
                                sx={{
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: '15px',
                                        sm: '20px',
                                        md: '25px',
                                        lg: '28px',
                                    },
                                    fontWeight: 500,
                                    textAlign: 'start',
                                }}
                            >
                                EMAIL: <span style={{ fontWeight: 400 }}>INFO@SPLENDOURINSTONE.COM</span>
                            </Typography>
                        </Box>
                        <Box className="flex w-3/12">
                            <Typography
                                variant="h4"
                                color="black"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
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
                                Our team will respond to your email inquiry within one business day.
                            </Typography>
                        </Box>
                    </Box>

                    <FullCustomGreenDivider />

                    <Box className="flex w-full justify-between">
                        <Box className="flex w-9/12 items-center gap-3">
                            <Box className="w-1/7">
                                <Image
                                    src="/images/Contact/location.svg"
                                    alt="phone"
                                    width={40}
                                    height={40}
                                />
                            </Box>
                            <Typography
                                variant="h4"
                                color="#283C28"
                                sx={{
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: '15px',
                                        sm: '20px',
                                        md: '25px',
                                        lg: '28px',
                                    },
                                    fontWeight: 500,
                                    textAlign: 'start',
                                }}
                            >
                                VISIT OUR SHOWROOM: <span style={{ fontWeight: 300 }}>10/21 COOK RD,MITCHAM, MELBOURNE, VIC 3132.</span>
                            </Typography>
                        </Box>
                        <Box className="flex w-3/12">
                            <Typography
                                variant="h4"
                                color="black"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
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
                                Our showroom hours are the same as our phone hours
                            </Typography>
                        </Box>
                    </Box>

                    <FullCustomGreenDivider />
                </Box>}

                {isMobile ? <Box className="p-12">
                    <CustomPartDivider />
                </Box> : <></>}

                {isMobile ? <Box className="flex w-full flex-col relative items-center justify-center text-white">
                    <Box className="flex justify-center items-center w-full">
                        <Image
                            src="/images/Contact/partner.png" // Ensure this image is in the public/images folder
                            alt="Background"
                            // layout="fill"
                            objectFit="cover"
                            className="w-[70%]"
                            width={600}
                            height={600}
                        />
                    </Box>
                    <Box className="absolute z-10 text-center p-8 w-full justify-center items-center flex flex-col">
                        <Typography variant="h2" className="font-semibold" color='#DCC5BD' sx={{
                            fontFamily: 'Chronicle Display',
                            fontSize: '40px',
                            lineHeight: 0.9,
                            fontWeight: 400,
                        }}>
                            WE LOOK FORWARD TO CONNECTING WITH YOU
                        </Typography>

                        <CustomPartDivider />

                        <Typography variant="h5" className="text-center" sx={{
                            fontFamily: 'var(--font-montserrat)',
                            fontSize: '15px',
                            width: '60%',
                            fontWeight: 300,
                        }}>
                            and collaborating on your next stone design project.
                        </Typography>


                    </Box>
                </Box> : <Box className="flex w-full flex-col relative items-center justify-center text-white">
                    <Box className="flex justify-center items-center w-full">
                        <Image
                            src="/images/Contact/partner.png" // Ensure this image is in the public/images folder
                            alt="Background"
                            // layout="fill"
                            objectFit="cover"
                            className="w-1/3"
                            width={400}
                            height={400}
                        />
                    </Box>

                    <Box className="w-5/6 absolute z-10 text-center p-8">
                        <Typography variant="h2" className="mb-4 font-bold" sx={{
                            fontFamily: 'Chronicle Display',
                            color: '#DCC5BD',
                            lineHeight: 0.8,
                            fontSize: {
                                xs: '20px', // Font size for extra small screens
                                sm: '30px', // Font size for small screens
                                md: '40px', // Font size for medium screens
                                lg: '100px', // Font size for large screens
                            },
                            fontWeight: 300,
                        }}>
                            WE LOOK FORWARD TO CONNECTING WITH YOU
                        </Typography>
                        <Box className="py-4">
                            <CustomPartDivider />
                        </Box>

                        <Typography variant="h5" className="mb-8" sx={{
                            fontFamily: 'var(--font-montserrat)',
                            color: '#DCC5BD',
                            fontSize: {
                                xs: '12px', // Font size for extra small screens
                                sm: '14px', // Font size for small screens
                                md: '16px', // Font size for medium screens
                                lg: '20px', // Font size for large screens
                            },
                            fontWeight: 300,
                        }}>
                            and collaborating on your next stone design project.

                        </Typography>

                    </Box>

                </Box>}

                {isMobile ? <Box className="py-10">
                    <CustomPartDivider />

                </Box> : <></>}


            </Box>
            {isMobile ? <FooterMobile /> : <Footer />}
        </Box>
    );
};

// Static values or pass dynamic props for the Faq Page
export default ServicesPage;
