import { styled } from 'styled-components';

export const SnackBar = styled.div<{ $duration: number; $isAppbar: boolean; $width: string }>`
  /* Color */
  background-color: var(--Gray_800);
  color: var(--Text_Wh);
  /* Layout */
  box-sizing: border-box;
  width: ${({ $width }) => $width};
  height: 3.9rem;
  border-radius: 0.4rem;
  padding: 1.2rem;
  text-align: start;
  opacity: 0;
  /* Show */
  @keyframes moving {
    0% {
      opacity: 1;
      transform: translate(-50%, 1.5rem);
    }
    90% {
      transform: translate(-50%, 0rem);
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  animation-name: moving;
  animation-duration: ${({ $duration }) => $duration}ms;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

  /* Position */
  position: fixed;
  bottom: 0;
  margin-bottom: ${({ $isAppbar }) => ($isAppbar ? '1.2rem' : '2.4rem')};
  left: 50%;
  transform: translateX(-50%);
`;
