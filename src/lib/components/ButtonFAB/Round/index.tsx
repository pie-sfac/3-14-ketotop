import * as St from './styles';
import { TypographyStyles as typo } from '../../../foundation';
import { FAB_Type } from '../type';

/**
 * @description Round 스타일의 버튼
 * @type {onClickEffect: () => void}
 */
const Round = ({ children, onClickEffect }:FAB_Type) => {
  if (!onClickEffect) throw new Error('Please enter onClickEffect');
  return (
    <St.FabWrapper>
      <St.RoundLayOut onClick={onClickEffect}>
        <typo.Body2>{children}</typo.Body2>
      </St.RoundLayOut>
    </St.FabWrapper>
  )
}

export default Round;