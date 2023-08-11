import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { CalendarDataType } from '../type';

/** 
 * @description Calendar_Data 스타일의 Card 컴포넌트
 * @params
 * { 'description' } 
 */
const CalendarData = ({ month, name, totalschadule, cancelschadule, cancel }: CalendarDataType) => {
  if (!month) throw new Error('Please enter month!');
  if (typeof month !== 'string') throw new Error('Please enter string!');
  if (!name) throw new Error('Please enter name!');
  if (typeof name !== 'string') throw new Error('Please enter string!');
  if (!totalschadule) throw new Error('Please enter totalschadule!');
  if (typeof totalschadule !== 'number') throw new Error('Please enter number!');
  if (!cancelschadule) throw new Error('Please enter cancelschadule!');
  if (typeof cancelschadule !== 'number') throw new Error('Please enter number!');
  if (!cancel) throw new Error('Please enter cancel!');
  if (typeof cancel !== 'number') throw new Error('Please enter number!');

  return (
    <St.CalendarDataLayOut>
      <typo.Caption1>{month}</typo.Caption1>
      <St.FontWrapper>
        <typo.Caption1>{name}</typo.Caption1>
      </St.FontWrapper>
      <typo.Caption1>총 일정: {totalschadule}건</typo.Caption1>
      <typo.Caption1>취소 일정: {cancelschadule}건</typo.Caption1>
      <typo.Caption1>취소율: {cancel}%</typo.Caption1>
    </St.CalendarDataLayOut>
  )
}

export default CalendarData;