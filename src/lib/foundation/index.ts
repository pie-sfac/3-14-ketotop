import './Typography/FontFamily/font.css';
import { createGlobalStyle } from 'styled-components';
import { ColorStyles } from './Color/styles';
import { ResetCSS } from './Reset/styles';
import Layout from './Layout';
import { Typography } from './Typography';
import Icon from '@lib/foundation/Icon';
import SelectionControls from '@lib/foundation/SelectionControls';
import Graphic from './Graphic';

/** Foundation 글로벌 스타일 */
const FoundationStyles = createGlobalStyle`
  ${ResetCSS}
  ${ColorStyles}
`;

/** Layout 스타일 ( props : children , size (tablet) , system (android) ) */
const LayoutStyles = Layout;

/** Typography 스타일 */
const TypographyStyles = Typography;

/** Icon 스타일 ( props : name (필수) , extension (svg) , height , width )*/
const IconStyles = Icon;

/** Graphic 스타일 ( props : name (필수) , extension (svg) , height , width , category )*/
const GraphicStyles = Graphic;

/** SelectionControls 스타일 ( props : type (필수) , selected , disabled ) */
const SelectionControlsStyles = SelectionControls;

// 모든 스타일 export
export { FoundationStyles, LayoutStyles, TypographyStyles, IconStyles, GraphicStyles, SelectionControlsStyles };
