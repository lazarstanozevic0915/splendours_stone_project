import { Button, SxProps, Theme } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import React from 'react';

interface GreenCustomButtonProps {
    label: string;
    iconSrc: string;
    styles?: SxProps<Theme>; // MUI-compatible styles
    borderColor: string;
}

const GreenCustomButton: React.FC<GreenCustomButtonProps> = ({ label, iconSrc, styles, borderColor }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <Button
            className="px-6"
            variant="outlined"
            endIcon={
                <Image
                    src={iconSrc}
                    alt="Button Icon"
                    width={isMobile?25:31.67}
                    height={isMobile?25:31.67}
                    style={{
                        filter: 'brightness(0) saturate(100%) invert(89%) sepia(10%) saturate(320%) hue-rotate(15deg) brightness(93%) contrast(90%)',
                    }}
                />
            }
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: { xs: "160px", sm: "20vw", md: "13vw", lg: "13vw" }, // Responsive width
                height: { xs: "42px", sm: "4.5vw", md: "3.1vw" , lg: "3.1vw"}, // Responsive height
                borderRadius: '1.5rem',
                color: borderColor,
                fontSize: {
                    xs: '1rem',
                    sm: '0.8rem',
                    md: '1rem',
                    lg: '1.25rem',
                },
                fontWeight: 400,
                fontFamily: 'Hanken Grotesk',
                backgroundColor: '#283C28',
                borderColor: borderColor,
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: 'white',
                    color: 'blue.500',
                    borderColor: 'white',
                },
                ...styles, // Apply additional styles if passed
            }}
        >
            <span style={{ color: borderColor }}>{label}</span>
        </Button>
    );
};

export default GreenCustomButton;
