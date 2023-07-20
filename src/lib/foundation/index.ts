import { createGlobalStyle } from 'styled-components';
import { ColorStyles } from './Color';
import './Typography/FontFamily/font.css';
import Layout from './Layout';
import { Typography } from './Typography';

/** Foundation 글로벌 스타일 */
export const FoundationStyles = createGlobalStyle`
  ${ColorStyles}
`;

/** Layout 스타일 ( props : size , system ) */
export const LayoutStyles = Layout;

/** Typography 스타일 */
export const TypographyStyles = Typography;
