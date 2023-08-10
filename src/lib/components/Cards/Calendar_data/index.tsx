import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { CardsType } from '../type';

const CalendarData = ({ description }: CardsType) => {
  return (
    <St.CalendarDataLayOut>
      <typo.Caption1>
        {description}
      </typo.Caption1>
    </St.CalendarDataLayOut>
  )
}

export default CalendarData;