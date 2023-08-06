import { styled } from 'styled-components';

export const IconContainer = styled.span<{ height: number; width: number; iconSize: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: yellow;

  height: ${(props) => `${props.height}rem`};
  width: ${(props) => `${props.width}rem`};

  img {
    height: ${(props) => `${props.iconSize}rem`};
  }
`;
