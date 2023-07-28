import { createGlobalStyle } from 'styled-components';
import { ColorStyles } from './Color/styles';
import { ResetCSS } from './Reset/styles';
import Layout from './Layout';
import { Typography, FontFamilyStyle } from './Typography';
import Icon from './Icon';
import SelectionControls from './SelectionControls';
import Graphic from './Graphic';
import ShadowBox from './Shadow/styled';

/** Foundation 글로벌 스타일 */
const FoundationGlobalStyles = createGlobalStyle`
  ${ResetCSS}
  ${FontFamilyStyle}
  ${ColorStyles}
`;

/** Layout 스타일 ( props : children , size (tablet) , system (android) ) */
const LayoutStyles = Layout;

/** Typography 스타일 */
const TypographyStyles = Typography;

/** Icon 스타일 ( props : name (필수 , 자동완성 사용시 name={''} 형태로 사용해야함) , extension (svg) , height , width ) */
const IconStyles = Icon;

/** Graphic 스타일 ( props : name (필수 , 자동완성 사용시 name={''} 형태로 사용해야함) , extension (svg) , height , width , category )*/
const GraphicStyles = Graphic;

/** SelectionControls 스타일 ( props : type (필수) , selected , disabled ) */
const SelectionControlsStyles = SelectionControls;

/** ShadowBoxStyles 스타일 ( css 파일에 ${Fnd.ShadowBoxStyles} 를 넣으면 적용가능 ) */
const ShadowBoxStyles = ShadowBox;

// 모든 스타일 export
export {
  FoundationGlobalStyles,
  LayoutStyles,
  TypographyStyles,
  IconStyles,
  GraphicStyles,
  SelectionControlsStyles,
  ShadowBoxStyles,
};
