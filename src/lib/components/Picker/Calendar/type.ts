// props 타입 정의
interface CalendarProps {
  dates: [Date | null, Date | null] | null;
  setDates: (dates: [Date | null, Date | null] | null) => void;
}

export default CalendarProps;
