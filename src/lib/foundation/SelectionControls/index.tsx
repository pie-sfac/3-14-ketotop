import { Fnd } from '../..';
import SelectionInput from './Input';
import SelectionLabel from './Label';
import * as St from './styles';
import { ISelection } from './type';

const SelectionControls = ({ inputAttr, labelAttr }: ISelection) => {
  return (
    <St.SelectionContainer>
      <SelectionInput {...inputAttr} />
      <Fnd.TypographyStyles.Body4>{labelAttr && <SelectionLabel {...labelAttr} />}</Fnd.TypographyStyles.Body4>
    </St.SelectionContainer>
  );
};

export default SelectionControls;
