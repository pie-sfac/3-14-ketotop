import { css } from 'styled-components';
import { ButtonType } from './type';

export const sizeStyles = css<ButtonType>`
  ${({ size }) => {
    switch (size) {
      case 'x-small':
        return css`
          width: 48px;
          padding: 8px;
        `;
      case 'small':
        return css`
          width: 80px;
          padding: 8px;
        `;
      case 'medium':
        return css`
          width: 146px;
          padding: 12px 8px;
        `;
      case 'large':
        return css`
          width: 312px;
          padding: 12px 16px;
        `;
      case 'x-large':
        return css`
          width: 976px;
          padding: 12px 16px;
        `;
      case 'full':
        return css`
          width: 100%;
          padding: 12px 16px;
        `;
    }
  }}
`;
