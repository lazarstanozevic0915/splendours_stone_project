import * as React from 'react';

import { Box, Card, CardContent, Typography } from '@mui/material';

interface CustomWallCardProps {
    product_image_src: string,
    product_subname: string
}

const CustomWallCard: React.FC<CustomWallCardProps> = ({ product_image_src, product_subname }) => {
    return (
        <Card className='w-full rounded-[25px] aspect-[1.23/1] relative' style={{ backgroundImage: `url(${product_image_src})`, }}>
            <CardContent sx={{
                display: 'flex',  alignContent: 'space-between', flexWrap: 'wrap', height: '100%', paddingY: '10%', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
                borderRadius: 'inherit'
            }}>
                <Box sx={{ width: '100%', height: '100%', padding: '3%' }}>
                    {/* <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', fontSize: '40px', fontFamily: 'var(--font-montserrat)', fontWeight: '500px' }}>
                        {product_subname}
                    </Typography> */}
                    <Typography
                        variant="h3"
                        color="#DBC6BC"
                        className="absolute bottom-7 left-7"
                        sx={{
                            fontWeight: 300,
                            alignContent: 'flex-start',
                            fontFamily: 'Chronicle Display',
                            fontStyle: 'italic',
                            fontSize: {
                                xs: "15px",
                                sm: "22px",  // Small screens
                                md: "35px",  // Medium screens
                                lg: "50px"
                            }
                        }}
                    >
                        {product_subname}
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    );
}

export default CustomWallCard;
