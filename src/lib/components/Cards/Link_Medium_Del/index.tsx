import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { CardsType } from '../type';
// import {ReactComponent as DelIcon} from './Media Delete_24px.svg';
import Icon from '../../../foundation/Icon';

const LinkMediumDel = ({ description, thumbnail, onClickEffect, onDelEffect }: CardsType) => {
  return (
    <St.LinkMediumLayOut onClick={onClickEffect}>
      <img src={thumbnail}/>
      <div>
        <typo.Body4>{description}</typo.Body4>
      </div>
      <St.IconWrapper onClick={onDelEffect}>
        <Icon name={'close'} />
      </St.IconWrapper>
    </St.LinkMediumLayOut>
  )
}

export default LinkMediumDel;