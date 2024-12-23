import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

interface CustomButtonProps {
    iconSrc: string; // The icon source URL
    onClick?: () => void; // Optional click handler
}

const GreenCustomMobileButton: React.FC<CustomButtonProps> = ({ iconSrc, onClick }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // Define size for the icon based on the src
    const iconSize = iconSrc === "/images/icons/Call.svg" 
        ? { width: isMobile ? 20 : 12, height: isMobile ? 20 : 12 } 
        : { width: isMobile ? 25 : 15, height: isMobile ? 25 : 15 };

    return (
        <Button
            variant="outlined"
            onClick={onClick}
            sx={{
                display: 'flex',
                justifyContent: 'center', // Center content horizontally
                alignItems: 'center',    // Center content vertically
                width: '110px',          // Button width
                height: isMobile ? '50px' : '40px', // Button height
                borderRadius: '30px',    // Make the button circular
                backgroundColor: '#283C28', // Dark green background
                borderColor: 'transparent', // No border
                fontSize: isMobile ? '12px' : '10px', // Adjusted font size
                padding: 0, // Remove default padding
                '&:hover': {
                    backgroundColor: '#DBC6BC', // Light beige hover background
                    borderColor: '#DBC6BC',    // Optional border on hover
                },
            }}
        >
            <Image
                src={iconSrc}
                alt="Icon"
                width={iconSize.width} // Apply conditional width
                height={iconSize.height} // Apply conditional height
            />
        </Button>
    );
};

export default GreenCustomMobileButton;
