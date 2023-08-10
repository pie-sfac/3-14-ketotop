import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { CardsType } from '../type';

/** 
 * @description Calendar_Data 스타일의 Card 컴포넌트
 * @params
 * { 'description' } 
 */
const CalendarData = ({ description }: CardsType) => {
  if (!description) throw new Error('Please enter description!');

  return (
    <St.CalendarDataLayOut>
      <typo.Caption1>
        {description}
      </typo.Caption1>
    </St.CalendarDataLayOut>
  )
}

export default CalendarData;