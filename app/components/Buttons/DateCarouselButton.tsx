// components/DateCarouselButton.tsx
"use client"; // This line makes this file a client component in Next.js

import { Box, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';

interface DateCarouselButtonProps {
  date: string;
  day: string;
}

const DateCarouselButton: React.FC<DateCarouselButtonProps> = ({ date, day }) => {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Media query for mobile
  return (
    <Box
      className="flex flex-col rounded-lg aspect-[1.4/1] justify-center items-center"
      sx={{
        border: '2px solid #283C28',
        borderTop: '1px solid #283C28',
        minWidth: isMobile ? '22%' : '10%',
        backgroundColor: 'transparent', // Default background
        transition: 'all 0.3s ease', // Smooth transition for hover effects
        '&:hover': {
          backgroundColor: '#283C28', // Inverted background color
          borderColor: '#DBC6BC', // Inverted border color
          '& h3': {
            color: '#DBC6BC', // Inverted text color
          },
        },
      }}
    >
      <Typography
        variant="h3"
        color="#283C28"
        sx={{
          fontWeight: 600,
          fontFamily: 'Chronicle Display',
          fontSize: '30px'
        }}
      >
        {date}
      </Typography>

      <Typography
        variant="h3"
        color="#283C28"
        sx={{
          fontWeight: 400,
          fontFamily: 'var(--font-montserrat)',
          fontSize: '20px'
        }}
      >
        {day}
      </Typography>
    </Box>
  );
};

export default DateCarouselButton;
