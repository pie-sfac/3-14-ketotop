import styled from 'styled-components';

export const ListStyles = styled.div`
  /** Layout */
  display: inline-flex;
  padding: 16px 24px;
  align-items: center;
  gap: 10px;
  min-width: 228px;

  /** hover 스타일 */
  &:hover {
    background: var(--Bg_300);
    /** 처음요소일때 */
    &:first-child {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
    /** 마지막요소일때 */
    &:last-child {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }
  cursor: pointer;
`;
