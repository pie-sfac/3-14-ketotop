import { createGlobalStyle } from 'styled-components';
import { ColorStyles } from './Color';
import './Typography/FontFamily/font.css';
import Layout from './Layout';
import { Typography } from './Typography';

export const FoundationStyles = createGlobalStyle`
  ${ColorStyles}
`;

export const LayoutStyles = Layout;
export const TypographyStyles = Typography;
