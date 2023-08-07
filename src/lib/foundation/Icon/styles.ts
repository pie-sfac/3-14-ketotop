import { styled } from 'styled-components';

export const IconContainer = styled.div<{ height: number; width: number; iconSize: number }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: ${(props) => `${props.height}rem`};
  width: ${(props) => `${props.width}rem`};

  img {
    height: ${(props) => `${props.iconSize}rem`};
  }
`;
