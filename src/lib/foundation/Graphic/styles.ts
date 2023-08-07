import styled from 'styled-components';

export const GraphicWrapper = styled.div<{ $height?: number; $width?: number }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${({ $height }) => $height && `height: ${$height}rem`};
  ${({ $width }) => $width && `width: ${$width}rem`};
`;
