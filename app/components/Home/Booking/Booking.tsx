// pages/index.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme, useMediaQuery } from '@mui/material';
import { Box, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@mui/material";
import GreenCustomButton from '../../GreenCustomButton';
import GreenCustomMobileButton from '../../Buttons/GreenCustomMobileButton';
import GreenCustomCallIconButton from '../../GreenCustomCallIconButton';
import GreenCustomBookButton from '../../GreenBookButton';
import DateCarousel from '../../DateCarousel';
import TimeCarousel from '../../TimeCarousel';
import ServiceCarousel from '../../ServiceCarousel';
import ProductCarousel from '../../ProductCarousel';
import PhaseCarousel from '../../PhaseCarousel';
import CalendarControl from '../../CalendarControl';
import MonthYearPicker from './MonthCalendar';

// import MonthCalendar from './MonthCalendar';

const Booking: React.FC = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // const inputRef = useRef<HTMLInputElement | null>(null); // Create a ref for the input element
    const [resources, setResources] = useState<{ date: string; day: string }[]>([]); // State for resources
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // 1 - 12 for Jan - Dec
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Current year
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedDay, setSelectedDay] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedProductTitle, setSelectedProductTitle] = useState<string | null>(null);
    const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
    const [isBookNow, setIsBookNow] = useState<boolean>(false);
    const [isVideoCall, setIsVideoCall] = useState<boolean>(false);
    const [isCall, setIsCall] = useState<boolean>(false);
    const [isEmail, setIsEmail] = useState<boolean>(false);
    // const [error, setError] = useState<string>('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    // For Dialog state
    const [openDialog, setOpenDialog] = useState(false);

    const [openCalendarDialog, setOpenCalendarDialog] = useState<boolean>(false);

    // Function to get month abbreviation
    const getMonthAbbreviation = (month: number): string => {
        const monthMap = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        return monthMap[month - 1]; // Adjust for zero-based index
    };

    // Function to generate month resources based on selected year and month
    const generateResources = (year: number, month: number) => {
        const daysInMonth = new Date(year, month, 0).getDate(); // Get number of days in the month
        const newResources: { date: string; day: string }[] = [];

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month - 1, day);
            const dayName = date.toLocaleString('default', { weekday: 'short' }).toUpperCase();
            newResources.push({ date: day.toString(), day: dayName });
        }

        // Update the resources state with the new array
        // setResources(newResources);
        return newResources;
    };

    // Function to handle the click on the CalendarControl
    // const handleCalendarControlClick = () => {
    //     console.log("click---->0");
    //     if (inputRef.current) {
    //         console.log("click---->1");

    //         inputRef.current.showPicker(); // Trigger the click event on the inputi
    //     }
    // };

    const handleCalendarControlClick = () => {
        setOpenCalendarDialog(true);
    };

    const handleCloseCalendarDialog = () => {
        setOpenCalendarDialog(false);
    };

    // Handle month input change
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value; // e.g., "2024-05"
    //     const [year, month] = value.split('-').map(Number); // Split into year and month
    //     setSelectedYear(year);
    //     setSelectedMonth(month);

    //     const newResources = generateResources(year, month);
    //     setResources(newResources); // Update the resources state

    // };

    // Initialize with current month and year resources
    useEffect(() => {
        const initialResources = generateResources(selectedYear, selectedMonth);
        setResources(initialResources);
    }, [selectedYear, selectedMonth]); // Dependency array only includes selectedMonth and selectedYear

    const handleMonthYearChange = (month: number, year: number) => {
        setSelectedMonth(month + 1);
        setSelectedYear(year);
    };

    const [formData, setFormData] = useState({
        name: 'JohnDoe',
        email: 'johndoe@gmail.com',
        phone: '+1223459064',
        date: '',
        stoneService: '',
        stoneProduct: '',
        stonePhase: '',
        specialRequests: '',
        role: ''
    });

    // Validation function for name
    const validateName = (name: string) => {
        if (!name.trim()) {
            return 'Name cannot be empty';
        }
        if (name.length < 2) {
            return 'Name must be at least 2 characters long';
        }
        return '';
    };


    // Email validation function
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex pattern
        return emailRegex.test(email);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        setFormData({ ...formData, name });

        // Validate the input name
        const error = validateName(name);
        setNameError(error);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setFormData({ ...formData, email });

        // Check for email validity
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    // Validation function for phone number
    const validatePhone = (phone: string) => {
        const phoneRegex = /^\+?[1-9]\d{9,14}$/; // Allows optional "+" followed by 10 to 15 digits
        if (!phone.trim()) {
            return 'Phone number is required';
        }
        if (!phoneRegex.test(phone)) {
            return 'Please enter a valid phone number';
        }
        return '';
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const phone = e.target.value;
        setFormData({ ...formData, phone });

        // Validate the input phone
        const error = validatePhone(phone);
        setPhoneError(error);
    };

    const handleSubmit = async () => {
        // e.preventDefault();
        handleCloseDialog()

        // Update role to 1
        setFormData((prevState) => ({
            ...prevState,
            role: '1', // Set role to 1
        }));

        try {
            const response = await axios.post('/api/submit-form', formData);
            console.log(response.data); // Log the success message from the server
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again later.');
        }

    };

    const handleVideoCallSubmit = async () => {
        // e.preventDefault();
        handleCloseDialog()

        // Update role to 1
        setFormData((prevState) => ({
            ...prevState,
            role: '2', // Set role to 1
        }));

        try {
            const response = await axios.post('/api/submit-form', formData);
            console.log(response.data); // Log the success message from the server
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again later.');
        }

    };

    const handleCallSubmit = async () => {
        // e.preventDefault();
        handleCloseDialog()

        // Update role to 1
        setFormData((prevState) => ({
            ...prevState,
            role: '3', // Set role to 1
        }));

        try {
            const response = await axios.post('/api/submit-form', formData);
            console.log(response.data); // Log the success message from the server
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again later.');
        }

    };

    const handleEmailSubmit = async () => {
        // e.preventDefault();
        handleCloseDialog()

        // Update role to 1
        setFormData((prevState) => ({
            ...prevState,
            role: '4', // Set role to 1
        }));

        try {
            const response = await axios.post('/api/submit-form', formData);
            console.log(response.data); // Log the success message from the server
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again later.');
        }

    };

    const handleDateSelection = (date: string, day: string) => {
        setSelectedDate(date);
        setSelectedDay(day);
    };

    const handleSelectTime = (time: string) => {
        setSelectedTime(time); // Store the selected time in the parent
    };

    // Callback function to update the selectedService in the parent
    const handleSelectedServiceChange = (service: string) => {
        setSelectedService(service);
    };

    // Function to update the selected product title
    const handleProductSelection = (title: string) => {
        setSelectedProductTitle(title);
    };

    // Callback function to update selectedPhase
    const handlePhaseSelect = (phase: string) => {
        setSelectedPhase(phase);
    };

    const handleOpenDialog = () => {

        setIsBookNow(true)
        // console.log("handleOpenDialog-->>", formData);

        setFormData({
            ...formData,
            date: `${selectedYear}/${selectedMonth}/${selectedDate}/${selectedTime} (${selectedDay})`,
            stoneService: selectedService || '',
            stoneProduct: selectedProductTitle || '',
            stonePhase: selectedPhase || '',
            specialRequests: ''
        });
        setOpenDialog(true);
    };
    const handleOpenDialog_VideoCall = () => {
        setIsVideoCall(true);
        setOpenDialog(true);
    }
    const handleOpenDialog_Call = () => {
        setIsCall(true);
        setOpenDialog(true);
    }
    const handleOpenDialog_Email = () => {
        setIsEmail(true);
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setIsBookNow(false)
        setIsCall(false)
        setIsVideoCall(false)
        setIsEmail(false)
        setOpenDialog(false);
        // console.log("handleCloseDialog", openDialog)
    };

    return (
        <Box>

            {isMobile ? <Box
                className="relative flex flex-col w-full py-10 gap-y-8 rounded-[20px]"
                sx={{
                    backgroundImage: 'url(images/Home/Booking/background-mobile.jpg)', // Add your image path here
                    backgroundSize: 'cover', // Ensures the background image covers the entire area
                    backgroundPosition: 'center', // Centers the background image
                    backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                }}
            >
                <Box className="flex flex-col items-center justify-center w-full px-3 gap-y-4">
                    <Box className="flex flex-col w-full">
                        <Typography
                            variant="h3"
                            color="#283C28"
                            sx={{
                                fontWeight: 400,
                                textAlign: 'center',
                                fontFamily: 'Chronicle Display',
                                fontSize: '40px'
                            }}
                        >
                            BOOKING
                        </Typography>
                    </Box>
                    <Box className="flex w-full justify-center">
                        <Box className="flex w-[160px] h-[42px] justify-center" sx={{ border: '1px solid #283C28', borderRadius: '20px' }}>
                            {/* <CalendarControl onClick={handleCalendarControlClick} month={getMonthAbbreviation(selectedMonth)} year={selectedYear} /> */}
                            <CalendarControl
                                onClick={handleCalendarControlClick}
                                month={getMonthAbbreviation(selectedMonth)}
                                year={selectedYear}
                            />

                            <Dialog open={openCalendarDialog} onClose={handleCloseCalendarDialog}>
                                <DialogTitle>Select Month and Year</DialogTitle>
                                <DialogContent>
                                    <MonthYearPicker
                                        initialMonth={selectedMonth}
                                        initialYear={selectedYear}
                                        onMonthYearChange={handleMonthYearChange}
                                    />
                                </DialogContent>
                            </Dialog>
                            {/* <input
                                ref={inputRef} // Attach the ref to the input
                                type="month" // Specify the type
                                id="id"
                                name="name"
                                placeholder="placeholder"
                                className="opacity-0 bg-inherit text-inherit"
                                onChange={handleChange} //Handle date change
                            /> */}
                        </Box>
                        <Box className="flex w-1/2 justify-center">
                            <GreenCustomButton label={'Book'} iconSrc="/images/icons/Vector.svg" onClick={handleOpenDialog} />
                        </Box>
                    </Box>
                    <Box className="flex justify-between w-full">
                        <GreenCustomMobileButton iconSrc="/images/icons/VideoCall.svg" onClick={handleOpenDialog_VideoCall} />
                        <GreenCustomMobileButton iconSrc="/images/icons/Call.svg" onClick={handleOpenDialog_Call} />
                        <GreenCustomMobileButton iconSrc="/images/icons/Email.svg" onClick={handleOpenDialog_Email} />
                    </Box>
                </Box>

                <Box className="flex flex-col w-full px-3 gap-y-5">
                    <DateCarousel initialResources={resources} onSelectDate={handleDateSelection} />

                    <TimeCarousel onSelectTime={handleSelectTime} />

                    <ServiceCarousel onServiceSelect={handleSelectedServiceChange} />

                    <ProductCarousel onProductSelect={handleProductSelection} />

                    <PhaseCarousel onPhaseSelect={handlePhaseSelect} />
                </Box>
                {/* Dialog for Form */}
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle><Typography
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 400,
                            textAlign: 'center',
                            fontFamily: 'Chronicle Display',
                            fontSize: '40px'
                        }}
                    >
                        BOOKING
                    </Typography></DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-y-3'>
                            <TextField
                                label="Name"
                                fullWidth
                                value={formData.name}
                                onChange={handleNameChange}
                                error={!!nameError} // Show error styling if validation fails
                                helperText={nameError} // Display validation message
                                variant="outlined"
                                sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }}
                            />

                            {!isCall && (
                                <TextField
                                    label="Email"
                                    fullWidth
                                    value={formData.email}
                                    onChange={handleEmailChange}
                                    error={!!emailError} // Trigger error state if invalid
                                    helperText={emailError} // Show validation message
                                    variant="outlined"
                                    sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }}
                                />
                            )}

                            {!isVideoCall && (
                                <TextField
                                    label="Phone"
                                    fullWidth
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    error={!!phoneError} // Show error styling if validation fails
                                    helperText={phoneError} // Display validation message
                                    variant="outlined"
                                    sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }}
                                />
                            )}


                            {(isBookNow || isEmail) ? < TextField
                                label="Date"
                                fullWidth
                                value={selectedDate ? `${selectedYear} / ${selectedMonth} / ${selectedDate} / ${selectedTime} (${selectedDay})` : ''}
                                disabled
                                variant="outlined"
                                sx={{ '& .MuiInputBase-root': { backgroundColor: '#F5F5F5', borderRadius: 2 } }}
                            /> : <></>}

                            {(isBookNow || isEmail) ? <TextField
                                label="Service"
                                fullWidth
                                value={selectedService || ''}
                                disabled
                                variant="outlined"
                                sx={{ '& .MuiInputBase-root': { backgroundColor: '#F5F5F5', borderRadius: 2 } }}
                            /> : <></>}

                            {(isBookNow || isEmail) ? <TextField
                                label="Product"
                                fullWidth
                                value={selectedProductTitle || ''}
                                disabled
                                variant="outlined"
                                sx={{ '& .MuiInputBase-root': { backgroundColor: '#F5F5F5', borderRadius: 2 } }}
                            /> : <></>}

                            {(isBookNow || isEmail) ? <TextField
                                label="Phase"
                                fullWidth
                                value={selectedPhase || ''}
                                disabled
                                variant="outlined"
                                sx={{ '& .MuiInputBase-root': { backgroundColor: '#F5F5F5', borderRadius: 2 } }}
                            /> : <></>}

                            {(isBookNow || isEmail) ?
                                <TextField
                                    label="Special Requests"
                                    fullWidth
                                    multiline
                                    rows={3}
                                    value={formData.specialRequests}
                                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                                    variant="outlined"
                                    sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }}
                                /> : <></>}

                            <Box className="flex w-full justify-center">
                                {isBookNow && <GreenCustomBookButton label={'Book Now'} iconSrc="/images/icons/Vector.svg" onClick={() => handleSubmit()} />}
                                {isVideoCall && <GreenCustomBookButton label={'request video call'} iconSrc="/images/icons/Vector.svg" onClick={() => handleSubmit()} />}
                                {isCall && <GreenCustomBookButton label={'request a call'} iconSrc="/images/icons/Call.svg" onClick={() => handleSubmit()} />}
                                {isEmail && <GreenCustomBookButton label={'request email'} iconSrc="/images/icons/Email.svg" onClick={() => handleSubmit()} />}
                            </Box>
                        </form>
                    </DialogContent>
                </Dialog>
            </Box> : <Box
                className="relative flex flex-col w-full px-20 py-20 gap-y-8 rounded-[40px]"
                sx={{
                    backgroundImage: 'url(images/Home/Booking/background.jpg)', // Add your image path here
                    backgroundSize: 'cover', // Ensures the background image covers the entire area
                    backgroundPosition: 'center', // Centers the background image
                    backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                }}
            >
                <Box className="flex justify-between w-full gap-x-16">
                    <Box className="flex flex-col justify-around w-1/2">
                        <Typography
                            variant="h3"
                            color="#283C28"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                fontSize: {
                                    xs: "30px",
                                    sm: "50px",  // Small screens
                                    md: "65px",  // Medium screens
                                    lg: "100px"
                                }
                            }}
                        >
                            BOOKING
                        </Typography>

                        <CalendarControl
                            onClick={handleCalendarControlClick}
                            month={getMonthAbbreviation(selectedMonth)}
                            year={selectedYear}
                        />

                        <Dialog open={openCalendarDialog} onClose={handleCloseCalendarDialog}>
                            <DialogTitle>Select Month and Year</DialogTitle>
                            <DialogContent>
                                <MonthYearPicker
                                    initialMonth={selectedMonth}
                                    initialYear={selectedYear}
                                    onMonthYearChange={handleMonthYearChange}
                                />
                            </DialogContent>
                            {/* <DialogActions>
                                <Button onClick={handleCloseCalendarDialog} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleCloseCalendarDialog} color="primary">
                                    OK
                                </Button>
                            </DialogActions> */}
                        </Dialog>
                        {/* <input
                            ref={inputRef} // Attach the ref to the input
                            type="month" // Specify the type
                            id="id"
                            name="name"
                            placeholder="placeholder"
                            className="opacity-0 bg-inherit text-inherit"
                            onChange={handleChange} //Handle date change
                        /> */}

                    </Box>
                    <Box className="flex flex-col justify-around w-5/12">
                        <Box className="flex justify-end w-full">
                            <GreenCustomButton label={'Book'} iconSrc="/images/icons/Vector.svg" onClick={handleOpenDialog} />
                        </Box>
                        <Box className="flex justify-between w-full gap-x-3">
                            <GreenCustomButton label={'Video Call'} iconSrc="/images/icons/VideoCall.svg" onClick={handleOpenDialog_VideoCall} />
                            <GreenCustomCallIconButton label={'Call'} iconSrc="/images/icons/Call.svg" onClick={handleOpenDialog_Call} />
                            <GreenCustomButton label={'Email'} iconSrc="/images/icons/Email.svg" onClick={handleOpenDialog_Email} />
                        </Box>
                    </Box>
                </Box>

                <Box className="flex flex-col w-full space-y-3">
                    <DateCarousel initialResources={resources} onSelectDate={handleDateSelection} />

                    <TimeCarousel onSelectTime={handleSelectTime} />

                    <ServiceCarousel onServiceSelect={handleSelectedServiceChange} />

                    <ProductCarousel onProductSelect={handleProductSelection} />

                    <PhaseCarousel onPhaseSelect={handlePhaseSelect} />
                </Box>

                {/* Dialog for Form */}
                <Dialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    PaperProps={{
                        sx: {
                            borderRadius: 3,
                            px: { xs: 2, sm: 4 },
                            py: 3,
                            maxWidth: '500px',
                            width: '100%',
                        }
                    }}
                >
                    <DialogTitle
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            color: '#283C28',
                            fontFamily: 'Chronicle Display',
                            marginBottom: 2,
                        }}
                    >
                        <Typography
                            variant="h3"
                            color="#283C28"
                            sx={{
                                fontWeight: 400,
                                textAlign: 'center',
                                fontFamily: 'Chronicle Display',
                                fontSize: '40px'
                            }}
                        >
                            BOOKING
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                            <TextField
                                label="Name"
                                fullWidth
                                value={formData.name}
                                onChange={handleNameChange}
                                error={!!nameError} // Show error styling if validation fails
                                helperText={nameError} // Display validation message
                                variant="outlined"
                                sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }}
                            />

                            {!isCall && (
                                <TextField
                                    label="Email"
                                    fullWidth
                                    value={formData.email}
                                    onChange={handleEmailChange}
                                    error={!!emailError} // Trigger error state if invalid
                                    helperText={emailError} // Show validation message
                                    variant="outlined"
                                    sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }}
                                />
                            )}

                            {!isVideoCall && (
                                <TextField
                                    label="Phone"
                                    fullWidth
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    error={!!phoneError} // Show error styling if validation fails
                                    helperText={phoneError} // Display validation message
                                    variant="outlined"
                                    sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }}
                                />
                            )}


                            {(isBookNow || isEmail) ? < TextField
                                label="Date"
                                fullWidth
                                value={selectedDate ? `${selectedYear} / ${selectedMonth} / ${selectedDate} / ${selectedTime} (${selectedDay})` : ''}
                                disabled
                                variant="outlined"
                                sx={{ '& .MuiInputBase-root': { backgroundColor: '#F5F5F5', borderRadius: 2 } }}
                            /> : <></>}

                            {(isBookNow || isEmail) ? <TextField
                                label="Service"
                                fullWidth
                                value={selectedService || ''}
                                disabled
                                variant="outlined"
                                sx={{ '& .MuiInputBase-root': { backgroundColor: '#F5F5F5', borderRadius: 2 } }}
                            /> : <></>}

                            {(isBookNow || isEmail) ? <TextField
                                label="Product"
                                fullWidth
                                value={selectedProductTitle || ''}
                                disabled
                                variant="outlined"
                                sx={{ '& .MuiInputBase-root': { backgroundColor: '#F5F5F5', borderRadius: 2 } }}
                            /> : <></>}

                            {(isBookNow || isEmail) ? <TextField
                                label="Phase"
                                fullWidth
                                value={selectedPhase || ''}
                                disabled
                                variant="outlined"
                                sx={{ '& .MuiInputBase-root': { backgroundColor: '#F5F5F5', borderRadius: 2 } }}
                            /> : <></>}

                            {(isBookNow || isEmail) ?
                                <TextField
                                    label="Special Requests"
                                    fullWidth
                                    multiline
                                    rows={3}
                                    value={formData.specialRequests}
                                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                                    variant="outlined"
                                    sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }}
                                /> : <></>}

                            <DialogActions
                                sx={{
                                    justifyContent: 'center',
                                    // mt: 2,
                                    // px: 1,
                                }}
                            >
                                {/* <Button
                                    onClick={handleCloseDialog}
                                    sx={{
                                        backgroundColor: '#283C28',
                                        color: '#F44336',
                                        textTransform: 'capitalize',
                                        fontWeight: 600,
                                        fontFamily: 'Arial',
                                    }}
                                >
                                    Cancel
                                </Button> */}
                                <Box className="flex w-full justify-center">
                                    {isBookNow && <GreenCustomBookButton label={'Book Now'} iconSrc="/images/icons/Vector.svg" onClick={() => handleSubmit()} />}
                                    {isVideoCall && <GreenCustomBookButton label={'request video call'} iconSrc="/images/icons/Vector.svg" onClick={() => handleVideoCallSubmit()} />}
                                    {isCall && <GreenCustomBookButton label={'request a call'} iconSrc="/images/icons/Call.svg" onClick={() => handleCallSubmit()} />}
                                    {isEmail && <GreenCustomBookButton label={'request email'} iconSrc="/images/icons/Email.svg" onClick={() => handleEmailSubmit()} />}
                                </Box>
                                {/* <Button
                                    type="submit"
                                    sx={{
                                        backgroundColor: '#283C28',
                                        color: '#FFF',
                                        textTransform: 'capitalize',
                                        fontWeight: 600,
                                        fontFamily: 'Arial',
                                        '&:hover': { backgroundColor: '#3A5240' },
                                    }}
                                >
                                    Submit
                                </Button> */}
                            </DialogActions>
                        </form>
                    </DialogContent>
                </Dialog>
            </Box>}
        </Box>
    );
};

export default Booking;