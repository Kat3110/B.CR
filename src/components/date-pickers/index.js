import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import "./date-pickers.css";

function DatePickers({ type, value, handlePeriod }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2} className="date-pickers">
        <DesktopDatePicker
          className="date-pickers__box"
          inputFormat="MM.DD.YYYY"
          value={value}
          onChange={(date) => handlePeriod(type, date)}
          renderInput={(params) => (
            <TextField onFocus={(e) => e.target.blur()} {...params} />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}
export default DatePickers;
