import { styled } from 'styled-components';

// 메뉴 리스트
export const ItemsListWrapper = styled.ul<{ $instance: 'select' | 'unselect' }>`
  display: flex;
  li {
    margin-left: 3.2rem;
    cursor: pointer;
    color: ${({ $instance }) => ($instance === 'select' ? 'var(--Pri_500)' : 'var(--Gray_900)')};
  }
`;
