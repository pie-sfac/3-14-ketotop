import * as St from '../styles';
import { ButtonProps } from '../type';

const AppBarButton = ({ text, count, ...otherProps }: ButtonProps) => {
  return (
    <St.TextBox {...otherProps}>
      {text}
      {count && `(${count})`}
    </St.TextBox>
  );
};

export default AppBarButton;
