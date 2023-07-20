import { createGlobalStyle } from 'styled-components';
import { ColorStyles } from './Color';

const FoundationStyles = createGlobalStyle`
  ${ColorStyles}
`;

export default FoundationStyles;
