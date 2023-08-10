import { styled } from 'styled-components';
import { ICommon } from './type';

export const IconContainer = styled.div<ICommon>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ $height }) => $height && `${$height}rem`};
  width: ${({ $width }) => $width && `${$width}rem`};

  img {
    height: ${({ $iconSize }) => $iconSize && `${$iconSize}rem`};
  }
`;
