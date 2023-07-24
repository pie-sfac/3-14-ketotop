import styled from 'styled-components';

export const TabComponentWrapper = styled.div<{ instance: 'Select' | 'Unselect' }>`
  display: inline-flex;
  padding: ${(props) => (props.instance === 'Select' ? '8px 12px 6px' : '8px 12px 7px')};
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${(props) => (props.instance === 'Select' ? 'var(--Pri_300)' : 'var(--Line_300)')};
  border-bottom: ${(props) => (props.instance === 'Select' ? '2px solid var(--Pri_300)' : '1px solid var(--Line_300)')};
  cursor: pointer;
`;
