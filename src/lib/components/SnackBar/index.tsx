import { FC } from 'react';
import { TypographyStyles as Typo, FoundationGlobalStyles } from '../../foundation';
import * as St from './style';
import { SnackBarProps } from './type';
import { useSnackbar } from './useSanckbar';
export { useSnackbar };

/**
 * @description 사용자에게 전달받은 문자열 값을 알리는 Snackbar 컴포넌트
 * @type {message: string, duration: number, isAppbar: boolean, width: string}
 */
export const SnackBar: FC<SnackBarProps> = ({ message, duration, isAppbar, width = '102.4rem' }) => {
  if (message === undefined) throw new Error('Please enter a message to notify the user!');
  if (!duration) throw new Error('Enter a duration, preferably the same as the one will pass to the useSnackbar');
  if (isAppbar === undefined)
    throw new Error('Enter a boolean state isAppbar, this determines the margins that will fall below');

  return (
    <>
      <FoundationGlobalStyles />
      {message.length !== 0 && (
        <St.SnackBar key={Math.random()} $duration={duration} $isAppbar={isAppbar} $width={width}>
          <Typo.Caption1>{message}</Typo.Caption1>
        </St.SnackBar>
      )}
    </>
  );
};
