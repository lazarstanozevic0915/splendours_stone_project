import * as React from 'react';

import { Box, Card, CardContent, Typography } from '@mui/material';

interface StoneProductCardProps {
    product_image_src: string,
    product_name: string,
    product_subname: string
}

const StoneProductCard: React.FC<StoneProductCardProps> = ({ product_image_src, product_name, product_subname }) => {
    return (
        <Card className='w-full rounded-[20px] aspect-[1.15/1]' style={{ backgroundImage: `url(${product_image_src})`}}>
            <CardContent sx={{
                display: 'flex', alignContent: 'space-between', flexWrap: 'wrap', height: '100%', paddingY: '5%', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8))',
                borderRadius: 'inherit'
            }}>
                <Box sx={{ display: 'flex', width: '100%', height: '100%', flexWrap: 'wrap', padding: '1%', alignContent: 'space-between' }}>
                    <Box className="w-4/5">
                        <Typography
                            variant="h3"
                            color="#DBC6BC"
                            sx={{
                                fontWeight: 300,
                                width: '90%',
                                alignContent: 'flex-start',
                                lineHeight:'0.8',
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: {
                                    xs: "15px",
                                    sm: "20px",  // Small screens
                                    md: "30px",  // Medium screens
                                    lg: "40px"
                                }
                            }}
                        >
                            {product_name}
                        </Typography>
                    </Box>
                    <Typography
                        variant="h3"
                        color="#FFFFFF"
                        sx={{
                            fontWeight: 300,
                            width: '85%',
                            alignContent: 'flex-start',
                            fontFamily: 'var(--font-montserrat)',
                            lineHeight:'1',
                            fontSize: {
                                xs: "15px",
                                sm: "15px",  // Small screens
                                md: "15px",  // Medium screens
                                lg: "20px"
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

export default StoneProductCard;
