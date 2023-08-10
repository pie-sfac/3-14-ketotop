import * as St from '../styles';
import { ILabel } from '../type';

const SelectionLabel = ({ content, ...labelAttrs }: ILabel) => {
  return <St.SLabel {...labelAttrs}>{content}</St.SLabel>;
};

export default SelectionLabel;
