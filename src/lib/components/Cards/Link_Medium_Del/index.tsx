import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { CardsType } from '../type';
import Icon from '../../../foundation/Icon';

const LinkMediumDel = ({ description, thumbnail }: CardsType) => {
  return (
    <St.LinkMediumLayOut>
      <img src={thumbnail}/>
      <div>
        <typo.Body4>{description}</typo.Body4>
      </div>
      <Icon name={'close'}/>
    </St.LinkMediumLayOut>
  )
}

export default LinkMediumDel;