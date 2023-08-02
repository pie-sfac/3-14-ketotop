import { FC } from 'react';
import { TypographyStyles as Typo } from '@lib/foundation';
import * as St from './style';
import { SnackBarProps } from './type';
import { useSnackbar } from './useSanckbar';
export { useSnackbar };

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
