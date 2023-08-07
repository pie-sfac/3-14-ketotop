import * as St from '../styles';
import { IInput } from '../type';

const SelectionInput = ({ type, disabled, checked, id, ...otherProps }: IInput) => {
  return (
    <St.SInputBox>
      <St.SInput type={type} disabled={disabled} checked={checked} id={id} {...otherProps} readOnly />
    </St.SInputBox>
  );
};

export default SelectionInput;
