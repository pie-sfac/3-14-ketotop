import SelectionInput from './Input';
import SelectionLabel from './Label';
import * as St from './styles';
import { ISelection } from './type';

const SelectionControls = ({ inputAttr, labelAttr }: ISelection) => {
  return (
    <St.SelectionContainer>
      <SelectionInput {...inputAttr} />
      {labelAttr && <SelectionLabel {...labelAttr} />}
    </St.SelectionContainer>
  );
};

export default SelectionControls;
