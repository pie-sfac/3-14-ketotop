import * as St from '../styles';
import { ILabel } from '../type';

const SelectionLabel = ({ content, htmlFor, ...otherProps }: ILabel) => {
  return (
    <St.SLabel htmlFor={htmlFor} {...otherProps}>
      {content}
    </St.SLabel>
  );
};

export default SelectionLabel;
