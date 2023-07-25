import styled from 'styled-components';

interface BoxProps {
  shadow: string;
}

// Shadow box 투명도 값 조절
const ShadowBox = styled.div<BoxProps>`
  width: 100px;
  height: 100px;
  background-color: #f0f0f0;
  box-shadow: ${(props) => `2px 2px 4px rgba(0, 0, 0, ${props.shadow})`};
` 
export default ShadowBox;