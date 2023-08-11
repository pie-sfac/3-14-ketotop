import * as St from './styles';
import Button from '../../Button';
import { DialogButtonProps } from './type';

export const DialogButtonWrapper = ({ children }: DialogButtonProps) => {
  return <St.DialogBtnWrapper>{children}</St.DialogBtnWrapper>;
};

/**
 * @description 다이얼로그에 렌더되는 Gray버튼
 * @type {children: string}
 */
export const GrayButton = ({ children, ...otherProps }: DialogButtonProps) => {
  if (!children) throw new Error('Please enter DialogButton name!');

  return (
    <Button.Contained state='normal' size='medium' {...otherProps}>
      {children}
    </Button.Contained>
  );
};

/**
 * @description 다이얼로그에 렌더되는 Pri버튼
 * @type {children: string}
 */
export const PriButton = ({ children, ...otherProps }: DialogButtonProps) => {
  if (!children) throw new Error('Please enter DialogButton name!');

  return (
    <Button.Contained state='enabled' size='medium' {...otherProps}>
      {children}
    </Button.Contained>
  );
};
