import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { LinkLargeType } from '../type';

/** 
 * @description Link_Large 스타일의 Card 컴포넌트
 * @params
 * { 'title' | 'description' | 'thumbnail' | 'onClickEffect' } 
 */
const LinkLarge = ({ title, description, thumbnail, onClickEffect }: LinkLargeType) => {
  if (!title) throw new Error('Please enter Title!');
  if (typeof title !== 'string') throw new Error('Please enter string!');
  if (!description) throw new Error('Please enter description!');
  if (typeof description !== 'string') throw new Error('Please enter string!');
  if (!thumbnail) throw new Error('Please enter thumbnail!');
  if (typeof thumbnail !== 'string') throw new Error('Please enter string!');
  if (!onClickEffect) throw new Error('Please enter onClickEffect!');

  return (
    <St.LinkLargeLayOut onClick={onClickEffect}>
      <img src={thumbnail}/>
      <div>
        <typo.Body2>{title}</typo.Body2>
        <typo.Caption1>{description}</typo.Caption1>
      </div>
    </St.LinkLargeLayOut>
  )
}

export default LinkLarge;