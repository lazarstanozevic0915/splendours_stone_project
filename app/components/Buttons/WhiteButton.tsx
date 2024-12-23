// Import necessary dependencies
import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';

// Define the component's props with TypeScript types
interface CustomButtonProps {
    label: string;
    iconSrc: string;
    onClick?: () => void;
}

const WhiteCustomButton: React.FC<CustomButtonProps> = ({ label, iconSrc, onClick }) => {
    return (
        <Button
            variant="outlined"
            endIcon={
                <Image
                    src={iconSrc}
                    alt="Logo"
                    width={25}
                    height={25}
                    style={{ filter: 'invert(26%) sepia(16%) saturate(385%) hue-rotate(99deg) brightness(50%) contrast(80%)' }} // Matches #283C28
                />
            }
            onClick={onClick}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width:'180px',
                height:'50px',
                borderRadius: '1.5rem',
                color: '#283C28',              // Default font color
                fontSize: {
                    xs: '12px',                 // Extra small screens
                    sm: '13px',                 // Small screens
                    md: '14px',                // Medium screens
                    lg: '15px',                // Large screens
                },
                fontWeight: 400,
                fontFamily: 'var(--font-montserrat)',
                fontSynthesisWeight: 600,
                backgroundColor: '#DBC6BC',    // Default background color
                borderColor: 'transparent',   // Border color
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: '#283C28', // Hover background color
                    color: '#DBC6BC',          // Hover font color
                    borderColor: '#283C28',    // Hover border matches hover background
                },
            }}
        >
            {label}
        </Button>


    );
};

export default WhiteCustomButton;
