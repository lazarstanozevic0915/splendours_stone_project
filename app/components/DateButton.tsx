// Import necessary dependencies
import React from 'react';
import Button from '@mui/material/Button';

// Define the component's props with TypeScript types
interface CustomButtonProps {
    label: string;
    onClick?: () => void;
}

const WhiteCustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
    return (
        <Button
            variant="outlined"
            onClick={onClick}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: {
                    xs: '2rem',    // Extra small screens
                    sm: '6rem',   // Small screens
                    md: '8rem',   // Medium screens
                    lg: '10rem',   // Large screens
                },
                height: {
                    xs: '1.4rem',  // Extra small screens
                    sm: '4.2rem',  // Small screens
                    md: '5.6rem',    // Medium screens
                    lg: '7rem',  // Large screens
                },
                borderRadius: '1.5rem',
                color: 'white',
                fontSize: {
                    xs: '0.375rem',  // Extra small screens
                    sm: '1rem',      // Small screens
                    md: '1.125rem',  // Medium screens
                    lg: '1.25rem',   // Large screens
                },
                fontWeight: 400,
                fontFamily: 'Hanken Grotesk',
                backgroundColor: 'transparent',
                borderColor: 'white',
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: 'blue.500',
                    color: 'white',
                    borderColor: 'transparent',
                },
            }}
        >
            {label}
        </Button>
    );
};

export default WhiteCustomButton;
