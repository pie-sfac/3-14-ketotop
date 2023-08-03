import { FC } from 'react';
import { TypographyStyles as Typo } from '../../foundation';
import * as St from './style';
import { SnackBarProps } from './type';
import { useSnackbar } from './useSanckbar';
export { useSnackbar };

/**
 * @description 사용자에게 전달받은 문자열 값을 알리는 Snackbar 컴포넌트
 * @type {message: string, duration: number, isAppbar: boolean, width: string}
 */
export const SnackBar: FC<SnackBarProps> = ({ message, duration, isAppbar, width = '1024px' }) => {
  return (
    <>
      {message.length ? (
        <St.SnackBar key={Math.random()} duration={duration} isAppbar={isAppbar} width={width}>
          <Typo.Caption1>{message}</Typo.Caption1>
        </St.SnackBar>
      ) : null}
    </>
  );
};
