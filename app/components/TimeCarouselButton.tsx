// components/DateCarouselButton.tsx
"use client"; // This line makes this file a client component in Next.js

import { useMediaQuery } from '@mui/material';
import { Box, Typography } from '@mui/material';

interface TimeCarouselButtonProps {
    time: string,
    onClick: () => void,
    isSelected: boolean; // Prop to check if the button is selected
}


const TimeCarouselButton: React.FC<TimeCarouselButtonProps> = ({ time, onClick, isSelected }) => {
    const isMobile = useMediaQuery('(max-width: 768px)'); // Media query for mobile
    return (
        <Box className="flex flex-col rounded-lg aspect-[3.4/1] py-0 justify-center items-center" sx={{
            border: '1px solid #283C28', minWidth: isMobile ? '45%' : '13%', backgroundColor: isSelected ? '#283C28' : 'transparent', // Apply the background color if selected
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
                className="flex w-1/2 h-[48px] sm:h-1/2 justify-center items-center"
                variant="h3"
                color="#283C28"
                sx={{
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontFamily: 'var(--font-chronicle-display)',
                    fontSize: isMobile ? '25px' : '35px',
                }}
            >
                {time}
            </Typography>
        </Box>
    );
};

export default TimeCarouselButton;
