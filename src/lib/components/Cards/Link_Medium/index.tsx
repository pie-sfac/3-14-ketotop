import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { CardsType } from '../type';

const LinkMedium = ({ description, thumbnail, onClickEffect }: CardsType) => {
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