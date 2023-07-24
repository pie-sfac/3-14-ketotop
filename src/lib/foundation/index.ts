import { createGlobalStyle } from 'styled-components';
import { ColorStyles } from './Color';
import './Typography/FontFamily/font.css';
import Layout from './Layout';
import { Typography } from './Typography';
import Icon from '@lib/foundation/Icon';
import SelectionControls from '@lib/foundation/SelectionControls';

/** Foundation 글로벌 스타일 */
const FoundationStyles = createGlobalStyle`
  ${ColorStyles}
`;

/** Layout 스타일 ( props : size , system ) */
const LayoutStyles = Layout;

/** Typography 스타일 */
const TypographyStyles = Typography;

/** Icon 스타일 ( props : IconName , height , width )*/
const IconStyles = Icon;

const SelectionControlsStyles = SelectionControls;

// 모든 스타일 export
export { FoundationStyles, LayoutStyles, TypographyStyles, IconStyles, SelectionControlsStyles };
