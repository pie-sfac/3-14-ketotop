import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { FAB_Type } from '../type';

const Round = ({ children, onClickEffect }:FAB_Type) => {
  return (
    <St.FabWrapper>
      <St.RoundLayOut onClick={onClickEffect}>
        <typo.Body2>{children}</typo.Body2>
      </St.RoundLayOut>
    </St.FabWrapper>
  )
}

export default Round;