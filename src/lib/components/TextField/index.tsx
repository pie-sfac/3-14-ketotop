import { Fnd } from '../..';
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
  if (!otherProps.id) {
    // prettier-ignore
    console.warn('Please enter id props in TextField. This improves usability and accessibility because it is associated with the label.');
  }
  if (inactiveMessage?.trim().length === 0) {
    // prettier-ignore
    throw new Error("If there's something you need to tell the user with inactiveMessage, enter a message with leading and trailing spaces removed");
  }
  if (errorMessage?.trim().length === 0) {
    // prettier-ignore
    throw new Error("If there's something you need to tell the user with errorMessage, enter a message with leading and trailing spaces removed");
  }
  if (successMessage?.trim().length === 0) {
    // prettier-ignore
    throw new Error("If there's something you need to tell the user with successMessage, enter a message with leading and trailing spaces removed");
  }
  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <St.Wrapper>
        <St.Label as={'label'} htmlFor={otherProps.id}>
          {labelText}
        </St.Label>
        <St.TextField $error={isError} {...otherProps}></St.TextField>
        <St.Message $error={isError} $success={isSuccess}>
          {isError ? errorMessage : isSuccess ? successMessage : inactiveMessage}
        </St.Message>
      </St.Wrapper>
    </>
  );
};
