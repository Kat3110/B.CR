import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import './date-pickers.css'

function DatePickers() {
    let now= new Date();
    const [value, setValue] = React.useState(dayjs(now));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={2} className='date-pickers'>
                <DesktopDatePicker
                    className='date-pickers__box'
                    inputFormat="MM.DD.YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
}
export default DatePickers;