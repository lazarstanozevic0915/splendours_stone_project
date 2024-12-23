import * as React from "react";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from '@mui/material';

export default function CustomTextField() {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Define mobile breakpoint
  return (
    <TextField
      id="standard-basic"
      label="EMAIL"
      variant="standard"
      className="flex w-full"
      sx={{
        input: {
          color: "white",
          fontSize: isMobile ? "20px" : "28px",
          fontWeight: 400,
          fontFamily: "var(--font-montserrat)",
        },
        fontSize: isMobile ? "20px" : "28px",
        "& .MuiInputLabel-root": {
          color: "#FFFFFF", // Default color
          fontSize: isMobile ? "20px" : "28px", // Custom font size
          fontWeight: 400, // Optional: Adjust weight
          fontFamily: "var(--font-montserrat)", // Optional: Custom font
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#FFFFFF", // Change label color when focused
          fontWeight: 500, // Optional: Bold when focused
        },
        "& .MuiInput-underline:before": { borderBottomColor: "#DCC5BD" }, // Default
        "& .MuiInput-underline:hover:before": { borderBottomColor: "#DCC5BD" }, // Hover
        "& .MuiInput-underline:after": { borderBottomColor: "#DCC5BD" }, // Focused
      }}
    />
  );
}
