import styled, { css } from 'styled-components';
import { sizeStyles } from '../styles';
import { ButtonType } from '../type';
const stateStyles = css<ButtonType>`
  ${({ state }) => {
    switch (state) {
      case 'normal':
        return css`
          background-color: var(--Bg_100);
          color: var(--Text_900);
          cursor: pointer;
        `;
      case 'enabled':
        return css`
          background-color: var(--Pri_500);
          color: var(--Text_Wh);
          cursor: pointer;
        `;
      case 'disabled':
        return css`
          background-color: var(--Bg_100);
          color: var(--Text_400);
        `;
    }
  }}
`;

export const ButtonWrapper = styled.button<ButtonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  gap: 10px;
  border: none;

  ${sizeStyles}
  ${stateStyles}
`;
