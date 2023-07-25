import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    
  }

  /* 모든 컴포넌트에 그림자 스타일을 적용. */
  div {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
`;

export default GlobalStyle;
