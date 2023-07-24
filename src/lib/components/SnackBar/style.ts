import { styled } from 'styled-components';

export const StyledSnackBar = styled.div<{ duration: number; isAppbar: boolean }>`
  /* Color */
  background-color: var(--Gray_800);
  color: var(--Text_Wh);
  /* Layout */
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  padding: 12px;
  text-align: start;
  /* Show */
  @keyframes moving {
    0% {
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
