import { styled } from 'styled-components';
import { ILayout } from './type';

export const LayoutContainer = styled.div<ILayout>`
  padding: 2.4rem;
  height: ${({ $size }) => $size === 'tablet' && '640px'};
  width: ${({ $size }) => $size === 'tablet' && '1024px'};
`;
