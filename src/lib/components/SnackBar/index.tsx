import { FC, useEffect } from 'react';
import { TypographyStyles as Typo } from '@lib/foundation';
import * as St from './style';
import { SnackBarProps } from './type';
import { useSnackbar } from './useSanckbar';
export { useSnackbar };

export const SnackBar: FC<SnackBarProps> = ({ message, duration, setMessage, isAppbar }) => {
  useEffect(() => {
    if (message.length) {
      const timer = setTimeout(() => {
        setMessage('');
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [message]);

  return (
    <>
      {message.length ? (
        <St.SnackBar key={Math.random()} duration={duration} isAppbar={isAppbar}>
          <Typo.Caption1>{message}</Typo.Caption1>
        </St.SnackBar>
      ) : null}
    </>
  );
};
