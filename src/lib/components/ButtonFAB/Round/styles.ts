import { styled } from 'styled-components';

/* 버튼 layout */
export const RoundLayOut = styled.button`
  display: flex;
  white-space: nowrap;
  padding: 1.6rem 3.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 10rem;
  border: 0.1rem solid var(--Line_200);
  background: var(--Pri_300);
  box-shadow: var(--Shadow);
  color: var(--Text_Wh);
  cursor: pointer;
`;

/* FAB버튼의 위치 고정 값 */
export const FabWrapper = styled.div`
  position: absolute;
  bottom: 3.2rem;
  right: 3.2rem;
`;
