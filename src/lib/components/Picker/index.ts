import { CalendarWrapper } from './Wrapper/styles';
import Calendar from './Calendar';
import { ButtonWrapper } from './Button/styles';

const CalendarStyle = {
  /**
   * @description CalendarWrapper 컴포넌트입니다.
   */
  CalendarWrapper,

  /** @description Calendar 컴포넌트입니다.
   * @param [Date|null, Date|null] dates - [시작일, 종료일] ( useState로 관리 )
   * @param (dates: [Date|null, Date|null] | null) => void setDates - [시작일, 종료일]을 설정하는 함수 ( useState로 관리 )
   */
  Calendar,

  /**
   * @description ButtonWrapper 컴포넌트입니다.
   */
  ButtonWrapper,
};

export default CalendarStyle;
