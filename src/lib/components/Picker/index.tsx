import React from "react";
import styled from "styled-components";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StylesProvider as MuiStylesProvider
} from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
// import { InputProps } from "@material-ui/core/Input";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const mui_theme = createTheme();

const StyledDatePicker = styled(DesktopDatePicker)``;

const StyledTextField = styled(TextField)``;

export interface DatePickerProps {
  label: string;

  className?: string;
  disabled?: boolean;
  error?: string | boolean;
  onChange?: (v: string) => void;
  name?: string;
  value?: string | number | Date;
  min_date?: string | number | Date;
  max_date?: string | number | Date;
  placeholder?: string;
  autocomplete: "birthday";
}

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      value,
      label,
      disabled = false,
      autocomplete,
      placeholder = "mm/dd/yyyy",
      onChange,
      min_date,
      max_date,
      name,
      error,
      className
    },
    ref
  ) => (
    <MuiStylesProvider>
      <MuiThemeProvider theme={mui_theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StyledDatePicker
            inputRef={ref}
            minDate={min_date ? new Date(min_date) : undefined}
            maxDate={max_date ? new Date(max_date) : undefined}
            value={value}
            onChange={(newValue) => onChange && onChange(newValue as string)}
            disabled={disabled}
            renderInput={(props) => (
              <StyledTextField
                {...props}
                error={!!error || (props.error && value !== "")}
                className={className}
                fullWidth
                helperText={error}
                id={name}
                label={label}
                name={name}
                variant="outlined"
                inputProps={{
                  ...props.inputProps,
                  placeholder,
                  id: `${name}-textfield`,
                  autoComplete: autocomplete
                }}
                InputLabelProps={{
                  ...props.InputLabelProps,
                  color: "primary",
                  id: `${name}-textfield-label`,
                  htmlFor: `${name}-textfield`
                }}
              />
            )}
          />
        </LocalizationProvider>
      </MuiThemeProvider>
    </MuiStylesProvider>
  )
);

export default DatePicker;
