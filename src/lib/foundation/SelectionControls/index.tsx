import { ISelection } from './type';
import { SelectionInput } from './styles';

const SelectionControls = ({ type, selected, disabled }: ISelection) => {
  return <SelectionInput type={type} defaultChecked={selected} disabled={disabled} />;
};

export default SelectionControls;
