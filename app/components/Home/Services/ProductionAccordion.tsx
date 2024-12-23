"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Box, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import FullCustomBrownDivider from '../../Divider/FullCustomBrownDivider';

import Image from 'next/image';

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
                    <IndeterminateCheckBoxIcon sx={{ fontSize: '20px', color: '#dbc6bc' }} />
                ) : (
                    <AddBoxIcon sx={{ fontSize: '20px', color: '#dbc6bc' }} />
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
    backgroundColor: '#283C28',
    color: 'white',
    padding: 0, // Remove padding
}));

export default function ProductionAccordion() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div style={{ padding: 0 }}> {/* Root component padding and margin set to 0 */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  style={{backgroundColor:"transparent"}}>
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    expanded={expanded === 'panel1'}
                    style={{
                        borderBottom: '1px solid #DBC6BC',
                        backgroundColor: '#283C28',
                        color: 'white',
                    }}
                >
                    <Box sx={{ textAlign: 'left'}}>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '15px',
                            }}
                        >
                            03
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: { xs: '22px', sm: '22px', md: '28px', lg: '35px' },
                                marginBottom: "20px"
                            }}
                        >
                            PRODUCTION
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className="flex flex-col w-full">
                        <Box className="flex w-full justify-between py-3">
                            <Box className="w-3/4">
                                <Typography
                                    variant="h3"
                                    color="white"
                                    sx={{
                                        fontWeight: 300,
                                        alignContent: 'flex-start',
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px'
                                    }}
                                >
                                    Define your target mEvery project begins with well-taken measures. We will visit the construction site in order to take the exact dimensions needed to create the technical drawings.arket and approach for the market
                                </Typography>
                            </Box>
                            <Box className="flex w-1/4 justify-end items-start">
                                <Image
                                    src="/images/Home/Services/TopRightVector.svg"
                                    alt="Plus"
                                    width={40}
                                    height={40}
                                />
                            </Box>

                        </Box>
                        <FullCustomBrownDivider />
                        <Box className="flex w-full">
                            <Image
                                src="/images/Home/Services/measurement.jpg"
                                alt="Plus"
                                width={356}
                                height={210}
                                className='w-full'
                            />
                        </Box>
                        <FullCustomBrownDivider />
                    </Box>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}
