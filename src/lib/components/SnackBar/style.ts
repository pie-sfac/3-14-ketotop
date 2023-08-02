import { styled } from 'styled-components';

export const SnackBar = styled.div<{ duration: number; isAppbar: boolean; width: string }>`
  /* Color */
  background-color: var(--Gray_800);
  color: var(--Text_Wh);
  /* Layout */
  box-sizing: border-box;
  width: ${({ width }) => width};
  border-radius: 4px;
  padding: 12px;
  text-align: start;
  opacity: 0;
  /* Show */
  @keyframes moving {
    0% {
      opacity: 1;
      transform: translateY(24px);
    }
    90% {
      transform: translateY(0px);
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  animation-name: moving;
  animation-duration: ${({ duration }) => duration}ms;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

  /* Position */
  position: absolute;
  bottom: 0;
  margin-bottom: ${({ isAppbar }) => (isAppbar ? '12px' : '24px')};
`;
