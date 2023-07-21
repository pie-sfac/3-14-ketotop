import { useEffect, useState } from 'react';
import { ISelection } from './type';

const SelectionControls = ({ type, selected = false, disabled = false }: ISelection) => {
  const [selection, setSelection] = useState('');
  const [control, setControl] = useState(true);
  const SELECTED = selected;
  const DISABLED = disabled;

  useEffect(() => {
    if (type === 'checkbox') {
      if (SELECTED) {
        if (DISABLED) setSelection(`checkbox_selected_disabled`);
        else setSelection('checkbox_selected_enabled');
      } else {
        if (DISABLED) setSelection('checkbox_unselected_disabled');
        else setSelection('checkbox_unselected_enabled');
      }
    } else if (type === 'radio') {
      if (SELECTED) {
        if (DISABLED) setSelection('radio_selected_disabled');
        else setSelection('radio_selected_enabled');
      } else {
        if (DISABLED) setSelection('radio_unselected_disabled');
        else setSelection('radio_unselected_enabled');
      }
    }
  }, []);

  console.log(selection);
  const onClick = (e: React.MouseEvent) => {
    console.log(e);
    selected = true;
  };

  return (
    <div onClick={onClick}>
      <img src={`../public/assets/Icons/selection/${selection}.svg`} alt={type} />
    </div>
  );
};

export default SelectionControls;
