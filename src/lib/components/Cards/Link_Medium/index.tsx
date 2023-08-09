import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { CardsType } from '../type';

const LinkMedium = ({ description, thumbnail }: CardsType) => {
  return (
    <St.LinkMediumLayOut>
      <img src={thumbnail}/>
      <div>
        <typo.Body4>{description}</typo.Body4>
      </div>
    </St.LinkMediumLayOut>
  )
}

export default LinkMedium;