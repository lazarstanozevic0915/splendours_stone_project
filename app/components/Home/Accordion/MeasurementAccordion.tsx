"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Box, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import WhiteCustomButton from '../../WhiteButton';
import FullCustomBrownDivider from '../../Divider/FullCustomBrownDivider';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    '&:not(:last-child)': {
        borderBottom: 'none',
    },
    '&::before': {
        display: 'none',
    },
    padding: 0, // Set padding to 0 for Accordion
}));

interface CustomAccordionSummaryProps extends AccordionSummaryProps {
    expanded?: boolean; // Add your custom expanded prop
}

const AccordionSummary = styled((props: CustomAccordionSummaryProps) => {
    const { expanded, ...rest } = props;
    return (
        <MuiAccordionSummary
            expandIcon={
                expanded ? (
                    <IndeterminateCheckBoxIcon sx={{ fontSize: '30px', color: '#dbc6bc' }} />
                ) : (
                    <AddBoxIcon sx={{ fontSize: '30px', color: '#dbc6bc' }} />
                )
            }
            {...rest}
        />
    );
})(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Added justify-content: space-between
    padding: 0, // Remove padding
    '& .MuiAccordionSummary-expandIconWrapper': {
        position: 'relative',
        right: 0,
    },
    '& .MuiAccordionSummary-content': {
        margin: 0, // Remove margin
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    backgroundColor: '#17181c',
    color: 'white',
    padding: 0, // Remove padding
}));

export default function MeasurementAccordion() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div style={{ padding: 0 }}> {/* Root component padding and margin set to 0 */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    expanded={expanded === 'panel1'}
                    style={{
                        borderBottom: '2px solid #DBC6BC',
                        backgroundColor: '#17181c',
                        color: 'white',
                    }}
                >
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography
                            variant="h3"
                            color="#dbc6bc"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: { xs: '8px', sm: '10px', md: '12px', lg: '20px' },
                            }}
                        >
                            01
                        </Typography>
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'Raleway',
                                fontSize: { xs: '20px', sm: '30px', md: '45px', lg: '60px' },
                            }}
                        >
                            MEASUREMENT
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className="flex w-full justify-between">
                        <Box className="flex flex-col w-1/3 justify-around">
                            <Typography
                                variant="h3"
                                color="white"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "10px",  // Small screens
                                        md: "12px",  // Medium screens
                                        lg: "15px"
                                    }
                                }}
                            >
                                Define your target mEvery project begins with well-taken measures. We will visit the construction site in order to take the exact dimensions needed to create the technical drawings.arket and approach for the market
                            </Typography>
                            <WhiteCustomButton label={'Learn More'} iconSrc={'/images/vector.svg'} />
                        </Box>
                        <Box className="flex w-1/2">
                            <img
                                src="/images/background.png"
                                alt="Plus"
                                className="flex w-full"
                            />
                        </Box>
                    </Box>
                    <FullCustomBrownDivider />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
