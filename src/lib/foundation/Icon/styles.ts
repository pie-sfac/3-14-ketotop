import { styled } from 'styled-components';
import { ICommon } from './type';

export const IconContainer = styled.div<ICommon>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: ${({ $height }) => $height && `${$height}rem`};
  width: ${({ $width }) => $width && `${$width}rem`};

  background-color: yellow;
  img {
    height: ${({ $iconSize }) => $iconSize && `${$iconSize}rem`};
  }
`;
