import { Fnd } from '../../..';
import { IconProps } from '../type';

const AppBarIcon = ({ name, ...otherProps }: IconProps) => {
  return <div {...otherProps}>{name && <Fnd.IconStyles name={name} />}</div>;
};

export default AppBarIcon;
