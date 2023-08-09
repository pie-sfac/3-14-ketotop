import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { CardsType } from '../type';

const OptionIn = ({ title, description }: CardsType) => {
  return (
    <St.OptionLayout>
      <St.OptionFontLayout>
        <typo.Body3>{title}</typo.Body3>
        <typo.Caption1>{description}</typo.Caption1>
      </St.OptionFontLayout>
    </St.OptionLayout>
  )
}

export default OptionIn;