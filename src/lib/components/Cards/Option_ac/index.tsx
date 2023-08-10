import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { CardsType } from '../type';

/** 
 * @description Option_Ac 스타일의 Card 컴포넌트
 * @params
 * { 'title' | 'description' } 
 */
const OptionAc = ({ title, description }: CardsType) => {
  if (!title) throw new Error('Please enter Title!');
  if (!description) throw new Error('Please enter description!');
  
  return (
    <St.OptionLayout>
      <St.OptionFontLayout>
        <typo.Body3>{title}</typo.Body3>
        <typo.Caption1>{description}</typo.Caption1>
      </St.OptionFontLayout>
    </St.OptionLayout>
  )
}

export default OptionAc;