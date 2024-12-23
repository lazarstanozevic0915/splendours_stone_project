// components/FooterMobile.tsx
"use client"; // This line makes this file a client component in Next.js

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import FullCustomGreenDivider from "../components/Divider/FullCustomGreenDivider";

const FooterMobile = () => {
    return (
        <Box
            className="relative flex flex-col w-full rounded-t-[20px] space-y-8"
            sx={{
                backgroundImage: 'url(images/Footer/background-mobile.jpg)', // Add your image path here
                backgroundSize: 'cover', // Ensures the background image covers the entire area
                backgroundPosition: 'center', // Centers the background image
                backgroundRepeat: 'no-repeat', // Prevents repeating the background image
            }}
        >
            <Box className="flex w-full justify-center mt-6 mb-6">
                <Image
                    src="/images/Footer/footer-logo-mobile.svg"
                    alt="Logo"
                    width={182}
                    height={166}
                />
            </Box>
            <Box className="flex flex-col w-full justify-center space-y-5">
                <Box className="flex w-full justify-center">
                    <Typography
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 400,
                            alignContent: 'flex-start',
                            fontFamily: 'Chronicle Display',
                            fontStyle: 'italic',
                            fontSize: '50px'
                        }}
                    >
                        LINKS
                    </Typography>
                </Box>
                <Box className="flex flex-col w-full space-y-3">
                    <Link href={'/'} className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 700,
                            }}
                        >HOME</Typography>
                    </Link>
                    <Link href={'/#walling'} className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 700,
                            }}
                        >WALLING</Typography>
                    </Link>
                    <Link href={'/#paving'} className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 700,
                            }}
                        >PAVING</Typography>
                    </Link>
                    <Link href={'/blog'} className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 700,
                            }}
                        >BLOG</Typography>
                    </Link>
                </Box>


            </Box>

            <Box className="flex flex-col w-full justify-center space-y-5">
                <Box className="flex w-full justify-center">
                    <Typography
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 400,
                            alignContent: 'flex-start',
                            fontFamily: 'Chronicle Display',
                            fontStyle: 'italic',
                            fontSize: '50px'
                        }}
                    >
                        INFO
                    </Typography>
                </Box>
                <Box className="flex flex-col w-full space-y-3">
                    <Link href={'/about'} className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 700,
                            }}
                        >ABOUT</Typography>
                    </Link>
                    <Link href={'/gallery'} className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 700,
                            }}
                        >GALLERY</Typography>
                    </Link>
                    <Link href={'/contact'} className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 700,
                            }}
                        >CONTACT</Typography>
                    </Link>
                    <Link href={'/faq'} className="flex w-full justify-center">
                        <Typography
                            variant="h4"
                            color="#283C28"
                            className="text-center"
                            sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '20px',
                                fontWeight: 700,
                            }}
                        >CONSULTATION</Typography>
                    </Link>
                </Box>


            </Box>

            <Box className="flex w-full justify-center px-12">
                <Box className="flex flex-col w-2/3 space-y-3">
                    <Box className="flex justify-between">
                        <Link href={'http://facebook.com'} className="flex w-1/3 justify-start">
                            <Image
                                src="/images/FooterIcon/facebook.svg"
                                alt="Plus"
                                width={47}
                                height={47}
                            />
                        </Link>
                        <Link href={'http://tictok.com'} className="flex w-1/3 justify-center">
                            <Image
                                src="/images/FooterIcon/twitter.svg"
                                alt="Plus"
                                width={47}
                                height={47}
                            />
                        </Link>
                        <Link href={'http://pixlr.com'} className="flex w-1/3 justify-end">
                            <Image
                                src="/images/FooterIcon/upwork.svg"
                                alt="Plus"
                                width={47}
                                height={47}
                            />
                        </Link>
                    </Box>
                    <Box className="flex justify-between">
                        <Link href={'http://linkedIn.com'} className="flex w-1/3 justify-start">
                            <Image
                                src="/images/FooterIcon/linkedin.svg"
                                alt="Plus"
                                width={47}
                                height={47}
                            />
                        </Link>
                        <Link href={'http://youtube.com'} className="flex w-1/3 justify-center">
                            <Image
                                src="/images/FooterIcon/youtube.svg"
                                alt="Plus"
                                width={47}
                                height={47}
                            />
                        </Link>
                        <Link href={'http://instagram.com'} className="flex w-1/3 justify-end">
                            <Image
                                src="/images/FooterIcon/instagram.svg"
                                alt="Plus"
                                width={47}
                                height={47}
                            />
                        </Link>
                    </Box>
                </Box>
            </Box>

            <FullCustomGreenDivider />

            <Box className="flex w-full flex-col itmes-center py-5 space-y-5">
                <Box className="flex w-full justify-center">
                    <Typography
                        variant="h3"
                        color="#283C28"
                        className="text-center font-bold"
                        sx={{
                            fontWeight: 600,
                            fontFamily: 'Chronicle Display',
                            fontSize: '20px'
                        }}
                    >
                        SPLENDOUR IN STONE 2024
                    </Typography>
                </Box>
                <Box className="flex w-full justify-center">
                    <Typography
                        variant="h3"
                        className="text-center font-thin"
                        color="#283C28"
                        sx={{
                            fontWeight: 700,
                            fontFamily: 'Chronicle Display',
                            fontSize: '20px'
                        }}
                    >
                        © ALL RIGHTS RESERVED
                    </Typography>
                </Box>

            </Box>
        </Box>
    );
};

export default FooterMobile;
