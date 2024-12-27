'use client';

import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';
import Home from './components/Home';
import Splendours_header_level from './components/Splendours_header_level';
import SplenderoursProductsCarousel from './components/SplenderoursProductsCarousel';
import ShortCustomBrownDivider from './components/Divider/ShortCustomBrownDivider';
import CustomWallCard from './components/WallCard';
import Carousel from './components/Carousel';
import CarouselPart from './components/CarouselPart';
import WhiteCustomButton from './components/WhiteButton';
import GreenCustomButton from './components/GreenCustomButton';
import CustomTextField from './components/CustomTextField';

import Booking from './components/Home/Booking/Booking';

import MeasurementAccordion from './components/MeasurementAccordion';
import MeasurementAccordionMobile from './components/Home/Services/MeasurementAccordion';
import TechnicalAccordion from './components/Home/Accordion/TechnicalAccordion';
import ProductionAccordion from './components/Home/Accordion/ProductionAccordion';
import InstallationAccordion from './components/Home/Accordion/InstallationAccordion';
import TechnicalAccordionMobile from './components/Home/Services/TechnicalAccordion';
import ProductionAccordionMobile from './components/Home/Services/ProductionAccordion';
import InstallationAccordionMobile from './components/Home/Services/InstallationAccordion';
import StairsCarousel from './components/Home/Stairs/Carousel';
import { EmblaOptionsType } from 'embla-carousel';
import WallingRangeEmblaCarousel from './components/Home/WallingRange/EmblaCarousel/EmblaCarousel';
import PavingRangeEmblaCarousel from './components/Home/PavingRange/EmblaCarousel/EmblaCarousel';
import Footer from './components/Footer';
import FooterMobile from './components/FooterMobile';
import './embla.css';

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const PARTDATA = [
  { image: '/images/Home/Interactive_part/card1.jpg' },
  { image: '/images/Home/Interactive_part/card2.jpg' },
  { image: '/images/Home/Interactive_part/card3.jpg' },
  { image: '/images/Home/Interactive_part/card4.jpg' },
];
const DATA = [
  {
    image: '/images/Home/Interactive_main/slide1.png',
    product_name: 'STAIRS',
  },
  {
    image: '/images/Home/Interactive_main/slide2.png',
    product_name: 'CHIMNEY',
  },
  {
    image: '/images/Home/Interactive_main/slide3.png',
    product_name: 'FIREPLACE',
  },
];

const images = [
  {
    src: '/images/Home/Interactive_main/slide1.png',
    alt: 'Image 1',
    product_name: 'STAIRS',
  },
  {
    src: '/images/Home/Interactive_main/slide2.png',
    alt: 'Image 2',
    product_name: 'CHIMNEY',
  },
  {
    src: '/images/Home/Interactive_main/slide3.png',
    alt: 'Image 3',
    product_name: 'FIREPLACE',
  },
];

const HomePage = () => {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Media query for mobile
  const [showFullText, setShowFullText] = useState(false); // State to toggle text display

  const handleToggle = () => {
    setShowFullText(!showFullText);
  };

  const shortText = `We offer a wide range of services that focus on the use of stone materials. Our clients can expect top-notch service that includes design, manufacturing, delivery, and assembly.`;
  const fullText = `We offer a wide range of services that focus on the use of stone materials. Our clients can expect top-notch service that includes design, manufacturing, delivery, and assembly. Our team of experts use state-of-the-art technology and equipment to ensure that every project is built to the highest quality standards. The client's experience is at the heart of our motivation. We provide support throughout the entire project. Our products are unique and adapted to the specifics of each client, and our clients can choose from a wide range of materials and colors. Also, our clients can rely on our support and advice throughout the process to ensure that their projects are successfully implemented. Our goal is to create products that will not only meet, but also exceed the expectations of our customers.`;

  return (
    <Box
      sx={{
        width: '100%', // equivalent to "w-full"
        display: 'flex', // equivalent to "flex"
        flexDirection: 'column', // equivalent to "flex-col"
        gap: isMobile ? '2rem' : '6rem', // equivalent to "gap-y-24" (6 * 4px = 24px per unit in Tailwind)
      }}
    >
      <Home />

      <Box>
        <Splendours_header_level />
      </Box>

      <Box
        className='px-3 md:px-16'
        sx={{
          px: isMobile ? 2 : 2, // equivalent to "px-20" (20 units in Tailwind = 20 * 0.25rem = 5rem)
          '& > *:not(:last-child)': {
            marginBottom: '2rem', // equivalent to "space-y-24" (24 units in Tailwind = 24 * 0.25rem = 6rem)
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'space-between',
            alignItems: isMobile ? 'center' : 'flex-end',
          }}
          style={{ marginBottom: '50px' }}
        >
          <Box sx={{ width: isMobile ? '100%' : '40%' }}>
            <Typography
              // className="text-center"
              variant='h3'
              color='#DBC6BC'
              sx={{
                lineHeight: 0.8,
                fontWeight: 500,
                fontFamily: 'Chronicle Display',
                textAlign: isMobile ? 'center' : 'start',
                fontSize: {
                  xs: '40px',
                  sm: '50px',
                  md: '65px',
                  lg: '120px',
                },
              }}
            >
              SPLENDOURS PROJECTS
            </Typography>
          </Box>
          <Box sx={{ marginTop: isMobile ? '30px' : '0px' }}>
            <WhiteCustomButton label={'View all'} iconSrc={'/images/icons/Vector.svg'} />
          </Box>
        </Box>

        <Box>
          <SplenderoursProductsCarousel />
        </Box>
      </Box>

      <ShortCustomBrownDivider />

      {isMobile ? (
        <Box className='flex flex-col w-full items-center justify-center'>
          <Typography
            variant='body1'
            color='#DBC6BC'
            className='text-center'
            sx={{
              width: '70%',
              fontFamily: 'Chronicle Display',
              fontSize: '40px',
              fontWeight: 700,
              lineHeight: 0.9,
            }}
          >
            STATE OF
          </Typography>
          <Typography
            variant='body1'
            color='#DBC6BC'
            className='text-center'
            sx={{
              width: '70%',
              fontFamily: 'Chronicle Display',
              fontSize: '40px',
              fontWeight: 700,
              lineHeight: 0.9,
            }}
          >
            THE ART
          </Typography>
          <Typography
            variant='body1'
            color='#DBC6BC'
            className='text-center'
            sx={{
              width: '70%',
              fontFamily: 'Chronicle Display',
              fontSize: '40px',
              fontWeight: 700,
              lineHeight: 0.9,
            }}
          >
            SHOWROOM
          </Typography>
        </Box>
      ) : (
        <Box className='flex flex-col px-20'>
          <Typography
            variant='body1'
            color='white'
            sx={{
              fontFamily: 'Chronicle Display',
              fontSize: { xs: '20px', sm: '5vw' },
              fontWeight: 700,
              lineHeight: 1.1,
              opacity: '10%',
            }}
          >
            SAME DAY QUOTES
          </Typography>
          <Typography
            variant='body1'
            color='#DBC6BC'
            sx={{
              fontFamily: 'Chronicle Display',
              fontSize: { xs: '20px', sm: '5vw' },
              fontWeight: 700,
              lineHeight: 1.1,
              textAlign: 'center',
            }}
          >
            STATE OF THE ART SHOWROOM
          </Typography>
          <Typography
            variant='body1'
            color='white'
            sx={{
              fontFamily: 'Chronicle Display',
              fontSize: { xs: '20px', sm: '5vw' },
              fontWeight: 700,
              lineHeight: 1.1,
              opacity: '10%',
              textAlign: 'right',
            }}
          >
            SUPPLY & INSTALL PACKAGES
          </Typography>
        </Box>
      )}

      {isMobile ? <ShortCustomBrownDivider /> : <></>}

      {isMobile ? (
        <Box
          id='walling-mb'
          className='flex flex-col items-center w-full py-7 gap-y-10 rounded-[20px]'
          sx={{
            backgroundImage: 'url(images/Home/WallingRange/background-mobile.jpg)', // Add your image path here
            backgroundSize: 'cover', // Ensures the background image covers the entire area
            backgroundPosition: 'center', // Centers the background image
            backgroundRepeat: 'no-repeat', // Prevents repeating the background image
          }}
          style={{ paddingBottom: '25px' }}
        >
          <Box className='flex flex-col w-full items-center px-16 space-y-4'>
            <Box className='flex justify-center items-center w-3/5'>
              <Typography
                className='font-semibold text-center'
                variant='h3'
                color='#283C28'
                sx={{
                  fontWeight: 400,
                  lineHeight: 1,
                  fontFamily: 'Chronicle Display',
                  fontSize: '40px',
                }}
              >
                WALLING RANGE
              </Typography>
            </Box>
            <Box className='flex w-full'>
              <Typography
                variant='h3'
                color='#000000'
                sx={{
                  fontWeight: 400,
                  textAlign: 'center',
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: '13px',
                }}
              >
                We believe that in a new age world filled with gadgets, noise and pace that a moment
                to stop, reflect and connect with something pure
              </Typography>
            </Box>
            <Box className='flex justify-center w-full'>
              <GreenCustomButton label={'View all'} iconSrc={'/images/icons/Vector.svg'} />
            </Box>
          </Box>

          <Box className='flex w-full'>
            <WallingRangeEmblaCarousel slides={SLIDES} options={OPTIONS} />
          </Box>
        </Box>
      ) : (
        <Box
          id='walling'
          className='relative flex flex-col w-full px-20 py-20 gap-y-24 rounded-[40px]'
          sx={{
            backgroundImage: 'url(images/Home/WallingRange/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* <Box className='flex items-start justify-between w-full'>
            <Box className='flex items-center w-2/3'>
              <Typography
                className='font-semibold'
                variant='h3'
                color='#283C28'
                sx={{
                  alignContent: 'flex-start',
                  lineHeight: '0.8',
                  textAlign: 'start',
                  fontWeight: 700,
                  fontFamily: 'Chronicle Display',
                  fontSize: {
                    xs: '25px',
                    sm: '45px', // Small screens
                    md: '55px', // Medium screens
                    lg: '100px',
                  },
                }}
              >
                WALLING RANGE
              </Typography>
            </Box>
            <Box className='flex flex-col w-[20vw] gap-y-6 mt-4'>
              <Box>
                <Typography
                  variant='h3'
                  color='#000000'
                  sx={{
                    fontWeight: 400,
                    alignContent: 'flex-start',
                    lineHeight: '1.2',
                    fontFamily: 'var(--font-montserrat)',
                    fontSize: {
                      xs: '8px',
                      sm: '10px', // Small screens
                      md: '12px', // Medium screens
                      lg: '18px',
                    },
                  }}
                >
                  We believe that in a new age world filled with gadgets, noise and pace that a
                  moment to stop, reflect and connect with something pure
                </Typography>
              </Box>
              <Box>
                <GreenCustomButton label={'View all'} iconSrc={'/images/icons/Vector.svg'} />
              </Box>
            </Box>
          </Box> */}

          <Box className='flex flex-col w-full gap-y-7'>
            <Box className='flex justify-between w-full gap-7'>
              <CustomWallCard
                product_image_src='images/Home/WallingRange/product1.jpg'
                product_subname='CHARLOTTE'
              />
              <CustomWallCard
                product_image_src='images/Home/WallingRange/product2.jpg'
                product_subname='JAMIESON'
              />
              <CustomWallCard
                product_image_src='images/Home/WallingRange/product3.jpg'
                product_subname='BUFFALO'
              />
            </Box>
            <Box className='flex justify-between w-full gap-7'>
              <CustomWallCard
                product_image_src='images/Home/WallingRange/product4.jpg'
                product_subname='BELOKA'
              />
              <CustomWallCard
                product_image_src='images/Home/WallingRange/product5.jpg'
                product_subname='SHOREHAM'
              />
              <CustomWallCard
                product_image_src='images/Home/WallingRange/product6.jpg'
                product_subname='BEACHPORT'
              />
            </Box>
          </Box>
        </Box>
      )}

      {isMobile ? (
        <Box className='py-8'>
          <ShortCustomBrownDivider />
        </Box>
      ) : (
        <></>
      )}

      <Box className='space-y-24 w-full' sx={{ paddingX: isMobile ? 2 : 8 }}>
        <Box
          className='w-full'
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'space-between',
            alignItems: isMobile ? 'center' : 'flex-start',
            paddingX: isMobile ? 0 : 2,
          }}
        >
          {isMobile ? (
            <Box className='py-4' sx={{ width: isMobile ? '80%' : '70%' }}>
              <Typography
                variant='h3'
                color='#DBC6BC'
                className='text-center'
                sx={{
                  lineHeight: '40px',
                  textAlign: isMobile ? 'center' : 'center',
                  fontWeight: 500,
                  fontFamily: 'Chronicle Display',
                  fontSize: isMobile ? '40px' : '100px',
                }}
              >
                3D
              </Typography>
              <Typography
                variant='h3'
                color='#DBC6BC'
                className='text-center'
                sx={{
                  lineHeight: '40px',
                  textAlign: isMobile ? 'center' : 'center',
                  fontWeight: 500,
                  fontFamily: 'Chronicle Display',
                  fontSize: isMobile ? '40px' : '100px',
                }}
              >
                INTERACTIVE
              </Typography>
              <Typography
                variant='h3'
                color='#DBC6BC'
                className='text-center'
                sx={{
                  lineHeight: '40px',
                  textAlign: isMobile ? 'center' : 'center',
                  fontWeight: 500,
                  fontFamily: 'Chronicle Display',
                  fontSize: isMobile ? '40px' : '100px',
                }}
              >
                VIEWER
              </Typography>
            </Box>
          ) : (
            <Box className='py-4'>
              <Typography
                variant='h3'
                color='#DBC6BC'
                sx={{
                  textAlign: 'start',
                  lineHeight: '0.8',
                  fontWeight: 500,
                  fontFamily: 'Chronicle Display',
                  fontSize: '120px',
                }}
                className='max-2xl:text-[100px] max-xl:text-[70px] max-lg:text-[50px]'
              >
                3D INTERACTIVE
              </Typography>
              <Typography
                variant='h3'
                color='#DBC6BC'
                sx={{
                  textAlign: 'start',
                  lineHeight: '0.8',
                  fontWeight: 500,
                  fontFamily: 'Chronicle Display',
                  fontSize: '120px',
                }}
                className='max-2xl:text-[100px] max-xl:text-[70px] max-lg:text-[50px]'
              >
                VIEWER
              </Typography>
            </Box>
          )}

          {isMobile ? (
            <Box className='flex flex-col items-center w-full pt-3 space-y-7'>
              <Box className='flex w-[80%] justify-normal'>
                <Typography
                  variant='h3'
                  color='#ffffff'
                  sx={{
                    fontWeight: 400,
                    textAlign: 'center',
                    fontFamily: 'var(--font-montserrat)',
                    fontSize: '13px',
                  }}
                >
                  We believe that in a new age world filled with gadgets, noise and pace that a
                  moment to stop, reflect and connect with something pure
                </Typography>
              </Box>
              <Box className='flex w-full justify-between'>
                <Box className='flex'>
                  <WhiteCustomButton label={'View all'} iconSrc={'/images/icons/Vector.svg'} />
                </Box>
                <Box className='flex'>
                  <Link href={'/visualizer'}>
                    <WhiteCustomButton label={'Try Now!'} iconSrc={'/images/icons/Vector.svg'} />
                  </Link>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box className='flex flex-col justify-start w-1/4 gap-y-5 mt-5'>
              <Box>
                <Typography
                  variant='h3'
                  color='#ffffff'
                  style={{ textAlign: 'justify' }}
                  sx={{
                    fontWeight: 400,
                    fontFamily: 'var(--font-montserrat)',
                    fontSize: {
                      xs: '8px',
                      sm: '10px', // Small screens
                      md: '12px', // Medium screens
                      lg: '18px',
                    },
                  }}
                >
                  We believe that in a new age world filled with gadgets, noise and pace that a
                  moment to stop, reflect and connect with something pure
                </Typography>
              </Box>
              <Box>
                <WhiteCustomButton
                  label={'View all'}
                  iconSrc={'/images/icons/Vector.svg'}
                  onClick={() => {
                    window.location.href = '/visualizer';
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>

        {isMobile ? (
          <StairsCarousel images={images} />
        ) : (
          <Box
            className='w-full flex flex-col aspect-[3.77/1] min-w-1 bg-[#DBC6BC] rounded-[40px] p-8 px-12'
            style={{ marginTop: '230px' }}
          >
            <Box className='flex justify-between w-1/4 gap-x-4'>
              <CarouselPart data={PARTDATA} />
              <Box className='flex flex-col h-[100px] justify-around'>
                <Typography
                  variant='h3'
                  color='#283C28'
                  sx={{
                    fontWeight: 400,
                    alignContent: 'flex-start',
                    fontFamily: 'Chronicle Display',
                    fontSize: {
                      xs: '10px',
                      sm: '15px', // Small screens
                      md: '25px', // Medium screens
                      lg: '25px',
                    },
                  }}
                >
                  CHARLOTTE
                </Typography>
                <Typography
                  variant='h3'
                  color='#17181C'
                  sx={{
                    // width: '90%',
                    fontWeight: 300,
                    alignContent: 'flex-start',
                    fontFamily: 'var(--font-montserrat)',
                    fontSize: {
                      xs: '7px',
                      sm: '10px', // Small screens
                      md: '10px', // Medium screens
                      lg: '12px',
                    },
                  }}
                >
                  Available in our freeform style, the Charlotte sandstone is made up of beautiful
                  soft hues such as cream, yellow and pink.
                </Typography>
              </Box>
            </Box>
            <Box className='flex justify-center w-full'>
              <Carousel data={DATA} />
            </Box>
            <Box className='flex justify-between w-full mt-[-3.5vh]'>
              <Box>
                <Typography
                  color='#283C28 font-semibold'
                  sx={{
                    fontWeight: 500,
                    alignContent: 'flex-start',
                    fontFamily: 'var(--font-montserrat)',
                    lineHeight: '1.6',
                    fontSize: {
                      xs: '8px',
                      sm: '10px', // Small screens
                      md: '12px', // Medium screens
                      lg: '15px',
                    },
                  }}
                >
                  Category: Stairs
                </Typography>
                <Typography
                  color='#283C28 font-semibold'
                  sx={{
                    fontWeight: 500,
                    alignContent: 'flex-start',
                    fontFamily: 'var(--font-montserrat)',
                    lineHeight: '1.6',
                    fontSize: {
                      xs: '8px',
                      sm: '10px', // Small screens
                      md: '12px', // Medium screens
                      lg: '15px',
                    },
                  }}
                >
                  Tag: Exclusive
                </Typography>
              </Box>
              <Box>
                <Link href={'/visualizer'}>
                  <GreenCustomButton label={'Try Now!'} iconSrc={'/images/icons/Vector.svg'} />
                </Link>
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      {isMobile ? (
        <Box className='py-8'>
          <ShortCustomBrownDivider />
        </Box>
      ) : (
        <></>
      )}

      {isMobile ? (
        <Box
          id='paving-mb'
          className='flex flex-col items-center w-full py-8 gap-y-10 rounded-[20px]'
          sx={{
            backgroundImage: 'url(images/Home/PavingRange/background-mobile.jpg)', // Add your image path here
            backgroundSize: 'cover', // Ensures the background image covers the entire area
            backgroundPosition: 'center', // Centers the background image
            backgroundRepeat: 'no-repeat', // Prevents repeating the background image
          }}
          style={{ paddingBottom: '30px' }}
        >
          <Box className='flex flex-col w-full px-16 space-y-4'>
            <Box className='flex justify-center items-center'>
              <Typography
                className='font-bold text-center'
                variant='h3'
                color='#283C28'
                sx={{
                  fontWeight: 400,
                  lineHeight: 0.9,
                  fontFamily: 'Chronicle Display',
                  fontSize: '40px',
                }}
              >
                PAVING RANGE
              </Typography>
            </Box>
            <Box className='flex w-full'>
              <Typography
                variant='h3'
                color='#000000'
                sx={{
                  fontWeight: 400,
                  textAlign: 'center',
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: '13px',
                }}
              >
                We believe that in a new age world filled with gadgets, noise and pace that a moment
                to stop, reflect and connect with something pure
              </Typography>
            </Box>
            <Box className='flex justify-center w-full'>
              <GreenCustomButton label={'View all'} iconSrc={'/images/icons/Vector.svg'} />
            </Box>
          </Box>

          <Box className='flex w-full'>
            <PavingRangeEmblaCarousel slides={SLIDES} options={OPTIONS} />
          </Box>
        </Box>
      ) : (
        <Box
          id='paving'
          className='relative flex flex-col w-full px-20 py-20 gap-y-24 rounded-[40px]'
          sx={{
            backgroundImage: 'url(images/Home/PavingRange/background.jpg)', // Add your image path here
            backgroundSize: 'cover', // Ensures the background image covers the entire area
            backgroundPosition: 'center', // Centers the background image
            backgroundRepeat: 'no-repeat', // Prevents repeating the background image
          }}
        >
          <Box className='flex justify-between w-full'>
            <Box className='flex flex-col justify-center w-1/4 gap-3 '>
              <Box className='flex w-full flex-col gap-y-6 space-y-4 mt-4'>
                <Typography
                  variant='h3'
                  color='#000000'
                  sx={{
                    fontWeight: 400,
                    alignContent: 'flex-start',
                    fontFamily: 'var(--font-montserrat)',
                    lineHeight: '1.2',
                    fontSize: {
                      xs: '8px',
                      sm: '10px', // Small screens
                      md: '12px', // Medium screens
                      lg: '20px',
                    },
                  }}
                >
                  We believe that in a new age world filled with gadgets, noise and pace that a
                  moment to stop, reflect and connect with something pure
                </Typography>
              </Box>
              <Box className='mt-5'>
                <GreenCustomButton label={'View all'} iconSrc={'/images/icons/Vector.svg'} />
              </Box>
            </Box>

            <Box className='flex items-start justify-end w-2/3'>
              <Typography
                className='font-semibold'
                variant='h3'
                color='#283C28'
                sx={{
                  alignContent: 'flex-start',
                  textAlign: 'start',
                  fontWeight: 700,
                  fontFamily: 'Chronicle Display',
                  fontSize: {
                    xs: '25px',
                    sm: '45px', // Small screens
                    md: '55px', // Medium screens
                    lg: '100px',
                  },
                }}
              >
                PAVING RANGE
              </Typography>
            </Box>
          </Box>

          <Box className='flex flex-col w-full gap-y-7'>
            <Box className='flex justify-between w-full gap-x-7'>
              <CustomWallCard
                product_image_src='images/Home/PavingRange/product1.jpg'
                product_subname='PORPHYRY'
              />
              <CustomWallCard
                product_image_src='images/Home/PavingRange/product2.jpg'
                product_subname='QUARTZITE'
              />
              <CustomWallCard
                product_image_src='images/Home/PavingRange/product3.jpg'
                product_subname='MARBLE'
              />
            </Box>
            <Box className='flex justify-between w-full gap-x-7'>
              <CustomWallCard
                product_image_src='images/Home/PavingRange/product4.jpg'
                product_subname='LIMESTONE'
              />
              <CustomWallCard
                product_image_src='images/Home/PavingRange/product5.jpg'
                product_subname='GRANTE'
              />
              <CustomWallCard
                product_image_src='images/Home/PavingRange/product6.jpg'
                product_subname='BLUESTONE'
              />
            </Box>
          </Box>
        </Box>
      )}

      {isMobile ? (
        <Box className='py-8'>
          <ShortCustomBrownDivider />
        </Box>
      ) : (
        <></>
      )}

      {isMobile ? (
        <Box className='px-3 space-y-6'>
          <Box className='flex flex-col w-full'>
            <Box className='w-full'>
              <Typography
                variant='h3'
                color='#DCC5BD'
                className='text-center'
                sx={{
                  fontWeight: 300,
                  fontFamily: 'Chronicle Display',
                  fontSize: '40px',
                }}
              >
                SERVICES
              </Typography>
            </Box>
            <Box className='flex w-full'>
              <Box className='w-full sm:w-full md:w-full lg:w-4/5'>
                <Typography
                  variant='h3'
                  color='white'
                  className='text-center'
                  sx={{
                    fontWeight: 300,
                    fontFamily: 'var(--font-montserrat)',
                    fontSize: '13px',
                    lineHeight: '1.5',
                  }}
                >
                  {showFullText ? fullText : shortText}
                </Typography>
                <Box className='flex justify-center'>
                  <Button
                    onClick={handleToggle}
                    variant='text'
                    className='font-bold'
                    sx={{
                      marginTop: '10px',
                      fontSize: '13px',
                      color: '#FFFFFF', // Gold color
                      fontWeight: 500,
                      '&:hover': {
                        color: '#FFFFFF', // White color on hover
                      },
                    }}
                  >
                    {showFullText ? 'Read Less!' : 'Read More!'}
                  </Button>
                </Box>
              </Box>
              <Box className='w-0 lg:w-1/5'></Box>
            </Box>
          </Box>
          <Box className='flex flex-col w-fil space-y-12'>
            <MeasurementAccordionMobile />

            <TechnicalAccordionMobile />

            <ProductionAccordionMobile />

            <InstallationAccordionMobile />
          </Box>
        </Box>
      ) : (
        <Box className='px-20 space-y-10'>
          <Box className='flex flex-col w-full'>
            <Box className='w-1/3'>
              <Typography
                variant='h3'
                className='font-semibold'
                color='#DCC5BD'
                sx={{
                  fontWeight: 300,
                  alignContent: 'flex-start',
                  fontFamily: 'Chronicle Display',
                  fontSize: {
                    xs: '30px',
                    sm: '50px', // Small screens
                    md: '65px', // Medium screens
                    lg: '100px',
                  },
                }}
              >
                SERVICES
              </Typography>
            </Box>
            <Box className='flex w-full'>
              <Box className='w-full sm:w-full md:w-full lg:w-4/5'>
                <Typography
                  variant='h3'
                  color='white'
                  sx={{
                    fontWeight: 300,
                    alignContent: 'flex-start',
                    fontFamily: 'var(--font-montserrat)',
                    lineHeight: '1.4',
                    fontSize: {
                      xs: '8px',
                      sm: '10px', // Small screens
                      md: '12px', // Medium screens
                      lg: '15px',
                    },
                  }}
                >
                  We offer a wide range of services that focus on the use of stone materials. Our
                  clients can expect top-notch service that includes design, manufacturing, delivery
                  and assembly. Our team of experts use state-of-the-art technology and equipment to
                  ensure that every project is built to the highest quality standards. The client's
                  experience is at the heart of our motivation. We provide support throughout the
                  entire project. Our products are unique and adapted to the specifics of each
                  client, and our clients can choose from a wide range of materials and colors.
                  Also, our clients can rely on our support and advice throughout the process to
                  ensure that their projects are successfully implemented. Our goal is to create
                  products that will not only meet, but also exceed the expectations of our
                  customers.
                </Typography>
              </Box>
              <Box className='w-0 lg:w-1/5'></Box>
            </Box>
          </Box>

          <MeasurementAccordion />

          <TechnicalAccordion />

          <ProductionAccordion />

          <InstallationAccordion />
        </Box>
      )}

      {isMobile ? <ShortCustomBrownDivider /> : <></>}

      <Booking />

      {isMobile ? <ShortCustomBrownDivider /> : <></>}

      {isMobile ? (
        <Box className='flex flex-col w-full px-3 space-y-6'>
          <Box className='flex flex-col items-center justify-center w-full space-y-3'>
            <Typography
              variant='h3'
              color='white'
              className='text-center'
              sx={{
                fontWeight: 400,
                fontFamily: 'var(--font-montserrat)',
                fontSize: '20px',
              }}
            >
              NEWSLETTER
            </Typography>
            <Typography
              variant='h3'
              color='#DBC6BC'
              className='text-center w-[70%]'
              sx={{
                fontWeight: 400,
                justifyContent: 'flex-end',
                fontFamily: 'Chronicle Display',
                lineHeight: 0.8,
                fontSize: '50px',
              }}
            >
              STAY TUNED
            </Typography>
          </Box>
          <Box className='flex w-full'>
            <CustomTextField />
          </Box>
          <Box className='flex w-full justify-center'>
            <WhiteCustomButton label={'Send'} iconSrc={'/images/icons/Vector.svg'} />
          </Box>
        </Box>
      ) : (
        <Box className='flex items-end justify-between w-full px-16'>
          <Box className='flex flex-col justify-end w-1/4'>
            <Typography
              variant='h3'
              color='white'
              sx={{
                fontWeight: 400,
                alignContent: 'flex-start',
                fontFamily: 'var(--font-montserrat)',
                fontSize: {
                  xs: '10px',
                  sm: '15px', // Small screens
                  md: '18px', // Medium screens
                  lg: '20px',
                },
              }}
            >
              NEWSLETTER
            </Typography>
            <Typography
              variant='h3'
              color='#DBC6BC'
              sx={{
                fontWeight: 400,
                alignContent: 'flex-start',
                justifyContent: 'flex-end',
                fontFamily: 'Chronicle Display',
                lineHeight: 0.8,
                fontSize: {
                  xs: '20px',
                  sm: '30px', // Small screens
                  md: '50px', // Medium screens
                  lg: '90px',
                },
              }}
            >
              STAY TUNED
            </Typography>
          </Box>
          <Box className='w-1/2'>
            <CustomTextField />
          </Box>
          <Box className='flex justify-end w-1/4'>
            <WhiteCustomButton label={'Send'} iconSrc={'/images/icons/Vector.svg'} />
          </Box>
        </Box>
      )}

      <ShortCustomBrownDivider />

      {isMobile ? <FooterMobile /> : <Footer />}
    </Box>
  );
};

export default HomePage;
