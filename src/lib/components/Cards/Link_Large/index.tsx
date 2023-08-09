import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { CardsType } from '../type';

const LinkLarge = ({ title, description, thumbnail }: CardsType) => {
  return (
    <St.LinkLargeLayOut>
      <img src={thumbnail}/>
      <div>
        <typo.Body2>{title}</typo.Body2>
        <typo.Caption1>{description}</typo.Caption1>
      </div>
    </St.LinkLargeLayOut>
  )
}

export default LinkLarge;