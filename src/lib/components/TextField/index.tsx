import { TypographyStyles as Typo } from '../../foundation';
import * as St from './style';
import { FC } from 'react';
import { TextFieldType } from './type';

/**
 * @description 원하는 상태의 메세지와 스타일이 렌더되는 TextField 컴포넌트
 * @type {id: string, label: string, message: string, errorMessage: string, successMessage: string, $error: boolean, $success: boolean}
 */
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
