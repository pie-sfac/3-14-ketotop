import { styled } from 'styled-components';
import { ILayout } from './type';

export const LayoutContainer = styled.div<ILayout>`
  margin: 24px;
  height: ${(props) => props.size === 'tablet' && '640px'};
  width: ${(props) => props.size === 'tablet' && '1024px'};
`;
