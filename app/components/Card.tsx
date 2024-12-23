import * as React from 'react';

import { Box, Card, CardContent, Typography } from '@mui/material';

interface CustomCardProps {
    product_image_src: string,
    product_name: string,
    product_subname: string
    product_content: string,
}

const CustomCard: React.FC<CustomCardProps> = ({ product_image_src, product_name, product_subname, product_content }) => {
    return (
        <Card sx={{ width: '408px', height: '751.38px', borderRadius: '20px',marginY:'1%', }} style={{ backgroundImage: `url(${product_image_src})`, }}>
            {/* <CardMedia
                sx={{ height: 400 }}
                image={product_image_src}
                title="green iguana"
            /> */}
            <CardContent sx={{display:'flex',alignContent:'space-between',flexWrap:'wrap',height:'100%',paddingY:'10%'}}>
                <Box sx={{width:'60%'}}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', fontSize: '30px',fontFamily:'var(--font-montserrat)',fontWeight:'600px' }}>
                        {product_name}
                    </Typography>
                </Box>
                <Box  sx={{width:'80%'}}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', fontSize: '30px',fontFamily:'var(--font-montserrat)',fontWeight:'600px' }}>
                        {product_subname}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{ color: 'white', fontSize: '15px',fontFamily:'var(--font-montserrat)',fontWeight:'600px' }}>
                        {product_content}
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    );
}

export default CustomCard;
