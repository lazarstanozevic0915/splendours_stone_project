// Import necessary dependencies
import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Header from './Home/Header';
import WhiteCustomButton from './WhiteButton';
import { useMediaQuery } from '@mui/material';
import EnquiryForm from './EnquireFormModal';

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Define mobile breakpoint
  // State management for the EnquiryForm modal
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);

  const handleOpenEnquiryForm = () => setIsEnquiryFormOpen(true);
  const handleCloseEnquiryForm = () => setIsEnquiryFormOpen(false);
  return (
    <>
      {/* EnquiryForm Modal */}
      <EnquiryForm open={isEnquiryFormOpen} handleClose={handleCloseEnquiryForm} />
      <Box
        className='flex'
        sx={{
          width: '100%',
          backgroundImage: 'url(/images/Home/background.jpg)', // Default desktop background
          backgroundSize: '100% 100%',
          backgroundPosition: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh', // Default height for desktop
          '@media (max-width: 768px)': {
            backgroundImage: 'url(/images/Home/background-mobile.png)', // Mobile background
            height: '100vh', // Ensure mobile screen takes full viewport height
          },
        }}
      >
        <Box className='flex items-center w-full' sx={{ height: isMobile ? '15vh' : '20vh' }}>
          <Header />
        </Box>

        <Box
          className='relative flex items-center w-full'
          sx={{ height: isMobile ? '60vh' : '72vh' }}
        >
          <Box className='flex w-4/5'></Box>
          <Box className='flex justify-between w-1/5 h-5/6' style={{ paddingRight: '20px' }}>
            {isMobile ? (
              <Box></Box>
            ) : (
              <Box className='flex items-end w-1/2'>
                <Image src='/images/Home/text_circle.png' alt='Logo' width={90} height={90} />
              </Box>
            )}

            <Box className='absolute mt-56 mr-40'>
              <Image src='/images/Home/zoom.svg' alt='Logo' width={32} height={32} />
            </Box>
            <Box className='' style={{ position: 'absolute', right: '4vw', top: '-3vh' }}>
              <Image
                src='/images/Home/right_text.png'
                alt='Logo'
                width={18}
                height={600}
                className='h-[75vh]'
              />
            </Box>
          </Box>
        </Box>

        {isMobile ? (
          <Box className='flex flex-col w-full' sx={{ paddingX: '4vw', height: '30vh' }}>
            <Box className='flex items-center justify-center'>
              <Box>
                {/** Mobile-specific coloring for "STONE BY SPLENDOUR" */}
                <Typography
                  variant='h3'
                  sx={{
                    fontSize: '40px',
                    fontWeight: 400,
                    color: { xs: '#DBC6BC', sm: '#FFFFFF' }, // Change color for mobile only
                  }}
                >
                  STONE BY SPLENDOUR
                </Typography>
                <Typography
                  variant='h3'
                  sx={{
                    fontSize: '40px',
                    fontWeight: 400,
                    color: { xs: '#FFFFFF', sm: '#FFFFFF' }, // Keep "IN STONE" color unchanged
                  }}
                >
                  IN STONE
                </Typography>
              </Box>
            </Box>

            <Box className='flex items-center justify-between gap-x-[10px] w-full'>
              <WhiteCustomButton label={'Enquire now!'} iconSrc={'images/Vector.svg'} />
              <Link href='/contact'>
                <WhiteCustomButton label={'Contact Us'} iconSrc={'images/Vector.svg'} />
              </Link>
            </Box>
          </Box>
        ) : (
          <Box
            className='flex flex-col w-full mb-6 sm:flex-row md:flex-row lg:flex-row md:px-[5vw]'
            sx={{ height: '8vh' }}
          >
            <Box className='flex items-center w-full sm:w-1/3 md:w-2/5'>
              <Box>
                <WhiteCustomButton
                  label={'Enquire now!'}
                  iconSrc={'images/Vector.svg'}
                  onClick={handleOpenEnquiryForm}
                />
              </Box>
              <Link href={'/contact'} className='ml-[2.5vw]'>
                <WhiteCustomButton label={'Contact Us'} iconSrc={'images/Vector.svg'} />
              </Link>
            </Box>
            <Box className='flex items-center justify-center w-[60vw]'>
              <Typography
                variant='h3'
                color='#FFFFFF'
                sx={{
                  fontWeight: 400,
                  alignContent: 'flex-start',
                  fontFamily: 'Chronicle Display',
                  fontSize: '3.4vw',
                }}
              >
                STONE BY SPLENDOUR IN STONE
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Home;
