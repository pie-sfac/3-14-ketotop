import styled from 'styled-components';
import { ButtonState, ButtonSize } from '../type';

const StateStyles = ({ $state }: { $state: ButtonState }) => {
  switch ($state) {
    case 'normal':
      return `
        background-color: var(--Bg_100);
        color: var(--Text_900);
        cursor: pointer;
      `;
    case 'enabled':
      return `
        background-color: var(--Pri_500);
        color: var(--Text_Wh);
        cursor: pointer;
      `;
    case 'disabled':
      return `
        background-color: var(--Bg_100);
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
        width: 4.8rem;
        padding: 0.8rem;
      `;
    case 'small':
      return `
        width: 8rem;
        padding: 0.8rem;
      `;
    case 'medium':
      return `
        width: 14.6rem;
        padding: 1.2rem 0.8rem;
      `;
    case 'large':
      return `
        width: 31.2rem;
        padding: 1.2rem 1.6rem;
      `;
    case 'x-large':
      return `
        width: 97.6rem;
        padding: 1.2rem 1.6rem;
      `;
    case 'full':
      return `
        width: 100%;
        padding: 1.2rem 1.6rem;
      `;
    default:
      throw new Error('Size 가 지정되어있지 않습니다.');
  }
};

export const ButtonWrapper = styled.button<{ $size: ButtonSize; $state: ButtonState }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  gap: 1rem;
  border: none;

  ${SizeStyles}
  ${StateStyles}
`;
