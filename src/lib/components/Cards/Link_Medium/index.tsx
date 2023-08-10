import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { LinkMediumType } from '../type';

/** 
 * @description Link_Medium 스타일의 Card 컴포넌트
 * @params
 * { 'description' | 'thumbnail' | 'onClickEffect' } 
 */
const LinkMedium = ({ description, thumbnail, onClickEffect }: LinkMediumType) => {
  if (!description) throw new Error('Please enter description!');
  if (typeof description !== 'string') throw new Error('Please enter string!');
  if (!thumbnail) throw new Error('Please enter thumbnail!');
  if (typeof thumbnail !== 'string') throw new Error('Please enter string!');
  if (!onClickEffect) throw new Error('Please enter onClickEffect!');

  return (
    <St.LinkMediumLayOut onClick={onClickEffect}>
      <img src={thumbnail}/>
      <div>
        <typo.Body4>{description}</typo.Body4>
      </div>
    </St.LinkMediumLayOut>
  )
}

export default LinkMedium;