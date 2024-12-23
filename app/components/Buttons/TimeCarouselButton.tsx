// components/DateCarouselButton.tsx
"use client"; // This line makes this file a client component in Next.js

import { useMediaQuery } from '@mui/material';
import { Box, Typography } from '@mui/material';

interface TimeCarouselButtonProps {
    time: string,
}


const TimeCarouselButton: React.FC<TimeCarouselButtonProps> = ({ time }) => {
    const isMobile = useMediaQuery('(max-width: 768px)'); // Media query for mobile
    return (
        <Box className="flex flex-col rounded-lg aspect-[3.4/1] justify-center items-center" sx={{
            border: '1px solid #283C28', minWidth: isMobile ? '45%': '13%', transition: 'all 0.3s ease', backgroundColor: 'transparent', // Smooth transition for hover effects
            '&:hover': {
                backgroundColor: '#283C28', // Inverted background color
                borderColor: '#DBC6BC', // Inverted border color
                '& h3': {
                    color: '#DBC6BC', // Inverted text color
                },
            },
        }}>
            <Typography
                className="flex w-1/2 h-1/2 justify-center items-center"
                variant="h3"
                color="#283C28"
                sx={{
                    fontWeight: 300,
                    fontFamily: 'var(--font-montserrat)',
                    fontSize: '25px'
                }}
            >
                {time}
            </Typography>
        </Box>
    );
};

export default TimeCarouselButton;
