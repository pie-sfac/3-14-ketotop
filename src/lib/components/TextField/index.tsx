import { TypographyStyles as Typo } from '@lib/foundation';
import * as St from './style';
import { FC } from 'react';
import { TextFieldType } from './type';

export const TextField: FC<TextFieldType> = ({
  id,
  label,
  message,
  errorMessage,
  successMessage,
  $error = false,
  $success = false,
  ...otherProps
}) => {
  return (
    <>
      <Typo.Body4 as={'label'} htmlFor={label}>
        {label}
      </Typo.Body4>
      <St.TextField id={label} $error={$error} {...otherProps}></St.TextField>
      <St.Message $error={$error} $success={$success}>
        {$error ? errorMessage : $success ? successMessage : message}
      </St.Message>
    </>
  );
};
