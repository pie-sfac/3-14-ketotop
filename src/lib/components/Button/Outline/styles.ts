import styled from 'styled-components';
import { ButtonState, ButtonSize } from '../type';

const StateStyles = ({ $state }: { $state: ButtonState }) => {
  switch ($state) {
    case 'normal':
      return `
        background-color: var(--Bg_Wh);
        border: 1px solid var(--Line_300);
        color: var(--Text_900);
        cursor: pointer;
      `;
    case 'enabled':
      return `
        background-color: var(--Bgc_100);
        border: 1px solid var(--Pri_500);
        color: var(--Pri_500);
        cursor: pointer;
      `;
    case 'disabled':
      return `
        background-color: var(--Bg_Wh);
        border: 1px solid var(--Line_300);
        color: var(--Text_400);
      `;
    default:
      throw new Error('State 가 지정되어있지 않습니다.');
  }
};

const SizeStyles = ({ $size }: { $size: ButtonSize }) => {
  switch ($size) {
    case 'x-small':
      return `
        width: 48px;
        padding: 8px;
      `;
    case 'small':
      return `
        width: 80px;
        padding: 8px;
      `;
    case 'medium':
      return `
        width: 146px;
        padding: 12px 8px;
      `;
    case 'large':
      return `
        width: 312px;
        padding: 12px 16px;
      `;
    case 'x-large':
      return `
        width: 976px;
        padding: 12px 16px;
      `;
    case 'full':
      return `
        width: 100%;
        padding: 12px 16px;
      `;
    default:
      throw new Error('Size 가 지정되어있지 않습니다.');
  }
};

export const ButtonWrapper = styled.button<{ $size: ButtonSize; $state: ButtonState }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  gap: 10px;

  ${SizeStyles}
  ${StateStyles}
`;
