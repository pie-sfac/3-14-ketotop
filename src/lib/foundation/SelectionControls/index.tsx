import { ISelection } from './type';

const SelectionControls = ({ type, selected, disabled }: ISelection) => {
  return <input style={{ accentColor: '#618dfe' }} type={type} checked={selected} disabled={disabled} />;
};

export default SelectionControls;
