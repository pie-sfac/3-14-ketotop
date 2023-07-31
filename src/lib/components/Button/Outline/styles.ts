import styled, { css } from 'styled-components';
import { sizeStyles } from '../styles';
import { ButtonType } from '../type';

const stateStyles = css<ButtonType>`
  ${({ state }) => {
    switch (state) {
      case 'normal':
        return css`
          background-color: var(--Bg_Wh);
          border: 1px solid var(--Line_300);
          color: var(--Text_900);
          cursor: pointer;
        `;
      case 'enabled':
        return css`
          background-color: var(--Bgc_100);
          border: 1px solid var(--Pri_500);
          color: var(--Pri_500);
          cursor: pointer;
        `;
      case 'disabled':
        return css`
          background-color: var(--Bg_Wh);
          border: 1px solid var(--Line_300);
          color: var(--Text_400);
        `;
      default:
        return css``;
    }
  }}
`;

export const ButtonWrapper = styled.button<ButtonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  gap: 10px;

  ${sizeStyles}
  ${stateStyles}
`;
