'use client'

// Import necessary dependencies
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)'); // Media query for mobile

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Box className="flex items-center justify-between w-full h-full" >
            <Box>
                {/* <Box className="lg:w-1/6"></Box> */}
                <Box>
                    <Link href={'/'} className='m-10'>
                        <Image
                            src={isMobile ? '/images/Header/mobile-main-logo.svg' : '/images/Header/main-logo.svg'}
                            alt="Logo"
                            width={isMobile ? 150 : 300}
                            height={isMobile ? 50 : 80}
                        />
                    </Link>
                </Box>

                {/* <Box className="lg:w-5/12"></Box> */}
            </Box>


            {/* Mobile Hamburger Menu Button */}
            {isMobile && (
                <Box className="flex items-center justify-center gap-x-2">
                    <Box className="flex items-end w-1/7">
                        <Link href="/visualizer">
                            <Box className="flex items-center justify-center">
                                <Box
                                    className="relative"
                                    sx={{
                                        width: 30,
                                        height: 30,
                                    }}
                                >
                                    <Image
                                        src="/images/Header/menu_circle.svg"
                                        alt="Hamburger Menu Circle"
                                        width={30}
                                        height={30}
                                    />
                                    <Box
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Image
                                            src="/images/Header/search.svg"
                                            alt="Hamburger Menu"
                                            width={15} // Adjust width as needed
                                            height={15} // Adjust height as needed
                                        />
                                    </Box>
                                </Box>
                            </Box>

                        </Link>
                    </Box>
                    <Box
                        className="block lg:hidden"
                        onClick={handleMenuToggle}
                        sx={{ cursor: 'pointer' }}
                    >
                        <Box className="flex items-center justify-center">
                            <Box
                                className="relative"
                                sx={{
                                    width: 30,
                                    height: 30,
                                }}
                            >
                                <Image
                                    src="/images/Header/menu_circle.svg"
                                    alt="Hamburger Menu Circle"
                                    width={30}
                                    height={30}
                                />
                                <Box
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    sx={{
                                        width: 30,
                                        height: 30,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        src="/images/Header/menu.svg"
                                        alt="Hamburger Menu"
                                        width={15} // Adjust width as needed
                                        height={15} // Adjust height as needed
                                    />
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Box>

            )}

            {/* Navigation Links - For Desktop and Mobile */}
            <Box className={`flex justify-between w-3/5 ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
                <Box className="flex items-center justify-between w-full">
                    <Box className="text-center">
                        <Link href="/">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: "20px"
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                Home
                            </Typography>
                        </Link>
                    </Box>
                    <Box className="text-center">
                        <Link href="/#walling">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: '20px'
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                Waling
                            </Typography>
                        </Link>
                    </Box>
                    <Box className="text-center">
                        <Link href="/#paving">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: '20px'
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                Paving
                            </Typography>
                        </Link>
                    </Box>
                    <Box className="text-center">
                        <Link href="/about">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: "20px"
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                Bricks
                            </Typography>
                        </Link>
                    </Box>
                    <Box className="text-center">
                        <Link href="/services">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: '20px'
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                Cobblestone
                            </Typography>
                        </Link>
                    </Box>
                    <Box className="text-center">
                        <Link href="/portfolio">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: '20px'
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                Projects
                            </Typography>
                        </Link>
                    </Box>
                    <Box className="text-center">
                        <Link href="/contact">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: '20px'
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                Contact Us
                            </Typography>
                        </Link>
                    </Box>
                    <Box className="text-center">
                        <Link href="/faq">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: '20px'
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                Consultations
                            </Typography>
                        </Link>
                    </Box>

                    {/* Search Icon */}
                    <Box className="flex justify-center">
                        <Link href="/">
                            <Box className="flex items-center justify-center">
                                <Box
                                    className="relative"
                                    sx={{
                                        width: 30,
                                        height: 30,
                                    }}
                                >
                                    <Image
                                        src="/images/Header/menu_circle.svg"
                                        alt="Hamburger Menu Circle"
                                        width={30}
                                        height={30}
                                    />
                                    <Box
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Image
                                            src="/images/Header/search.svg"
                                            alt="Hamburger Menu"
                                            width={18} // Adjust width as needed
                                            height={18} // Adjust height as needed
                                        />
                                    </Box>
                                </Box>
                            </Box>

                        </Link>
                    </Box>

                </Box>
            </Box>

            {/* Mobile Menu Overlay */}
            {isMobile && isMenuOpen && (
                <Box
                    className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-70"
                    onClick={handleMenuToggle}
                >
                    <Box
                        className="flex flex-col items-center justify-center p-6 bg-[#2c2c2c]"
                        sx={{
                            animation: 'fadeIn 0.3s ease-out',
                        }}
                    >
                        <Link href="/">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Home
                            </Typography>
                        </Link>
                        <Link href="/#walling-mb">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Walling
                            </Typography>
                        </Link>
                        <Link href="/#paving-mb">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Paving
                            </Typography>
                        </Link>
                        <Link href="/about">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Bricks
                            </Typography>
                        </Link>
                        <Link href="/services">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Cobblestone
                            </Typography>
                        </Link>
                        <Link href="/portfolio">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Projects
                            </Typography>
                        </Link>
                        <Link href="/contact">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Contact Us
                            </Typography>
                        </Link>
                        <Link href="/faq">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Constultations
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default Header;
