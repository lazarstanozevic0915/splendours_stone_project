// Import necessary dependencies
import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

// Define the component's props with TypeScript types
interface CustomButtonProps {
    label: string;
    iconSrc: string;
    onClick?: () => void;
}

const WhiteCustomButton: React.FC<CustomButtonProps> = ({ label, iconSrc, onClick }) => {
    return (
        <Button
            className="font-semibold px-4"
            variant="outlined"
            endIcon={
                <Box
                    sx={{
                        width: { xs: "30px", md: '2vw' },
                        height: { xs: "30px", md: '2vw' },
                        paddingRight: "10px",
                        backgroundImage: `url(${iconSrc})`,
                        backgroundSize: "cover",
                        filter: "brightness(0) saturate(100%) invert(28%) sepia(14%) saturate(589%) hue-rotate(100deg) brightness(93%) contrast(81%)",
                    }} />

            }
            onClick={onClick}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: { xs: "160px", sm: "20vw", md: "13vw", lg: "13vw" }, // Responsive width
                height: { xs: "42px", sm: "4.5vw", md: "3.1vw", lg: "3.1vw" }, // Responsive height
                borderRadius: "50px",
                color: "#283C28",
                fontSize: { xs: "11px", sm: "1vw" }, // Responsive font size
                fontWeight: 400,
                fontFamily: "var(--font-montserrat)",
                fontSynthesisWeight: 600,
                backgroundColor: "#DBC6BC", // Default background color
                borderColor: "transparent", // Border color
                textTransform: "none",
                px: { xs: "15px", sm: "20px" }, // Responsive padding
                "&:hover": {
                    backgroundColor: "#283C28", // Hover background color
                    color: "#DBC6BC", // Hover font color
                    borderColor: "#283C28", // Hover border matches hover background
                },
            }}
        >
            {label}
        </Button>
    );
};

export default WhiteCustomButton;
