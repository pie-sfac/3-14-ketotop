import * as St from './styles';
import Icon from '../../../foundation/Icon';
import { FAB_Type } from '../type';

/**
 * @description Circle 스타일의 버튼
 * @type {onClickEffect: () => void}
 */
const Circle = ({ onClickEffect }: FAB_Type) => {
  if (!onClickEffect) throw new Error('Please enter onClickEffect');
  return (
    <St.FabWrapper>
      <St.CircleLayOut onClick={onClickEffect}>
        <Icon name={'drop_less'} />
      </St.CircleLayOut>
    </St.FabWrapper>
  )
}

export default Circle;