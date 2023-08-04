import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import CustomDatePickerHeader from './CustomDatePickerHeader';

import styled from 'styled-components';


// import { DateTimePickerTabs } from '/packages/x-date-pickers/src/DateTimePicker/DateTimePickerTabs.tsx';

const StyledDatePickerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledDatePicker = styled(DatePicker)`
  // 원하는 DatePicker 스타일을 추가합니다.
  border: 1px solid #ccc;
  padding: 10px;
`;



function Picker({ children }:any) {
  return (
    <StyledDatePickerContainer>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DatePicker />
      <TimePicker /> */}
      <StyledDatePicker 
        components={{
          OpenPickerIcon: () => null, // 원래 OpenPickerIcon을 숨김
          DatePickerToolbar: CustomDatePickerHeader, // 커스텀 헤더 컴포넌트를 사용
        }}
      />
    </LocalizationProvider>
    </StyledDatePickerContainer>
  );
}

export default Picker;