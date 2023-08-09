import * as St from '../styles';
import { IInput } from '../type';

const SelectionInput = ({ ...inputAttrs }: IInput) => {
  if (inputAttrs.type !== 'checkbox' && inputAttrs.type !== 'radio')
    throw new Error('type name Error. Check your spelling again');
  if (inputAttrs.disabled && inputAttrs.disabled !== true && inputAttrs.disabled !== false)
    throw new Error('disabled prop should be true or false. Check your spelling again');
  if (inputAttrs.checked && inputAttrs.checked !== true && inputAttrs.checked !== false)
    throw new Error('checked prop should be true or false. Check your spelling again');

  return (
    <St.SInputBox>
      <St.SInput {...inputAttrs} />
    </St.SInputBox>
  );
};

export default SelectionInput;
