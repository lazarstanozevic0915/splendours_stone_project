import React, { useEffect, useState } from 'react';
import { Box, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, i) => currentYear - 10 + i);

interface MonthYearPickerProps {
    initialMonth: number;
    initialYear: number;
    onMonthYearChange: (month: number, year: number) => void;
}

const MonthYearPicker: React.FC<MonthYearPickerProps> = ({ initialMonth, initialYear, onMonthYearChange }) => {
    const [selectedMonth, setSelectedMonth] = useState<number>(initialMonth-1);
    const [selectedYear, setSelectedYear] = useState<number>(initialYear);

    useEffect(() => {
        console.log("initialMonth:", initialMonth, selectedMonth, "initialYear", initialYear, selectedYear)
    }, []);


    const handleMonthChange = (event: SelectChangeEvent<number>) => {
        const month = Number(event.target.value);
        console.log("selectedMonthBoxValue->", month);

        setSelectedMonth(month);
        onMonthYearChange(month, selectedYear);
    };

    const handleYearChange = (event: SelectChangeEvent<number>) => {
        const year = Number(event.target.value);
        console.log("selectedYearBoxValue->", year);
        setSelectedYear(year);
        onMonthYearChange(selectedMonth, year);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                p: 3,
                border: '1px solid #ccc',
                borderRadius: '8px',
                maxWidth: 400,
                mx: 'auto',
                bgcolor: 'background.paper',
            }}
        >
            {/* <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        Select Month and Year
      </Typography> */}
            <Select
                value={selectedMonth}
                onChange={handleMonthChange}
                sx={{
                    minWidth: 120,
                    bgcolor: 'white',
                    borderRadius: '4px',
                }}
                MenuProps={{
                    PaperProps: { style: { maxHeight: 200 } },
                }}
            >
                {months.map((month, index) => (
                    <MenuItem key={index} value={index}>
                        {month}
                    </MenuItem>
                ))}
            </Select>
            <Select
                value={selectedYear}
                onChange={handleYearChange}
                sx={{
                    minWidth: 120,
                    bgcolor: 'white',
                    borderRadius: '4px',
                }}
                MenuProps={{
                    PaperProps: { style: { maxHeight: 200 } },
                }}
            >
                {years.map((year, index) => (
                    <MenuItem key={index} value={year}>
                        {year}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
};

export default MonthYearPicker;
