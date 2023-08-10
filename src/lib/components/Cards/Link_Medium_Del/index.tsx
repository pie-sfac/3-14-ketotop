import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { CardsType } from '../type';
import Icon from '../../../foundation/Icon';

/** 
 * @description Link_Medium_Del 스타일의 Card 컴포넌트
 * @params
 * { 'description' | 'thumbnail' | 'onClickEffect' | 'onDelEffect' } 
 */
const LinkMediumDel = ({ description, thumbnail, onClickEffect, onDelEffect }: CardsType) => {
  if (!description) throw new Error('Please enter description!');
  if (!thumbnail) throw new Error('Please enter thumbnail!');
  if (!onClickEffect) throw new Error('Please enter onClickEffect!');
  if (!onDelEffect) throw new Error('Please enter onDelEffect!');

  return (
    <St.LinkMediumLayOut onClick={onClickEffect}>
      <img src={thumbnail}/>
      <div>
        <typo.Body4>{description}</typo.Body4>
      </div>
      <St.IconWrapper onClick={onDelEffect}>
        <Icon name={'media_delete_24px'} />
      </St.IconWrapper>
    </St.LinkMediumLayOut>
  )
}

export default LinkMediumDel;