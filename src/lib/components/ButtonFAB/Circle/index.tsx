import * as St from './styles';
import Icon from '../../../foundation/Icon';
import { FAB_Type } from '../type';

const Circle = ({ onClickEffect }: FAB_Type) => {
  return (
    <St.FabWrapper>
      <St.CircleLayOut onClick={onClickEffect}>
        <Icon name={'drop_less'} />
      </St.CircleLayOut>
    </St.FabWrapper>
  )
}

export default Circle;