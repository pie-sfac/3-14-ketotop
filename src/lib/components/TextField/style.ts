import { TypographyStyles } from '@lib/foundation';
import { styled } from 'styled-components';
import { TextFieldType } from './type';

interface Temp extends Partial<TextFieldType> {}

export const TextField = styled.input<Temp>`
  /* TODO: reset적용시 삭제 */
  margin: 0;
  /* Layout */
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  margin-top: 8px;
  border-color: ${({ $error }) => ($error ? 'var(--System_Error)' : 'var(--Line_300)')};
  border-width: 1px;
  border-radius: 4px;
  outline-style: none;
  outline: none;
  border-style: solid;

  &:focus {
    border-color: ${({ $error }) => ($error ? 'var(--System_Error)' : 'var(--Pri_500)')};
  }

  &:disabled {
    background-color: var(--Bg_100);
    &::placeholder {
      color: var(--Text_400);
    }
  }

  &::placeholder {
    color: var(--Text_Hold);
    font-weight: 400;
    font-size: 14px;
    line-height: 144%;
  }
`;

export const Message = styled(TypographyStyles.Caption2)<{ $error: boolean; $success: boolean }>`
  color: ${({ $error, $success }) =>
    $error ? 'var(--System_Error)' : $success ? 'var(--System_Positive)' : 'var(--Text_400)'};
  font-weight: 400;
`;
