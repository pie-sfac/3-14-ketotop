import { TypographyStyles } from '../../foundation';
import { styled } from 'styled-components';
import { StyledProps } from './type';

export const Wrapper = styled.div`
  width: 36.4rem;
`;

export const Label = styled(TypographyStyles.Body4)`
  display: inline-block;
  margin-bottom: 0.8rem;
`;

export const TextField = styled.input<Partial<StyledProps>>`
  /* Layout */
  box-sizing: border-box;
  padding: 1rem 1.6rem;
  width: inherit;
  border-color: ${({ $error }) => ($error ? 'var(--System_Error)' : 'var(--Line_300)')};
  border-width: 0.1rem;
  border-radius: 0.4rem;
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
    font-size: 1.4rem;
    line-height: 144%;
  }
`;

export const Message = styled(TypographyStyles.Caption2)<StyledProps>`
  color: ${({ $error, $success }) =>
    $error ? 'var(--System_Error)' : $success ? 'var(--System_Positive)' : 'var(--Text_400)'};
  font-weight: 400;
`;
