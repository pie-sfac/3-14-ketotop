import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { OptionType } from '../type';

/** 
 * @description Option_Ac 스타일의 Card 컴포넌트
 * @params
 * { 'title' | 'description' } 
 */
const OptionAc = ({ title, description }: OptionType) => {
  if (!title) throw new Error('Please enter Title!');
  if (typeof title !== 'string') throw new Error('Please enter string!');
  if (!description) throw new Error('Please enter description!');
  if (typeof description !== 'string') throw new Error('Please enter string!');
  
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