import { TypographyStyles as Typo } from '../../foundation';
import * as St from './style';
import { FC } from 'react';
import { TextFieldType } from './type';

/**
 * @description 원하는 상태의 메세지와 스타일이 렌더되는 TextField 컴포넌트
 * @type {labelText: string, inactiveMessage: string, errorMessage: string, successMessage: string, isError: boolean, isSuccess: boolean}
 */
export const TextField: FC<TextFieldType> = ({
  labelText,
  inactiveMessage,
  errorMessage,
  successMessage,
  isError = false,
  isSuccess = false,
  ...otherProps
}) => {
  return (
    <>
      <Typo.Body4 as={'label'} htmlFor={otherProps.id}>
        {labelText}
      </Typo.Body4>
      <St.TextField $error={isError} {...otherProps}></St.TextField>
      <St.Message $error={isError} $success={isSuccess}>
        {isError ? errorMessage : isSuccess ? successMessage : inactiveMessage}
      </St.Message>
    </>
  );
};
