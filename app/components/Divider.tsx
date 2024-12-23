// components/CustomDivider.tsx
"use client"; // This line makes this file a client component in Next.js

import Divider from '@mui/material/Divider';


const CustomDivider = () => {
  return (
    <Divider
      sx={{
        borderColor: '#DBC6BC',     // Change color
        borderWidth: '1px',               // Change thickness
        width: '31px',                     // Change width
        margin: '20px auto',              // Center align
      }}
    />
  );
};

export default CustomDivider;
