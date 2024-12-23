// components/CustomDivider.tsx
"use client"; // This line makes this file a client component in Next.js

import Divider from '@mui/material/Divider';


const ShortCustomYellowDivider = () => {
    return (
        <Divider
            sx={{
                borderColor: '#DCC5BD',     // Change color
                borderWidth: '1px',               // Change thickness
                width: '31px',                     // Change width
                margin: '20px auto',              // Center align
            }}
        />
    );
};

export default ShortCustomYellowDivider;
