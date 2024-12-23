// components/DateCarouselButton.tsx
"use client"; // This line makes this file a client component in Next.js

import { Box, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';

interface DateCarouselButtonProps {
  date: string;
  day: string;
  onClick: () => void;
  isSelected: boolean; // Prop to check if the button is selected
}

const DateCarouselButton: React.FC<DateCarouselButtonProps> = ({ date, day, onClick, isSelected }) => {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Media query for mobile

  return (
    <Box
      className="flex flex-col aspect-[1.4/1] justify-center items-center"
      sx={{
        border: '1px solid #283C28',
        paddingTop: isMobile ? '8px' : '0',
        minWidth: isMobile ? '22%' : '10%',
        borderRadius: isMobile ? "10px" : "25px",
        backgroundColor: isSelected ? '#283C28' : 'transparent', // Apply the background color if selected
        borderColor: isSelected ? '#DBC6BC' : '#283C28', // Apply border color if selected
        transition: 'all 0.3s ease',
        '& h3': {
          color: isSelected ? '#DBC6BC' : '#283C28', // Change text color if selected
        },
        '&:hover': {
          backgroundColor: isSelected ? '#283C28' : '#F0F0F0', // Keep hover for unselected buttons
          borderColor: isSelected ? '#DBC6BC' : '#283C28',
        },
      }}
      onClick={onClick}
    >
      <Typography
        variant="h3"
        color="#283C28"
        sx={{
          fontWeight: 600,
          fontFamily: 'Chronicle Display',
          fontSize: isMobile ? '30px' : '60px',
        }}
      >
        {date}
      </Typography>

      <Typography
        variant="h3"
        color="#283C28"
        sx={{
          // fontWeight: 600,
          fontFamily: 'var(--font-montserrat)',
          fontSize: isMobile ? '15px' : '20px',
          letterSpacing: '0.01em',
          marginTop: "0px",
          paddingBottom: "20px"

        }}
      >
        {day}
      </Typography>
    </Box>
  );
};

export default DateCarouselButton;
