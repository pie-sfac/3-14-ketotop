import styled from 'styled-components';

export const TabComponentWrapper = styled.div<{ $instance: 'Select' | 'Unselect' }>`
  display: inline-flex;
  padding: ${(props) => (props.$instance === 'Select' ? '0.8rem 1.2rem 0.6rem' : '0.8rem 1.2rem 0.7rem')};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${(props) => (props.$instance === 'Select' ? 'var(--Pri_300)' : 'var(--Line_300)')};
  border-bottom: ${(props) =>
    props.$instance === 'Select' ? '0.2rem solid var(--Pri_300)' : '0.1rem solid var(--Line_300)'};
  cursor: pointer;
`;
