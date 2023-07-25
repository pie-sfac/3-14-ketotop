import './Typography/FontFamily/font.css';
import { createGlobalStyle } from 'styled-components';
import { ColorStyles } from './Color/styles';
import { ResetCSS } from './Reset/styles';
import Layout from './Layout';
import { Typography } from './Typography';
import Icon from '@lib/foundation/Icon';
import SelectionControls from '@lib/foundation/SelectionControls';

/** Foundation 글로벌 스타일 */
const FoundationStyles = createGlobalStyle`
  ${ResetCSS}
  ${ColorStyles}
`;

/** Layout 스타일 ( props : size , system ) */
const LayoutStyles = Layout;

/** Typography 스타일 */
const TypographyStyles = Typography;

/** Icon 스타일 ( props : IconName , height , width )*/
const IconStyles = Icon;

/** SelectionControls 스타일 ( props : type , selected , disabled ) */
const SelectionControlsStyles = SelectionControls;

// 모든 스타일 export
export { FoundationStyles, LayoutStyles, TypographyStyles, IconStyles, SelectionControlsStyles };
