import * as St from '../styles';
import { IInput } from '../type';

const SelectionInput = ({ type, disabled, checked, id, ...otherProps }: IInput) => {
  if (type !== 'checkbox' && type !== 'radio') throw new Error('type name Error. Check your spelling again');
  if (disabled && disabled !== true && disabled !== false)
    throw new Error('disabled prop should be true or false. Check your spelling again');
  if (checked && checked !== true && checked !== false)
    throw new Error('checked prop should be true or false. Check your spelling again');

  return (
    <St.SInputBox>
      <St.SInput type={type} disabled={disabled} checked={checked} id={id} {...otherProps} readOnly />
    </St.SInputBox>
  );
};

export default SelectionInput;
