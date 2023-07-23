import { styled } from 'styled-components';
import { ISelection } from './type';

const SelectionInput = styled.input`
  accent-color: var(--Pri_400);
`;
const SelectionControls = ({ type, selected, disabled }: ISelection) => {
  return <SelectionInput type={type} defaultChecked={selected} disabled={disabled} />;
};

export default SelectionControls;
